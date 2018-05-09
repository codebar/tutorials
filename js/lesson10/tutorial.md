---
layout: page
title: Drawing in Canvas
---

## Todays lesson

In this lesson we will be animating the **`<canvas>`** HTML element.
In the previous tutorial we drew shapes on the canvas, now we will make the shapes move around.
In order to give the illusion of movement we are going to draw a circle, clear the canvas and move the ball to a new location repeatedly several times a second.

## Before we begin

[Download](https://gist.github.com/despo/e4770ca5afeaf70c23bc/download) a canvas playground to practise the examples.

### Drawing a ball
below the context declaration please insert the code below
```javascript
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = "grey";
ctx.fill();
ctx.closePath();
```

Voila! A grey circle, unfortunately grey is a boring colour, please use [The SVG color scheme](http://www.graphviz.org/doc/info/colors.html#svg) to come up with something more exciting eg. 'chocolate', 'pink' or 'tomato'. ('beige' is not an acceptable exciting colour)

### Putting the ball into a function
Functions allow us to package up chunks of code and reuse them if and when we like.
please wrap your ball drawing code into a **`draw()`** function
```javascript
function draw() {
    // code to draw a ball
}
```

#### Repeatedly drawing the ball
In javascript if you want to do something again and again there is a function called **` setInterval()`**. Set interval takes two parameters, the function you would like to call and how frequently you would like the function to be called in milliseconds.

```javascript
function draw() {
    // code to draw a ball
}
setInterval(draw, 10);
```
Tip: 1000 ms = 1 second.

It doesn't look like it but the ball is being drawn every 100th of a second.

#### Repeatedly drawing the ball in a new location
Each time the draw function is called we will change the x and y values of the circle.
First we will extract the x, y values from the **`ctx.arc(240, 160, 20, 0, Math.PI*2, false);`** to variable outside the draw function

```javascript
var canvas = document.getElementById('canvas-id');
var ctx = canvas.getContext("2d");
var x = 240; // Starting x position
var y = 160; // Starting y position

function draw() {
  x = x+1; // Increase the value of x by 1
  y = y+1; // Increase the value of y by 1
  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI*2, false);
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.closePath();
}
setInterval(draw, 10);
```
Voila! A diagonal line.

The first time the ball is drawn at the coordinates 241,161. Each time the draw junction is called the x and y values are increment by 1.

Experiment. Try some larger numbers and some negative numbers and see what happens?
```javascript
function draw() {
  x = x+-1; // Decrease the value of x by 1
  y = y+5; // Increase value of y by 5
  // code to draw a ball
}
```

### Clearing the canvas before each frame
Each time the draw function is called a circle is drawn over the top of the previous one, which explains the line being drawn. Lets clear the canvas before each frame to give the illusion there is one single ball moving across the screen.
```javascript
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = x+1; // Decrease the value of x by 1
  y = y+1; // Increase value of y by 5
  // code to draw a ball
}
```
### Clean up the code
We will extract the code for specifically drawing a ball into it's own function called **`drawBall()`**
```javascript
function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI*2, false);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = x+1; // Decrease the value of x by 1
  y = y+1; // Increase value of y by 5
  drawBall();
}
```
### Bouncing of the walls
Before we bounce the ball off the wall we are gonna need to know the ball's radius. We are going to store this value in a variable.
```javascript
var canvas = document.getElementById('canvas-id');
var ctx = canvas.getContext("2d");
var x = 240; // Starting x position
var y = 160; // Starting y position
var ballRadius = 20;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2, false);
    ctx.fillStyle = "grey";
    ctx.fill();
    ctx.closePath();
}
```

```javascript
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  x = x+1; // Decrease the value of x by 1
  y = y+1; // Increase value of y by 5
  if(y + dy > canvas.height || y + dy < 0) {
      dy = -dy;
  }
  drawBall();
}
```

### Drawing player one's paddle
We need to add some paddles for the players, we will add some additional varibles to our application
```javascript
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
```
followed by a new function to draw the paddle
```javascript
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
```

### Detecting button presses
We will store the direction pressed in a variable and assign it a boolean value.
```javascript
var rightPressed = false;
var leftPressed = false;
```
Tip:

```javascript
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
```

```javascript
function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}
```

### Moving the paddles
```javascript
if(rightPressed) {
    paddleX += 7;
}
else if(leftPressed) {
    paddleX -= 7;
}
```

```javascript
if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
}
```

```javascript
drawPaddle();
```
### Keeping score
With all the other variables we are going to add a new variable called **`score`**
```javascript
var playerOneScore = 0;
var playerTwoScore = 0;
```
Depending on the postiton of the ball we can identify 

```javascript
if(y + dy < ballRadius) {
    dy = -dy;
} else if(x + dx > canvas.width - ballRadius) {
    playerOneScore = playerOneScore + 1;
} else if(x + dx > canvas.width - ballRadius) {
    playerTwoScore = playerTwoScore + 1;
}
```


### Letting the paddle hit the ball
```javascript
if(y + dy < ballRadius) {
    dy = -dy;
} else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
        dy = -dy;
    }
    else {
        alert("GAME OVER");
        document.location.reload();
    }
}
```
