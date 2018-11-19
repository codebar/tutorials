---
layout: page
title: HTML & CSS Lesson 5
footer: true
---

##  HTML AND CSS - Diving into HTML5 and CSS3

### Objective

Today we will be building a website and will focus more on HTML5 and CSS3 specific elements.

### Goal

The page we will build will look similar to this [example page](https://tutorials.codebar.io/html/lesson5/example.html "Anita Borg")

### Required files

Download the files required to begin working through the tutorial from [here](https://gist.github.com/despo/7565600/download)

### Recap

In the previous lessons we spoke about **H**yper **T**ext **M**arkup **L**anguage and **C**ascading **S**tyle **S**heets. Remember how **HTML** defines the structure of a website and **CSS** is the presentation. We also discussed the box model, inline and block elements, pseudo classes and went into more detail with CSS Layouts and formatting.


## Getting started

Today, we will create a page dedicated to **Anita Borg**.

Set her name as the title that will be displayed on the browser's bar.

```html
<title>Anita Borg</title>
```

Also, set a heading for your page

```html
<h1>Anita Borg</h1>
```

Before we continue any further, format the existing content of the html file to use paragraphs `<p>`

> If you do not remember, ask your coach to help you.

## Main styling

Set the font family and reset the padding and margin of the page.

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
```

Let's wrap the contents of the page in a `div` element with the id `wrapper` so we can tweak its dimensions and center it.

> Did you remember to close the element you just added?

Let's style the wrapper

```css
#wrapper {
  width: 90%;
  max-width: 1040px;
  margin: 0 auto;
  min-width: 900px;
}
```

Try tweaking some of the styles that we just added to see what happens?

> Remove the `max-width` and reload the page

> Remove the `min-width` and try resizing the page

> Do you notice how the content no longer centers when removing the `margin` property? Ask your coach to explain why.


## Text shadow

Text shadow will add a drop shadow to the header. The text-shadow property is formatted as follows:

`text-shadow: horizontal-shadow vertical-shadow blur color`

- horizonal-shadow is the length of the shadow along the x-axis
- vertical-shadow is the length of the shadow along the y-axis
- blur controls how much, if any, blur radius to add to the shadows. This is optional, but can look cool.
- color controls the color of the shadow. It is also optional.

### Style the header

```css
h1 {
  margin: 15px 0;
  font-size: 85px;
  color: #6f6c7c;
  text-shadow: 1px 1px #72629a;
}
```

Let's tweak the text-shadow property by adding a 2px blur.

> Can you see the difference? Keep the version you like the most.

### Adding a left container

Add some images of Anita and some links to refer to our resources.
We want this to be on the left hand side.

Add this right after the beginning of the element with the id `wrapper`

```html
<div>
  <img src="anita-top.jpg" alt="Anita Borg image 1">
  <img src="anita-bottom.jpg" alt="Anita Borg image 2">
  <div>
    <a href="http://gos.sbc.edu/b/borg.html">reference</a>
    <a href="https://en.wikipedia.org/wiki/Anita_Borg">wikipedia</a>
  </div>
</div>
```

Add an id `left-bar` to the external `div` so we can change the styling

```css
#left-bar {
  width: 25%;
  min-width: 200px;
  display: inline-block;
}
```

This doesn't seem to work. Wrap the rest of the content below the `left-bar` in a new `div` with the id `container`. We'll then use the following css to change the position, dimensions and the display attribute.

```css
#container {
  margin-left: 20px;
  display: inline-block;
  vertical-align: top;
  width: 60%;
}
```

Things should be looking a bit better now, but the images are still too big! Set their width to make sure they take up as much space as their container.

```css
#left-bar img {
  width: 100%;
}
```

Great! Now our images and links are on the left, and our main content is on the right.

### Border-radius

[Border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) enables us to create rounded corners for our elements.

Border radius can be defined in many different units - the higher the number, the bigger the curve. An example of border-radius in your code would be:

`border-radius: 10px;`

Let's add it so that it adds a nice frame to the first image. Wrap the first image in a `div` with the class `frame`.

```css
.frame {
  padding: 5px 15px 15px;
  background-color: white;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-top: none;
}
```

If we only wanted the bottom right and bottom left corners to be rounded, we could be more specific when setting the border radius so it only applies to those corners.

```css
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
```
> Play around with border radius a little bit to see what effects you get.

Let's also round the corners of the second picture. First, let's add a class `rounded` to it then add the `border-radius`.

```css
.rounded {
  border-radius: 10px;
}
```

Rounded corners look much nicer, don't you agree?

### Adding some subtle styling to the page

Small details like this can make a big visual difference to your website.

Let's add a top and bottom border to the first image.

```css
#left-bar .frame img {
  border-top: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
  padding: 7px 0;
}
```

Also add a top border to our page, to make it a bit more polished. Add this to the style of the `body` element.

```css
border-top: 5px solid #4c4066;
```

### Background images

You can set a background image to any element on your page. To do this you declare that it's the background you want to change then add a URL, which is the path to your image. Like so:

`background: url(path/to/image)`

You can also set multiple background images, specify their dimension, position and attachment. To set multiple backgrounds, you simple need to specify them separating them by commas.


`background: url(path/to/image), url(path/to/other/image), ...`

You can also set different properties for your backgrounds, by defining them in a similar comma separated way.

`background-size: first_image_size, second_image_size, ...;`

`background-attachment: fixed, inherit, ...`

#### Let's try this out.

First let's set two background images, the first positioned on the right and the second on the left.

```
background: url('background-right.jpg') right top no-repeat,
            url('background-left.jpg') left no-repeat;
