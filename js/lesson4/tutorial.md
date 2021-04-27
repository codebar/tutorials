---
layout: page
title: HTTP Requests, AJAX and APIs
---

### Objectives

In this tutorial we are going to look at:

* The HTTP protocol
* APIs
* AJAX
* JSON
* Loading API data into web pages
* Using jQuery AJAX functionality

### Goal

By the end of this tutorial you will have built:

* A webpage that can retrieve information about a specified GitHub user
* A webpage that can show the upcoming schedule for BBC shows

# HTTP Requests

## What are HTTP Requests?

Every time the browser fetches data from a server (which could be a page, an image, a script etc) it does it using HTTP. HTTP is the **H**&#x200b;yper<strong>T</strong>ext **T**&#x200b;ransport **P**&#x200b;rotocol. The server then sends back a **response**. An API is an easy way of fetching information from a remote service, in a way that's easy for a computer to understand.

GitHub offers a [simple API](https://www.githubstatus.com/api/) for viewing its current and historical server availability.

> Availability means whether or not the GitHub website was accessible to users and accepting traffic. If your website is down, it is not available.

You can access an API in your web browser. Just pop the following into the address bar:

    https://www.githubstatus.com/api/v2/summary.json

If you are on a mac or a linux/unix machine, you can access the API using curl:

    curl https://www.githubstatus.com/api/v2/summary.json

> Paste the following command into Terminal, which you can find in Finder - first go into the Applications folder, then Utilities.

Here is an example of the **GET** requests issued by the [wishlist tutorial](https://tutorials.codebar.io/examples/wishlist/index.html).

\*You can view any requests issued by a website by going to the Network (or Net) tab.

![](assets/images/inspector_requests.png)

As part of the response, a request gives back a **status code**. You can use this to identify if the request was successful or not.

| Status code | Message | Description |
| ------------| ------- | ------------ |
|  200        |   OK    | Successful request |
|  304        |   Not modified    | The page has not been modified since we last retrieved data |
|  400        |   Bad Request | The server did no understand the request |
|  404        |   Not Found | The server could not find the requested resource |

### HTTP Verbs

HTTP verbs are sent by the browser or client, and along with the URL used and data transmitted form part of the instruction to the API. There are several verbs, but in this tutorial we will be primarily using GET. GET is used to fetch information from an API. Another common verb is POST, which is used to create a new object on the remote service.

## Exercise 1 - Retrieve GitHub user information

We'll build a small application that gives us back information about a GitHub user - we want to show their username, information and their picture. [Download](https://gist.github.com/deniseyu/d1bc03b8091153b4b1a7/download) the exercise files or clone them directly from Github `https://gist.github.com/deniseyu/d1bc03b8091153b4b1a7`

GitHub offers an API where you can request information for a given username. The verb to use is GET, and the url is `https://api.github.com/users/<username>`. For codebar, this would be: `https://api.github.com/users/codebar`. Again, to request this you can use curl:

    $  curl -XGET https://api.github.com/users/codebar

or, as GET is the default verb, just:

    $ curl https://api.github.com/users/codebar

Again, you can simply access this URL in your web browser by inserting `https://api.github.com/users/codebar` into the address bar.

The response will look something like the JSON data below, which we have shortened:

```json
{
  "login": "octocat",
  "id": 1,
  "avatar_url": "https://avatars.githubusercontent.com/u/9906?v=2",
  "gravatar_id": "",
  "html_url": "https://github.com/octocat",
  "type": "User",
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "bio": "There once was...",
}

```

This data is what's called key value pairs, meaning that the name of the field is displayed immediately before the value. As you can see, the URL for the avatar (user's icon) is in the `avatar_url` field, and is `https://avatars.githubusercontent.com/u/9906?v=2`.

### Getting started

First, open the HTML page supplied in the download. As you can see, there is a box to type in a username. When the user has typed in the username, they should be able to trigger the API call to GitHub by pressing \<enter\>.

The following code allows you to listen for a keypress on the input field, and to see if it was the \<enter\> key that was pressed.

```js
$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      // do something
    }
  });
});
```

We will need to pass the username to GitHub, so we need to extract it from the input text box. To show that we can do this - let's first extract the data using jQuery's `val()`, and log it to the console. Something like this should work:

```js
$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();

      console.log('username was: ' + username);
    }
  });
});
```

Now we're ready to pass this through to GitHub. Let's make another function, something like this:

```js
function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  var data = xmlhttp.responseText;

  console.log(data);
}
```

`XMLHttpRequest` is the object we use in JavaScript to perform an HTTP or API request. Although it has `XML` in the name (XML is a data format), it can be used for other formats such as JSON, which is what we're using here.

We create an `XMLHttpRequest` object and then call the `open` method, passing three arguments to the GitHub API.

1. the `verb` - in this case, `'GET'`
2. the `url` - in this case the url eg https://api.github.com/users/codebar
3. whether or not to run this request synchronously or asynchronously.

In this case, we'll specify synchronously by passing `false`. This means the browser will wait for the call to the GitHub API to finish before continuing.

> Making requests synchronously is not good practice, but we're doing it for now to keep things simple. Your browser may show a deprecation warning but the request will still work. We'll move onto asynchronous requests further down once we have the basics of APIs covered.

You can now call `getGithubInfo`, passing the username, from the `keypress` block above. That will log the data to the console. Next, we need to pass this back to the web page via the DOM.


### Handling a successful request

Our `getGithubInfo` method will return the response from the server, including the HTTP status:

```js
function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();

  return xmlhttp;
}
```

If the request was successful, the status code will be 200. If we check that this code is 200, we know we can proceed to reading the data.

Create a new method called `showUser()` that handles the response from the API, and performs this check on the `xmlhttp` variable we just returned from our `getGithubInfo` method. Once the `keypress` block has called `getGithubInfo`, it should pass the result to `showUser`.

```js
function showUser(xmlhttp) {
  if(xmlhttp.status === 200) {
    // show the user details
  } else {
    // show an error
  }
}
```

Once we've checked the status, we need to decode the data which is stored in `xmlhttp.responseText`. It's in [JSON](http://www.json.org/) format, which is a string, so we need to turn that into a native JavaScript object. We do this using `JSON.parse(data)`.

```js
function showUser(xmlhttp) {
  if(xmlhttp.status === 200) {
    // show the user details
    var json = xmlhttp.responseText;
    var user = JSON.parse(json);
  } else {
    // show an error
  }
}
```

Now the `user` variable will contain all the information we need to update the page. Finish the function to:

1. Display the user's Github id in `#profile h2` - `<user login> + ' is GitHub user #' + <user id>`
2. Add a link to the user's Github profile in `#profile .information`. The link should have a class `profile`
3. Add an image in `#profile .avatar`. To do that, you can use the `avatar_url`
   from the response.


### Handling a failed request

First, let's make sure we handle any requests that have failed.

> Have a look in the status codes. There is only one response code for a successfully request, anything else should be classed as a failure.

When we have a failing request, we want to change the `html` of `$('#profile h2')` to `No such user!`

Try this out using username: `iamcodebar` (or if someone registered this, make up a random string)


### Bonus!

Well done, you've finished! For a bonus, switch your `getGithubInfo` method to run asynchronously - your coach can help you.

> Coach... explain the difference between synchronous and asynchronous requests. There's a good explanation on [Mozilla Developer Network (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests)


## Exercise 2 - Vonage API

<img src="./assets/images/VonageLogo.png" alt="Vonage Logo" width="250px">

In the following Vonage API tutorial you will create an account, and send yourself an SMS. Just a heads up, it will involve you creating an account and giving your phone number.

When signing up select NodeJS as you're language. NodeJS is a runtine enviroment that allows you to run JavaScript on the server than in the browser which is what you would've been doing if you've followed our first 2 tutorials.

(Send yourself an SMS with Vonage)[https://developer.nexmo.com/?utm_source=codebar&utm_campaign=Events&utm_medium=bitly&utm_source=Events]



---
This ends our **HTTP Requests, AJAX and APIs** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
