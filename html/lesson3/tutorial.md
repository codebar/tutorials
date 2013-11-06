---
layout: page
title: HTML Lesson 3
footer: true
---

##  HTML AND CSS - Beyond the basics

### Recap

In the previous two lessons, we spoke about **H**yper **T**ext **M**arkup **L**anguage and **C**ascading **S**tyle **S**heets. **HTML** defines the _structure_ of a website and **CSS** the _presentation_.

### Today we will be building a styled website from scratch

The page we will be building will look similar to this [example page]( http://codebar.github.io/tutorials/html/lesson3/example.html "Ada Lovelace")

We will also be explaining in more detail elements that we mentioned in our previous lesson.

## But before we start...

### Required files

Download the files required to start with this tutorial from [here](https://gist.github.com/despo/7328342/download)

### Development Tools - Inspectors

Inspectors are development tools that help you view, edit and debug CSS, HTML and Javascript.

A very popular inspector is [firebug](http://getfirebug.com/), it works nicely on Firefox. Chrome has a build in inspector, but we do suggest you use firebug as it is much easier to use and change different properties with it.

![](assets/images/firebug.png)

>  Ask your coach to show you how to edit the styling on our example page using firebug

## Getting started

Let's begin from the head of our page and set the title like we learned in the first lesson.

```html
<title>Ada Lovelace</title>
```

### Structuring content

We will separate our page in three different areas. The **header**, where our heading and picture, the top of our page, will be, the **container** where we will be specifying the main content, and the **footer**.

```html
<header>

</header>
<div>

</div>
<footer>

</footer>
```

> Did you remember to insert these tags within the <body> of your page?

> Inspect your page. Can you see the title and the elements we just added?

## Inline vs block elements

In css there are two types of ways to display elements: _block_, and _inline_

### block elements

Elements rendered in a new line

![](assets/images/span-block.png)

Some block elements are `<div>, <p>, <h1>, <ul>, <li>`. Most elements, are block elements.

### inline elements

Elements that appear on the same line

![](assets/images/span-inline.png)

Some inline elements are `<img>, <a>, <em>, <strong>`

#### To tweak elements and turn them from block, to inline, or the other way around you can use the `display` css property with `inline` or `block`


## Setting up the `<header>` content

### Structure

We will develop our page from the top down. You can always come back and tweak things later if you want to.

Start by adding an image wrapped in a `<div>` element

```html
<div>
  <img src="ada_lovelace.jpg"/>
</div>
```

Let's move on to add a title, underneath the `<div>` wrapping the image, within the `<header>` element

```html
<div>
  <h2> Hi, I'm Ada Lovelace</h2>
</div>
```

> Load your page. Have a look at how the elements are rendered.

### Presentation

Let's use what we just learned and make the image an inline element.

But first, to be able to manipulate the `<div>` surrounding the image, we need to be able to access it from out stylesheet. Set a class names `my-picture` on that element.

```html
<div class="my-picture">
  <img src="ada_lovelace.jpg"/>
</div>
```

Add the relevant style in your `style.css`

```css
.my-picture {
 display: inline;
}
```

> Have a look at your page. You can see through the inspector that the image is now set to inline

####Making this work

Make the `div` element surrounding the heading inline. Start by adding a class `title` to it

```html
<div class="title">
 <h1> Hi, I'm Ada Lovelace</h1>
</div>
```
and then the relevant csss

```css
.title {
  display: inline-block;
}
```

`inline-block` is another display attribute. The reason we need to use this, insted of `inline` to make this work is because the `div` with the class `title` contains a block element, `<h1>`, that takes over and expands across the end of the line.

> Switch `inline-block` to `inline` and have a look with firebug

Let's adjust the alignment of the `.title` as well
```css
vertical-align: top;
```

and make our picture a bit smaller

```css
.my-picture img {
  height: 60px;
}
```

##Box model

### What is the box model?

An element, can be considered as a box. The box model tells browsers how the element and its attribtues relate to each other.

Characteristics that define the box model are `padding`, `margin`, `border`, `height` and `width`.

**<span style="color: LightSkyBlue;">blue</span>**, is where `height` and `width` are defined. You don't always need to set this properties, as they will by default be set as the relevant sizing dimensions of the inner content.

**<span style="color: mediumpurple;">purple</span>** is the `padding`; the space between the content and the `border`. The padding also adds to the total width of the box, so if you set `padding: 10px;` and `width: 20px;` your element will be 30px long.

**black** is the `border` - `border` is the edge around the box. It's _thickness_, _style_ and _color_ can be defined.

**<span style="color: gold;'">yellow</span>** is the `margin`, the transparent area around the box, separating it from other elements.

_only the bottom margin is visible in our example. `padding`, `margin` and `border` can be defined for any or all sides of the box._

![](assets/images/padding_and_margin-bottom.png)


### Styling the header

Our page is gradually starting to come together. Let's make the header a bit more distinct by setting a background color and aligning its contents in the center of the page.

```css
header {
  background-color: #fdfdfc;
  text-align: center;
}
```

### Applying box properties to header

Expand the styling of the header so that it's viewably separated with a border and tweak the height and padding

```css
  border-bottom: 1px solid #e7e6e6;
  padding-top: 14px;
  height: 70px;
```

> Do you remember the border properties description from our previous lesson?


> Tweak the width of the border and refresh your page

_border: `thickness` `style` `color`;_

## Setting up the sidebar

Along with `width` and `height` we can also set `min-width`, `max-width`, `min-height` and `max-height`. These properties tend to be used to ensure that when the page is resized, it won't allow for it to be smaller or bigger than the specified property.

Let's add some content to our page. Add the following content inside  the `div` in out html file

```html
<div>
  <b> Me on the internet</b>
  <ul>
   <li><a href="https://www.facebook.com/augusta.ada.lovelace">facebook</a> </li>
   <li><a href="http://en.wikipedia.org/wiki/Ada_Lovelace">wikipedia</a> </li>
 </ul>
</div>
```

### Styling

Add a class to the div we just added to the page, so we can change its styling without impacting other elements.

```html
<div class="sidebar">
  <b> Me on the internet</b>
  ...
```

Start by adding a background color so we can clearly see the container

```css
.sidebar {
  background-color: #fdfdfd;
}
```

We want the sidebar to not take over the entire width of the page

```css
width: 30%;
min-width: 300px;
max-width: 320px;
```

Also, let's make it an inline-block and set some of its box properties

```css
display: inline-block;
padding: 25px 30px 20px;
border: 1px solid #e8e8ea;
margin-top: 55px;
margin-left: 20px;
```

###padding and margin
Padding and margin, can be set in a number of different ways

`padding: top right bottom left;`

`padding: top right/left bottom;`

`padding: top/bottom right/left;`

`padding: all;`

Alternatively, we can only set the side we want `padding-right: 20px`

_this also applies to the margin_

###more styling...

Specify a class `.social-media` in the `ul` element

```html
<ul class="social-media">
  <li><a href="https://www.facebook.com/augusta.ada.lovelace">facebook</a> </li>
```
Remove the list bullets and change the default margin and padding of the **u**nordered **l**ist

```css
ul.social-media {
  list-style:none;
  margin-left: 10px;
  padding-left: 20px;
}
```

Add a bottom border, to give the effect of a line to the individual list items and tweak its dimensions

```
.social-media li {
  border-bottom: 1px solid #b0afc0;
  padding: 10px;
  width: 200px;
}
```

> Tweak the properties and refresh the page.
> What happens when you remove the width or increase the padding?

## Pseudo classes

A pseudo class is a keyword added to selectors that specifies a special state. Using pseudo classes we can specidy different styling for different states of a link

```css
a:link
a:visited
a:hover
a:active
```

Order is **very** important. Always use the order descibed above if you want to style differently for all of the aboce states.
The most commonly used pseudo class for links, that we will also be using today it `a:hover`

## Styling links

We only want links who are within out list to be affected, so we will specifically style `li a`

```css
.social-media li a {
  color: #4c4066;
  text-decoration:none;
  text-shadow: 1px 0px #ffffff;
  border-left: 7px solid #fdcc38;
  padding-left: 10px;
}
```

### Styling link on :hover state

We only want to change the border color when hovering over the link. To avoid repeating ourselves an easy way to do that is by being more specific and using `border-left-color`. Since we have no other borders, we could also use `border-color`

**Remember to have a look [at the list of all CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference?redirectlocale=en-US&redirectslug=CSS%2FCSS_Reference) (mentioned in the previous tutorial) when working on styling. The properties are too many to remember!**

```css
.social-media li a:hover {
  border-left-color: #a26cd2;
}
```

## Almost there..

Our sidebar now looks almost perfect. Let's tweak a couple of small things so that the list description is aligned with the other elements and emphasized

```css
.sidebar b {
  margin-left:36px;
  color: #4c4066;
  font-size: 19px;
}
```

## Before we continue, some other nice to know box properties...

Add these to the `.sidebar` css

```css
border-radius: 6px;
box-shadow: 0 1px 1px 1px rgba(237, 235, 232, 0.4);
```
**border-radius** creates rounded corners

**box-shadow** creates a drop shadow effect allowing us to specify color, size, blur and offset


## Setting up the main container

You've done a great job so far! The sidebar is done and you know about box properties.
Time to add some content to the page.

Start by adding a div, wit the class main after the element wit the class `.sidebar`

```html
<div class="main">

</div>
```

In here, we will define the text we want to display about **Ada Lovelace**, using paragraphs to make the content easier to read.

### First, a little bit about her

```html
<p>My name is August Ada King. I'm the Countess of Lovelace.</p>

<p>I am a mathematician and a writer. People know me from my work on Charle's Babbage's early mechanical general-purpose computer, the Analytical engine. I wrote the first algorithm intended to be processed by a machine. In other words, I am the world's first programmer.</p>

<p>My mother, Anne Isabella Byron, was a great help to me as she helped me by promoting my interest in mathematics and logic, but I also never forgot about my dad, who moved to Greece when I was just an infant to help out in the civil war.</p>
```

Now that the content is there, we can see that again, we need to tweak the element to display as an inline block and set its width to make sure it appears next to the siedbar.

```css
.main {
  display: inline-block;
  width: 55%;
}
```

> Are the sidebar and container displayed next to each other? What happens when you tweak the width?


Add a bit more space around the main container and set the vertical alignment.

```css
  margin-left: 70px;
  padding-top: 60px;
  vertical-align: top;
```

> Try removing `vertical-align`. What happens?

### Let's focus on the content now

First, add a link so that anyone coming to your page can easily find out more about Charles Babbage. In the second paragraph, wrap his name in a link as shown below.

```html
<a href="http://en.wikipedia.org/wiki/Charles_Babbage">Charle's Babbage's </a>
```

Ada was the world's first programmer. We want that content to stand out. Add a span around it and set a class highlight, so the intention is obvious and other people working on the code of the page can easily understand it.

```html
<span class="highlight">I am the world's first programmer</span>
```

Set the styling for the highlight class
```css
.highlight {
  color: #4c61a9;
}
```

### More content

```html
<p>&#34;I do not believe that my father was such a poet as I shall be an Analyst; for with me the two go together indissolubly.&#34;</p>

<p>Throughout my life, mathematics have been my primary interest. I always question even basic assumptions by integrating poetry, another great love of mine, and science. I also have a keen interest in scientific developments and trends of my era like phrenology and mesmerism.</p>
```

The first paragraph is a quote; style it so it looks like a quote.

But first, add the css class

```html
<p class="quote">&#34;I do not believe....</p>
```

and then the styling

```css
.quote {
  border: 1px solid #E7E6E6;
  padding: 20px 27px;
  border-radius: 6px;
  background-color: #FDFDFC;
  color: #4C4066;
  margin-top: 40px;
  margin-bottom: 40px;
}
```

> Tweak the properties. Explain to your coach what each property does.

A poem about Ada

```html
<p>
 Charles Babbage wrote the following poem of me
 <br/>
 <span>
   Forget this world and all its troubles and if<br/>
   possible its multitudinous Charlatans-every thing<br/>
   in short but the Enchantress of Numbers.
 </span>
</p>
```

> Why do we need a line break (`<br/>`) before the span? What happens when we remove the line break?

Make the poem look different than the rest of the text. Add a css class `poem` to the span element and add styling

```css
.poem {
  font-style: italic;
  color: #4C4066;
}
```

### Some more information about Ada
```html
<p>The computer language <a href="http://en.wikipedia.org/wiki/Ada_(programming_language)">Ada</a>, was named after me. The Defense Military standard for the language, MIL-STD-1815 was also given the year of my birth.</p>

<p>These days, the British Computer Society runs an annual competitions for women students of computer science in my name. Also, the annual conference for women undergraduates is named after me. Google also dedicated its <a href="http://www.google.com/doodles/ada-lovelaces-197th-birthday">Google doodle</a> to me, on the 197th anniversary of my birth. </p>

<p>
 <a href="http://www.google.com/doodles/ada-lovelaces-197th-birthday">
  <img src="http://www.google.com/logos/2012/ada_lovelaces_197th_birthday-991005-hp.jpg" />
 </a>
</p>
```

That looks great but we can tweak the position of the doodle so its aligned in the middle and there is a bit more space between it and the page.

Add the class `google-doodle` in the last paragraph and set its styling.

```css
.google-doodle {
  text-align: center;
  margin-top: 90px;
  margin-bottom: 70px;
}
```

### Styling links

Previously, we specified the styling for link elements included within the sidebar. Now we can set a default link style that will be applied to all remaining elements.

```css
a {
  color: #7a3cb7;
}

a:hover {
  color: #a26cd2
}
```

## Setting up the footer
To complete our page, we will be adding some content and styling the footer

Within the footer, add an attribution to yourself and link to your twitter, facebook or any other place you want to.

```html
<p>Made by <a href="...">[your name]</a></p>
```

and add the final styling touches for the footer elements

```css
footer {
  height: 60px;
  padding-top: 20px;
  padding-left: 30px;
  background-color: #1f1430;
  border-top: 1px solid #eeeeee;
  margin-top: 20px;
}

footer p {
  color: #b0afc0;
  font-size: 14px;
}

footer a {
  color: #b0afc0;
}
```

> Do you have any questions?

### Bonus - Inspector

Have a look at the [example page](http://codebar.github.io/tutorials/html/lesson3/example.html "Ada Lovelace"). The heading and body of the page have some differences from the page we just created.

Use the inspector to have a look at `<body>` and `<h2>` and apply these changes to your page.

-----

This ends our third lesson. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
