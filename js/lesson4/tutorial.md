---
layout: page
title: HTTP Requests, AJAX and APIs
---

In the last lesson we've introduced [JQuery](http://jquery.com/download/).
Today, we will be explaining HTTP Requests, using AJAX and APIs.

## Before we start...

Don't forget to move the files for the exercises under your github page folder. Commit each task you complete! If you are having trouble with this, ask your coach to help you out.

#HTTP Requests

##What are HTTP Requests?

Every time the browser fetches data from a server (which could be a page, an images, a script etc) it does it using HTTP. HTTP is the **H**yper**T**ext **T**ransport **P**rotocol. The server then gives back a **response**

Here is an example of the **GET** requests issues by the [wishlist tutorial](http://codebar.github.io/tutorials/examples/wishlist/index.html).

*You can view any requests issued by a website by going to the Network (or Net) tab.

![](assets/images/inspector_requests.png)

As part of the response, a request gives back a **status code**. You can use this to identify if the request was successful or not.

| Status code | Message | Description |
| ------------| ------- | ------------ |
|  200        |   OK    | Succesful request |
|  304        |   Not modified    | The page has not been modified since we last retrieved data |
|  400        |   Bad Request | The server did no understand the request |
|  404        |   Not Found | The server could not find the requested resource |

###HTTP Verbs

HTTP Verbs are the actions performed when the server receices a request.

| Verb | Description |
| ---- | ----------- |
| **GET**  | fetching a resource (e.g. /index.html  will return the HTML of the page) |
| **PUT**  |  updating an existing resource. |
| **PATCH** | updating a particular value of a resource |
| **POST** |  Create a new resource. |
| **DELETE**  | Delete an existing resource. |


#AJAX

AJAX is a way of updating websites asynchronously, without having to reload them. It stands for **A**synchronous **Ja**vascript and **X**ML.

##Request using JavaScript

Using JavaScript, we can perform an AJAX request using `XMLHttpRequest`.
The `open()` method specified the type of request, the url and if the request can be handled asynchronously or not.

 `xmlhttp.open(<request verb>, url, <async:true|false>);`

The different between using a synchronous and an asynchronous request, is that our page will wait until the request has been completed, if we specify **synchronous**, so you should almost always use **asynchronous**

**An example using an asynchronous request**

```javascript
 xmlhttp = new XMLHttpRequest();
 xmlhttp.open("GET", url, true);
 xmlhttp.send();
 return xmlhttp;
```

To retrieve the response, we need to access `xmlhttp.responseText`. Before doing that though, we should make sure that the `xmlhttp.status` is `200`, as there will not be a response for failing requests.

> Have another look at the response status codes we mentioned earlier. What is `200`?

To be able to utilise the response we get, we need to convert it to `JSON`.

```js
JSON.parse(response)
```

> JSON stands for **J**ava**S**cript **O**bject **N**otation.

##Exercise 1 - Retrieve GitHub user information

[Download](https://gist.github.com/despo/7af30cfe957f3cfc2a9f/download) the exercise files or clone them directly from github `git clone https://gist.github.com/despo/7af30cfe957f3cfc2a9f`

Using the example above, we'll build a small application that gives us back information about a github user.

The url structure for the request is `https://api.github.com/users/<username>` and here is a partial response to get you started

```json
{
  "login": "octocat",
  "id": 1,
  "gravatar_id": "somehexcode",
  "html_url": "https://github.com/octocat",
  "type": "User",
  "name": "monalisa octocat",
  "company": "GitHub",
  "blog": "https://github.com/blog",
  "location": "San Francisco",
  "email": "octocat@github.com",
  "bio": "There once was...",
  ...
}

```

*You can read more information about the request structure in the [Github API](http://developer.github.com/v3/users/#response). This is not necessary for this exercise.

> After parsing the response, you can access the data using the **dot** notation. For example, if we've parse the response into a user variable `var user = JSON.parse(responseText)`, we can access `user.login`

###Getting started

First, let's create a function that does the AJAX call to the GitHub API.

```js
function getGithubInfo(user) {
  //call to API
}
```

**Note** We want `getGithubInfo(username)` to return us the entire response, so we can check for the status and handle it when necessary.

To test this out, let's handle the keypress on the input field. We want this to only execute when we press the return key. To do that, we handle the `event` posted, and check for the key that's been pressed using [`which`](http://api.jquery.com/event.which/).

```js
$(document).ready(function(){
  $(document).on('keypress', '#username', function(e){
    if (e.which == 13) {
      // get val() from input field

     // assign getGithubUserInfo(username) to a variable response

    }
  })
});
```

###Handling a failed request

To get started,, let's make sure we handle any requests that have failed. So, any requests that don't return `200` status.

When we have a failing request, we want to change the `html` of `$("#profile h2")` to `No such user: <username>`

Try this out using username: `iamcodebar` (or if someone registered this, make up a random string)

###Handling a succesful request

When the request is succesful, we want to call another function that will handle displaying the information on the page. Let's do that in a showUser() function.

```js
function showUser(user) {
  //render user information
}
```

The `showUser(user)` function should:

1. Display the user's github id in `#profile h2` - `<user login> + " is GitHub user #" + <user id>`

2. Add a link to the user's github profile in `#profile .information`. The link should have a class `profile`

3. Add an image in `#profile .avatar`. To do that, you can use the `gravatar_id` in this url template `<img src="https://gravatar.com/avatar/<gravatar_id>?s=220" />`

*You can read more about [Gravatar Image Requests](http://uk.gravatar.com/site/implement/images/).

Don't forget to call `showUser()` from the function handling the keypress!

##Publish to github

Link to your Github User Finder from `index` and push your changes to github.

**Link to your app** http://`<username>`.github.io/`<project>`/github-user-finder/index.html

Here is a link to our [Github User Finder](../../examples/github-user-finder/index.html).

##Request using JavaScript

---
This ends our **HTTP Requests, AJAX and APIs** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

