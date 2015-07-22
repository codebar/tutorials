---
layout: page
title: Introduction to Sinatra
---

## What is Sinatra?

Sinatra is a super simple framework for making websites using Ruby and HTML.
It's easy to understand, and a great tool to start learning web development
with!

Before you continue, make sure you'll completed the [HTML tutorial][html-tut],
[version control tutorial][vc-tut], and the [Ruby tutorial][ruby-tut].

[html-tut]: http://codebar.github.io/tutorials/html/lesson1/tutorial.html
[vc-tut]: http://codebar.github.io/tutorials/version-control/introduction/tutorial.html
[ruby-tut]: http://codebar.github.io/tutorials/ruby/lesson1/tutorial.html

## Installing Ruby

Before you begin, you must have Ruby installed on your machine. There are a
couple of different ways you can get ruby setup.

- Windows installation using [Ruby installer][ruby-installer]
- Mac & Linux installation using [rbenv][rbenv-install]

[rbenv-install]: https://github.com/sstephenson/rbenv "rbenv"
[ruby-installer]: http://rubyinstaller.org/

Once you've got Ruby installed, you'll need to install Sinatra. Open the
terminal / command prompt, and type the following:

```
gem install sinatra
```

If you see a message like this (and some other stuff), you're good to go

```
Successfully installed sinatra-1.4.6
```


## What is this gem thing, anyway?

Often when programming we'll write sections of code that could be used in other
projects, preventing us from having to solve the same problems over and over.
These pieces of reusable code are called libraries, though in the Ruby world we
typically call our libraries "gems", purely because it's a cute name.

To save us the trouble of copy and pasting library code into our projects,
applications were written that will go and download the libraries you ask for,
and then make them available in your project. These applications are called
"package managers", and our Ruby package manager is called "gem".

So when you ran `gem install sinatra` before you were instructing the `gem`
package manager to go and download the `sinatra` gem so you could use it in
your project without any extra fuss. How convenient!


## Hello Sinatra

It's time to start working with Sinatra. Open your text editor, and create a
file called `server.rb`.

In this file, type the following:

```ruby
require 'sinatra'

get '/' do
  'Hello, codebar!'
end
```

Let's run your new Sinatra web application. Open the terminal again, navigate
to the directory where you saved your Ruby file (remember `cd` from the version
control tutorial), and type the following:

```
ruby server.rb
```

Where the path is the path to where you saved the file. If all goes well, it'll
print something like this:

```
== Sinatra (v1.4.6) has taken the stage on 4567 for development with backup from Thin
Thin web server (v1.6.3 codename Protein Powder)
Maximum connections set to 1024
Listening on localhost:4567, CTRL+C to stop
```

As you can see, it's 'listening' on `localhost:4567`, so open your web browser,
and type in the URL bar `http://localhost:4567/`.

Congratulations! You've made your first website, and are officially a web
developer. Now is a good time to update your LinkedIn profile.

## What's happening here?

When you run your Ruby script, a Sinatra server is started on your machine.
A server is a program that responds to requests- in this case, requests from
web browsers asking for web pages.

As long as a web server is running on your machine, you can access it through a
special domain called `localhost`, which just means 'your machine'.

Go back to the terminal and hit `ctrl+c` to kill the running server.

```
Stopping ...
== Sinatra has ended his set (crowd applauds)
```

Refresh the page in your web browser- it's no longer available. Web servers,
like any other computer program, only do what we tell them to do, and only work
while they are running.

## Routes and URLs

Right now we only have one page (one route) in our web application, the `/`
page, also called the 'root'. This is the one that maps to
`http://ouraddress/`, in our case `http://localhost:4567/`.

If we want to have a new page at `http://localhost:4567/about` we'll need to
create a new route that matches `/about`.

Open our `server.rb` file and add the following code at the bottom, below our
other code.

```ruby
get '/about' do
  'All about codebar!'
end
```

Our previous block of code ran when we `get` a request to the `/` address,
and this new one runs when we `get` a request to the `/about` address.

Start up our server again with `ruby server.rb`, and navigate to
`http://localhost:4567/about`- we've created a new page. Navigate back to
`http://localhost:4567/`, our first page is still there.

### Mini challenge!

Try making a few more routes for URLs of your choice, for example
`http://localhost:4567/kittens`

## End of part one

So today we've created our own simple web application using Ruby and Sinatra,
and learnt a little bit about servers, routing, and the web. If there's
anything you'd like explained in more detail, pop down to codebar, and ask one
of the excellent coaches.
