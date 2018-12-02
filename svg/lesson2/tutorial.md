---
layout: page
title: Path and complex shapes
---

## Path and complex shapes

### Objectives

In this tutorial we are going to look at:

* Complex shapes using the `<path>` element
* Fill rules and shapes with holes

### Goal

By the end of this tutorial, you'll have mastered how to draw complex shapes,
including discontinuous shapes and shapes with holes.

## Complex shapes

In the previous lesson, we introduced basic lines and shapes. There's only so
much you can do with rectangles and circles so we are going to have a look at
the `<path>` element. This element can do everything we did in the previous
lesson and a lot more. It is so versatile we are dedicating a whole lesson to
it. So buckle up, we're off to draw amazing shapes.

### Lines

The `<path>` element draws an open or closed line by following a shape definition
specified in its `d` attribute. The shape definition is a series of instructions.
Each instruction is composed of one letter followed by coordinates. The letters
are case sensitive: an uppercase letter indicates that the coordinates that
follow are absolute while a lowercase letter indicates that they are relative.
This is all a bit complicated so let's work it all out with an example. In this
example, we will introduce the following commands:

* **M**: move to the indicated coordinates
* **L**: draw a straight line
* **H**: draw a horizontal line
* **V**: draw a vertical line

Path definitions tend to start with a **M** command to move to the starting point
of the line. This command if of the form `M x y` where `x` and `y` are the
coordinates of the point to move to.

If we just move to a point on the drawing area and don't do anything, we won't
see much so let's add a line to this. This is what the **L** instruction is for:
it is of the form `L x y` and will draw a straight line from the current point
to the point with coordinates `x` and `y`. So the instruction `M 150 100 L 100 150`
will first move to the position _(150,100)_ and then draw a straight line from
there to _(100,150)_:


```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 150 100 L 100 150" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

You should then see a diagonal line:

<svg width="200px" height="200px">
    <path d="M 150 100 L 100 150" stroke="black" stroke-width="3" fill="none" />
</svg>

The **L** instruction has a couple of shorthands:

* **H** is of the form `H x` and will draw a horizontal line from
  the current position to a position that has `x` as a horizontal coordinate
  and the same vertical coordinate as the last point, so if the current
  position is _(100,150)_, adding the instruction `H 50` will draw a line from
  _(100,150)_ to _(50,150)_.
* **V** is of the form `V y` and will draw a vertical line from
  the current position to a position that has the same horizontal coordinate
  as the last point and `y` as the vertical coordinate, so if the current
  position is _(50,150)_, adding the instruction `V 50` will draw a line from
  _(50,150)_ to _(50,50)_.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 150 100 L 100 150 H 50 V 50 H 100" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

This should result in a nearly closed arrow shape:

<svg width="200px" height="200px">
    <path d="M 150 100 L 100 150 H 50 V 50 H 100" stroke="black" stroke-width="3" fill="none" />
</svg>

We can close this shape by adding a **Z** instruction at the end. We can also
provide a `fill` colour:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 150 100 L 100 150 H 50 V 50 H 100 Z" stroke="black" stroke-width="3" fill="yellow" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 150 100 L 100 150 H 50 V 50 H 100 Z" stroke="black" stroke-width="3" fill="yellow" />
</svg>

Up until now, we've used uppercase instruction letters which resulted in absolute
coordinates being used. If we replace those with lowercase letters, all numbers
are taken as being relative to the final coordinate of the last instruction.
The initial instruction is always relative to the origin, _(0,0)_.
The **Z** instruction can be written uppercase or lowercase. So if we change the
previous example to be relative instructions, we get this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 150 100 l -50 -50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 150 100 l -50 -50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
</svg>

On the one hand, relative coordinates are more difficult to use but on the other
hand, they also allow you to position shapes in different places with minimal
changes to the code. For example, if we draw two of our relative arrows with
different starting points, we get this:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 125 100 l -50 -50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
            <path d="M 175 125 l -50 -50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="orange" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 125 100 l -50 -50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
    <path d="M 175 125 l -50 -50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="orange" />
</svg>

For the remainder of this lesson, we will use absolute coordinates as they are
easier to reason with, just be aware that the `d` attribute is case sensitive
and that using lowercase changes the way coordinates are handled.



-----
This ends our second SVG lesson, we hope you enjoyed it and learnt something.
If you have some spare time how about going back through this tutorial and,
by yourself, make some amendments. If there is something you did not understand
or want to give us some feedback, please [send us an email.](mailto:feedback@codebar.io)

## Further reading

* [Mozilla SVG path tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
