---
layout: page
title: HTML & CSS Lesson 2
footer: true
---

## What is CSS?

**CSS** is the language used to style websites.

It defines the visual representation of the content. For example colour, margins, borders, backgrounds, position in the page.

### What does it stand for?

 **C**ascading **S**tyle **S**heets.

### What makes a website

HTML: structure of a website

CSS: presentation

_**CSS** works in conjunction with **HTML**_

### Today we will be focusing on fundamental CSS concepts

We will be styling [this page](https://github.com/codebar/tutorials/blob/master/html/lesson2/example.html) so that it looks [like this example](http://codebar.github.io/tutorials/html/lesson2/example.html).

## But before we start...

> The first tutorial does not prepare you for this exercise. Before you continue, download the provided files.


### Required files

Download the files required to begin working through the tutorial from [here](https://gist.github.com/hundred/7332441/download)(mac/linux) or [here](https://www.dropbox.com/s/zgb6l56sy87knzf/lesson2.zip)(windows)

### What can I do with CSS?

You can change the color, position, dimensions and presentation of different elements

### Anatomy of a CSS element

```css
body {
  color: hotpink;
}
```

**body** selector

**color** property

**hotpink** value

```css
selector {
  property: value;
}
```

A group of properties for the given selector is defined within the curly braces

```css
body {
  color: hotpink;
  font-size: 12px;
}
```

## Getting started

In the head of the html page define a style tag

```html
<head>
  <title>I love owls</title>
  <style type="text/css">

  </style>
</head>
```

Include the styling described below, within the style tag we defined.

## Introductions to selectors

### Selectors

#### Selector: element

Let's set the font that we want our page to use

```css
body {
   font-family: Helvetica, Arial, sans-serif;
}
```

As we have selected the **body** element, this change will apply to everything nested within it, the entire contents of our page.

Let's also remove the bullet from the lists that we have defined

```css
ul {
   list-style: none;
}
```

and change the appearance of the links on our page

```css
a {
   color: #a369d5;
   text-decoration: none;
   border-bottom: 1px dotted #a369d5;
}
```
**color**  defines the color of the text. `#a369d5` is the representation of the color in hex.
A useful resource for figuring out color codes is [http://0to255.com](http://0to255.com).

**text-decoration** specifies the decoration applied to the text. Some other options you can try out are _underline_, _overline_ and _line-through_. As links by default have an underline text decoration applied to them, by setting this to none, we reset that property.

**border-bottom** makes the text appear underlined. Border properties can be merged into one line

`border-bottom: thickness border-style color`

**1px** defines the thickness of the border

**dotted** the style of the line

**#a369d5** the color of the border

#### Selector: class

A class selector selects all elements that use the specified class.

```css
.pictures {
   margin: 10px auto;
   width: 900px;
}
```

**margin** is the area surrounding an element. The above definition is a _shorthand_ version of

```css
margin-top: 10px;
margin-bottom: 10px;
margin-right: auto;
margin-left: auto;
```

What we defined above is
_margin: (top bottom) (left right)_

> You can see the margin of an element by inspecting it and having a look at the computed tab

#### Selector: id

Selects the element with the id logo.

```css
#logo {
   margin: 0 auto 30px;
   width: 200px;
}
```

> There can only be one element with a particular id. If you define multiple elements, only the first one will be selected.

#### Selector: nested elements

Selects all list elements that are nested within a **class** pictures

```css
.pictures li {
   display: inline;
   margin: 3px;
}
```

**display** specifies how the elements are displayed. **li** is a block element. By changing its display property, we make sure that it displays as an inline element.

> Change inline to inline-block, and to block. Can you notice the difference?

## Ways of connecting CSS to HTML

### Embedded CSS

At the beginning of the tutorial we described how to connect the CSS to our page.

```html
<head>
  <title>I love owls</title>
  <style type="text/css">

  </style>
</head>
```

This method of using CSS, by defining it within our HTML page is called **embedded**. The problem with this, is that it cannot be reused across other pages and it also makes it a bit harder to work.


### Linked CSS

A better way to define CSS, is to include it within a separate stylesheet. This is easier to maintain and can be reused across several pages.

To achieve this, let's move our CSS outside of the head of the page and into a new file that we will link through the head.

```html
<head>
  <title>I love owls</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
```

## Cascading

Stylesheets _cascade_ to all elements until they are changed.

First let's reset the margin and border of all the images.

```css
img {
  margin: 0;
  border: 0;
}
```

We can change the styling of some of these images by defining a more specific selector. This will supersede the `img` selector we just defined

```css
.bigimg img {
  margin: 15px 2px;
  width: 439px;
  border: 2px solid #b9b1bf;
}
```

## CSS Properties

So far we have explained some selectors and presented others with more self explanatory names. Knowing every selector, is not an easy task, but don't let this put you off. The internet is your friend. [Here you can find a list of all CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference?redirectlocale=en-US&redirectslug=CSS%2FCSS_Reference)


## Styling our page further

### line-height

Let's extend the body selector so that our page looks a bit less cramped

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  line-height: 1.3;
}
```

### Centering the content of our page

In the HTML page you will notice a div element with the id **main**. Let's use this selector to center that container

```css
#main {
  width: 900px;
  margin: 0 auto 40px;
  padding: 0;
}
```
To achieve centering of a container, we must define its width. If you remove the width property you will notice that it won't be in the center of the page.

We have also used another type of _shorthand_ to define the margin. The long version looks like this

```css
margin-top: 0;
margin-bottom: 40px;
margin-right: auto;
margin-left: auto;
```

**auto** adjusts the left and right margins. If you try making the window of your browser smaller, you can see that the left and right sides adjust automatically, so that **main** remains in the middle of the page.

**padding** is the area around an element but within its border.

>  Don't confuse padding with margin, have a look using an inspector to see how the padding and margin of an element differ.


### Floating elements

```css
.right-box {
  float: right;
}
```

### Using empty elements for styling

Sometimes to make the design of our page look nicer, we might add empty elements. Like `<div id="top-line"></div>`

```css
#top-line {
  width: 100%;
  height: 5px;
  background-color: #2d183d;
  border-bottom: 3px solid #eedffb;
  margin-bottom: 10px;
}
```

Let's also style the bottom of our page in a similar way

```css
#bottom-line {
  width: 100%;
  height: 5px;
  background-color: #2d183d;
  border-top: 3px solid #eedffb;
}
```

### Restyling through element selectors

When we want to ensure that an element's appearance changes consistently through our pages, it's better to use element selectors. That way we can make sure that we don't need to redefine the style and that it applies to all elements of that type.

```css
h1 {
  font-size: 39px;
  color: #2d183d;
  text-align: center;
  border-bottom: 1px solid #f6f4f8;
  border-top: 1px solid #f6f4f8;
  padding: 20px 0;
}