```

By default, a background image repeats itself to fill in the container. We don't want that, that's where the **no-repeat** property we specified comes into place.

Now, let's set the dimensions.

```css
background-size: 420px auto, auto 900px;
```

Awesome. Now we can see Anita's picture properly.

But when we scroll, we don't want the background to change. To fix this, we must set the images as fixed. We can do that by specifying the `background-attachment` property. Let's add:

```css
background-attachment: fixed, fixed;
```

> Try scrolling. Doesn't that look great?

### Styling the links

Do you remember how we styled our links last time? Today we will try and make them look like buttons.

First, let's give their container element a class called `references`

Add a top margin so that there is some space between them and the image above. Let's center them too.

```css
.references {
  margin-top: 30px;
  text-align: center;
}
```

Now, set a class `btn` to both of the links inside the `references` div and style them.

```css
a.btn {
  color: white;
  padding: 20px 30px;
  text-decoration: none;
  background-color: #9a95d8;
}
```

Add a border radius of 5px.

> If you don't remember how to do that, have a look further up in the tutorial or ask your coach for help!


### Box shadow
Box shadow, is a similar effect to text shadow. It allows us to implement multiple drop shadows on box elements by specifying their color, size, blur and offset.

`box-shadow: horizontal-shadow vertical-shadow blur size color inset`

Set a box shadow to the buttons

```css
box-shadow: 2px 2px 4px #4e4c80;
```

Lets change the box-shadow when hovering to make the links appear like real buttons

```css
a.btn:hover {
  box-shadow: 1px 1px 2px #4e4c80 inset;
}
```

> Play around with the button shadow. Can you make the buttons appear more realistic?

## A little more about Anita

The text in our page, is one of Anita Borg's speeches. Let's add a brief biography about her at the top of the page, just below the title `h1`

```html
<p>
Anita Borg believed that technology affects all aspects of our economic, political, social and personal lives. A technology rebel with a cause, in her life she fought tirelessly to ensure that technology's impact would be a positive one. It was this vision that inspired Anita in 1997 to found the Institute for Women and Technology. Today this organization continues on her legacy and bears her name, The Anita Borg Institute for Women and Technology.
</p>
```

Let's style that. First, give it a class `about`

```css
p.about {
  font-size: 0.9em;
  font-style: italic;
}
```

### What is an em

The name of an `em` stands for an ephemeral unit. It was originally used to describe that it was equal to the **M** character as it was commonly casted as the full-width of the square "block which are used in printing presses.

By using `em` instead of `px` to set the font-size, we are keeping it relative to the default font size. So 0.9em is 0.9 times the size that would have otherwise applied to that container.

> Change the height using the inspector to 2em. Can you notice the change?

### Not selector

Increase the `line-height` of all other paragraphs. We can do this with another very smart selector, The  **not** selector.

The **not** selector, finds all elements who don't match the specified description, in our case, all paragraphs that do not have an `about` class.

```css
p:not(.about) {
  line-height: 1.3em;
}
```

### Anita's speech

The speech that we are using in our page, is titled **Where We Are And Where We Are Going**.
To make our content more clear, wrap the remaining paragraphs (all but the `about` one) in a div with the class `speech`.

Also, add its title using an `h2` heading

> That should come right after you open up the `speech` div.

### Achievements

Anita had an amazing personality and was a person who contributed greatly to women in technology.
Let's list some of her achievements, just after the `about` paragraph.

```html
<div>
  <ul>
    <li>1995 Augusta Ada Lovelace Award</li>
    <li>1995 EFF Pioneer Award</li>
    <li>1996 Presidential Commission on the Advancement of Women and Minorities in Science, Engineering, and Technology
    </li>
    <li>2002 8th Annual Heinz Award for Technology, the Economy and Employment</li>
    <li>2002 Honorary Doctor of Science and Technology</li>
  </ul>
