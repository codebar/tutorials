---
layout: page
title: Installation Guide
---

Welcome to the first Python tutorial!

### Objectives

In this tutorial we are going to look at:

* Installing Python on your computer
* Checking which version of Python you have
* Opening the REPL (Read-Eval-Print Loop) - a place where you can type
  Python and see the result straight away
* What to do if something goes wrong

### Goal

By the end of this tutorial you will have Python up and running, and you will
have run your first line of Python code.

## Installation

Any version of Python 3 will work for these tutorials. At the time of writing,
the latest version is 3.14.7.

### Mac

1. Head to [the Python website](https://www.python.org/).
2. Click **Downloads**. The site should recognise that you're on a Mac and offer
   you the latest version of Python. **Download it**.
3. Open the file you downloaded. It's called something like
   `python-3.14.7-macos11.pkg` and will be in your Downloads folder.
4. The installer will open. Click **Continue** a number of times, agree to the
   licence, and enter your password when asked. Just follow the prompts and
   you'll be fine.
5. When it's finished, a Finder window will open. You can close it.

### Windows

On Windows, Python is installed using the **Python install manager**.

1. Head to [the Python website](https://www.python.org/).
2. Click **Downloads**, then **Download Python install manager**.
3. Open the file you downloaded and click **Install**.

You can also get the Python install manager from the `Microsoft Store` app. Both
ways give you exactly the same thing.

You don't need to install Python itself separately. The first time you run
Python (which we'll do in a moment), the install manager will download the latest
version for you. If it asks whether you'd like to add a folder to your settings,
it's fine to say no - you won't need it for these tutorials.

### Chromebook

To use Python on a Chromebook, you first need to turn on Linux. It's off by
default, and setting it up can take 10 minutes or more, so it's worth doing
before your workshop if you can.

1. At the bottom right of the screen, select the time.
2. Select **Settings**, then **About ChromeOS**, then **Developers**.
3. Next to "Linux development environment", select **Set up**.
4. Follow the instructions on screen.

When it's finished, a terminal window will open. Type these commands, pressing
Enter after each one:

    $ sudo apt update
    $ sudo apt install python3

If you use a Chromebook from work or school, Linux might not be available. If you
can't find the "Linux development environment" option, have a look at
[If it goes wrong](#if-it-goes-wrong) below.

### Linux

All modern Linux distributions support installing Python 3 using the package
manager, and many come with it already installed. Each distribution does things
slightly differently, so these instructions may need to be modified for your
situation.

#### Debian, Ubuntu or Linux Mint

    $ sudo apt install python3

#### Fedora

    $ sudo dnf install python3

#### Arch

    $ sudo pacman -S python

#### Gentoo

You've already got it :-)


## Opening the REPL

Python is often developed with the aid of a **REPL**, or *Read-Eval-Print Loop*.
The REPL is a way of getting immediate feedback as you work: you type a line of
Python, and it runs straight away and shows you the result.

You might notice a program called **IDLE** was installed alongside Python. IDLE
is a simple code editor that comes with Python, and it has a REPL built in, but
we won't be using it in these tutorials. We'll use the REPL from the terminal
instead.

First, open a terminal:

* **Mac**: open the `Terminal` app. You can find it by searching for `Terminal`
  in Spotlight.
* **Windows**: open `Terminal` or `PowerShell` by searching for either in the
  Start menu.
* **Chromebook**: open the `Terminal` app from the Launcher.
* **Linux**: open your terminal application.

It's very important to find what Python version you are working with. Type
the following (without the `$` sign) and press Enter.

On Mac, Chromebook and Linux:

    $ python3 --version

On Windows:

    $ python --version

You should see something like:

    Python 3.14.7

Any version starting with `3` is fine. If you see an error instead, or a version
starting with `2`, have a look at [If it goes wrong](#if-it-goes-wrong) below.

Now open the REPL by typing `python3` on Mac, Chromebook and Linux, or `python`
on Windows. You should see something like this:

    Python 3.14.7 (main, Aug  5 2026, 10:12:21) [Clang 16.0.0] on darwin
    Type "help", "copyright", "credits" or "license" for more information.
    >>>

The `>>>` means Python is waiting for you to type something. Try your first line
of Python:

    >>> print("Hello, codebar!")
    Hello, codebar!

When you're done, leave the REPL by typing:

    >>> quit()

Now you're all set!


## If it goes wrong

Getting Python installed is often the fiddliest part of learning it, so don't
worry if something here didn't work first time. These are the most common
problems. If yours isn't here, ask your coach.

### "command not found" or "is not recognized"

This usually means your terminal was already open before Python was installed, so
it doesn't know about it yet. Close the terminal completely, open a new one, and
try again.

If it still doesn't work, the installation may not have finished. Try installing
again.

### On Mac, a pop-up asks you to install "command line developer tools"

This happens when you type `python3` before Python has been installed. Your Mac
is offering to install its own copy. You can cancel it, install Python from
python.org as described above, then open a new terminal and try again.

### The version isn't the one you just installed

Any version starting with `3` is fine for these tutorials, so if that's what you
see, you're good to go.

If it starts with `2`, or it isn't the version you've just installed, you may
have more than one version of Python on your computer and an older one is being
used. Close the terminal and open a new one first.

On Mac, if it's still not the version you installed, try including the version
number in the command:

    $ python3.14 --version

If that works, you can use `python3.14` in place of `python3` in these tutorials.

### On Windows, typing `python` opens the Microsoft Store

Windows includes a shortcut that sends you to the Store if Python isn't
installed yet. It means the Python install manager isn't installed - go back to
the [Windows instructions](#windows) and install it.

### On a Chromebook, you can't find "Linux development environment"

Chromebooks used for work or school are often set up so that Linux can't be
turned on, and some older Chromebooks don't support it at all. Your coach can
help you find another way to follow along, or you could ask whoever looks after
the Chromebook whether Linux can be turned on.

### On Linux, you get "Permission denied"

Installing software needs administrator permissions. Make sure you included
`sudo` at the start of the command, and enter your password when asked.

## Further reading

* The official guides to [using Python on Mac](https://docs.python.org/3/using/mac.html),
  [using Python on Windows](https://docs.python.org/3/using/windows.html) and
  [using Python on Linux](https://docs.python.org/3/using/unix.html) go into
  much more detail about installation.
* Google's guide to [setting up Linux on your Chromebook](https://support.google.com/chromebook/answer/9145439)
  covers turning Linux on and off.

Ready to write some code? Head to [Lesson 1](/python/lesson1/tutorial.html).

-----

This ends our **Installation Guide** lesson. Is there something you don't
understand? Try going through the "If it goes wrong" section with your coach. If
you have any feedback, or can think of ways to improve this tutorial,
[send us an email](mailto:feedback@codebar.io) and let us know.