h2 {
  font-size: 28px;
  margin: 15px 0;
  color: #663095;
  padding: 15px 0;
  font-weight: 400;
  text-align: center;
}

h4 {
  color: #6D6A6A;
  font-size: 19px;
  padding: 27px 25px 15px;
}

small {
  color: #6D6A6A;
  font-size: 15px;
  margin: 0 30px 10px;
  text-align: right;
}

ol {
  margin: 14px 0;
}

ol li {
  background-color: #F6F4F8;
  color: #663095;
  font-size: 16px;
  font-weight: 400;
  margin: 10px 30px 10px 40px;
  padding: 6px 20px;
  border-radius: 9px;
}
```

**font-weight** thickness of displayed text

**text-align** horizontal alignment of a text element

### A bit more styling

```css
#the-quote{
  border-bottom: 1px solid #f6f4f8;
  border-top: 1px solid #f6f4f8;
  margin: 40px auto;
  width: 90%;
}

#links {
  margin: 10px 15px 0 0;
}

#links li {
  margin: 0 7px;
  font-size: 18px;
  display: inline;
}

#text-block {
  height: 370px;
}

```

### More cascading selectors

```css
.pictures li img {
  border: 2px solid #b9b1bf;
}

.bigimg img {
  margin: 15px 2px;
  width: 439px;
  border: 2px solid #b9b1bf;
}
```

### Some extra touches

```css
.bigimg{
  display: inline;
}
```

## Advanced and bonus material

### Pseudo classes

A psedo class is a keyword added to a selector that specifies a special state of the element to be selected. [These](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) are the standard pseudo classes.

Let's add the code below to make sure we only apply a margin to the _first li element_ within the pictures class.

```css
.pictures li:first-child {
  margin-left: 5px;
}
```

> What happens when you remove _:first-child_ from your selector?


### Bonus - Resetting styles

You've probably noticed that pages look quite different when loading them in different browsers. To try and avoid these browser inconsistencies a common technique is **CSS resetting**

Let's apply this to the elements used within our page

```css
html, body, div, h1, h2, h3, h4, h5, h6, p, a, img, small, b, i, ol, ul, li {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
}
```

-----

This ends our second lesson. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
