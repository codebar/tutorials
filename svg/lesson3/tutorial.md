---
layout: page
title: Groups and transforms
---

## Groups and transforms

### Objectives

In this tutorial we are going to look at:

* Shape grous using the `<g>` element
* Transforms: translations, rotations, stretch

### Goal

By the end of this tutorial, you'll have mastered how to group shapes together
and apply properties to those groups; and how to apply transformations to
shapes or groups of shapes.

## Groups

In the first two lessons, you learnt how to create simple and complex shapes.
Those shapes can be grouped and you can style and manipulate the group as if it
was a single shape. We will learn how to do this in this lesson.

Groups are created using the `<g>` tag with individual shapes or other `<g>`
tags inside. It works very much like the HTML `<div>` element in the sense that
on its own it doesn't have any effect on the result:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <g>
                <rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
                <rect x="150" y="150" width="40" height="40" stroke="black" stroke-width="3" fill="red" />
                <rect x="100" y="100" width="60" height="60" stroke="black" stroke-width="3" fill="green" />
            </g>
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <g>
        <rect x="50" y="50" width="120" height="80" stroke="black" stroke-width="3" fill="red" />
        <rect x="150" y="150" width="40" height="40" stroke="black" stroke-width="3" fill="red" />
        <rect x="100" y="100" width="60" height="60" stroke="black" stroke-width="3" fill="green" />
    </g>
</svg>

What it allows you to do though is to define style attributes for the whole
group that can be overriden for individual shapes. For instance, in the
example below, the `stroke`, `stroke-width` and `fill` properties are now
defined on the group rather than the individual rectangles and the third
rectangle overrides the `fill` property:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <g stroke="black" stroke-width="3" fill="red">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" fill="green" />
            </g>
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <g stroke="black" stroke-width="3" fill="red">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" fill="green" />
    </g>
</svg>

What can be done with SVG attributes can also be done with CSS:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
        <style>
        g {
            stroke: black;
            stroke-width: 3;
            fill: red;
        }
        rect.accent {
            fill: green;
        }
        </style>
    </head>
    <body>
        <svg width="200px" height="200px">
            <g>
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
        </svg>
    </body>
</html>
```

<svg id="example3" width="200px" height="200px">
    <style>
    #example3 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example3 rect.accent {
        fill: green;
    }
    </style>
    <g>
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
</svg>


-----
This ends our third SVG lesson, we hope you enjoyed it and learnt something.
If you have some spare time how about going back through this tutorial and,
by yourself, make some amendments. If there is something you did not understand
or want to give us some feedback, please [send us an email.](mailto:feedback@codebar.io)

## Further reading


