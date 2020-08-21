---
layout: page
title: Groups and transforms
---

## Groups and transforms

### Objectives

In this tutorial we are going to look at:

* Shape groups using the `<g>` element
* Transforms: translate, scale, rotate, skew

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

<svg id="example1" width="200px" height="200px">
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

<svg id="example2" width="200px" height="200px">
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

## Transforms

All SVG elements can take a `transform` attribute. This attribute takes the
form of a list of transform function calls that modify the shape by applying
translations, scaling, rotations or skews to it.

Note that you can also use CSS transforms on SVG elements. CSS transforms are
very similar to the SVG ones and add 3D capabilities so once you are
comfortable with what SVG can do, you can go further with CSS.

### translate

The _translate_ function is of the form `translate(x [y])` and moves the object
horizontally by an amount of _x_ and vertically by an amount of _y_. If _y_ is
not specified, it is assumed to be 0. In the example blelow, the original shape
is shown with an opacity of 0.3.

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
            <g style="opacity: 0.3">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g transform="translate(35 -60)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
        </svg>
    </body>
</html>
```

<svg id="example4" width="200px" height="200px">
    <style>
    #example4 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example4 rect.accent {
        fill: green;
    }
    </style>
    <g style="opacity: 0.3">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g transform="translate(35 -60)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
</svg>

### scale

The _scale_ function is of the form `scale(x [y])` and scales the object
horizontally by an amount of _x_ and vertically by an amount of _y_. If _y_ is
not specified, it is assumed to be the same as _x_.

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
            <g style="opacity: 0.3">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g transform="scale(0.5 0.75)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
        </svg>
    </body>
</html>
```

<svg id="example5" width="200px" height="200px">
    <style>
    #example5 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example5 rect.accent {
        fill: green;
    }
    </style>
    <g style="opacity: 0.3">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g transform="scale(0.5 0.75)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
</svg>

### rotate

The _rotate_ function is of the form `rotate(a [x y])` and rotates the object
by an angle of _a_ degrees around the point specified by _x_ and _y_.
If _x_ and _y_ are not specified, the rotation is done around the origin.

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
            <g style="opacity: 0.3">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g transform="rotate(30 100 100)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
        </svg>
    </body>
</html>
```

<svg id="example6" width="200px" height="200px">
    <style>
    #example6 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example6 rect.accent {
        fill: green;
    }
    </style>
    <g style="opacity: 0.3">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g transform="rotate(30 100 100)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
</svg>

## skewX

The _skewX_ function is of the form `skewX(a)` and skews the object
along the horizontal axis by an angle of _a_ degrees.

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
        <svg width="300px" height="200px">
            <g style="opacity: 0.3">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g transform="skewX(30)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
        </svg>
    </body>
</html>
```

<svg id="example7" width="300px" height="200px">
    <style>
    #example7 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example7 rect.accent {
        fill: green;
    }
    </style>
    <g style="opacity: 0.3">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g transform="skewX(30)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
</svg>

## skewY

The _skewY_ function is of the form `skewY(a)` and skews the object
along the vertical axis by an angle of _a_ degrees.

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
            <g style="opacity: 0.3">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g transform="skewY(-10)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
        </svg>
    </body>
</html>
```

<svg id="example8" width="200px" height="200px">
    <style>
    #example8 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example8 rect.accent {
        fill: green;
    }
    </style>
    <g style="opacity: 0.3">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g transform="skewY(-10)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
</svg>

### Transform chain

You can chain transforms by specifying multiple transformation functions
separated by spaces in the `transform` attribute. They will be applied in
reverse order. The following example rotates the group before translating it.
The intermediary steps are shown with an opacity of 0.3 and the centre of
rotation is shown in blue.

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
        <svg width="300px" height="300px">
            <g style="opacity: 0.3">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g style="opacity: 0.3" transform="rotate(45 100 100)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g transform="translate(100) rotate(45 100 100)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <circle cx="100" cy="100" r="5" stroke="black" stroke-width="1" fill="blue" />
        </svg>
    </body>
</html>
```

<svg id="example9" width="300px" height="300px">
    <style>
    #example9 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example9 rect.accent {
        fill: green;
    }
    </style>
    <g style="opacity: 0.3">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g style="opacity: 0.3" transform="rotate(45 100 100)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g transform="translate(100) rotate(45 100 100)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <circle cx="100" cy="100" r="5" stroke="black" stroke-width="1" fill="blue" />
</svg>

The following example translates the group before rotating it.
The intermediary steps are shown with an opacity of 0.3 and the centre of
rotation is shown in blue.

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
        <svg width="300px" height="300px">
            <g style="opacity: 0.3">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g style="opacity: 0.3" transform="translate(100)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <g transform="rotate(45 100 100) translate(100)">
                <rect x="50" y="50" width="120" height="80" />
                <rect x="150" y="150" width="40" height="40" />
                <rect x="100" y="100" width="60" height="60" class="accent" />
            </g>
            <circle cx="100" cy="100" r="5" stroke="black" stroke-width="1" fill="blue" />
        </svg>
    </body>
</html>
```

<svg id="example10" width="300px" height="300px">
    <style>
    #example10 g {
        stroke: black;
        stroke-width: 3;
        fill: red;
    }
    #example10 rect.accent {
        fill: green;
    }
    </style>
    <g style="opacity: 0.3">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g style="opacity: 0.3" transform="translate(100)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <g transform="rotate(45 100 100) translate(100)">
        <rect x="50" y="50" width="120" height="80" />
        <rect x="150" y="150" width="40" height="40" />
        <rect x="100" y="100" width="60" height="60" class="accent" />
    </g>
    <circle cx="100" cy="100" r="5" stroke="black" stroke-width="1" fill="blue" />
</svg>

-----
This ends our third SVG lesson, we hope you enjoyed it and learnt something.
If you have some spare time how about going back through this tutorial and,
by yourself, make some amendments. If there is something you did not understand
or want to give us some feedback, please [send us an email.](mailto:feedback@codebar.io)

## Further reading

* [Mozilla SVG transform tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform)
* [Mozilla CSS transform documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
