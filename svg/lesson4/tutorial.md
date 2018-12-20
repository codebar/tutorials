---
layout: page
title: Advanced SVG
---

## Advanced SVG

### Objectives

In this tutorial we are going to look at advanced SVG techniques:

* Embedded Images
* Links
* Colour gradients
* Fancy text styling
* Markers
* Animations

### Goal

By the end of this tutorial, you'll have mastered advanced SVG concepts.

## Embedded Images

SVG allows you to embed other images in your vector graphics. In particular,
you can embed any type of images that your browser support such as very important
owl photographs. You do that using the `<image>` tag. The key attribute for this
tag is the `xlink:href` attribute that specifies where to find the embedded
image. When doing this, you may add an `xmlns:xlink` attribute to the
top level `<svg>` tag to ensure that the browser recognises the `xlink:` prefix.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="280px" height="250px" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="10" y="10" width="260" height="180" fill="yellow" stroke="black" stroke-width="2" />
            <image xlink:href="./images/owl-with-attitude.jpg" x="20" y="20" height="160px" width="240px"/>
            <text x="140" y="230" style="text-anchor: middle; fill: red; font-size: 24px;">Don't mess with this owl!</text>
        </svg>
    </body>
</html>
```

<svg id="example1" width="280px" height="250px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="10" y="10" width="260" height="180" fill="yellow" stroke="black" stroke-width="2" />
    <image xlink:href="./images/owl-with-attitude.jpg" x="20" y="20" height="160px" width="240px"/>
    <text x="140" y="230" style="text-anchor: middle; fill: red; font-size: 24px;">Don't mess with this owl!</text>
</svg>

## Links

SVG supports the `<a>` tag in the same way as HTML. You can include any other
tag in the `<a>` tag, which means that any shape or group of shapes can become
a link. Links are not styled by default so it is worth adding a bit of CSS to
do so. With this, we can add a link back to the source of the image.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
        <style>
        svg a {
            cursor: pointer;
        }
        svg a text {
            fill: blue;
            text-decoration: underline;
        }
        svg a:hover, svg a:active {
            outline: dotted 1px blue;
        }
        </style>
    </head>
    <body>
        <svg width="280px" height="250px" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect x="10" y="10" width="260" height="180" fill="yellow" stroke="black" stroke-width="2" />
            <image xlink:href="./images/owl-with-attitude.jpg" x="20" y="20" height="160px" width="240px"/>
            <text x="140" y="230" style="text-anchor: middle; fill: red; font-size: 24px;">Don't mess with this owl!</text>
        </svg>
    </body>
</html>
```

<svg id="example2" width="280px" height="250px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <style>
    svg#example2 a {
        cursor: pointer;
    }
    svg#example2 a text {
        fill: blue;
        text-decoration: underline;
    }
    svg#example2 a:hover, svg#example2 a:active {
        outline: dotted 1px blue;
    }
    </style>
    <a href="https://www.flickr.com/photos/48509939@N07/5927758528">
        <rect x="10" y="10" width="260" height="180" fill="yellow" stroke="black" stroke-width="2" />
        <image xlink:href="./images/owl-with-attitude.jpg" x="20" y="20" height="160px" width="240px"/>
        <text x="140" y="230" style="text-anchor: middle; fill: red; font-size: 24px;">Don't mess with this owl!</text>
    </a>
</svg>

## Colour gradients

Why keep to boring plain colours when you can have gradients? SVG gradients
come in two categories:

* linear gradients
* radial gradients

All gradients are defined inside a `<defs>` tag at the beginning of the SVG
file and can be reused multiple times using the `url` function in the `fill`
attribute of the shapes that use them.

### Linear gradients

Linear gradients are defined using the `<linearGradient>` element and contain
a number of `<stop>` elements that include an offset and can specify a colour
using the `stop-color` attribute and an opacity using the `stop-opacity`
attribute. By default, gradients are horizontal. This behaviour can be
modified using the `x1`, `y1`, `x2` and `y2` attributes:

* a value of 0 for `x1` or `x2` represents the left side of the shape, while
  a value of 1 represents the right side of the shape;
