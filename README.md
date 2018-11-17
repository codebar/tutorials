This is the source code for <http://tutorials.codebar.io/>

## Getting started

This is a [GitHub Pages](https://pages.github.com/) repo, so you can render the pages with [Jekyll](https://jekyllrb.com/).
First make sure to [install the version of Ruby](https://www.ruby-lang.org/en/documentation/installation/)
indicated in `.ruby-version`, as well as the [bundler](https://bundler.io/) gem. Then:

1. `bundle install`, which will install Jekyll
2. `bundle exec jekyll serve --watch`
3. go to <http://localhost:4000/>

(*you could also use your favourite manager, `chruby`, `rbenv`, `rvm`, etc. See
instructions for `rvm` at the end of this README*)

If you are just updating or adding new tutorials, follow steps 1 to 3 only.

If you also want to make changes to the structure of the site (i.e. if you want
to modify the site's Javascript files) and run the tests, you need to install
[Node](https://nodejs.org/en/) (follow the link for installation
instructions). Then:

```bash
$ npm install
$ gulp
```

and go to <http://localhost:4000/test/specrunner.html> to run the tests. Tests should be green.

> *Gulp is only used for development, not in production. In your local copy of
> this repo, it will concatenate and minify the files inside the
> `javascripts-dev` folder, as well as watch for changes in that folder. The
> concatenated and minified JS file will be generated inside the `javascripts`
> folder. You can push both folders when you are finished with your changes.
> GitHub pages will then  generate the site in production with whatever is
> inside the `javascripts` folder.*

## Getting in Touch

You can go to the general [codebar Slack channel here](https://codebar.slack.com/messages/general/) or the
dedicated [tutorials channel here](https://codebar.slack.com/messages/tutorials/). Use it to get in touch
and chat to other codebar students/coaches, or if you need help.

If you are not on Slack use [this link](https://slack.codebar.io/) to get an invite.

## Contributing

We encourage you to contribute with your suggestions and corrections. Head to our
[issues page](https://github.com/codebar/tutorials/issues) and open a new issue or
help on the existing ones.


##### General tutorial rule

1. All tutorials get the students to build something that they are able to show around at the end of the workshop.

2. All tutorials follow a structure:
	* Objectives - "In this tutorial we are going to look at..."
	* Goals - "By the end of this tutorial you will have..."
	* Then the exercises.
        * Bonus - This is not always required but if you feel there is
          something that could be added then please include it.
        * Further reading - Again this is not always required but if you feel
          there was something in the tutorials that could be covered in more
          depth then please include any good reading materials/videos or extra
          tutorials.

3. Repetition is good. A tutorial can contain multiple exercises that ask the
   students to take similar steps (e.g. for HTTP Requests one exercise
   introduces GET, another has GET and POST etc).

4. Explaining and getting the students to focus on one new thing at a time,
   presenting students with lots of new content and usage examples can be
   confusing.

5. Before starting to write a new tutorial please speak with someone from
   codebar to see whether it is of interest to students.

##### To add downloadable files to a new or existing tutorial:

* **Add a folder** with your exercise files inside the tutorial folder. For example, for Javascript lesson 3:

```bash
js/lesson3/
├── assets/
├── files/
│   ├── index.html
│   ├── jquery.js
│   ├── script.js
│   └── style.css
└── tutorial.md
```

- Add a frontmatter variable `files` to the tutorial page with a list of the files you added, **including folder name**:

```yaml
---
layout: page
title: Introduction to jQuery
files:
  - files/index.html
  - files/jquery.js
  - files/script.js
  - files/style.css
---
```

- In the copy of the tutorial, add your link to the files, **making it point to just `download`:**


```markdown
Download the files that you will need to work through the example
[here](download).
```

And you're done. Commit and push as usual.

# RVM

Another way of installing the project dependencies is via [RVM](https://rvm.io/rvm/install).
Follow the [quick installation guide](https://rvm.io/rvm/install#quick-guided-install) and then run:

```bash
$ rvm install 2.2.1  # inside `codebar/tutorials` folder
$ rvm gemset use codebar-tutorial --create
$ gem install bundler
$ bundle install
$ jekyll serve  # go to http://127.0.0.1:4000/
```

If you also want to make changes to the JavaScript of the site, you'll need to have
[Node](https://nodejs.org/en/) installed.
This can be done with a tool like [NVM](https://github.com/creationix/nvm).


## License

codebar Tutorials are released under the [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](https://creativecommons.org/licenses/by-nc-sa/4.0/).
