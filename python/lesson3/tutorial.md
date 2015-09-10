---
layout: page
title: Discovering Flask via Python and pip
---

An alternative to *Ruby's Sinatra* is the lesser known *Flask* (run using Python).
Both are web application frameworks. Similar to the MVC (model-view-controller) pattern but for dynamic and smaller applications and sites.

Knowing both can be advantageous in work scenarios, understanding
different programming and computer science conventions or thoughts.

# Why Flask and Sinatra?
Both are small and encourage building applications from ground up using
dependencies and components.

You'll discover how routing, templates by coding a small script.

Routing can work and how routes can get users through
a journey (often discovering content and information).

Flask uses templates (Jinja2) to serve dynamic HTML templates with scripts
(ideally Python) to do serve things depending on the problem being worked on and
problems ideally being solved.

## Ideal Prerequisites
* A grasp of CLI (command-line)
* The Python tutorial
* Knowledge of HTML (optional)

## Example time
To see the following on your page in a be in paragraph:

      The next event starts at {{ "today's date" }}

We begin discovery from the `datetime` and import it's `date` method and using
the `pyton` repl (read eval print loop) in the CLI:

      from datetime import date
      todays_date = date.today().strftime("%D")
      print todays_date # '09/04/15'

Note this returns back the month/day/year convention. For more control over
the formatting (order in which the date is displayed) try searching through
the documentation for your version of the Python programming language.
Another way to change the order is:

      todays_date = date.today().isoformat()

Later in this tutorial you'll be able to use the theory from above to return
a HTML template serving the following to browsers:

      <p>The next event starts at <time>{{ todays_date }}<time></p>

      <p class='warning notice'>NB. The above HTML (HTML5) should be written
      using the correct HTML attributes and not say "date".</p>

The time HTML entity tags `<time></time>` should have attributes for 'datetime',
see the
[W3C specifications](https://www.w3.org/wiki/HTML/Elements/time) or
[Mozilla's offering](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time).

## What is Pip?
This is the recommended 'package management tool' for Python dependencies and
packages eg. Flask, BeautifulSoup and more.

"`pip` is a recursive acronym that can stand for either 'Pip Installs Packages'
or 'Pip Installs Python',"
[Wikipedia entry for pip](https://en.wikipedia.org/wiki/Pip_(package_manager))

You can get `pip` using [easy-setup or through alternative methods](https://pip.pypa.io/en/stable/installing.html).
which is hosted and maintaned by the pypa (Python Packaging Authority is a
working group that maintains many of the relevant projects in Python packaging).

For great system wide safety, it's recommended to strongly consider virtualenv.
`$ [sudo] pip install virtualenv` – it's recommend against using the [sudo] for
various reasons. [Homebrew maintainers have written why they believe using
"why `sudo` is bad"](https://github.com/Homebrew/homebrew/blob/master/share/doc/homebrew/FAQ.md#user-content-why-does-homebrew-say-sudo-is-bad-).
See virtualenv (https://virtualenv.pypa.io/en/latest/installation.html)

## Almost there
You should now have `Python`, `pip` and `virtualEnv`.

The virtualEnv will allow you to work inside a folder that will hold
dependencies and packages separate from system-wide packages for Python and
separate from other projects in the future.

Install flask using pip inside your activate ENV directory. For more details on
getting started see the Pocoo team's (a subset of Python community working on
Flask and other libraries) [guide to getting up and running
with Flask](http://flask.pocoo.org/docs/quickstart/#quickstart)

Below is a script from the Flask documentation (version 0.10). That gets
the start of an app, up and running:

      # name this file "hello_world.py" or something...
      from flask import Flask
      app = Flask(__name__)

      @app.route('/')
      def hello_world():
          return 'Hello World!'

      if __name__ == '__main__':
          app.run()

Once you've created your own script, run it and the application will listen to
requests and served to that declared location output in the CLI.

## Congratulations!
This ends our **Flask basic** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
