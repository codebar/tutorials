---
layout: page
title: Introduction to jQuery
---


So far, we've learned the basics of JavaScript. From variables, to understanding Objects, functions and how to manipulate the &#x200b;**D**&#x200b;ocument &#x200b;**O**&#x200b;bject &#x200b;**M**&#x200b;odel.

In this session we will introduce jQuery, a very commonly used JavaScript library, that simplifies working with JavaScript.

Today, we will be using **[jQuery 2.0.3](http://code.jquery.com/jquery-2.0.3.min.js)**. If you want to use jQuery on other projects, You can download or link directly to the latest version from the [jQuery download section](http://jquery.com/download/).

## But before we start...

###Required files

Download the files required to begin working through the first tutorial example from [here](https://gist.github.com/despo/309f684b7a6e002aaf1f/download) (jQuery is included)

#What is jQuery?

jQuery is a JavaScript library that supplies you with functionality independent of browser platform. It's very commonly used on the internet and enables you to do more with less code.

##Selectors

Selectors are simplified in jQuery. You can access elements by element type, id or class, just like in `CSS`.

For example, to retrieve all paragraph elements you can use this selector `$("p")` or to retrieve all elements with a specific id `$("#message")` instead of using `getElementByTag("p")` or `getElementById("message")`.

```javascript
$("p")                // all paragraph elemenets
$("#container")       // an element with the ID container
$(".total")           // elements with the class total
$("ol#items")         // ordered list elements with the ID items
$("ol#items li")      // list elements, within an ordered list with the id colors
```

You can also use CSS3 selectors.

```javascript
$("input[type=text]"); // inputs of type text
$("a:first");          // the first anchor element on the page
$("li:odd");           // all odd numbered list items
$("li:first-child");   // the first child in a list
```

##Get and set HTML attributes `attr()`

Using `attr(attributeName)` you can retrieve the value of an attribute.

You can use the same method to set the value of an attribute:
`attr(attributeName, value)`. Many jQuery methods can be used to both get and
set.

```js
$('#logo').attr('width')       // get width
$('#logo').attr('width', 300)  // set width to 300
```

##Get and set CSS styles `css()`

Like `attr()`, you can get and set CSS style properties with the `css()`
method.

```js
var heading = $('h1');
heading.css('color');
heading.css('color', 'red');
```

##Get and set input values `val()`

Similar to `attr()` and `css()` you can use the `val()` function without any
parameters to get the value of an input field, and `val(value)` to set the
value.

To empty an input field, you can set value to an empty string.

```javascript
$('input').val();
$('input').val("");
```

##Adding content

There are many different ways you can add content. You can use **append** to add something to the end to an element, or **prepend** to add to the beginning to an element.

```js
$('#container').append("<div>I love jQuery!</div>")
```

You can also use `replaceWith()` to substitute an element entirely with some new content.

Try this out in your browser.

```js
$('#container').replaceWith("<div>I love jQuery!</div>")
```

> Check the html of the page using the inspector.

##Handling Events

Events are what happen when you interact with a website. Some events that you can capture are a **change** in an input field, a mouse **click** or even **focus** on an element. You can find a list of [all the events here](http://api.jquery.com/category/events/).

We've learned in the previous lesson how to bind events on **click** by setting **onclick** to the HTML element..

```html
<a href="#" class="done" onclick="alert('Click event')">Show an alert box</a>
```

With jQuery we can achieve the same thing with an event listener. To listen for
events anywhere on the page we attach the event listener to the document
element.

```js
$(document).on('click','.done', function() {
 alert("Click event");
});
```

There are two differences between these examples:

  - This event listener will listen for `click` on all the elements with class
    `done`, i.e. one listener can listen to many elements.
  - jQuery's `on()` method is dynamic, so if we add new items to the page with
    class `done` the listener will listen to them as well.

**Handling events**

To create your own event listener choose an `event` to listen for on the
elements matching a `selector`. Then put the code you want to run each time the
event occurs in the `function`.

```javascript
$(document).on(event, selector, function() {
  // code to be executed when event occurs
});
```

##Waiting for the page to load

```js
$(document).ready(function() {
  // here go all the listeners
  // e.g. on click, mouseover, change etc
});
```

Make a note of this. You should **always** use it or else your bindings won't work and the functions will run when you are loading the page.

#Exercise 1: Build a wish list

Using jQuery and JavaScript functions, we will build a small todo list.

Download the files required to begin working through the example [here](https://gist.github.com/despo/309f684b7a6e002aaf1f) or alternatively checkout with git.

```bash
git clone https://gist.github.com/309f684b7a6e002aaf1f.git wishlist
```

Move the files under your Github page folder, in a new directory `wishlist`. Also, try to commit each task you complete e.g. ability to add an item to the list or label items as **Pending**. To do that, you can use the **Github Client** or alternatively **git** on the command line:

```bash
git commit -m "message"
```


##Functionality
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
In the `index.html` file, we already have an `<ol>` component, so we want to add each new item, as a list item. We can do that by constructing the html we need `"<li>" + item + "</li>"` and adding it to the list using `append()`.

We can get the ordered list using the element tag and the id `$("ol#items")`

Try running the function you've just written from the inspector

```js
addToList("build a website");
```

Now that you can successfully add items to the list, bind the function to the button with the id `#add-to-list`.  To get the text from the input field, you can use `$("#item").val()`.

###Bonus
After adding the item to the list

1. Empty the text field
2. Use `focus()` to place the cursor back to the text field

###Label items

To label items, update the html of the list item being added to the list, so it includes a label.

`<span class='label pending'>Pending</span>`

Refresh the page and run `addToList("build a website")` again.

![](assets/images/build-a-website.png)

###Setting items to complete

When we click on the Pending label, we want to set items to complete. We will do that by adding a CSS class `.completed` to the list item (use `addClass()`), **append** a new label `<span class='label success'>Done!</span>` and **remove** the item we've just clicked so that we can't trigger the event again.

> Use `$(this)` to access the element that the event was triggered from.

First of all, bind a **click** event to the span we've added using its class with the `on()` function. As `<li>` is the parent node of the <span> element, we can access it using `parent()` (which is equivalent to `parentNode`
that we've used in the previous lesson).

``` js
var parent_node = $(this).parent();
```

> Use `attr()` to set the class attribute to `completed` or alternatively `addClass()`

> Use `remove()` to remove an element from the DOM


###Show the total task count

Let's create a function to update the displayed task total

```js
function updateTotal() {

}
```

We **only** want to display the total **if there are completed or pending items** in the list. As we are using the `success` and `pending` CSS classes in each of our task, we should be able to get the occurrences count using `length`.

Write the total `"Pending: " + pending + " Completed: " + completed` in the element with the class `.total`

> Use `text()` to set the value. You can use `html()` for html content.

###Bonus

Update the displayed totals by calling `updateTotal()`

1. after adding an item to the list
2. when changing the state of an item from **Pending** to **Done**

###Pushing to Github page

Link to wishlist/index.html from the `index.html` of your Github page. Push your changes to the _github-pages_ branch and check you can access the project from the internet.
Access the wish list at **http://`<username>`.github.io/`<project>`/wishlist/index.html**

Have a look at our [**Wish List**](../../examples/wishlist/index.html).


#Exercise 2: Build a colorpicker

[Download the files](https://gist.github.com/despo/ab21d29aa1ea8fbbbb0e/download) required to begin working through the example or alternatively get a checkout.

```bash
https://gist.github.com/ab21d29aa1ea8fbbbb0e.git
```

Move the files under your Github page folder, in a  directory colorpicker.
Don't forget to commit each task you complete! That way it will be easier to retrace your steps if something goes wrong!

##Functionality
- set background color of `.preview`
- change the background color when we apply **keypress**, **keydown** and **keyup** events to the text
- restrict favorites list colors to 16


Write a function that sets the background color of the `.preview` div.

```javascript
function setPreviewColor(color) {
  // set background color
}
```

> Hint: Use the `css()` function to set the background-color!

> Call the function from the inspector. e.g. `setPreviewColor("purple")`

**You can bind multiple events using the `on()` function, by separating them with space.**

```javascript
 $(document).on('click change', '#color', function() {

 });
```

Handle the `keydown keyup` and `keypress` events of the `#color` input. Pass the value of the input field to the `setPreviewColor(color)` functions.

###Set the color value

Extend `setPreviewColor()` to also set the text of `.color-code` to the `background-color` of the `.preview` div.
As the color code is converted to *rgb* when set, that is the value the we will be displaying.

![](assets/images/color-codes.png)

##Add colors to favorites list

Retrieve the color from the input field and add a box to the start of the `#colors` div every time the **Add to favorites** button is pressed, by handling the **click** event.

```javascript
"<div class='item' style='background-color: " + color + ";'></div>"
```

###Create a function that adds the box to `#colors`

```javascript
function addBox(color) {
  // add a box to the beginning of #colors
}
```

> Use `prepend` to add something to the start of an element.

> Run `addBox('FF0033')` from the console to make sure your code works.

####Bind the function to the **click** event.

1. First retrieve the value from the `#color` field using `val()`
2. Add a box with that color
3. Reset the value of the `#color` field

Try it out by writing a new color code in RGB, hex or humanly readable format (e.g. yellow) and add it to the list.

> Did you remember to wrap the bound event in a `$(document).ready() {   });` block?


##Setting up data

Pick 10 color codes you like and store them in an array.

```javascript
var colors = [ "22ac5e", "d68236" ... ]
```

We can iterate through the array using jQuery's `each()` function.

```javascript
$.each(array, function(index, element) {
  // do something
});
```

**index** is the position of the element in the array, and **element**, in our case will be the color.


Iterate through the colors array in `$(document).ready()` and call `addBox(color)` to create color boxes for each of the colors.

####Getting a random element

We can also initialise the preview box by selecting a random element from the colors list.

To get a random number we can use `Math.random()`, which will give us a random number between 0 and 1. We then have to apply `Math.floor()` to round down to the closest number.

```javascript
random_position = Math.floor( Math.random() * colors.length )
```

> Use the `array[index]` notation to retrieve the colors at the random position.

Set `.preview`'s background color, to the random color code.

##Bonus

###Restrict number of displayed boxes

We only want to be able to add 16 colors to our favorite list. To do that, we can update the code handling the **click** event and check that the length of `$("#colors .item")` is **equal** than 16. If it's not, remove the last element.

This way, when the list is full, we remove a box and add another one.

###Set focus

Similar to the first exercise, set the focus back to the `#color` input field when a color is added to the favorites list.

###Change preview box on mouse over

Do that by handling the **mouseenter** and **mouseleave** events.

```javascript
$(document).on('mouseenter', selector,  function(){
 // do something
}).on('mouseleave', selector, function() {
 // do something else
});
```

1. When the mouse is on top of the color box
  1. Store the current background-color of the `.preview` box to a `previewColor` variable that you should initialise outside your function.
  2. Retrieve the color of the box and update the preview box.
2. When the mouse leaves
  1. Set the color of the preview box back to how it was.
3. This breaks the behavior of the **click** function. Fix it!

##Publish to github

Link to the colopicker from `index` and push your changes to github.
Compare your colorpicker with [ours](../../examples/colorpicker/index.html).

**Link to your colorpicker** http://`<username>`.github.io/`<project>`/colorpicker/index.html


---
This ends our **Introduction to jQuery** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
