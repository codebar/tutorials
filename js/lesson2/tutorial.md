---
layout: page
title: JavaScript Lesson 2
---

In our previous lesson we briefly introduced JavaScript, variables.  This time we will be explaining Loops, Arrays, Objects and DOM.

## But before we start...

### Required files

Download the files required to begin working through the tutorial from [here](https://gist.github.com/despo/d46495ce986d1624af45/download)

You should use **lesson2.html** and **script.js** to write the exercises in for the first part of the tutorial, and **london.html** and **london-script.js** for doing the DOM exercises.

## Loops

A loop is used to execute a set of statements until a condition is met.

####The `for` loop

The **for** loop is based on a counter. It is used to execute the same code a specified number of times.

```js
for(initial value; condition; increment) {
  //set of statements
}
```

We can use this to add all numbers between 1 and 10

```js
var total = 0;
for(var i = 1; i <= 10; i++) {
  total = total + x;
}
console.log("Total: " + total);
```

> `<=` stands for **smaller or equal**. We can also express `<=1 0` using `< 11`

> `i++` increments the value of i at the end of the loop.

####The **while** loop

The **while** loop unlike the **for** loop, is not necessarily based on a counter, but gets evaluated while the condition is not met.

We can express the expression we wrote above using a while loop:

```js
var x = 1;
var total = 0;
while(x <= 10) {
  total = total + x++;
}
console.log("Total: " + total);
```

> `x++` increments the value of x after the execution of the line, whilst `++x` before. What do you expect the result to be if you change `x++` to `++x`. Try it out!


##Arrays

An array is a data structure. It can hold elements of the same or different types (e.g. strings, numbers, booleans). In an array each element can be accessed using the **index**.

It may be a bit confusing, but the first index of an array is 0, and not 1.

To understand this better, let's try and represent the array below.

```js
var animals = [ "dog", "cat", "rabbit", "horse", "elephant", "monkey" ]
```

![](assets/images/animals_array.png)


To retrieve an item from the array, we use **bracket notation**

To get the first item `animals[0]`, the second `animals[1]` etc.

### Properties -  `length`

The the `length` property returns the size of the Array

```js
animals.length
```

### Methods

#### Adding objects

`array.push(object)` adds an element to the end of the array
`array.unshift(object)` adds an element to the beginning of the array

```js
animals.push("zebra")

animals.unshift("cow")
```

#### Removing objects

`array.pop()` removes and returns the last element

> What do you expect to get when apply `pop()` to the animals array? Try it out.

### Ordering

To order the elements of an array we can use `sort()`.

```js
animals.sort()
```

Try this out on an array of numbers

```js
[ 3, 6, 4, 1, 7, 4 ].sort()
```

Another cool operation you can apply is `reverse()`. Since `sort()` orders our elements and gives us back an array we can apply `reverse()` to that.

```js
animals.sort().reverse();
```

### Loops again!

Now that we know what arrays are, we can use that to understand while loops better. As we mentioned previously, a **while** loop does not need to be based on a counter. Let's try out another example without using counters.

```js
var fruitAndVeg = [ "apple", "orange", "banana", "kiwi", "avocado", "celery", "aubergine" ];
var fruits = true;
var x = 0;

while (fruits) {
  console.log(fruitAndVeg[x++]);
  if (fruitAndVeg[x] == "avocado") {
    fruits = false;
    console.log("No more fruits!");
  }
}
```

> Can you understand how this loop works? Try to explain it to your coach.

####The `do` loop

A while loop can also be represented using what we call as a `do` block.
Let's use this to output the vegs in the array.

```js
var fruitAndVeg = [ "apple", "orange", "banana", "kiwi", "avocado", "celery", "aubergine" ].reverse();
var vegs = true;
var x = 0;

do {
  console.log(fruitAndVeg[x++]);
  if (fruitAndVeg[x] == "kiwi") {
    vegs = false;
    console.log("No more vegs!");
  }
} while (vegs)
```

##Objects

### So what are objects?
In JavaScript, **everything** is an object. Even **strings**, **numbers** and **booleans** that we mentioned in the previous lesson are.

They are special kinds of data, with **properties** and **methods**

```js
var message = "It's cold today"
console.log(message.length);  // using length property
console.log(message.toUpperCase());  // using toUpperCase() method
```

###Creating our own objects

Here is the basic template for creating an object with some properties

```js
var object = {
  propertyName: propertyValue;
  propertyName: propertyValue;
  ...
}
```

Let's apply that to store some information about London.

```js
var london = {
  name: "London",
  population: 8308369,
  tallestBuilding: {
     name:  "Shard",
     height: "310m"
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012]
}
```

To access the properties, we can either use the **bracket notation** like in Arrays, or the **dot notation**

```js
console.log("Population of London: " +london.population);
```

As you can see, we can also define **nested objects**, like _tallestBuilding_. We can access their properties in a similar way.

```js
console.log("The tallest building in London is the " + london.tallestBuilding.name + " with a height of " + london.tallestBuilding.height);
```

And we can also use arrays within them!

```js
console.log("The olympics took place in London in:\n")
for (var i=0; i < london.olympics.length; i++) {
  console.log(london.olympics[i]);
}
```

## DOM

###What is DOM?
**DOM** stands for **D**ocument **O**bject **M**odel.

When the HTML is loaded on our page, the browser generates its DOM. This enables us to access and interact with HTML elements using JavaScript.

#### DOM representation

```html
<html>
  <head>
   <title>London!</title>
  </head>
  <body>
   <h1>London</h1>
   <p>
     London <strong> is awesome</strong>
   </p>
  <body>
</html>
```

![](assets/images/html-dom-diagram.png)

### Interacting with DOM

The **DOM** has is repesented by **nodes**. Each node has different properties, and they are connected like a tree, as we can see in the diagram above.

Let's try interacting with the DOM of our page by getting the parent node of the body.

> Try this using the console on the inspector. As the script gets loaded before the body, the element will not be there if you try adding this to the **script.js**

```js
console.log(document.body.parentNode);
```

To get around this issue, we will be wrapping our called in functions trigerred by the interface.

Write a function that lists all DOM children elements.

```js
function listDomElements() {
  var children = document.body.childNodes;
  for(var i=0; i <  children.length; i++) {
    console.log(children[i]);
  }
}
```

and add a link that triggers the function

```html
<a href="#" onclick="listDomElements()">List DOM elements</a>
```
> Awesome!

**But interacting with DOM doesn't need to be this complicated.**

An easier way of interacting with the DOM is by retrieving elements using their tag.

```js
document.getElementByTag("h1");
```

That's not very easy though, as it's likely that you will have multiple paragraphs, divs, links or other elements.

The most common way, is by retrieving elements by id.

Add an id `description`to the paragraph element.

```js
var description = document.getElementById("description");
console.log(description.innerHTML);
```

### Modifying the HTML

### Steps for creating new elements

There are three main steps we need to follow to achieve this. 

1. creating an element
```js
document.createElement(<tagName>);
```
2. creating text nodes
```js
document.createTextNode(<text>);
```
3. adding children to elements
```js
document.appendChild(<node>);
```

Try this out using the london object we declared previously

```js
var london = {
  name: "London",
  population: 8308369,
  tallestBuilding: {
     name:  "Shard",
     height: "310m"
  },
  numberOfUniversities: 43,
  averageRent: 1106,
  dailyTubePassengerJourney: 3500000,
  olympics: [ 1908, 1948, 2012]
}
```

#### Display the population

```js
function displayPopulation() {
  var population = document.createElement("p");
  var content = document.createTextNode("Population: " + london.population);
  population.appendChild(content);
  document.body.appendChild(population);
}
```

> Don't forget to add a link that calls the function.

Create functions that load all the individual information we have stored about London. If you are having trouble ask for help from your coach.

> When you are done with this, try creating one main function that does the calls. Use the javascript `onload()` event on the body, similar to how we used the `onclick()` event previously, to add the information to the page.


### Bonus

Modify the JavaScript file we used in the first part of the lesson, and its HTML page so that you can load the information on the page instead of the console.

> Remember to wrap your code in functions!

---
This ends our **Beginning JavaScript**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
