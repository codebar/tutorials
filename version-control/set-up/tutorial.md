---
layout: page
title: Set-up Git and GitHub
---

## Introduction to Git and GitHub
-----
Now that we know what Version Control is, let's get set-up with Git on our system and make sure we're ready to start creating our own projects and contributing to others.

## Before you begin
Install command line Git for your operating system ([OS X](https://sourceforge.net/projects/git-osx-installer/), [Windows](http://msysgit.github.io/) or [Linux](https://git-scm.com/download/linux)) and open your terminal / command prompt.

Download [Github Desktop](https://desktop.github.com/) for Mac or Windows.

Now create a directory where you will be storing all your projects. You can call it something obvious such as `code` or `projects`.

### Set-up your Account Git details
When we make a commit to a respository we need to associate it with ourselves. To do that we can tell Git our Github account username and email address

commits 
To associate commits you make to repositories to yourself, we need to set-up a Username 

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "name@domain"
```

### Setup an SSH key

An SSH key is used to identify trusted computers, without entering a password.
[Instructions on how to generate an SSH key](https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key)

This ends our _Set-up Git and GitHub_ lesson. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.