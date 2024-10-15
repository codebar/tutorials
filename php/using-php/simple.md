---
layout: page
title: Running PHP - A Simple Guide
---

## Introduction

This page is to help with getting set up easily with PHP.

PHP has two main ways of operating - as a command-line tool (CLI), or as part of a web server. The command-line version is useful for doing data processing and other background tasks. When integrated with a web server it is able to create dynamic web pages by allowing you to modify the HTML that is delivered to a user.


## Online

You should be able to try out most things in the PHP tutorials with any online PHP tool. Some are limited by whether you have full control of the HTML, or whether other features are available, like a filesystem or database.

### Using PHPHub sandbox

[https://phphub.net/sandbox/](https://phphub.net/sandbox/) is a simple and feature-rich way to try out PHP. It even provides MySQL database access.


## Installing on your machine

Giving you the most flexible options for developing with PHP, and is the way we will assume in the guides.

### Do you already have it installed?

You never know, PHP may be already installed on your system! You can check by going to a command-line and typing:
```
php -v
```
This will indicate if the PHP command-line version is installed. If you are running a local web server, you could try putting a file (with `.php` on the end of the filename) into the web folder that contains the following:
```
<?php
echo phpinfo();
```
When you access that file via your web browser, it should return a page giving lots of information about the PHP configuration, this will mean your web server is PHP-enabled.


### Installing PHP

Installing just the PHP command-line is fairly straight-forward. You can follow their [official guide](https://secure.php.net/manual/en/install.php) for your operating system. Uninstalling is typically just a case of deleting the folder into which it was installed.



### Using PHP

#### Script mode

This is the typical way of running a PHP on the command-line, as a script. You write your PHP in a file typically ending with the `.php` extension. You then call PHP like any other application like this:
```
php script.php
```
The output you will see are anything that you `echo` or `print`, or errors that have occured whilst trying to process your script.


#### Interactive mode

Some tutorials advise using the interactive mode of the PHP command-line (CLI). To start this, at a terminal on your machine type:
```bash
php -a
```
You can exit interactive mode by typing `quit` or `exit` and ENTER.

Unlike other language interactive modes like Javascript or Ruby, PHP is always in _command_ mode. So when you type in commands to the PHP interpreter, it will display nothing if you only enter an expression (e.g. `3 + 2;`). So we typically add the keyword `echo` in front to tell it to display the value of the expression, e.g. `echo 3 + 2;`. We will indicate when to use echo in our examples.

PHP interactive mode also displays extra information which other modes of operation in PHP don't. Because of this, examples of output may remove these from the output. Don't worry, these can generally be ignored, We're trying to draw your attention to the important things that PHP is doing.


#### Server mode

In some tutorials we will be building web pages/sites with PHP. We will use the built-in server mode for this.

*Note: The built-in PHP WebServer is great for development, but **NOT** production.* See the advanced setups section below for more information about this.

Go to the directory where you created the _index.php_ file and run the following command:

```bash
$ php -S 0.0.0.0:8080
```
* `php` is the same command from before, that we used to run our **php** script
* `-S` means built-in WebServer
* `0.0.0.0` is the IP that the WebServer should listen on. By using `0` it will listen on everything - fine for development
* `:8080` sets the port to listen on - fine for development but in production the default port is `80` and therefore not required when accessing a URL. The colon character is used after a hostname or IP address to indicate that you wish to specify the port number on that host
