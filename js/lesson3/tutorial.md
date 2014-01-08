---
layout: page
title: JavaScript Lesson 3
---

So far, in the JavaScript sessions we've learned the basic of Javascript. From variables, to understanding Objects, functions and how to manipulate the **D**ocument **O**bject **M**odel.

In this session we will introduce JQuery, a very commonly used JavaScript library, that simplifies working with JavaScript.

Today, we will be are using **[JQuery 2.0.3](http://code.jquery.com/jquery-2.0.3.min.js)**. You can download or link directly to the latest version from the [JQuery download section](http://jquery.com/download/).
## But before we start...


###Required files

Download the files required to begin working through the the first tutorial example from [here](https://gist.github.com/despo/309f684b7a6e002aaf1f/download)

#What is JQuery?

JQuery is a JavaScript library that supplies you with functionality independent of browser platform. It's very commonly used on the internet and enables you to do more with writing less code.

##Selectors

Selectors are simplified in JQuery. You can access elements by element type, id or class, just like in `CSS`.

For example, to retrieve all paragraph elements you can use this selector `$("p")` or to retrieve all elements with a specific class `$(".red")` instead of using `getElementByTag('p')`.


## Accessing attributes `atts()`

Using the `attr()` method you can retrieve any element attribute.

```js
$('#logo').attr('width')
$('#logo').attr('width', 300)
```

## Changing css attributes

You can get and set the css properties of an item by using the `css()` action.

```js
var heading = $('h1');
heading.css('color', 'red');
```

##value()

To set and get the text in an input field, you can use `val()`. Similar to `attr()` and `css()` you can use the function without any parameters to retrieve the value, and `val(value)` to update the value.

To empty an input field, you can set value to an empty string.

```javascript
.value("");

```


##Adding content

There are many diffrent ways you can add content. You can use **append** to add something to the end to an element, or **prepend** to add to the beginning to an element.

```js
$('#container').append("<div>I love JQuery!</div>")
```

You can also use `replace()` to substitute an element entirely with some new content.

Try this out in your browser!

```js
$('#container').replaceWith("<div>I love JQuery!</div>")
```

> Check the html of the page using the inspector.

## Handling Events!

Events is what happens when you interact with a website. Some events that you can capture are a **change** in an input field, a mouse **click** or even **focus** on an element. You can find a [all the events here](http://api.jquery.com/category/events/)

We've learned in the previous lesson how to bind events on **click** by setting **onclick** to the HTML element..

```html
<a href="#" class="done" onclick="alert('Click event')">Show an alert box</a>
```

With JQuery we can achieve this by applying event listeners to the document of the page, listening for the event.

```js
$(document).on('click','.done',function(){
 alert($(this));
}
```

Using the `on()` method, means that the click event will work even if we add new items to the DOM dynamically.

`$(this)` is the element that we have triggerred the event from.

## Waiting for the page to load

We never want any of our sripts to be called, until the page is fully loaded. To make sure that this is the case, we should wrap all **event bindings** within the document ready function.

```js
$(document).ready(function(){
  // here go all the interactions

  /* click, mouseover, change etc */
});
```

> Make a note of this. You should **always** use it or else your bindings won't work and the functions will run when you are loading the page.

# Exercise 1: Build a wish list

Using JQuery and JavaScript functions, we will build a small todo list.

Download the files required to begin working through the example [here](https://gist.github.com/despo/309f684b7a6e002aaf1f) or alternatively get a [checkout](https://gist.github.com/309f684b7a6e002aaf1f.git) using git.

## Functionality
- add wishes to the list by clicking the Add button
- label added items as **Pending**
- allow to set items to completed by **clicking** on the label and change the label to **Done**
- show the total **pending** and **done** items


###Add wishes to the list

To get started, first let's write a function to add items to the list

```js
function addToList(item) {

}
```
In the `index.html` file, we already have an `<ol>` component, so we want to add each new item, as a list item. We can do that by constructing the html we need `"<li>" + item "<\li>"` and adding it to the list using `append()`.

We can get the ordered list using the element tag and the id `$("ol#items")`

Try running the function you've just written from the inspector
```js
addToList("build a website");
```

Now that you can succesfuly add items to the list, bind the function to the button with the id `#add-to-list`.  To get the text from the input field, you can use `$("#item").val()`.

###Bonus
After adding the item to the list

1. Empty the text field
2. Use `focus()` to place the cursor back to the textfield

### Label items

To label items, update update the html of the list item being added to the list, so it includes a label.

`<span class='label pending'>Pending</span>`

Refresh the page and run `addToList("build a website")` again!

![](assets/images/build-a-website.png')

### Setting items to complete

When we click on the Pending label, we wanto set items to complete. We will do that by adding a css class **complete** to the list item (use `$('#colors .item')`, **append** a new label `<span class='label success'>Done!</span>` and remove the item we've just clicked so that we can't triger the event again.

> Use `this()` to get the clicked item

First of all, bind a **click** event to the span we've added using its class with the `on()` function. As `<li>` is the parent node of the <span> element, we can access it using `parent()` (which is equivalent to `parentNode`
that we've used in the previous lesson).

``` js
parent_node = $(this).parent();
```

> Use `attr()` to set the class attribute to `completed`

> You can remove an element from the DOM using `remove()`


###  Showing the total task count

Let's create a function to update the displayed task total

```js
function updateTotal() {

}
```

We **only** want to display the total **if there are completed or pending items** in the list. As we are using the `success` and `pending` css classes in each of our task, we should be able to get the occurences count using `length`.

Write the total `Pending: " + pending + " Completed: " + completed` in the element with the class `.total`

> You can use `text()` to set the value

### Bonus
Update the displayed totals by calling `updateTotal()`
1. after adding an item to the list
2. when changing the state of an item from **Pending** to **Done**


# Exercise 2: Build a color choser

For the second exercise we'll create a color picker. It will extract the value of the color code you want to render from a text field whenever we make a change to the text, using events to capture **keypress**, **keydown** and **keyup** and update the background-color of the `.preview` div.

We will also be able to add 16 colors to the favorites list.

Download the files required to begin working through the example [here](https://gist.github.com/despo/ab21d29aa1ea8fbbbb0e/download) or alternatively get a [checkout](https://gist.github.com/ab21d29aa1ea8fbbbb0e.git) using git.

Let's start by creating a function that sets the background color of the `.preview` div.

```javascript
function setPreviewColor(color) {
  // set background color
}
```

> Hint: Use the `css()` function to set the background-color!

###We can bind multiple events using the `on()` function by separating them with space

```javascript
 $(document).on('click change', '#color', function() {

 }
```

Handle the `keydown keyup` and `keypress` events of the `#color` input. Pass the value of the input field to the `setPreviewColor(color)` functions.

### Set the color value

Extend `previewColor()` to also set the value of `.color-code` to the `background-color` of the `.preview` div.
As the color code is converted to *rgb* when set, that is the value the we will be displaying.

![](assets/images/color-codes.png')

## Add colors to favorites list

We already know how to retrieve the color code from the input field. Use that color value and add a box to the start of the `#colors` div every time the **Add to favorites** button is pressed, by handling the **click** event.

```javascript
"<div class='item' style='background-color: " + color + ";'><div>"
```

### Create a function that adds the box to `#colors`

```javascript
function addBox(color) {
  // add a box to the beginning of #colors
}
```

> Use `prepend` to add something to the start of an element.


> Run `addBox('FF0033')` from the console to make sure your code works.

#### Bind the function to the **click** event.

1. First retrieve the value from the `#color` field using `val()`
2. Add a box with the color
3. Reset the value of the `#color` field


Try it out by writing a new color code in RGB, hex or humanly readable format (e.g. yellow) and add a box to the favorites list.

> Did you remember to wrap the bound event in a `$(document).ready() {}` block?


## Setting up data

Pick 10 color codes you like and store them in an array.

```javascript
var colors = [ "22ac5e", "d68236" ... ]
```

We can iterate through the array using JQuery's `each()` function.

```javascript
$.each(array, function(index, element) {
  // do something
})
```

**index** is the position of the element in the array, and **element**, in our case will be the color.


In the `$(document).ready()` function, we can iterate through the colors list and call `addBox(color)` to create color boxes for each of the colors we've added to the array.


#### Getting a random element

We can also initialise the preview box by selecting a random element from the colors list

To get a random number back we just get a random color back by using `Math.random()`, which returns a random number back between 0 and 1. We apply `Math.floor()` to round down to the closest number.

```javascript
position = Math.floor(Math.random()*colors.length)
```

We can use the `array[index]` notation to retrieve the colors at the random position.

Now that we know the position, we can retrieve the element from the `colors` array and set the **preview** color.

##Bonus

###Retrict number of displayed boxes

We only want to be able to add 16 colors to our favorite list. To do that, we can update the code handling the **click** event and check that the length of `$("#colors .item")` is **equal** than 16 and remove the last element if the condition is met.

This way, when our favorites list is already filled, we remove a box and add another one.

### Set focus

Similar to the first exercise, set the focus back to the `#color` input field when a color is added to the favorites list.

---
This ends our **Introduction to JQuery**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
