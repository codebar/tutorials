---
layout: page
title: Building your own app
---

Starting and finishing a project can at times be a hard task. Today, we will be helping you getting started with your own project. Working alone can get boring and at times unproductive so try to find someone else to work with.

Ask your coach for help on getting your project setup in Github and granting permissions to another user so you both have access to the codebase.

Today's session is not aimed to teach you anything new programming-wise but to enable you to start building things on your own. You are not expected to produce a working application by the end of today's lesson but to structure your thoughts and figure out what you want to build.

To get help outside of our sessions go to [the Slack channel here](https://codebar.slack.com/messages/general/details/). If you are not on Slack, use [this link](https://codebar-slack.herokuapp.com/) to get an invite.

You can also send an email to [hello@codebar.io](mailto:hello@codebar.io).

# Things to help you get started

There is an abundance of resources out there that can help you out, but all you need to get started is an idea. Over-thinking and over-engineering what you want to do, can make things a lot harder for you so always remember to keep things simple and evolve the project gradually.

## Building your interface

Some tools out there that you can use are:

- [Balsamiq](https://balsamiq.com/)
- [GoMockingbird](https://gomockingbird.com/home)
- [Mockflow](https://mockflow.com/pricing/)

However, using pen and paper is probably the easiest way, so try and choose whatever is easier for you!


## Tracking your tasks

It's important to keep organised and remember what you intend to build. Try and make a list of your tasks. You can keep track using [Github's issues](https://blog.github.com/2011-04-09-issues-2-0-the-next-generation/) or applications like [Trello](https://trello.com/) or [Pivotal Tracker](https://www.pivotaltracker.com/). You can use all these tools for free and it's an easy and efficient way of not just remembering everything but also of communicating to others that may be interested in helping you out what it is that you want to achieve.

## Storing data

Using JavaScript, you can store data in your browser that your application can retrieve when you get back to the page. This information will only be available on the user's machine, as we are not using a database or storing the data on the server at the moment.

Most modern browsers support JavaScript's localStorage, but before you start using it, you can make sure it is available.

```javascript
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}
```


Storing and retrieving data is quite simple as localStorage stores key/value pairs.

```javascript
localStorage.setItem('name', 'Johannah');

localStorage.getItem('name');
```

## Effects

Everyone likes effects. Have a look at [jQuery's effects](http://api.jquery.com/category/effects/).

## Tracking who visited your website

[Google Analytics](https://marketingplatform.google.com/about/analytics/) is a free tool you can use to check who visited your site. To get an analytics id, you just need to create your own account and follow the information on the website.

> Adding analytics can be one of the tasks when planning your project.

## Using version control

Another important thing is to remember to commit your changes often and keep things contained. If you are working on improving the html of your website, try and get that done before moving on to integrating an API or plugging in some JavaScript.

This way, if something goes wrong and things stop working you can always revert your local changes and start over again.

When working with someone else it's also nice to do your work in branches so you can open pull requests and the other person can have a look at your changes before they are merged into the main repository. We briefly discussed creating branches in the [introduction to version control tutorial](https://tutorials.codebar.io/version-control/introduction/tutorial.html). Try to give your branches meaningful names and when they are merged into the main **master** branch, don't forget to update your local copy.

## Useful APIs

In our previous tutorials we briefly introduced the [Github](https://developer.github.com/v3/) and [BBC](http://www.bbc.co.uk/developer/technology/apis.html) APIs. Most services that you have encountered are likely to have an API available, so just try searching Google for it.

Some popular API's that you may find useful

- [Google Maps](https://cloud.google.com/maps-platform/) Get directions, map images, places of interest and a lot more information about places.

- [Twilio](https://www.twilio.com/docs/usage/api) Initiate calls and send text messages.

- [Twitter](https://dev.twitter.com/docs/api/1.1) search Twitter, retrieve and send your tweets and a lot more.
- [Spotify](https://developer.spotify.com/technologies/web-api/) Explore Spotify's music catalog and retrieve track, album and artist data.

- [Instagram](https://instagram.com/developer/endpoints/) Search and retrieve images from Instagram.

> A lot of these API's require registering your application before you are able to use them, and some may take a while to respond. You can always read up and use fake data (by creating your own JSON objects, like we learned on the [Beginning JavaScript tutorial](https://tutorials.codebar.io/js/lesson2/tutorial.html).


---
This ends our **Building your own app** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
