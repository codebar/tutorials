---
layout: page
title: Setting up your computer for Codebar
---

You can have a great time at Codebar no matter what kind of laptop you have, but you must do a little setup before jumping in to the tutorials. You can do this at home so you can jump straight into a tutorial at Codebar. Don't worry if you have trouble - your coach can help you with this if you prefer.


## Somewhere to save your files (required)

Programming projects are normally made up of several related files, and we hope you'll come back to Codebar several times! You should create a folder on your hard drive dedicated to Codebar. Create a new folder inside it when you start work on a new tutorial.


## A text editor (required)

Programmers use **text editors** to write code. You could use [Notepad](https://en.wikipedia.org/wiki/Notepad_%28software%29) (Windows) or [Notes.app](https://en.wikipedia.org/wiki/Notes_%28application%29) (Mac) to write code, but almost all programmers use a text editor with programming-specific features:

- **Syntax highlighting** shows your code in different colours. This helps you spot typos and understand the structure of your code.
- **Auto-indent** helps you keep your code tidy.
- **Project navigation and tabs** help you move between the different files in your project.
- **Autocompletion** shows you keywords you could use to finish what you're typing, so you don't have to remember all the possible commands.

We recommend you use **[Atom](https://atom.io/)** at Codebar. It's free, open source, and runs on Windows, Mac, and Linux. **[Sublime Text 2](http://www.sublimetext.com/)** is another popular choice. It's free to download & use for as long as you like (though it will nag you intermittently to buy it when you save your work), and it runs on Windows, Mac and Linux.


## A web browser (required)

You'll have one of these already! Windows comes with [Internet Explorer](http://windows.microsoft.com/en-us/internet-explorer/), and OS X comes with [Safari](https://www.apple.com/uk/safari/). Most Linux distributions come with [Firefox](https://www.mozilla.org/en-US/firefox/), which is also available for Windows and OS X. You can also download [Chrome](https://www.google.com/chrome/) which is a popular alternative. You can get started with whatever you currently use, but when you reach the later tutorials the powerful developer tools in Chrome and Firefox will be useful. Your coach will show you how to use them while you work through the tutorials.

## A compression utility (handy on Windows)

Many of the tutorials have links to download code from Gist in .tar.gz format. Macs and most Linux distributions have built-in support to extract the files from these archives for you. On Windows there are a variety of utilities available. If you don't already have one, [7-zip is free](http://www.7-zip.org/).

## Ruby (optional)

You won't need Ruby installed if you're working on CSS or HTML, but you will need access to Ruby if you work on the Ruby tutorials. You can use [a free webservice called Nitrous](https://www.nitrous.io/) to get started. You can sign up before the workshop to save some time.

If you have a Mac you'll have a version of Ruby installed already. A coach can help you get started with Ruby on your Mac - ask them about `rbenv` (or `rvm`) and Homebrew.

You can [download and run the RubyInstaller program](http://rubyinstaller.org/) to program Ruby on Windows.

On Linux, you can install Ruby using your distribution's package manager, as follows:

Debian GNU/Linux and Ubuntu use the apt package manager:

```bash
$ sudo apt-get install ruby-full
```

CentOS, Fedora, and RHEL use the yum package manager:

```bash
$ sudo yum install ruby
```

Gentoo uses the portage package manager:

```bash
$ sudo emerge dev-lang/ruby
```

Arch Linux uses a package manager named pacman. To get Ruby, just do this:

```bash
$ sudo pacman -S ruby
```


