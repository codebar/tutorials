---
layout: page
title: Path and complex shapes
---

## Path and complex shapes

### Objectives

In this tutorial we are going to look at:

* Complex shapes using the `<path>` element
* Disjoint shapes
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
of the line. This command if of the form `M x,y` where `x` and `y` are the
coordinates of the point to move to.

If we just move to a point on the drawing area and don't do anything, we won't
see much so let's add a line to this. This is what the **L** instruction is for:
it is of the form `L x,y` and will draw a straight line from the current point
to the point with coordinates `x` and `y`. So the instruction `M 150,100 L 100,150`
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
            <path d="M 150,100 L 100,150" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

You should then see a diagonal line:

<svg width="200px" height="200px">
    <path d="M 150,100 L 100,150" stroke="black" stroke-width="3" fill="none" />
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
            <path d="M 150,100 L 100,150 H 50 V 50 H 100" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

This should result in a nearly closed arrow shape:

<svg width="200px" height="200px">
    <path d="M 150,100 L 100,150 H 50 V 50 H 100" stroke="black" stroke-width="3" fill="none" />
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
            <path d="M 150,100 L 100,150 H 50 V 50 H 100 Z" stroke="black" stroke-width="3" fill="yellow" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 150,100 L 100,150 H 50 V 50 H 100 Z" stroke="black" stroke-width="3" fill="yellow" />
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
            <path d="M 150,100 l -50,-50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 150,100 l -50,-50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
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
            <path d="M 125,100 l -50,-50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
            <path d="M 175,125 l -50,-50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="orange" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 125,100 l -50,-50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="yellow" />
    <path d="M 175,125 l -50,-50 h -50 v 100 h 50 z" stroke="black" stroke-width="3" fill="orange" />
</svg>

For the remainder of this lesson, we will use absolute coordinates as they are
easier to reason with, just be aware that the `d` attribute is case sensitive
and that using lowercase changes the way coordinates are handled.

### Bézier curves

Bézier curves are a type of curve that is used extensively by vector graphic
software because they are very easy for a computer to draw while being able to
define very complex shapes. A Bézier curve joins a start point and an end point
using a line that is defined by a number of control points. A Bézier curve with
no control point is simply a straight line between the two points. SVG paths
support 3 specific cases of Bézier curves:

* Linear Bézier curves, i.e. straight lines, we know all about those;
* Quadratic Bézier curves that use one control point in addition to the start
  and end points;
* Cubic Bézier curves that use two control points in addition to the start and
  end points.

#### Quadratic curves

Quadratic Bézier curves are drawn using a start point (P<sub>0</sub>), a control
point (P<sub>1</sub>) and an end point (P<sub>2</sub>). Calculating the formula
below for values of _t_ between 0 ad 1 produces the points on the curve, B(_t_):

B(_t_) = (1−_t_)<sup>2</sup>P<sub>0</sub>+2(1−_t_)tP<sub>1</sub>+_t_<sup>2</sup>P<sub>2</sub>, 0≤_t_≤1

Here is an animated visual representation of what is happening:

