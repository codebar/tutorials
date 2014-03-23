---
layout: page
title: HTTP Requests, AJAX and APIs
---

In the last lesson we've introduced [JQuery](http://jquery.com/download/).
Today, we will be explaining HTTP Requests, using AJAX and APIs.

## Before we start...

Don't forget to move the files for the exercises under your Github page folder. Commit each task you complete! If you are having trouble with this, ask your coach to help you out.

#HTTP Requests

##What are HTTP Requests?

Every time the browser fetches data from a server (which could be a page, an images, a script etc) it does it using HTTP. HTTP is the **H**&#x200b;yper<b>**T**</b>&#x200b;ext **T**&#x200b;ransport **P**&#x200b;rotocol. The server then gives back a **response**

Here is an example of the **GET** requests issued by the [wishlist tutorial](http://codebar.github.io/tutorials/examples/wishlist/index.html).

*You can view any requests issued by a website by going to the Network (or Net) tab.

![](assets/images/inspector_requests.png)

As part of the response, a request gives back a **status code**. You can use this to identify if the request was successful or not.

| Status code | Message | Description |
| ------------| ------- | ------------ |
|  200        |   OK    | Successful request |
|  304        |   Not modified    | The page has not been modified since we last retrieved data |
|  400        |   Bad Request | The server did no understand the request |
|  404        |   Not Found | The server could not find the requested resource |

###HTTP Verbs

HTTP Verbs are the actions performed when the server receives a request.

| Verb | Description |
| ---- | ----------- |
| **GET**  | fetching a resource (e.g. /index.html  will return the HTML of the page) |
| **PUT**  |  updating an existing resource. |
| **PATCH** | updating a particular value of a resource |
| **POST** |  Create a new resource. |
| **DELETE**  | Delete an existing resource. |


#AJAX

AJAX is a way of updating websites asynchronously, without having to reload them. It stands for &#x200b;**A**&#x200b;synchronous &#x200b;**Ja**&#x200b;vascript and &#x200b;**X**&#x200b;ML.

##Request using JavaScript

Using JavaScript, we can perform an AJAX request using `XMLHttpRequest`.
The `open()` method specified the type of request, the URL and if the request can be handled asynchronously or not.

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

> JSON stands for &#x200b;**J**&#x200b;ava&#x200b;**S**&#x200b;cript &#x200b;**O**&#x200b;bject &#x200b;**N**&#x200b;otation.

##Exercise 1 - Retrieve GitHub user information

[Download](https://gist.github.com/despo/7af30cfe957f3cfc2a9f/download) the exercise files or clone them directly from Github `git clone https://gist.github.com/despo/7af30cfe957f3cfc2a9f`

Using the example above, we'll build a small application that gives us back information about a Github user.

The URL structure for the request is `https://api.github.com/users/<username>` and here is a partial response to get you started

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

First, let's make sure we handle any requests that have failed.

> Have a look in the status codes. There is only one response code for a successfully request, anything else should be classed as a failure.

When we have a failing request, we want to change the `html` of `$("#profile h2")` to `No such user: <username>`

Try this out using username: `iamcodebar` (or if someone registered this, make up a random string)

###Handling a successful request

When the request is succesful, we want to call another function that will handle displaying the information on the page. Let's do that in a showUser() function.

```js
function showUser(user) {
  //render user information
}
```

The `showUser(user)` function should:

1. Display the user's Github id in `#profile h2` - `<user login> + " is GitHub user #" + <user id>`

2. Add a link to the user's Github profile in `#profile .information`. The link should have a class `profile`

3. Add an image in `#profile .avatar`. To do that, you can use the `gravatar_id` in this URL template `<img src="https://gravatar.com/avatar/<gravatar_id>?s=220" />`

*You can read more about [Gravatar Image Requests](http://uk.gravatar.com/site/implement/images/).

> Don't forget to call `showUser()` from the function handling the keypress!

##Publish to Github

Link to your Github User Finder from `index` and push your changes to Github.

**Link to your app** http://`<username>`.github.io/`<project>`/github-user-finder/index.html

Here is a link to our [Github User Finder](../../examples/github-user-finder/index.html).

##Request using JQuery

AJAX requests can also be handled using JQuery using the `ajax()` method.
Things are a bit easier when using JQuery as we can create different code blocks that handle successful or failed requests.

```js
$.ajax({
  url: request_url,
  dataType: 'json',
  beforeSend: function() {
   // do something before running the request
  }
}).done(function(data) {
  // process data
}).fail(function() {
  // code
}).always(function() {
  // code that runs regardless of request succeeding or failing
});
```

`datatype` defines the type of result we will be getting back. This avoids us having to parse the response to JSON.

`beforeSend` can be used if we need to perform something before running the request.

`.done()` handles a response that returns a success status code

`.fail()` is called when the request fails

##Exercise 2 - BBC's tomorrow's TV schedule

[Download](https://gist.github.com/despo/05cab2f0b38bc02318e7) the exercise files or clone them directly from github `git clone https://gist.github.com/05cab2f0b38bc02318e7.git`

For the second exercise, we will build an application that retrieves tomorrow's TV schedule for each genre using BBC's API.

###What we will be doing:

1. Retrieve and render available genres using `http://www.bbc.co.uk/tv/programmes/genres.json`

2. Write a function that retrieves tomorrow's TV schedule using a genre `http://www.bbc.co.uk/tv/programmes/genres/<genre>/schedules/tomorrow.json`

3. Write a function that displays each programme

4. **Bonus** Retrieve all upcoming episodes of a programme

## Retrieving and displaying all available genres

Write a function `retrieveGenres()` that does an AJAX call to the API.

```javascript
function retrieveGenres() {
  // AJAX call using JQuery that retrieve and process the result
}
```
> Try logging the resulted data and have a look in the console to see and explore the created objects

> `<key>` is the genre format we need to retrieve results from the API

> You can use `<title>` to display a humanly readable format of the Genre

As you can see from the console, the resulting objects are returned inside an Array. We want to iterate over the list using the `$.each( )` function and add each item to the `#genres` list, as a **list item**. As we need to have access to the `key` as well, we can set that as the list item's `id`.

Now that we have all the available genres, we can move on to making calls to the API using the genre to retrieve tomorrow's schedule!!

##Retrieve schedule

Now, let's create a function that retrieves films using genre.

```javascript
function getTomorrowsSchedule(genre) {
 // call to retrieve TV schedule
}
```

The response you get back should look similar to this, with multiple objects in the broadcasts array.

```json
{
   "broadcasts":[
      {
         "is_repeat":false,
         "is_blanked":false,
         "schedule_date":"2014-01-15",
         "start":"2014-01-15T00:10:00Z",
         "end":"2014-01-15T01:50:00Z",
         "duration":6000,
         "service":{
            "type":"tv",
            "id":"bbc_one",
            "key":"bbcone",
            "title":"BBC One",
            "outlets":[
               {
                  "id":"bbc_one_wales",
                  "key":"wales",
                  "title":"Wales"
               },
               {
                  "id":"bbc_one_wales_hd",
                  "key":"wales_hd",
                  "title":"Wales HD"
               }
            ]
         },
         "programme":{
            "type":"episode",
            "pid":"b00sbk03",
            "position":null,
            "title":"Disturbia",
            "short_synopsis":"Thriller about a high school student convinced that his neighbour is a serial killer.",
            "media_type":"audio_video",
            "duration":6000,
            "image":{
               "pid":"p01gqbj3"
            },
            "display_titles":{
               "title":"Disturbia",
               "subtitle":""
            },
            "first_broadcast_date":"2010-05-03T22:30:00+01:00",
            "ownership":{
               "service":{
                  "type":"tv",
                  "id":"bbc_three",
                  "key":"bbcthree",
                  "title":"BBC Three"
               }
            },
            "is_available_mediaset_pc_sd":false,
            "is_legacy_media":false
         }
      }]
}
```

To process the response, we want to iterate over the `response.broadcasts` array and add each item, to `#programmes` as a list item.

To make this a bit easier, this is how you can access the values we need:

* `item.programme.display_titles.title`
* `item.programme.short_synopsis`
* `item.programme.image.pid` _only if `item.programme.image` is set_
* `item.start` and `item.end`
* `item.duration`
* `item.service.title`

It would be easier to use string concatenation to construct the html, before appending each item to the list.
Also, to make your code easier to read, try constructing the html in a method that you pass the response object.

```javascript
function processEpisode(episode) {
 item_html = "<li>"
 item_html += "<h2>" + episode.programme.display_titles.title + "</h2>";
 // display image
 // display date and time
 // display duration (HINT: the duration is in seconds, convert that to minutes)
 // display the channel (or service, as its called by the API) - add this in a span with the class `service`
 ...
}
```

> To display the date formatted correctly, you can use the `formatDate( )` function as we won't be going into details about dates in this tutorial. If you want to know how it works, try going through the code and ask your coach any questions you have.

To display an image for a programme, we need to use `<img src=http://ichef.bbci.co.uk/images/ic/272x153/<pid>.jpg />`.  As not all programmes have an image, we can use an image placeholder when no image is set `<img src='http://placehold.it/272x153' />`

###Binding the call to the click event

Handle a `click` event on `#genres li` and make a call to `getTomorrowsSchedule(genre)`

###Improving our function

To make the genre we have just clicked active, we also want to add the CSS class `active` to the element that the event has been triggered from.  Don't forget to remove the class `active` from any other `#genres li` items.

> Did you remember to commit your changes?

### Using `beforeSend`

Every time we issue a call to the API, we want to clear the `#programmes` list. We can do that using `empty()`.
Also, as some of the requests take a while, we want to display a spinning image `<div class='spinner'><img src='spinner.gif' /></div>`.

> Don't forget to remove the spinner, when the request is completed successfully.

##Bonus: Retrieving all upcoming episodes of a programme

To get back all the upcoming shows for an episode, we need to utilise the programme pid, that we can retrieve from the response using `episode.programme.programme.pid`. The URL for the request is `http://www.bbc.co.uk/programmes/<pid>/episodes/upcoming.json`

> **Hint:** The programme `pid` is only available if `episode.programme.position` is set.


```javascript
function getUpcomingEpisodes(pid) {
 // AJAX call to retrieve upcoming episodes
}
```
Since the response structure is similar to the one for retrieving tomorrow's schedule, we should be able to re-use the `processEpisode( )` function to display each item from the broadcasts array.

Handle the `click` event to retrieve and display the upcoming episodes!

Here is our version of the [tv schedule app](../../examples/tv-schedule/index.html).

---
This ends our **HTTP Requests, AJAX and APIs** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
