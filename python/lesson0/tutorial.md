---
layout: page
title: Installation Guide
---

Welcome to the first Python tutorial. We're going to look at getting Python up
and running on your computer, then look at a few simple operations to get to
grips with the development environment and syntax.

## Installation

### Mac

Mac OSX ships with Python 2.7 which, while still a great language, is very
outdated these days, so we need to upgrade:

1. Make sure you're running an updated version of OSX.  You should at least
   have OS 10.3, and most modern Macs are running much later than that anyway,
   but it's worth noting this requirement here.
2. Head to [the Python website](https://www.python.org/).
3. Click "Downloads".
4. There will be two options; one for Python 3 and one for Python 2. 
   **Download Python 3**. At the time of writing, the version available is
   3.5.2.
5. When the download's complete, your browser should automatically mount the
   disk image and open a Finder window of what's inside, but if that doesn't
   happen, you'll have to find the file `Python.mpkg` in your downloads folder
   and double-click it to get started.
6. Once the installer is running hit `Continue` a number of times and agree to
   the Free software license as well as enter your administrator password. Just
   follow the prompts and you'll be fine.

If you get lost, have a look at this [tutorial with pictures on DiveIntoPython3](http://www.diveintopython3.net/installing-python.html#macosx).

### Windows:

1. Head to [the Python website](https://www.python.org/).
2. Click "Downloads".
3. There will be two options; one for Python 3 and one for Python 2. 
   **Download Python 3**. At the time of writing, the version available is
   3.5.2.
4. Run the downloaded installer and click *Next* until you reach the
   *Customization* page.
5. Scroll down to the bottom and choose to *Add python.exe to PATH*.
6. Continue clicking *Next* until it's installed.

If you get lost, have a look at this [tutorial with pictures on DiveIntoPython3](http://www.diveintopython3.net/installing-python.html#windows).

### Linux

All modern Linux distributions should support installing Python 3 via the
package manager.  However, each distribution likes to do things slightly
differently, so these instructions may need to be modified for your situation.

#### Debian/Ubuntu

Python 3 is available via apt, so you can install it with `apt install 
python3`.

#### Redhat/CentOS

Python 3 isn't yet available in default Redhat/Centos installations, so you
have to use the `scl` workaround:

1. Install scl-utils: `yum install scl-utils`
2. Install the extra repo needed for Pytyhon 3:
        `rpm -Uvh https://www.softwarecollections.org/en/scls/rhscl/python33/epel-7-x86_64/download/rhscl-python33-epel-7-x86_64.noarch.rpm`
3. Install Python 3 with this new repo: `yum install Python33` (no the second
   `3` is not a typo)
4. Run `scn enable python3 /bin/bash`.  This will put you into a shell that
   supports Python 3.

For more information on this process, take a look at [this tutorial](https://devops.profitbricks.com/tutorials/install-python-3-in-centos-7/).

#### Arch

Python 3 is available via Pacman, so all you need to do is `pacman -S python`.

#### Gentoo

You've already got it :-)


## Opening the REPL

Python is often developed with the aid of a *REPL*, or *Read-Eval-Print-Loop*.
The REPL is a way of getting immediate feedback as you work. Python's REPL is
called **IDLE**.

It's very important to find what Python version you are working with.

On Windows, open `cmd` or on Mac OS / GNU/Linux open `terminal` and type
(without the `$` sign):

    $ python --version

What you should see is:

    $ python 3.5.2

Any 3.* version should do for this tutorial to work.

Now, open the *REPL* by typing:

    $ python

And you should see something like this:

    Python 3.5.2 (default, Aug  6 2016, 15:44:26) 
    [GCC 5.4.0] on linux
    Type "help", "copyright", "credits" or "license" for more information.
    >>> 

Now you're all set!
