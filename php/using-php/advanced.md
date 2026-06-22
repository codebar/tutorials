---
layout: page
title: Running PHP - Advanced Guide
---

## Introduction

This page covers more advanced styles of PHP setup and installation. PHP has been designed to work primarily in server environments where flexibility and performance are top requirements. The most typical server environment is known as a LAMP stack, where LAMP stands for Linux, Apache, MySQL, PHP, to describe the main software in the stack. It means there are many choices as to how you can install and use it, based on your needs.

It has two main ways of operating - as a command-line tool, or as part of a web server to serve HTML. The command-line version is designed for running scripts that generally have no user interaction. so it's good for trying out PHP scripting or running a complex algorithm or some data processing. Running as part of a web server environment is when it really shows off with being able to dynamically write web pages.


## Online

There are some online tools for trying out PHP. Unfortunately, a lot of these tools restrict the abilities of PHP, typically stopping it from producing HTML so making them operate like the command-line version. They give you the chance to try the language, but don't let you do the things it was really meant to do. However, below are a few exceptions:

### Using PHPFiddle

[PHPFiddle.org](https://phpfiddle.org/) is a simple way to get quick access to PHP, and is able to serve a full web page. It even provides MySQL database access if you set up a login.

### Using cloud9

[cloud9](https://aws.amazon.com/cloud9/) is a full online IDE environment. It is now part of the AWS family of tools, so you need an Amazon AWS login to use it. It is extremely flexible as you can set up almost any kind of environment in it, and be able to use the full suite of AWS services.

**Warning: This is not a free service. It may be free for a single machine for 1 year, but afterwards will incur
charges. With AWS services, always check what the situation is with pricing.**


## Installing on your machine

Giving you the most flexible options for developing with PHP, but can be a bit more technical to set up.

### All-in-one Builders

There are several projects where they have attempted to build everything into one easy package for you to download. These are very convenient to install/uninstall, but can be limited in what they can do, and inflexible to add in those missing features. A few of these include:
* [XAMPP](https://www.apachefriends.org/index.html) - Cross-platform Apache/PHP/MySQL stack
* [WampServer](http://www.wampserver.com/en/) - Windows Apache/PHP/MySQL stack

### Just the command-line tool

There is another way of using the command-line tool, which is to use it to generate static HTML. This is an ideal way to serve a site with many people who just read the site, but is limiting for a site that updates frequently.

#### Saving pages as static HTML

But you have to save the generated web page to a static file to be able to see it in a web browser. E.g. run your script like this:
```
php index.php > index.html
```
If you open your browser and open `index.html`, you should see the generated page. If you make changes, you need to re-run the line above and refresh the page on your browser.


### Adding on a web server

PHP is best when combined with a web server. PHP can integrate with browsers in a number of ways, including:
* SAPI - the web server runs PHP as though it was part of the web server, using its' resources
* CGI - the web server runs PHP as though it was an application on the machine. Not commonly used these days
* Fast CGI - PHP runs as its' own server, and the web server connects to it

The choice of web servers is also plentiful, the main front runners are:
* Apache - classic stable workhorse of the Internet, very reliable and well documented
* nginx - Very fast web server. Configuration is conceptually different to apache and can gotcha quite easily
* lighthttpd/alpine - A stripped-down version of apache, whose configuration is compatible with apache's

Unfortunately, you will have to read and follow lots of instructions to get these installed (mileage varies depending on your operating system). Some instructions are provided in the [PHP Installation Guide](https://secure.php.net/manual/en/install.php).

### Adding on other services

PHP is very versatile, and has integrations with a great many tools (here is the [full list of extensions and tools](http://php.net/manual/en/funcref.php), each extension has instructions on installing and integrating). Installation is usually in two steps, install the service software, then install and/or configure/enable the PHP extension. The more popular tools are already built-in, such as MySQL access. Often, your operating system can provide packages for performing these steps more easily.

As an example, the most common service to add is a data service like [MariaDB](https://mariadb.com/downloads/), a variation of MySQL. This just needs to be installed and configured, then PHP is already enabled to access MySQL databases, so you go straight to accessing it in your scripts.


## Using Docker

[Docker](https://www.docker.com/) is a tool for running virtualized environments that contain software and tools, without disrupting your own machine. Docker can be fiddly, but provides the most flexibility for easily setting up and chaining other software and tools together.

Here is the [Docker installation guide](https://docs.docker.com/install/). We advise that you install Docker and ideally download the base images (e.g. with `docker pull php:apache`) you are using before attending a codebar session to avoid problems with wifi and large downloads.

### Simple PHP and web server

The absolute simplest way to get PHP running is from the [official PHP builds](https://hub.docker.com/_/php/) by the Docker team:
```
docker run --rm -p 8080:80 -d -v `pwd`:/var/www/html php:apache
```
This starts a web server running on http://localhost:8080/, that is looking at the current directory for its' webroot.

### More advanced stack

Docker has a great feature called *docker-compose* that's able to chain multiple containers together to make a complete stack. But for this PHP set up, this usually means altering the configuration of the PHP docker box to support additional features.

Here is an intro to how you might go about doing this by adding on a MariaDB container, making Docker simulate a LAMP stack.

Create a file called 'Dockerfile'. This should contain the following:
```
FROM php:apache
RUN docker-php-ext-install mysqli
```

Then run the command:
```
docker build -t php-with-mysql .
```

This has built a container called `php-with-mysql` (`-t` is for tag) that is the vanilla PHP/Apache build, but with the mysqli extension library installed.

Next, create a file called 'docker-compose.yml'.
```
version: "3"
services:
  app_server:
    build:
      context: .
    ports:
      - "8080:80"
    networks:
      - webnet
    volumes:
      - .:/var/www/html
  mysql_server:
    image: mariadb:latest
    environment:
      MYSQL_ROOT_PASSWORD: my-secret-pw
    networks:
      - webnet

networks:
  webnet:
```
If you now build the stack with (first time you run this it will need to do some downloads that may be quite large)
```
docker-compose build
```
You can then start it with
```
docker-compose run
```
This may leave the server running in the terminal you've used. You can now access the database by writing a script like:
```
$mysql = new MySQLi('mysql-server', 'root', 'my-server-pw');
$results = $mysql->query("SHOW DATABASES");
foreach ($results as $result) {
    echo "<p>{$result->name}</p>";
}
```

## Using VMWare/Virtualbox/Vagrant

If you are used to using these tools, it is also possible to install a LAMP stack in a virtual machine. The advantage of this technique is that you get complete control of the machine, to install whatever tools you need. There are pre-built images that are already configured and require minimal effort to get up and running. Some resources to look at are:

### Vagrant

The best way to find vagrant boxes is to use their [box search facility](https://app.vagrantup.com/boxes/search) and search for "LAMP"

### Virtualbox/VMWare

The recommended option is to use the [official ubuntu server build](https://www.osboxes.org/ubuntu-server/). This may require a little set up once the main install is running, but gives you the option of building the set up you want. There are plenty of help and information for ubuntu/debian builds.
