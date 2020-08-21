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
* Text path
* Markers

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
                <linearGradient id="LinearGradient1">
                    <stop offset="5%" stop-color="rgb(255, 105, 180)" />
                    <stop offset="18%" stop-color="red" />
                    <stop offset="31%" stop-color="rgb(255, 142, 0)" />
                    <stop offset="44%" stop-color="yellow" />
                    <stop offset="56%" stop-color="rgb(0, 142, 0)" />
                    <stop offset="69%" stop-color="rgb(0, 192, 192)" />
                    <stop offset="82%" stop-color="rgb(64, 0, 152)" />
                    <stop offset="95%" stop-color="rgb(142, 0, 142)" />
                </linearGradient>
                <linearGradient id="LinearGradient2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color="rgb(91, 206, 250)" />
                    <stop offset="20%" stop-color="rgb(245, 169, 184)" />
                    <stop offset="40%" stop-color="white" />
                    <stop offset="60%" stop-color="white" />
                    <stop offset="80%" stop-color="rgb(245, 169, 184)" />
                    <stop offset="100%" stop-color="rgb(91, 206, 250)" />
                </linearGradient>
                <linearGradient id="LinearGradient3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="20%" stop-color="red" />
                    <stop offset="80%" stop-color="red" stop-opacity="0" />
                </linearGradient>
            </defs>
            <rect x="10" y="10" width="180" height="90" fill="url(#LinearGradient1)" />
            <rect x="10" y="110" width="180" height="90" fill="url(#LinearGradient2)" />
            <circle cx="350" cy="150" r="45" fill="url(#LinearGradient1)" />
            <circle cx="250" cy="50" r="45" fill="url(#LinearGradient2)" />
            <path d="M210,110L240,150L210,190L250,170L290,190L260,150L290,110L250,130Z" fill="url(#LinearGradient2)" />
            <rect x="310" y="10" width="80" height="80" fill="url(#LinearGradient3)" />
        </svg>
    </body>
</html>
```

<svg id="example3" width="400px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <linearGradient id="LinearGradient1">
            <stop offset="5%" stop-color="rgb(255, 105, 180)" />
            <stop offset="18%" stop-color="red" />
            <stop offset="31%" stop-color="rgb(255, 142, 0)" />
            <stop offset="44%" stop-color="yellow" />
            <stop offset="56%" stop-color="rgb(0, 142, 0)" />
            <stop offset="69%" stop-color="rgb(0, 192, 192)" />
            <stop offset="82%" stop-color="rgb(64, 0, 152)" />
            <stop offset="95%" stop-color="rgb(142, 0, 142)" />
        </linearGradient>
        <linearGradient id="LinearGradient2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="rgb(91, 206, 250)" />
            <stop offset="20%" stop-color="rgb(245, 169, 184)" />
            <stop offset="40%" stop-color="white" />
            <stop offset="60%" stop-color="white" />
            <stop offset="80%" stop-color="rgb(245, 169, 184)" />
            <stop offset="100%" stop-color="rgb(91, 206, 250)" />
        </linearGradient>
        <linearGradient id="LinearGradient3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="20%" stop-color="red" />
            <stop offset="80%" stop-color="red" stop-opacity="0" />
        </linearGradient>
    </defs>
    <rect x="10" y="10" width="180" height="80" fill="url(#LinearGradient1)" />
    <rect x="10" y="110" width="180" height="80" fill="url(#LinearGradient2)" />
    <circle cx="350" cy="150" r="45" fill="url(#LinearGradient1)" />
    <circle cx="250" cy="50" r="45" fill="url(#LinearGradient2)" />
    <path d="M210,110L240,150L210,190L250,170L290,190L260,150L290,110L250,130Z" fill="url(#LinearGradient2)" />
    <rect x="310" y="10" width="80" height="80" fill="url(#LinearGradient3)" />
</svg>

### Radial gradients

Radial gradients start from a centre and radiate out. They also have a focal
point. By default, the center is the center of the shape's bounding box
and the focal point is the same point as the center. This can be customised:

* The `cx` and `cy` properties change where the center of the gradient is
  placed as a proportion of width and height of the shape (the default
  of 0.5 is the center);
* The `fx` and `fy` properties specify the focal point of the gradient as a
  proportion of the width and height of the shape;
* The `r` property specifies the total gradient radius as a proportion to the
  size of the shape, which makes it possible to constrain a gradient to part of
  the shape.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="400px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <radialGradient id="RadialGradient1">
                    <stop offset="0%" stop-color="white" />
                    <stop offset="50%" stop-color="rgb(245, 169, 184)" />
                    <stop offset="100%" stop-color="rgb(91, 206, 250)" />
                </radialGradient>
                <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
                    <stop offset="0%" stop-color="white" />
                    <stop offset="100%" stop-color="red" />
                </radialGradient>
                <radialGradient id="RadialGradient3" cx="0.5" cy="0.5" fx="0.25" fy="0.25" r="0.5">
                    <stop offset="0%" stop-color="white" />
                    <stop offset="100%" stop-color="red" />
                </radialGradient>
            </defs>
            <rect x="10" y="10" width="180" height="90" fill="url(#RadialGradient1)" />
            <path d="M10,110L40,150L10,190L50,170L90,190L60,150L90,110L50,130Z" fill="url(#RadialGradient1)" />
            <circle cx="250" cy="100" r="45" fill="url(#RadialGradient2)" />
            <circle cx="350" cy="100" r="45" fill="url(#RadialGradient3)" />
        </svg>
    </body>
</html>
```