</div>
```

It's nice to use descriptive classes, so that it's easy for someone else looking at our code to understand what each section is. Add a class `achievements` to the external `div` we just added.

Now that we have done that, let's try reseting the list style, so there are no bullets present, and no margin or padding.

> Do you remember how to do that?


So here is how we will be reseting the list styling. We don't want to only specify `ul` as we might want to use a list with bullets somewhere else. It's ok to change the default styling of some elements, but if we are doing it to style one specific section, it's better to be more specific.

```css
.achievements ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
```

Let's make it look even better.

```css
.achievements li {
  padding: 10px 40px;
  font-size: 0.75em;
}
```

### CSS - Even and Odd rules, applying styling to alternate elements

In this part we will apply a different style to every second child element of our list.

Thanks to the following great CSS selectors, this is quite simple to do.

`:nth-child(odd)` and `:nth-child(even)` to do that.

In our case, we only want to change the style of every odd row. Achieving that is quite simple!

```css
.achievements li:nth-child(odd) {
  background-color: rgba(176, 175, 192, 0.2);
}
```
> Try changing odd to even

### RGB colors and opacity

As you may have just noticed, we didn't define the color as we usually do, using hex codes. Instead, we used **rgba**. This, enables us to define the opacity of a color as well.

`rgba(rgb code, opacity)`

`rgb(176, 175, 192);` is another way of defining the color with the hex code `#b0afc0`

> Try changing the last attribute of the `rgba` we just set.
> What happens when you set it to 1?
> What happens when you set it to 0?

### Bonus - Transitions

Let's take a **property** in our code and give it an animation on hover. We do this by adding a `:hover` to the element you want to effect on hover.

For this example we will give the two links named **btn** a different background on hover.

```css
a.btn:hover {
  background: black;
}
```

> Can you see this change on your website?

We can now make this affect take place during a number of seconds by adding the `transition-duration` property.

```css
a.btn:hover {
  background: black;
  transition-duration: 1s;
}
```

> Change the duration time to see what happens?

Now let's add a delay property.

```css
a.btn:hover {
  background: black;
  transition-duration: 1s;
  transition-delay: 1s;
}
```

If we wanted to even wilder with our on hover effect we could add a rotate:

```css 
a.btn{
display:inline-block;
}
a.btn:hover {
  transform: rotate(90deg);
  transition-delay: 1s;
}
```

Woo, that's it for CSS transitions. If you have some time here is a [guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) where you can sit with your coach and dive a little deeper.

-----

This ends our fifth lesson, we hope you enjoyed it and learnt something. If you have some spare time how about going back through this tutorial and, by yourself, make some amendments. If there is something you did not understand or want to give us some feedback please [send us an email.](mailto:feedback@codebar.io)
