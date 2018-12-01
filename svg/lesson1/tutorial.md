---
layout: page
title: Introduction to SVG
---

## Introduction to SVG

### Objectives

In this tutorial we are going to look at:

* What is SVG?
* What tools do you need to work with SVG?
* SVG structure
* Basic shapes
* Ordering
* Basic styling with CSS

### Goal

By the end of this tutorial, you'll have built an abstract masterpiece
**embed link to SVG outcome here**

## What is SVG?

**SVG** stands for **S**calable **V**ector **G**raphics and is a markup language
to describe images using a set of drawing instructions. **Scalable** means that
you can scale a SVG image to any size, it will never look blocky. **Vector** means
that it is made of a set of drawing instructions that defines the shape and area
of each item in the image, which in turns means that it can result in very large
files for complex images.

For example, the two images below show the same image in SVG and PNG formats
set at a width of 200 pixels. Because the PNG has a natural size of 50
pixels it looks blocky when enlarged.

<img src="./images/owl-silhouette.svg" alt="Little owl silhouette, SVG" width="200px">
<img src="./images/owl-silhouette.png" alt="Little owl silhouette, PNG" width="200px">

## Tools to work with SVG

SVG images are made of drawing instructions that use a markup language that work
in a very similar way to HTML, with a different set of tags. Because of this,
all modern browsers support SVG out of the box and you can use the same tools
that you use with HTML to author and debug SVG images. You can even style SVG
images with CSS, interact with them using JavaScript or generate them
programmatically to create data visualisations, such as what a tool like
[d3.js](https://d3js.org/) can do.

If you use SVG to create complex static images, you can also use vector graphic
programs:

* [Inkscape](https://inkscape.org/) is an open source vector drawing programme
  that uses SVG as its native data format.
* [Adobe Illustrator](https://www.adobe.com/uk/products/illustrator.html) is the
  vector cousin of Photoshop and has a great SVG export function.

## SVG Structure

SVG images use tags just like [HTML elements](../../html/lesson1/tutorial.html#html-elements).
The top-level tag is the `<svg>` tag. Mandatory attributes on this tag depend on
whether your image is a standalong image, like the owl image above, or embedded
in an HTML document.

### Standalone image

A standalone SVG image is a file with the `.svg` extension that contains a
single `<svg>` tag. The file needs to start with an XML processing instruction
and the `xmlns` and `version` attributes of the `<svg>` tag are mandatory:

```xml
<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.0">
</svg>
```

### Embedded in an HTML document

When embedding your images in an HTML document, you should not include the
XML processing instruction and the `xmlns` and `version` attributes are optional.
You should provide at least a `width` attribute otherwise the image will attempt
to take as much space as possible, which is usually not what you want. Initially
we will also provide a `height` argument to ensure our image is properly sized.
We will see advanced sizing techniques in later lessons.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
        </svg>
    </body>
</html>
```

For the remainder of this tutorial, we will assume that we embed our SVG images
directly into HTML documents and that they all have a size of 200x200 pixels.

## Basic shapes

### Lines

Now that we're all set, let's start drawing shapes with the simplest of them
all: a line. Create a new HTML document with a `<line>` tag inside the `<svg>`
tag. The `<line>` tag takes 4 positional attributes:

* `x1` and `y1` define the coordinates of the start point of the line
* `x2` and `y2` define the coordinates of the end point of the line

This is enough to draw a line but it will be white so we will also provide a
`stroke` attribute to make the line black and a `stroke-width` attribute to
fatten it a bit. Note that `<line>` is a self-closing tag and requires `/>` at
the end.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="3" />
        </svg>
    </body>
</html>
```

You should then see something like this:

<svg width="200px" height="200px">
    <line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="3" />
</svg>

The first thing to note is that this line goes from top left to bottom right of
the SVG area. This is because _x_ values increase from left to right while _y_
values increase from top to bottom, as shown when we highlight the corners of
the area:

<svg width="200px" height="200px">
    <line x1="0" y1="0" x2="200" y2="200" stroke="black" stroke-width="3" />
    <circle cx="0" cy="0" r="6" fill="red" />
    <text x="10" y="12" fill="red">0,0</text>
    <circle cx="200" cy="0" r="6" fill="red" />
    <text x="155" y="12" fill="red">200,0</text>
    <circle cx="0" cy="200" r="6" fill="red" />
    <text x="10" y="198" fill="red">0,200</text>
    <circle cx="200" cy="200" r="6" fill="red" />
    <text x="140" y="198" fill="red">200,200</text>
</svg>

The second thing to note is that the positional attributes take a simple number
without any unit. Those numbers are coordinates on the rectangle covered by the
SVG area that correspond to pixel distances from the top left corner. This
behaviour can be overriden and we will see how to do that in an advanced lesson.

### Rectangles

The next shape is the rectangle, which is drawn with the `<rect>` tag. This tag
takes 2 positional attributes and 2 size attributes:

* `x` and `y` specify the coordinates of the top left corner of the rectangle
* `width` and `height` specify the size of the rectangle

In this example, we will introduce a third styling attribute, the `fill` attribute,
to specify the colour inside the rectangle. Replace the `<line>` tag of the
previous example with:

```html
<rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
```

Which should show this:

<svg width="200px" height="200px">
    <rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
</svg>

### Circles

Let's round up shapes and bring in circles, using the slightly obvious `<circle>`
tag. This tag takes 2 positional parameters and 1 size parameter:

* `cx` and `cy` specify the coordinates of the center of the circle
* `r` specifies the radius of the circle

Replace the previous `<rect>` tag with this:

```html
<circle cx="100" cy="100" r="90" stroke="black" stroke-width="3" fill="green" />
```

Considering we specified a fill colour, this is technically a disc:

<svg width="200px" height="200px">
    <circle cx="100" cy="100" r="90" stroke="black" stroke-width="3" fill="green" />
</svg>

### Ellipses

An ellipse is a squished circle with two radii and is drawn using the `<ellipse>`
tag:

* `cx` and `cy` specify the coordinates of the center of the ellipse
* `rx` and `ry` specify the horizontal and vertical radii

Replace the previous `<circle>` tag with this:

```html
<ellipse cx="100" cy="100" rx="90" ry="60" stroke="black" stroke-width="3" fill="blue" />
```

Which should show this:

<svg width="200px" height="200px">
    <ellipse cx="100" cy="100" rx="90" ry="60" stroke="black" stroke-width="3" fill="blue" />
</svg>

### Polygons

Polygons are a bit more complex to construct. They are drawn with the `<polygon>`
tag and take a single positional attributes, `points`, that describes a list of
coordinates grouped in pairs. Coordinates of the same pair are separated by a
comma and pairs are separated by spaces.

Replace the previous `<ellipse>` tag with this:

```html
<polygon points="25,50 175,50 175,100 75,100 75,150 25,150" stroke="black" stroke-width="3" fill="purple" />
```

Which is the first step to create a game of Tetris:

<svg width="200px" height="200px">
    <polygon points="25,50 175,50 175,100 75,100 75,150 25,150" stroke="black" stroke-width="3" fill="purple" />
</svg>

### Text

The last shape is the `<text>` tag that allows you to draw text fragments. It
takes two `x` and `y` positional attributes and the content of the tag is the
text to display:

```html
<text x="50" y="50" font-size="30px" fill="black">Hello SVG!</text>
```

<svg width="200px" height="200px">
    <text x="50" y="50" font-size="30px" fill="black">Hello SVG!</text>
</svg>

Note that the property that gives the text its colour is the `fill` property.
You can also set the `stroke` property independently to outline the text:

```html
<text x="50" y="50" font-size="30px" fill="yellow" stroke="black">Hello SVG!</text>
```

<svg width="200px" height="200px">
    <text x="50" y="50" font-size="30px" fill="yellow" stroke="black">Hello SVG!</text>
</svg>

The `<text>` tag is designed to position independent pieces of text with no
concept of layout. In particular, text will not wrap when it reaches the
boundary of the SVG area, it will just be clipped:

<svg width="200px" height="200px">
    <text x="30" y="50" font-size="30px" fill="yellow" stroke="black">Good day SVG!</text>
</svg>

You can position related pieces of text next to each other using `<tspan>` tags
inside a parent `<text>` tag:

```html
<text x="50" y="50" font-size="30px" fill="yellow" stroke="black">Good day
    <tspan x="50" dy="30">SVG!</tspan></text>
```

<svg width="200px" height="200px">
    <text x="50" y="50" font-size="30px" fill="yellow" stroke="black">Good day
        <tspan x="50" dy="30">SVG!</tspan></text>
</svg>


## Ordering

SVG has a very simple ordering logic: shapes are drawn in the order they are
specified in the file. There is no way to override which shape is in front of
which one. This means that if you want a green rectangle on top of a red rectangle,
you need to specify the red rectangle first:

```html
<svg width="200px" height="200px">
    <rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
    <rect x="100" y="100" width="80" height="90" stroke="black" stroke-width="3" fill="green" />
</svg>
```

<svg width="200px" height="200px">
    <rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
    <rect x="100" y="100" width="80" height="90" stroke="black" stroke-width="3" fill="green" />
</svg>

If you want the green rectangle to be drawn under the red rectangle, it has to
come first:

```html
<svg width="200px" height="200px">
    <rect x="100" y="100" width="80" height="90" stroke="black" stroke-width="3" fill="green" />
    <rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
</svg>
```

<svg width="200px" height="200px">
    <rect x="100" y="100" width="80" height="90" stroke="black" stroke-width="3" fill="green" />
    <rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
</svg>

## Styling SVG with CSS

### Stroke and fill

You can style SVG with CSS the same way as you style HTML, bearing in mind that
the tag and property names are different.

The most common attibutes to style are `stroke` and `fill`. As with HTML, you
can use `class` or `id` to anchor CSS rules and pseudo-classes like `:hover`
do what you expect:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
        <style>
        circle {
            fill: orange;
            stroke: black;
            stroke-width: 2;
        }
        circle.green {
            fill: green;
            stroke-width: 5;
        }
        #red {
            fill: red;
        }
        :hover {
            fill: purple;
        }
        </style>
    </head>
    <body>
        <svg width="200px" height="200px">
            <circle cx="20" cy="20" r="30" />
            <circle class="green" cx="50" cy="30" r="20" />
            <circle cx="130" cy="100" r="40" />
            <circle cx="20" cy="100" r="30" />
            <circle class="green" cx="80" cy="170" r="20" />
            <circle id="red" cx="20" cy="190" r="30" />
        </svg>
    </body>
</html>
```

This results in the following drawing. Hover your mouse over the orange circles
to see their colour change:

<svg id="style1" width="200px" height="200px">
    <style>
    #style1 circle {
        fill: orange;
        stroke: black;
        stroke-width: 2;
    }
    #style1 circle.green {
        fill: green;
        stroke-width: 5;
    }
    #style1 #red {
        fill: red;
    }
    #style1 :hover {
        fill: purple;
    }
    </style>
    <circle cx="20" cy="20" r="30" />
    <circle class="green" cx="50" cy="30" r="20" />
    <circle cx="130" cy="100" r="40" />
    <circle cx="20" cy="100" r="30" />
    <circle class="green" cx="80" cy="170" r="20" />
    <circle id="red" cx="180" cy="190" r="30" />
</svg>

### Styling text

Text can be styled the same as any other shape and it has a few extra properties,
in particular the same font related properties as HTML text as well as the
`text-anchor` property:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
        <style>
        line {
            stroke: #ccc;
        }
        circle {
            fill: red;
        }
        text {
            fill: black;
            text-anchor: middle;
            font-family: sans-serif;
        }
        text.start {
            fill: green;
            text-anchor: start;
            font-style: italic;
            font-family: serif;
        }
        text.end {
            fill: blue;
            text-anchor: end;
            font-weight: bold;
        }
        </style>
    </head>
    <body>
        <svg width="200px" height="200px">
            <line x1="100" y1="0" x2="100" y2="200" />
            <circle cx="100" cy="50" r="5" />
            <text class="start" x="100" y="50">Start</text>
            <circle cx="100" cy="100" r="5" />
            <text class="middle" x="100" y="100">Middle</text>
            <circle cx="100" cy="150" r="5" />
            <text class="end" x="150" y="100">End</text>
        </svg>
    </body>
</html>
```

<svg id="style2" width="200px" height="200px">
    <style>
    #style2 line {
        stroke: #ccc;
    }
    #style2 circle {
        fill: red;
        stroke: none;
    }
    #style2 text {
        fill: black;
        text-anchor: middle;
        font-size: 2em;
        font-family: sans-serif;
    }
    #style2 text.start {
        fill: green;
        text-anchor: start;
        font-style: italic;
        font-family: serif;
    }
    #style2 text.end {
        fill: blue;
        text-anchor: end;
        font-weight: bold;
    }
    </style>
    <line x1="100" y1="0" x2="100" y2="200" />
    <line x1="50" y1="50" x2="150" y2="50" />
    <circle cx="100" cy="50" r="5" />
    <text class="start" x="100" y="50">Start</text>
    <line x1="50" y1="100" x2="150" y2="100" />
    <circle cx="100" cy="100" r="5" />
    <text class="middle" x="100" y="100">Middle</text>
    <line x1="50" y1="150" x2="150" y2="150" />
    <circle cx="100" cy="150" r="5" />
    <text class="end" x="100" y="150">End</text>
</svg>

### Mixing HTML and SVG CSS rules

You can mix HTML and SVG CSS rules as you want. However, as the SVG is part of
the same DOM as the HTMl document and if you have generic rules that apply to
classes that you use both in HTML and SVG, they will apply to both.

If you use relative font size units like `em`, those will be calculated based
on the HTML element inside which the `<svg>` element is located. This is very
useful to ensure that SVG text has a size that makes sense compared to its
surroundings but can also lead to unexpected results.

-----
This ends our first SVG lesson, we hope you enjoyed it and learnt something.
If you have some spare time how about going back through this tutorial and,
by yourself, make some amendments. If there is something you did not understand
or want to give us some feedback, please [send us an email.](mailto:feedback@codebar.io)

## Further reading

* One of the best experts on SVG is [Sara Souiedan](https://www.sarasoueidan.com/)
  and she has [great SVG articles on her blog](https://www.sarasoueidan.com/tags/svg/)
* [Mozilla SVG tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial)