<svg id="example4" width="400px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <radialGradient id="RadialGradient1">
            <stop offset="0%" stop-color="white" />
            <stop offset="50%" stop-color="rgb(245, 169, 184)" />
            <stop offset="100%" stop-color="rgb(91, 206, 250)" />
        </radialGradient>
        <radialGradient id="RadialGradient2" cx="0.25" cy="0.25" r="0.25">
            <stop offset="0%" stop-color="white" />
            <stop offset="100%" stop-color="red" />
        </radialGradient>
        <radialGradient id="RadialGradient3" cx="0.5" cy="0.5" fx="0.25" fy="0.25" r="0.5">
            <stop offset="0%" stop-color="white" />
            <stop offset="100%" stop-color="red" />
        </radialGradient>
    </defs>
    <rect x="10" y="10" width="180" height="90" fill="url(#RadialGradient1)" />
    <path d="M10,110L40,150L10,190L50,170L90,190L60,150L90,110L50,130Z" fill="url(#RadialGradient1)" />
    <circle cx="250" cy="100" r="45" fill="url(#RadialGradient2)" />
    <circle cx="350" cy="100" r="45" fill="url(#RadialGradient3)" />
</svg>

## Text path

Text doesn't have to follow a straight path, it can go all curvy with the
`<textPath>` element. For this to work, we need to define a path inside the
`<defs>` tag and tell the text to follow it.


```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <path id="TextPath1" d="M20,100C70,20 130,120 180,100" />
            </defs>
            <text font-size="40px">
                <textPath href="#TextPath1">
                    Curvy text
                </textPath>
            </text>
        </svg>
    </body>
</html>
```

<svg id="example5" width="200px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <path id="TextPath1" d="M20,100C70,20 130,120 180,100" />
    </defs>
    <text font-size="40px">
        <textPath href="#TextPath1">
            Curvy text
        </textPath>
    </text>
</svg>

## Markers

If you plan to create diagrams with SVG, you will want to create arrows at some
point. With what we've learnt so far, you would have to create additional shapes
and position them at the end of lines. There is an easier way to achieve this
result, using the `<marker>` element. A marker is defined inside the `<defs>`
tag and encloses a shape. This shape is then references when drawing a line to
be position on any of the start, mid or end points of the line.

