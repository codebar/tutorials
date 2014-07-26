---
layout: page
title: HTML Lesson 1
---

## What is HTML?

**HTML** is the language used to build websites.

It defines the structure of the website, so anything related to the content of the page itself: text, images, videos.


### What does it stand for?

**H**yper **T**ext **M**arkup **L**anguage


### What makes a website

HTML: structure of a website

CSS: presentation


_The styling of a website is not part of the HTML._


### Today we will be focusing on fundamental HTML concepts

We will be building this [example page](http://codebar.github.io/tutorials/html/lesson1/example.html "I love owls")

## But before we start...

### HTML element anatomy

An **element** is an HTML component _eg. paragraph, heading, table, list etc_

**Tags**, mark the opening and closing of an element.  They contain elements that show their purpose

`<tagname>some content</tagname>`

```html
<p>I am a paragraph</p>
<h1>I am a heading</h1>
```

Some elements are standalone, as they cannot contain anything else <tagname/>

```html
<br/>
<img/>
```

### DOCTYPE and HTML tags

The doctype is the first thing that must be defined in an HTML page.
It tells the browser which version of HTML the page is using.

```html
<!DOCTYPE html>
```

We will only be using html for now, but you can find more about doctypes [here](http://www.w3.org/wiki/Doctypes_and_markup_styles).

The doctype is always followed by the `<html>` tag, which itself contains the contents of the page.

```html
<!DOCTYPE html>
<html>
</html>
```

### HEAD and BODY tags

An HTML page is split into two parts. The **head** and the **body**.

The **head** contains information like the page title, stylesheets, scripts and meta information.

The **body** contains what is visible to the user.


## Let's get started!

Let's start by defining the basic structure of our website.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>I love owls</title>
  </head>
  <body>
    <!-- content -->
  </body>
</html>
```

### Element: Heading

Headings come in many sizes

# `<h1>Heading</h1>`
## `<h2>Heading</h2>`
### `<h3>Heading</h3>`
#### `<h4>Heading</h4>`
##### `<h5>Heading</h5>`
###### `<h6>Heading</h6>`

Add a heading to your page

```html
<h1>Owls!</h1>
```

> Did you remember to add the heading to the body?

> Don't forget to save your changes before refreshing the browser!

### Nesting elements

Elements can be nested inside each other. For example, by putting the `<h1>` inside the body tags you are nesting a heading inside the `<body>` of a page.

> You must always close any element that you open. The first element you open, you close last!

### Element: Paragraph `<p>`

Putting content into a `<p>` will make it look like a paragraph structure. This helps make the content of a page easier to read.

Add the following to your page, after the title

```html
<p>
  Most birds of prey sport eyes on the sides of their heads,
  but the stereoscopic nature of
  the owl's forward-facing eyes permits the greater
  sense of depth perception necessary for low-light hunting.
</p>
```

### Line break `<br/>`
As you've noticed, despite the new lines there are no line breaks in our paragraph.
To achieve that we must use the `<br/>` tag.

```html
<p>
  Most birds of prey sport eyes on the sides of their heads,<br/>
  but the stereoscopic nature of<br/>
  the owl's forward-facing eyes permits the greater<br/>
  sense of depth perception necessary for low-light hunting.
</p>
```

### Formatting text

We can also **emphasise** or make text *important*.
For emphasis we use `<strong>` and for importance `<em>`

Let's emphasise some of the content of our paragraph

```html
<p>
  Most birds of prey sport eyes on the sides of their heads,<br/>
  but the stereoscopic nature of<br/>
  the owl's forward-facing <strong>eyes permits the greater<br/>
  sense of depth perception</strong> necessary for low-light hunting.
</p>
```

### Element: Link `<a>`

The most important attribute of a link is **href**, which indicates the path or URL that is accessed through it.

Let's add a link to the bottom of our paragraph

```html
<br/>
<a href="http://en.wikipedia.org/wiki/Owl">More information about owls...</a>
```

### Element: Div `<div>`

Div stands for _division_. It creates sections in an HTML document.
We can use a div to contain out paragraph.

Wrap your paragraph in a div and add a heading to it

```html
<div>
  <h3>Owls</h3>
  <p>
    Most birds of prey sport eyes on the sides of their heads,<br/>
    but the stereoscopic nature of<br/>
    the owl's forward-facing <strong>eyes permits the greater<br/>
    sense of depth perception</strong> necessary for low-light hunting.
    <br/>
    <a href="http://en.wikipedia.org/wiki/Owl">More information about owls...</a>
  </p>
</div>
```

### Element: List `<li>`

There are two types of lists, **ordered** and **unordered**.
An unordered list `<ul>` is defined with bullets whilst an ordered list `<ol>` uses a sequence.

Let's list the reasons we like owls so much under the main heading of the page (the `<h1>` element we added earlier on)

```html
<h2>Why do I like owls so much?</h2>
<ol>
  <li>they are adorable</li>
  <li>and lovely</li>
  <li>and cuddly</li>
</ol>
```

### Element: Image `<img>`

So far we've learned a lot about how to add text to our page. But how about some media?

Let's add some images!

Before we start, we'll need to add the image files we want to use to the project folder.  It's a good idea to keep images in their own folder, so first, create a folder called 'images' inside the same folder as your HTML file.  Next, download the images you'll need. Do this by right clicking on each of the following links, select 'Save Link As...', and save it to the images folder you just created:

* [logo.png](/html/lesson1/images/logo.png "logo.png")
* [img1.jpg](/html/lesson1/images/img1.jpg "img1.jpg")
* [img2.jpg](/html/lesson1/images/img2.jpg "img2.jpg")
* [img3.jpg](/html/lesson1/images/img3.jpg "img3.jpg")
* [img4.jpg](/html/lesson1/images/img4.jpg "img4.jpg")
* [img5.jpg](/html/lesson1/images/img5.jpg "img5.jpg")
* [img6.jpg](/html/lesson1/images/img6.jpg "img6.jpg")

Images are primarily made up of three attributes

* the `<img>` tag
* the `src` attribute, which lets the page know what image we want to view
* the `alt` attribute, where we describe our image

Before the main heading of the page, add the following

```html
<div>
  <img src="images/logo.png" alt="codebar.io"/>
</div>
```

> Can you see the codebar logo? What happens when you change logo to logo1?

Let's add some more, this time, contained in a list.
Do this underneath  `<h2>Why do I like owls so much?</h2>`

```html
<ul>
  <li><img src="images/img1.jpg" alt="adorable"/></li>
  <li><img src="images/img2.jpg" alt="lovely"/></li>
  <li><img src="images/img3.jpg" alt="cuddly"/></li>
</ul>
```

So a list can not only contain text, but other elements as well.

### Adding a link on multiple elements

Links can contain not just text, but images or even a number of elements within.

Let's link some pictures and text to a video. It can be handy when we want the user to get to where we want them without needing to click on text.

Add that underneath the ordered list we defined earlier.

```html
<div>
  <a href="http://www.youtube.com/watch?v=gBjnfgnwXic">
    <img src="images/img4.jpg" alt="cute owl"/>
    <img src="images/img5.jpg" alt="another cute owl"/>
    <br/>
    Watch the video
  </a>
</div>
```

> Click any of the images. Can you get to the link's page?

### ASCII and more formatting

**ASCII** code is a way to represent text in ways that all computers can understand.
[Here](http://htmlandcssbook.com/extras/html-escape-codes/) is a list with codes, their representation and HTML number.

Add a small rhyme to your page, wrapped with quotes using ASCII code.

```html
<div>
  <p>
    <strong>
      <em>
       &#34;A wise old owl sat on an oak;  The more he saw the less he spoke; <br>
       The less he spoke the more he heard; Why aren&#39;t we like that wise old bird?&#34;
      </em>
    </strong>
  </p>
  <small>- nursery rhyme</small>
</div>
```

**small** is another html formatting element you can use.

> Have you noticed how the character `&#34;` renders on the page?

### mailto links `<a>`

Links can also open up a user's email client and share content.
The difference between links and mailto links, is the content defined in the **href** attribute.

```html
<ul>
  <li>
     <a href="mailto:social@codebar.io?subject=I love owls :: Codebar">Email us</a>
  </li>
  <li>
     <a href="mailto:?subject=I love owls :: Codebar">Email a friend</a>
  </li>
</ul>
```

> What happens when you click the first link?

> What happens when you click the second link?

> What happens when you add `&body=Owls are amazing` to the second link?


## Bonus

Add a share on twitter link along with your other sharing links.

```html
<a href="http://twitter.com/home?status=I love owls! via @by_codebar">Share your love of owls on twitter</a>
```

---

This ends our first lesson. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
