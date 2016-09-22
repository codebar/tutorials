This is the source code for <http://tutorials.codebar.io>

## Getting started

This is a [GitHub Pages](https://pages.github.com/) repo, so you can render the pages with [Jekyll](http://jekyllrb.com/).

The recommended way of installing the project depdendencies is via [RVM](https://rvm.io/rvm/install).
Follow the [quick installation guide](https://rvm.io/rvm/install#quick-guided-install) and then run:

```bash
$ rvm install 2.2.1  # inside `codebar/tutorials` folder
$ rvm gemset use codebar-tutorial --create
$ gem install bundler
$ bundle install
```

In order to serve the site, you'll need to have [Node](https://nodejs.org/en/) installed.
This can be done with a tool like [NVM](https://github.com/creationix/nvm). Then run:

```bash
$ jekyll serve  # go to http://127.0.0.1:4000
```

If you also want to make changes to the structure of the site (i.e. if you want
to modify the site's Javascript files) and run the tests, you can:

```bash
$ npm install
$ gulp
```

Then go to http://localhost:4000/test/specrunner.html to run the tests. Tests should be green.

> *Gulp is only used for development, not in production. In your local copy of this repo, it will concatenate and minify the files inside the `javascripts-dev` folder, as well as watch for changes in that folder. The concatenated and minified JS file will be generated inside the `javascripts` folder. You can push both folders when you are finished with your changes. GitHub pages will then  generate the site in production with whatever is inside the `javascripts` folder.*

If you are just updating or adding new tutorials, follow steps 1 to 3 only.

## Getting in Touch

You can go to the general [codebar Slack channel here](https://codebar.slack.com/messages/general/) or the dedicated [tutorials channel here](https://codebar.slack.com/messages/tutorials/). Use it to get in touch and chat to other codebar students/coaches, or if you need help.

If you are not on Slack use [this link](http://codebar-slack.herokuapp.com/) to get an invite.

## Contributing

We encourage you to contribute with your suggestions and corrections. Head to our [issues page](https://github.com/codebar/tutorials/issues) and open a new issue or help on the existing ones.


##### General tutorial rule

1. All tutorials get the students to build something that they are able to show around at the end of the workshop.

2. All tutorials follow a structure:
	* Objectives - "In this tutorial we are going to look at..."
	* Goals - "By the end of this tutorial you will have..."
	* Then the exercises.
	* Bonus - This is not always required but if you feel there is something that could be added then please include it.
	* Further reading - Again this is not always required but if you feel there was something in the tutorials that could be covered in more depth then please include any good reading materials/videos or extra tutorials.

3. Repetition is good. A tutorial can contain multiple exercises that ask the students to take similar steps (e.g. for HTTP Requests one exercise introduces GET, another has GET and POST etc).

4. Explaining and getting the students to focus on one new thing at a time, presenting students with lots of new content and usage examples can be confusing.

5. Before starting to write a new tutorial please speak with someone from codebar to see whether it is of interest to students.

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

## License

codebar Tutorials are released under the [Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)](http://creativecommons.org/licenses/by-nc-sa/4.0/).
