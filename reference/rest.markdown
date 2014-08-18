# REST (Representational state transfer)

# WORK IN PROGRESS

HTTP, i.e., the web, is a stateless system. Data exists on web servers, that
clients (i.e., web browsers, desktop and mobile applications) download to view.
The webserver has no knowledge of what each client has downloaded (i.e., the
webserver has no knoweldge of the state of the data on each client). If the
state of the data changes on the web server, each client won't find out about
the change until it has download the data again. The Twitter app for example
(desktop or phone), periodically polls the twitter website for new tweets, and
downloads them for display when new tweets are present in your timeline. The
Twitter server has no knowledge of what tweets have already been downloaded for
display on each client

REST is a standard term for interacting with the state of resources on a web
server. Think of a resource as a contained set of data identified by a unique
URL (e.g., a blog post, or a tweet, will have a unique URL). REST defines the
basic process of interacting with these resources via HTTP verbs and their
unique URLs.

*RESOURCE's will typically be a structure of data that would normally be stored
in a database on the server. The web*


## CRUD (Create, Read, Update and Delete)

REST typically exposes a CRUD interface. With these basic actions (also called
HTTP verbs), you can interact with resources on the server in a standardised
way.

- CREATING a resource is triggered by issuing the *POST* HTTP Verb to the
  webserver.
- READING a resource is triggered by issuing the *GET* Verb
- UPDATING a resource is triggered by the *PUT* verb (although this is commonly
  replaced by the *PATCH* verb)
- DELETING a resource is triggered with *DELETE*


## Resources Examples

- To READ an article resource, you issue a GET request to the article URL:

  GET http://www.example.com/articles/23
  
  This is a common shorthand way to describe that we want to read the article
  that is identified by "23"

  GET http://www.example.com/articles/comic-book-heros-are-real
  
  Would read the article indentified by "comic-book-heros-are-real".

- To UPDATE an article resource, you would issue a PUT/PATCH request to the same
  URL:

  PUT http://www.example.com/articles/comic-book-heros-are-real

- To DELETE an article:

  DELETE http://www.example.com/articles/comic-book-heros-are-real


## Collections and Nested Resources

API documentation will usually define collection URLs (indexes), items in the
collection will provide basic details about each resource.

- Collection URLs will typically just omit unique identifier

  GET http://www.example.com/articles

  the API may also provide 'scoped' collections

  GET http://www.example.com/articles/published GET
  http://www.example.com/articles/unpublished

Resources can also contain nested resources, e.g., an article resource will have
many comment resources associated with it.

- Listing the collection of comments associated with an article:

  GET http://www.example.com/articles/23/comments

- Getting a nested resource:

  GET http://www.example.com/articles/23/comments/456


Typically, in day to day web browsing, you will be issuing many HTTP GET
requests with your web browser, every time you click a link on a web page, your
browser will be GET'ting the next web page. You will have also been using POST
requests, each time you submit a form, you would have been POST'ing the form
data to the webserver. 

This POST'ing (or PUT'ting/PATCH'ing) of form data will change the state of the
information on the webserver, hence the term Representational state transfer.
When using RESTful webservices, you will GET the current state of the data from
the web server, then make changes and PUT (or PATCH) the changes back to the
same URL, or POST new data to the server.

Although REST works great for web pages, it's biggest use is for creating APIs.
An API, 


# Using a REST web service

Although REST concepts can be applied to to normal web browsing, they're are
more commonly associated with web services and APIs (Application Programming
Interfaces)

To demonstrate how to easily interact with a REST webservice, we'll be using the
Github Gist API. Gists are mini repositories hosted on github and are a great way to
share snippets of code that aren't in a full github repositry.

https://developer.github.com/v3/gists/

To interact with the Gist API, we'll using https://rested.io/ to make the
requests. The Github API uses JSON to describe the data being transfered (other
APIs can might use XML)

*these examples will cover familier examples from other codebar tutorials,
however, here we'll be focus on the processes and interactions of the client
program with the web server.*

### Required Request Headers

To access the service, the following headers need to be included with each
request:

```
Accept: application/vnd.github.v3+json
User-Agent: rested.io
```

## Listing Gists

Github provides index urls for accessing collections of gists.

GET https://api.github.com/gists/public

The response will be split into 2 parts, the *Headers*, which contain extra
metadata about the response, and the *body*, which will be a formatted as JSON.
The JSON is a list of gists and provides you with the necessary URLs to then
request further details.

## Getting the First Gist

Using the "url" from the first gist, you can now request the full resource

GET "https://api.github.com/gists/34dfc3ff922265ecd5e1"

### Word of warning

Please bear in mind that we're using *live* data here, The IDs in this tutorial
might not be valid anymore as github users create and delete gists all the time!
This is also a good time to remind you that any data on the internet coudl
change at any time. 

## Creating a new Gist

POST https://api.github.com/gists

### Body:

```
{ 
  "description": "the description for this gist", 
    "public": true, 
    "files": {
      "file1.txt": { "content": "Your public code snippet goes in here" }
    }
}
```

You'll notice the response you get back contains the same structure and data
that getting the resource would have returned.

## Updating and Deleting

Up until now, we've been accessing the webservice anonymously. To Update and
Delete gists, we'd have to authorise each request using our github username and
password, or by requesting a special access token, that we'd send with each
request. As we've been using rested.io for these examples, it would be unsafe to
enter our private passwords/access tokens in to a 3rd party site.

# Building a REST webservice
