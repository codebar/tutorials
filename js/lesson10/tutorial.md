---
layout: page
title: Drawing in Canvas
---

## Todays lesson

In this lesson we will be animating the **`<canvas>`** HTML element.
In the previous tutorial we drew shapes on the canvas, now we will make them move around.

## Before we begin

[Download](https://gist.github.com/despo/e4770ca5afeaf70c23bc/download) a canvas playground to practise the examples.


### Drawing a ball

```javascript
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

### Moving the the ball
In order to give the illusion of movement we are going to draw a circle, clear the canvas and move the ball to a new location.
You will put the code for drawing a ball into a function and call the function repeatedly using **` setInterval()`**

```javascript
function draw() {
    // code to draw a ball
}
setInterval(draw, 10);
```