* a value of 0 for `y1` or `y2` represents the top side of the shape, while
  a value of 1 represents the bottom side of the shape.

To draw a vertical gradient, set `x2` to 0 and `y2` to 1. To draw a diagonal
gradient, set `x2` and `y2` to 1.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="400px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="Gradient1">
                    <stop offset="5%" stop-color="rgb(255, 105, 180)" />
                    <stop offset="18%" stop-color="red" />
                    <stop offset="31%" stop-color="rgb(255, 142, 0)" />
                    <stop offset="44%" stop-color="yellow" />
                    <stop offset="56%" stop-color="rgb(0, 142, 0)" />
                    <stop offset="69%" stop-color="rgb(0, 192, 192)" />
                    <stop offset="82%" stop-color="rgb(64, 0, 152)" />
                    <stop offset="95%" stop-color="rgb(142, 0, 142)" />
                </linearGradient>
                <linearGradient id="Gradient2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="rgb(91, 206, 250)" />
                    <stop offset="20%" stop-color="rgb(245, 169, 184)" />
                    <stop offset="40%" stop-color="white" />
                    <stop offset="60%" stop-color="white" />
                    <stop offset="80%" stop-color="rgb(245, 169, 184)" />
                    <stop offset="100%" stop-color="rgb(91, 206, 250)" />
                </linearGradient>
                <linearGradient id="Gradient3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="20%" stop-color="red" />
                    <stop offset="80%" stop-color="red" stop-opacity="0" />
                </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="90" fill="url(#Gradient1)" />
            <rect x="10" y="110" width="180" height="90" fill="url(#Gradient2)" />
            <circle cx="350" cy="150" r="45" fill="url(#Gradient1)" />
            <circle cx="250" cy="50" r="45" fill="url(#Gradient2)" />
            <path d="M210,110L240,150L210,190L250,170L290,190L260,150L290,110L250,130Z" fill="url(#Gradient2)" />
            <rect x="310" y="10" width="80" height="80" fill="url(#Gradient3)" />
        </svg>
    </body>
</html>
```

<svg id="example3" width="400px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="Gradient1">
            <stop offset="5%" stop-color="rgb(255, 105, 180)" />
            <stop offset="18%" stop-color="red" />
            <stop offset="31%" stop-color="rgb(255, 142, 0)" />
            <stop offset="44%" stop-color="yellow" />
            <stop offset="56%" stop-color="rgb(0, 142, 0)" />
            <stop offset="69%" stop-color="rgb(0, 192, 192)" />
            <stop offset="82%" stop-color="rgb(64, 0, 152)" />
            <stop offset="95%" stop-color="rgb(142, 0, 142)" />
        </linearGradient>
        <linearGradient id="Gradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgb(91, 206, 250)" />
            <stop offset="20%" stop-color="rgb(245, 169, 184)" />
            <stop offset="40%" stop-color="white" />
            <stop offset="60%" stop-color="white" />
            <stop offset="80%" stop-color="rgb(245, 169, 184)" />
            <stop offset="100%" stop-color="rgb(91, 206, 250)" />
        </linearGradient>
        <linearGradient id="Gradient3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="20%" stop-color="red" />
            <stop offset="80%" stop-color="red" stop-opacity="0" />
        </linearGradient>
    </defs>
    <rect x="10" y="10" width="180" height="80" fill="url(#Gradient1)" />
    <rect x="10" y="110" width="180" height="80" fill="url(#Gradient2)" />
    <circle cx="350" cy="150" r="45" fill="url(#Gradient1)" />
    <circle cx="250" cy="50" r="45" fill="url(#Gradient2)" />
    <path d="M210,110L240,150L210,190L250,170L290,190L260,150L290,110L250,130Z" fill="url(#Gradient2)" />
    <rect x="310" y="10" width="80" height="80" fill="url(#Gradient3)" />
</svg>

### Radial gradients


-----
This ends our fourth SVG lesson, we hope you enjoyed it and learnt something.
If you have some spare time how about going back through this tutorial and,
by yourself, make some amendments. If there is something you did not understand
or want to give us some feedback, please [send us an email.](mailto:feedback@codebar.io)

## Further reading

* [Mozilla gradient tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients)