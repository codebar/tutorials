---
layout: page
title: Object-Oriented Design
---

# Object-Oriented Design in JavaScript

A caveat before you begin: There are many, many ways to do Object-Oriented Design (OOD) in JavaScript. This is not the only way. This tutorial is intended to provide a basic introduction to OOD.

### Key Questions to explore:

1. What are the main purposes of Object-Oriented Design?
2. What is state?
3. What do the following terms mean:
  - Functions
  - Function declaration
  - Object
  - Method
  - Property
  - Prototype
  - Constructor
  - Variable
  - Explicit return

#### In this tutorial, we will be building a very simple Object-Oriented system. We will have the following objects:

* A house
* A human
* A cat

The human and cat can enter and leave the house. The human can feed the cat, and the cat can say 'Meow!'

This tutorial will provide a very basic overview to how these objects can be constructed in JavaScript, how the state of objects can be changed, and how objects can interact with one another.

Any time you see a phrase, especially if it's in bold, make sure you understand it before proceeding.

### Setup and Installation

If you have Node installed, you will be able to load files into the terminal to play around.

If you don't have Node, that's OK. You can still follow this tutorial. Everywhere you see the term "REPL", use the Chrome console or Firefox console. To load files, you will need to create an HTML document in the same directory where you will be saving your JS files.

```
<!DOCTYPE HTML>
  <HTML>
    <head>
      <script src='cat.js'></script>
      <script src='house.js'></script>
      <script src='human.js'></script>
    </head>
    <body>
      Hello JavaScript
    </body>
  </HTML>
```

Add the script tags as you go along and create the required files. Open the HTML document from the file system, and every time this tutorial says "reload the REPL", make sure you have required the relevant files, then just simply refresh the browser.

Your file structure should look something like this:

```
-- javascript-OOD/
   |--- index.html
   |--- house.js
   |--- cat.js
   |--- human.js
```

### Creating Objects

Let's create a Cat object using a **function declaration** as our **constructor**.

```
function Cat () {}
```

If you have written methods before, you've seen the `function` keyword. In JavaScript, classes do not exist (unlike Ruby, Python, PHP, etc..), so we use constructor functions to simulate this concept.

If you have Node installed, open up the Terminal, and type the following:

```
.load cat.js
```

The output should look something like this:

```
> function Cat () {}
undefined
```

Don't worry about the `undefined` bit. We will cover that later.

If you don't have Node, refer to the top of this tutorial for how to load files into HTML. Refresh the browser when you have done so.

This means that we have loaded our very first object into our REPL! Without exiting the REPL, now try typing:

```
var cat = new Cat ();
```

(It doesn't really matter what you call the variable. Variable names are arbitrary in all programming languages, so we could say ```var ginger = new Cat ();``` or ```var luciferTheEvilCat = new Cat ();```. However, it is good practice to pick variable names that are clear and intuitive.)

This creates a new Cat object. Think about the Cat function as a blueprint for how every new Cat object ought to be made. However, a blueprint of a cat is not a cat! Using JavaScript, we created an "instance" of a cat based on the blueprint.

By convention, functions that you use to create new objects should be capitalized. For multiple-word function names, JavaScript convention is to use PascalCase, i.e. VeryFluffyCatConstructor. The variables themselves should not be capitalized, and multiple-word variables use camelCase, i.e. pussInBoots.

__Confused yet? Make sure you understand the distinction between a constructor function and an object before you go any further.__

### Creating methods

Now let's give this cat some behavior. Let's give it a **method** so it can say 'Meow!' To do so, we will define a method on the **prototype**. [What does prototype mean?](http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/)

```
Cat.prototype.meow = function () {
  return "Meow!";
}
```

Take a few minutes to talk through this with your coach. Notice the use of the return keyword -- JavaScript uses **explicit returns**, which means that a function will return `undefined` unless we tell it specifically to return something else.

Remember how when we created a new Cat, we got an `undefined` value?

You will need to reload the file into your Node REPL each time you change the source code. Now, try creating a new Cat object, and calling `meow` on it:

```
var fluffy = new Cat();
fluffy.meow();
```

What happens if you don't end the method call with `()`? What if you call `.meow()` on the Cat function, rather than a new Cat object?

Practice building some more methods, and play around with returning different data types.

__Make sure you understand how to add a new method to the prototype before proceeding.__

### Manipulating state

What does 'state' mean, in the real world? Chemical state, state of mind, state of wellbeing... what do these ideas have in common?

In programming, state is a concept that is at the core of Object-Oriented Design. All objects hold 'state' -- a collection of properties that an object has at a certain time. Generally, these properties can be modified.

This is a very useful concept when using code to model real-world objects.

Let's imagine that our cat has two states. He can be hungry, full, or satisfied. To store state in JavaScript, one way is to define our Cat with an property called 'hunger'. Let's modify our constructor.

```
function Cat () {
  this.hunger = "satisfied";
}
```

Every new cat we create from this blueprint will start off with a satisfactory state of hunger. If we don't want to hard-code an initial state, a custom state can also be supplied as an argument when creating a new object.

```
function Cat (initialHunger) {
  this.hunger = initialHunger;
}
```

If using this approach, we will have to supply the correct number of arguments to the constructor function every time a new cat is created. (See what happens if you don't!)

```
var hungryCat = new Cat("starving");
```

Let's give him two new methods that will affect his hunger levels:

```
Cat.prototype.eat = function () {
  this.hunger = "full";
}

Cat.prototype.exercise = function () {
  this.hunger = "hungry";
}
```

Try reloading the file in the REPL again and playing around with this.

The way that things are set up, the cat's hunger state is represented by a string. Each time we call the eat or exercise methods on the cat, the original string is being overwritten by a new string. This means that properties are nothing more than key-value pairs that happen to live on a unique object.

We can set properties to any data type, or **primitive**. We can use integers instead of strings:

```
function Cat () {
  this.hunger = 5;
}

Cat.prototype.eat = function () {
  this.hunger++;
}

Cat.prototype.exercise = function () {
  this.hunger--;
}
```

If you are unfamiliar with the shorthand, `this.hunger++` is the same as `this.hunger = this.hunger + 1;` as well as `this.hunger += 1;`.

**Make sure you understand the concept of state before moving on.**

### Object Interactions

In this example, let's focus on picking out the most basic interactions between the human and his cat. Perhaps the cat and human interact in only one way: when the human feeds the cat. After all, cats are rather independent animals...

So, to do so, let's construct our Human, in a new file called `human.js`:

```
function Human () {

}
```

Load the Human file into the REPL and practice creating new Human objects again.

Let's give this human a prototypical method:

```
Human.prototype.feed = function (pet) {
  pet.eat();
}
```

Talk through this method with your coach. What is `pet` in this context, and what is happening to it in the body of the method?

Reload the Human and the Cat, create one of each object, and practice calling 'feed' from the human object with the cat object being passed in as the argument. Check the cat's hunger level after this.

Play around in the console A LOT here! Try calling a method on an object that you have not predefined. What happens? Can you find a way to **dynamically** define a method or property in the REPL?

**Make sure you understand how an argument works before proceeding!**

#### Challenge: Can you identify any potential problems with writing a method this way?

Finally, let's finish up our object interactions segment with the House object.

```
function House () {
  this.contents = [];
}
```

We create new House objects with a property of contents, set initially to an empty array. Can you take a guess at what's going to happen?

Let's think about what the house can do. In coding terms, this will guide us towards deciding what methods to give the house and why. A house can contain things, a house can admit people (and cats), and a house can allow people and cats to leave.

```
House.prototype.admit = function (someone) {
  this.contents.push(someone);
}

House.prototype.eject = function (someone) {
  // your turn!
}

```

Work with your pairing partner and coach to fill in the rest of the second method.

Also.. notice what JavaScript returns for the `admit` function. What is going on?!?

Just for fun, here are a few more methods to play around with...

```
House.prototype.knockKnock = function () {
  return "Who's there?";
}

House.prototype.whoIsHome = function () {
  console.log(this.contents);
}

Cat.prototype.hiss = function () {
  return "HISS!";
}

Cat.prototype.purr = function () {
  return "purrrrr";
}

Human.prototype.playWith = function (pet) {
  if (Math.random() > 0.5) {
    pet.purr();
  } else {
    pet.hiss();
  }
}

```

Practice writing your own methods, load the files into your REPL and keep playing around.

Some additional challenges, if you want to push yourself further:

1. Let every new object be created with a parameter that sets a property for `name`.
2. When logging out the contents of the house, return an array of the names of each object instead of the objects themselves.
3. Give the house a default capacity, so that when the number of humans inside the house reaches capacity, the house does not admit any more people and throws an error.
4. Give each human a `birthday` property, which is set to a [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) object. Modify the `playWith` method so that only on the human's birthday, the cat purrs on every attempt to `playWith`. On every other day of the year, he's fickle as usual.
5. Make a new `CatHouse` constructor that behaves very similarly to the House, except it does not permit any Human objects to enter.

### Wrap-Up

To recap, in this tutorial we've covered the following technical points:

* How to create an object
* How to create a new object
* How to write a prototypical method
* How to create and manipulate state within an object
* How objects can interact with each other

We recommend revisiting the Key Questions at the beginning of this tutorial. We always recommend playing around in the Node console as much as possible. Try to break your code -- you will be surprised at what strange (and wonderful?) things JavaScript will do.