The orientation of the marker is driven by the `orient` attribute, which can
take the values `auto`, `auto-start-reverse` or a number that indicates a fixed
angle. By default, it is set to 0. See the difference between the blue and green
markers on the polyline.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg id="example6" width="400px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <marker id="MarkerArrow" viewBox="0 0 10 10" refX="5" refY="5"
                        markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 0 L 10 5 L 0 10 z" />
                </marker>
                <marker id="MarkerDot" viewBox="0 0 10 10" refX="5" refY="5"
                        markerWidth="5" markerHeight="5">
                    <circle cx="5" cy="5" r="5" fill="red" />
                </marker>
                <marker id="MarkerSquare1" viewBox="0 0 10 10" refX="5" refY="5"
                        markerWidth="5" markerHeight="5" orient="auto">
                    <rect x="0" y="0" width="10" height="10" fill="blue" />
                </marker>
                <marker id="MarkerSquare2" viewBox="0 0 10 10" refX="5" refY="5"
                        markerWidth="5" markerHeight="5" orient="45">
                    <rect x="0" y="0" width="10" height="10" fill="green" />
                </marker>
            </defs>
            <line x1="10" y1="50" x2="190" y2="50" stroke="black" stroke-width="2" marker-end="url(#MarkerArrow)" />
            <line x1="10" y1="100" x2="190" y2="100" stroke="black" stroke-width="2" marker-start="url(#MarkerArrow)" />
            <line x1="10" y1="150" x2="190" y2="150" stroke="black" stroke-width="2"
                marker-start="url(#MarkerArrow)"  marker-end="url(#MarkerArrow)" />
            <polyline points="210,190 240,80 275,150 320,60 355,100 390,10"
                fill="none" stroke="grey" stroke-width="3"
                marker-start="url(#MarkerSquare1)" marker-mid="url(#MarkerDot)" marker-end="url(#MarkerSquare2)" />
        </svg>
    </body>
</html>
```

<svg id="example6" width="400px" height="200px" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
        <marker id="MarkerArrow" viewBox="0 0 10 10" refX="5" refY="5"
                markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
        </marker>
        <marker id="MarkerDot" viewBox="0 0 10 10" refX="5" refY="5"
                markerWidth="5" markerHeight="5">
            <circle cx="5" cy="5" r="5" fill="red" />
        </marker>
        <marker id="MarkerSquare1" viewBox="0 0 10 10" refX="5" refY="5"
                markerWidth="5" markerHeight="5" orient="auto">
            <rect x="0" y="0" width="10" height="10" fill="blue" />
        </marker>
        <marker id="MarkerSquare2" viewBox="0 0 10 10" refX="5" refY="5"
                markerWidth="5" markerHeight="5" orient="45">
            <rect x="0" y="0" width="10" height="10" fill="green" />
        </marker>
    </defs>
    <line x1="10" y1="50" x2="190" y2="50" stroke="black" stroke-width="2" marker-end="url(#MarkerArrow)" />
    <line x1="10" y1="100" x2="190" y2="100" stroke="black" stroke-width="2" marker-start="url(#MarkerArrow)" />
    <line x1="10" y1="150" x2="190" y2="150" stroke="black" stroke-width="2"
        marker-start="url(#MarkerArrow)"  marker-end="url(#MarkerArrow)" />
    <polyline points="210,190 240,80 275,150 320,60 355,100 390,10"
        fill="none" stroke="grey" stroke-width="3"
        marker-start="url(#MarkerSquare1)" marker-mid="url(#MarkerDot)" marker-end="url(#MarkerSquare2)" />
</svg>

## Beyond the tutorials

This tutorial goes through the basics of creating images with SVG. If you want
to go beyond this, here are a couple of articles that present advanced topics:
- [Accessible SVGs](https://css-tricks.com/accessible-svgs/): one of the key
  advantage of inline SVG is that the tags that form the image are part of the
  main Document Object Model and can be made accessible to technologies like
  screen readers.
- [How to Scale SVG](https://css-tricks.com/scale-svg/): all examples in the
  tutorial use hard-coded width and height but it doesn't have to be that way,
  SVG is designed to scale and this article will show you how.

-----
This ends our fourth SVG lesson, we hope you enjoyed it and learnt something.
If you have some spare time how about going back through this tutorial and,
by yourself, make some amendments. If there is something you did not understand
or want to give us some feedback, please [send us an email.](mailto:feedback@codebar.io)

## Further reading

* [Mozilla gradient tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Gradients)
* [Mozilla `textPath` documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/textPath)
* [Mozilla `marker` documentation](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/marker)
