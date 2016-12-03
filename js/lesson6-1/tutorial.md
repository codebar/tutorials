---
layout: page
title: Drawing emojis in SVG (part 1)
---

## Aim

To build an interactive emoji using SVG and JavaScript. Use your creativity to make that emoji that you always wanted to exist!

Part 1 you will create a static emoji using different shapes in SVG. Part 2 is where you will animate your emoji using JavaScript

![Imgur](http://i.imgur.com/GDcQUPB.gif)

> above is an animated Android using SVG and JavaScript

## Getting Started

We can get started using your favourite text editor (Atom, Sublime Text etc), or open a new tab and go to [jsfiddle.net](jsfiddle.net)

![Imgur](http://i.imgur.com/YfMYvac.png)

> picture of what JSFiddle currently looks like

JSFiddle has 4 boxes:
* top left is for HTML code, where we're going to put our SVG code in part 1
* top right is for CSS code, we're not going to use this today
* bottom left is for JavaScript, we'll use this box in the tutorial part 2
* bottom right is where the result of your code will go!

You need to tap the `run` button at the top to see your code changes in the result box! You can also use the `save` button to save your work. This will give a unique URL that will contain your work forever, you can update it and it'll increment the version at the end of the URL.

## Paper

First thing we need when we're going to draw, is a piece of paper:

```xml
<svg height="500" width="500">

</svg>
```

You have two properties you can change, the height and width!

## Circle

The next most important piece of your emoji will be the face. For this we're going to create a circle tag:

```xml
<circle cx="250" cy="250" r="200" fill="yellow" stroke="black" />
```

* `cx`= center x value (horizontal - left and right)
* `cy` = center y value (vertical - up and down)
* `r` = radius - how big the circle is
* `fill` = colour inside
* `stroke` = line outside

Talk through with your coach what these values mean. You could take a look at the documentation to see what other properties you might want to look at using: [http://www.w3schools.com/graphics/svg_circle.asp](http://www.w3schools.com/graphics/svg_circle.asp)

![Imgur](http://i.imgur.com/0VGFmFz.png)

> this is what your code should look like - you want to make sure your circle is drawn ON your piece of paper, and not outside of the svg tags.

## Squares

One of the other important shapes we want to use is a square.

```xml
<polygon points="0,0 500,0 500,500 0,500" fill="red" />
```

The `points` property looks super confusing, but really it's just 4 sets of coordinates (x,y). We start off at `0,0` which is top left, we then go right to `500,0`, down to `500,500` and then left to `0,500`. The polygon shape will automatically close itself by returning back to `0,0`.

Another thing we need to remember is the `z index`. Shapes we draw later in the code, will get drawn on top of other shapes. So our red square will need to be drawn before our circle, to be drawn behind.

Speak to your coach if your unsure about the z index, or how the points property works. For more information you could look at [http://www.w3schools.com/graphics/svg_polygon.asp](http://www.w3schools.com/graphics/svg_polygon.asp)

![Imgur](http://i.imgur.com/Y2Ox3UW.png)

> This is how our current code looks

Because we've used a polygon, this means we can make shapes with corners, such as triangles, pentagons, and hexagons etc. Just have fewer, or more coordinates sets for the shape you want to make! E.g. a triangle will have 3 coordinates, rather than the 4 above.

## Colours

You've probably noticed already the limitation of the colours we can currently use. Fortunately, we can use hex colours here to make our life better!

Speak to your coach if you've never used hex colours, everyone has different resources they enjoy using for colour inspiritation. I personally really like Googles material design colours here [https://material.google.com/style/color.html#color-color-palette](https://material.google.com/style/color.html#color-color-palette)

![Imgur](http://i.imgur.com/xb0CdGs.png)

> some colours that Google recommend, hex values always start with a hash (#).

If you want to go super fancy, you can also make gradients. SVG has two styles of graidents either linear, or radial. They are explained in more depth here:

* Linear = [http://www.w3schools.com/graphics/svg_grad_linear.asp](http://www.w3schools.com/graphics/svg_grad_linear.asp)
* Radial = [http://www.w3schools.com/graphics/svg_grad_radial.asp](http://www.w3schools.com/graphics/svg_grad_radial.asp)

## Pause

Spend some time making your emoji more awesome, you probably want some more circles for eyes. You could look at adding some more shapes for features, or accessories e.g. you could use a polygon to make a hat.

![Imgur](http://i.imgur.com/Vxm3KVF.png)

> here's some we made earlier :)

There are also some other svg shapes that might be useful, such as lines, ellipses, and text. Work with your coach, and look at W3 Schools for more ideas: [http://www.w3schools.com/graphics/svg_intro.asp](http://www.w3schools.com/graphics/svg_intro.asp)