![Quadratic Bézier curve animation](https://upload.wikimedia.org/wikipedia/commons/3/3d/B%C3%A9zier_2_big.gif)

In order to draw such shapes, we use the **Q** instruction. P<sub>0</sub> is
the current point and the instruction has the form `Q x1,y1 x2,y2`. In the
example below, the three points are:

* P<sub>0</sub>: 25,75
* P<sub>1</sub>: 50,175
* P<sub>2</sub>: 100,75

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 25,75 Q 50,175 100,75" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <line x1="25" y1="75" x2="50" y2="175" stroke="lightgray" stroke-width="2" />
    <line x1="50" y1="175" x2="100" y2="75" stroke="lightgray" stroke-width="2" />
    <path d="M 25,75 Q 50,175 100,75" stroke="black" stroke-width="3" fill="none" />
    <circle cx="25" cy="75" r="5" fill="red" />
    <circle cx="50" cy="175" r="5" fill="red" />
    <circle cx="100" cy="75" r="5" fill="red" />
</svg>

We can link multiple curve segments together by using multiple **Q** instructions.
When doing this, the joint between the two curve segments may show an angle:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 25,75 Q 50,175 100,75 Q 150,50 175,75" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 25,75 Q 50,175 100,75 Q 150,50 175,75" stroke="black" stroke-width="3" fill="none" />
</svg>

If you want to create a smooth curve with no angle between the curve segments,
SVG provides a shorthand using the **T** instruction: in this case, the control
point P<sub>1</sub> of the second segment doesn't need to be provided as it is
calculated by the SVG layout engine to ensure the curve is smooth:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 25,75 Q 50,175 100,75 T 175,75" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 25,75 Q 50,175 100,75 T 175,75" stroke="black" stroke-width="3" fill="none" />
</svg>

#### Cubic curves

Cubic Bézier curves are drawn using a start point (P<sub>0</sub>), two control
points (P<sub>1</sub> and P<sub>2</sub>) and an end point (P<sub>3</sub>).
Calculating the formula below for values of _t_ between 0 ad 1 produces the
points on the curve, B(_t_):

B(_t_) = (1−_t_)<sup>3</sup>P<sub>0</sub>+3(1−_t_)<sup>2</sup>tP<sub>1</sub>+3(1−_t_)t<sup>2</sup>P<sub>2</sub>+_t_<sup>3</sup>P<sub>3</sub>, 0≤_t_≤1

Here is an animated visual representation of what is happening:

![Cubic Bézier curve animation](https://upload.wikimedia.org/wikipedia/commons/d/db/B%C3%A9zier_3_big.gif)

In order to draw such shapes, we use the **C** instruction. P<sub>0</sub> is
the current point and the instruction has the form `C x1,y1 x2,y2 x3,y3`. In the
example below, the three points are:

* P<sub>0</sub>: 25,75
* P<sub>1</sub>: 75,175
* P<sub>2</sub>: 125,25
* P<sub>3</sub>: 175,75

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 25,75 C 75,175 125,25 175,75" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <line x1="25" y1="75" x2="75" y2="175" stroke="lightgray" stroke-width="2" />
    <line x1="125" y1="25" x2="175" y2="75" stroke="lightgray" stroke-width="2" />
    <path d="M 25,75 C 75,175 125,25 175,75" stroke="black" stroke-width="3" fill="none" />
    <circle cx="25" cy="75" r="5" fill="red" />
    <circle cx="75" cy="175" r="5" fill="red" />
    <circle cx="125" cy="25" r="5" fill="red" />
    <circle cx="175" cy="75" r="5" fill="red" />
</svg>

We can link multiple curve segments together by using multiple **C** instructions.
When doing this, the joint between the two curve segments may show an angle in
the same way as with quadratic curves:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="350px" height="200px">
            <path d="M 25,75 C 75,175 125,25 175,75 C 150,175 275,25 325,75" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

<svg width="350px" height="200px">
    <path d="M 25,75 C 75,175 125,25 175,75 C 150,175 275,25 325,75" stroke="black" stroke-width="3" fill="none" />
</svg>

If you want to create a smooth curve with no angle between the curve segments,
SVG provides a shorthand using the **S** instruction: in this case, the control
point P<sub>1</sub> of the second segment doesn't need to be provided as it is
calculated by the SVG layout engine to ensure the curve is smooth:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="350px" height="200px">
            <path d="M 25,75 C 75,175 125,25 175,75 S 275,25 325,75" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

<svg width="350px" height="200px">
    <path d="M 25,75 C 75,175 125,25 175,75 S 275,25 325,75" stroke="black" stroke-width="3" fill="none" />
</svg>

### Arcs

The last type of line segment that can be described in a `<path>` element is a
curcular or elliptical arc. The way an arc is specified is slightly complicated
because it needs to be integrated into an existing path so that SVG can link
the current point with a target point using a section of ellipse. To draw such
a path element, we use the **A** intruction and it has the form
`A rx ry x-axis-rotation large-arc-flag sweep-flag x y` where:

* `rx` is the ellipse's horizontal radius
* `ry` is the ellipse's vertical radius
* `x-axis-rotation` is the angle by which the radii are rotated
* `large-arc-flag` is a value of `0` or `1` that selects what arc to draw
* `sweep-flag` is a value of `0` or `1` that selects what possible ellipse to
  draw out of the two that can intersect on the line
* `x` and `y` are the coordinates of the target point

This is all a bit complex so here is an example with two arcs of circle:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 0,50 L 25,50 A 25 25 0 0 0 75,50 L 125,50 A 35 35 0 0 0 175,50 L 200,50" stroke="black" stroke-width="3" fill="none" />
            <path d="M 0,100 L 25,100 A 25 25 0 1 0 75,100 L 125,100 A 35 35 0 1 0 175,100 L 200,100" stroke="black" stroke-width="3" fill="none" />
            <path d="M 0,175 L 25,175 A 25 25 0 0 1 75,175 L 125,175 A 35 35 0 0 1 175,175 L 200,175" stroke="black" stroke-width="3" fill="none" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 0,50 L 25,50 A 25 25 0 0 0 75,50 L 125,50 A 35 35 0 0 0 175,50 L 200,50" stroke="black" stroke-width="3" fill="none" />
    <path d="M 0,100 L 25,100 A 25 25 0 1 0 75,100 L 125,100 A 35 35 0 1 0 175,100 L 200,100" stroke="black" stroke-width="3" fill="none" />
    <path d="M 0,175 L 25,175 A 25 25 0 0 1 75,175 L 125,175 A 35 35 0 0 1 175,175 L 200,175" stroke="black" stroke-width="3" fill="none" />
</svg>

The first arc of the first line is drawn between the points _(25,50)_ and _(75,50)_,
which corresponds to a length of 50 in the path. The radii are both 25, which means
that the 50 space in the path will accommodate a full half-circle.

The second arc of the first line is drawn between the points _(125,50)_ and _(175,50)_,
which corresponds to a length of 50 in the path. The radii are both 35, which means
that the 50 space in the path will accommodate less than half a circle.

For the second line, we set the `large-arc-flag` to true, which has no effect on
the half circle but selects a large option for the second arc.

For the third line, we set the `large-arc-flag` back to false and the `sweep-flag`
to true, which has the effect of drawing both arcs on the other side of the line.

Arcs are quite difficult to understand so the best thing is to experiment with them.

## Disjoint shapes

The `<path>` element allows you to create very complex shapes but it can also
create disjoint shapes, i.e. shapes that consist of multiple paths. This is done
by introducing some **M** instructions in the middle of the path to draw a
disjoint segment. For example, we can draw two squares side by side with a
single shape, meaning that they will share all `fill`, `stroke` and `stroke-width`
attributes:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 25,25 H 100 V 100 H 25 Z M 125,125 H 175 V 175 H 125 Z" stroke="black" stroke-width="3" fill="yellow" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 25,25 H 100 V 100 H 25 Z M 125,125 H 175 V 175 H 125 Z" stroke="black" stroke-width="3" fill="yellow" />
</svg>

## Shapes with holes

If we update the example above to draw the second square inside the first,
SVG does just that:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 25,25 H 175 V 175 H 25 Z M 50,50 H 150 V 150 H 50 Z" stroke="black" stroke-width="3" fill="yellow" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 25,25 H 175 V 175 H 25 Z M 50,50 H 150 V 150 H 50 Z" stroke="black" stroke-width="3" fill="yellow" />
</svg>

By default, SVG fills all the shape segments. This can be chaged using the
`fill-rule` attribute. This attribute can take two values:

* `nonzero` (the default): all shape segments are filled
* `evenodd`: shape segments are filled or empty depending on whether the number
  of shape segments that intersect are even or odd

With the simple shape above, this allow us to create a shape with a hole. We can
confirm that this is a real hole by showing another shape behind.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 10,10 H 100 V 100 H 10 Z" stroke="lightgray" stroke-width="1" fill="orange" />
            <path d="M 25,25 H 175 V 175 H 25 Z M 50,50 H 150 V 150 H 50 Z" stroke="black" stroke-width="3" fill="yellow" fill-rule="evenodd" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 10,10 H 100 V 100 H 10 Z" stroke="lightgray" stroke-width="1" fill="orange" />
    <path d="M 25,25 H 175 V 175 H 25 Z M 50,50 H 150 V 150 H 50 Z" stroke="black" stroke-width="3" fill="yellow" fill-rule="evenodd" />
</svg>

This rule allows us to draw even more complex combinations. In the example below,
the areas that are covered by an odd number of shapes (1 or 3) are filled in,
while the areas that are covered by an even number of shapes (2) are empty, all
this with a single `<path>` element:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>SVG Tutorial</title>
    </head>
    <body>
        <svg width="200px" height="200px">
            <path d="M 25,75 Q 250,250 75,25 Z M 175,75 Q -50,250 125,25 Z M 50,175 Q 100,0 150,175 Z" stroke="black" stroke-width="3" fill="yellow" fill-rule="evenodd" />
        </svg>
    </body>
</html>
```

<svg width="200px" height="200px">
    <path d="M 25,75 Q 250,250 75,25 Z M 175,75 Q -50,250 125,25 Z M 50,175 Q 100,0 150,175 Z" stroke="black" stroke-width="3" fill="yellow" fill-rule="evenodd" />
</svg>

Phew, this lesson was rather complex so congratulations for getting to the end
if it! Take it slowly, go back through it and experiment.

-----
This ends our second SVG lesson, we hope you enjoyed it and learnt something.
If you have some spare time how about going back through this tutorial and,
by yourself, make some amendments. If there is something you did not understand
or want to give us some feedback, please [send us an email.](mailto:feedback@codebar.io)

## Further reading

* [Mozilla SVG path tutorial](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
* [Bézier curve](https://en.wikipedia.org/wiki/B%C3%A9zier_curve)
