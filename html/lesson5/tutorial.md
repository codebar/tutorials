---
layout: page
title: HTML Lesson 5
footer: true
---

##  HTML AND CSS - Diving into HTML5 and CSS3

### Recap

In the previous lessons, we spoke about **H**yper **T**ext **M**arkup **L**anguage and **C**ascading **S**tyle **S**heets.
**HTML** defines the _structure_ of a website and **CSS** the _presentation_. We also discussed the box model, inline and block elements, pseudo clases and went into more details about CSS Layouts and formatting.

### Today we will be building a website and will focus more on HTML5 and CSS3 specific elements

The page we will build will look similar to this [example page](http://codebar.github.io/tutorials/html/lesson5/example.html "Anita Borg")

## But before we start...

### Required files


Download the files required to begin working through the tutorial from [here](https://gist.github.com/despo/7565600/download)

## Getting started

Today, we will create a page dedicated to **Anita Borg**.

Set her name as the title that will be displayed on the browser's bar.

```html
<title>Anita Borg</title>
```

Also, set a title for your page

```html
<h1>Anita Borg</h1>
```

Before we continue any further, format the existing content of the html file to use paragraphs `<p>`

> Do you remember how to do that? Ask your coach to help you out if you are having any problems.

## Main styling

Set the font family and reset the padding and margin of the page

```css
body {
  font-family: Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
```

Let's wrap the contents in a `div` element with the id `wrapper` so we can tweak its dimensions and center it.

> Did you remember to close the element you just added?

Style the wrapper

```css
#wrapper {
  width: 90%;
  max-width: 1040px;
  margin: 0 auto;
  min-width: 900px;
}
```

Try tweaking the style.

> Remove the `max-width` and reload the page


> Remove the `min-width` and try resizing the page


> Do you notice how the content no longer centers when removing the `margin` property? Ask your coach to explain why.


## Text shadow

Text shadow, adds a drop shadow to the header. This only works with CSS3 compatible browsers, so unless you are using a really [old browser](http://caniuse.com/css-textshadow) or IE9, you should be able to see the results.

`text-shadow: horizontal-shadow vertical-shadow blur color`

**blur** is optional, so you don't need to set it.

### Style the header

```css
h1 {
  margin: 15px 0;
  font-size: 85px;
  color: #6f6c7c;
  text-shadow: 1px 1px #72629a;
}
```

Tweak the text-shadow property, and add a blur of 2px

> Can you see the difference? Keep the version you like the most.

### Adding a left container

Add some images of Anita and some links to refer to our resources.
We want this to be on the left hand side.

Add this right after the beginning of the element with the id `wrapper`

```html
<div>
  <img src="anita-top.jpg"/>
  <img src="anita-bottom.jpg"/>
  <div>
    <a href="http://gos.sbc.edu/b/borg.html">reference</a>
    <a href="http://en.wikipedia.org/wiki/Anita_Borg">wikipedia</a>
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

This doesn't seem to work. Wrap the content below in a `div` with the id `container` and change the position, dimensions and the display attribute.

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

Great! Now our images and links are on the left, and the main content on the right.

### Border-radius

[border radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius) enables us to create rounded corners for our elements. In the past, multiple divs and the use of images was required to achieve that effect.

`border-radius: arc`

Now that we know what border radius is, let's use it to add a nice frame to the first image.

Wrap the first image in a `div` with the class `frame`

```css
.frame {
  padding: 5px 15px 15px;
  background-color: white;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-top: none;
}
```

As we only want the bottom right and bottom left corners to be rounded, we can be more specific when setting the border radius so it only applies to those corners.

```css
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
```

Let's also round the corners of the second picture. First, a class `rounded` to it.

```css
.rounded {
  border-radius: 10px;
}
```

Rounded corners look much nicer, don't you agree?

### Adding some subtle styling to the page

Small details make the difference.

Add a top and bottom border to the first image

```css
#left-bar .frame img {
  border-top: 2px solid #e5e5e5;
  border-bottom: 2px solid #e5e5e5;
  padding: 7px 0;
}
```

Also add a top border to our page, to make it a bit more polished. Add this to the style of the `body`

```css
  border-top: 5px solid #4c4066;
```

### Background

Background is not a new CSS property, but in CSS3 it had a lot more capabilities. You can set multiple images, specify their dimension,  position and attachment.

To set a background you can use

`background: url(path/to/image)`

to set multiple backgrounds, you simple need to specify them separating them by commas
`background: url(path/to/image), url(path/to/other/image), ...`

You can also set different properties for your backgrounds, by defining them in a similar comma separated way.

`background-size: first_image_size, second_image_size, ...;`

`background-attachment: fixed, inherit, ...`

#### Let's try this out.

First lets set two background images, the first positioned on the right and the second on the left.

```
background: url('assets/images/background-right.jpg') right top no-repeat,
            url('assets/images/background-left.jpg') left no-repeat;
```

By default, a background image repeats itself to fill in the container. We don't want that, that's where the **no-repeat** property we specified comes into place.

Now, let's set the dimensions.

```css
background-size: 420px auto, auto 900px;
```

Awesome. Now we can see Anita's picture properly.

But when we scroll, we don't want the background to change. To fix this, we must set the images as fixed. We can do that by specifying the `background-attachment` property

```css
background-attachment: fixed, fixed;
```

> Try scrolling. Doesn't that look great?

### Styling the links

Do you remember how we styled our links last time? Today we will try and make them look like buttons.

First, let's give their container element a class called `references`

Add a top margin, so there is some space between them and the image above and center them.

```css
.references {
  margin-top: 30px;
  text-align: center;
}
```

Now, set a class `btn` to both of the links inside the `references` div and style that.

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

The text in our page, is one of Anita Borg's speeches. Lets add a brief biography, at the top of the page, just below the title `h1`

```html
<p>
Anita Borg believed that technology affects all aspects of our economic, political, social and personal lives. A technology rebel with a cause, in her life she fought tirelessly to ensure that technology's impact would be a positive one. It was this vision that inspired Anita in 1997 to found the Institute for Women and Technology. Today this organization continues on her legacy and bears her name, The Anita Borg Institute for Women and Technology.
</p>
```

Lets style that. First, let's assign it a class `about`

```css
p.about {
  font-size: 0.9em;
  font-style: italic;
}
```

### What is an em

The name of an `em` doesn't really stand for anything. It was originally used to describe that it was equal to the **M** character as it was commonly casted as the full-width of the square "block which are used in printing presses.

By using `em` instead of `px` to set the font-size, we are keeping it relative to the default font size. So 0.9em is 0.9 times the size that would have otherwise applied to that container.

> Change the height using the inspector to 2em. Can you notice the change?

### Not selector

Increase the `line-height` of all other paragraphs. We can do this with another very smart selector, The  **not** selector.

The **not** selector, finds all elements who don't match the specified description, in our case, all paragraphs that don't have a class `about`

```css
p:not(.about) {
  line-height: 1.3em;
}
```

### Anita's speech

The speech that we are using in our page, is titled **Where We Are And Where We Are Going**.
To make our content more clear, wrap the remaining paragraphs (all but the `about`) in a div with the class `speech`

Also, add its title using an `h2` heading

> That should come right after you open up the `speech` div

### Achievements

Anita was an amazing personality and a person who contributed greatly to women in technology.
Let's list some of her achievements, just after the `about` paragraph

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

It's nice to use descriptive classes, so its easy for someone else looking at our code to understand what each section is about. Add a class `achievements` to the external `div` we just added.

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

Making it prettier

```css
.achievements li {
  padding: 10px 40px;
  font-size: 0.75em;
}
```

### CSS - Even and Odd rules, applying styling to alternate elements

We will finish off, by styling every second child element of our list.
Thanks to some great CSS selectors, this is quite easy to do.

We can use

`:nth-child(odd)` and `:nth-child(even)` to do that.

In our case, we only want to change the style of every odd row. Achieving that is quite simple!

```css
.achievements li:nth-child(odd) {
  background-color: rgba(176, 175, 192, 0.2);
}
```

> Try changing odd to even

## But before we end our lesson

### RGB colors and opacity

As you may have noticed, in the last example, we didn't define the color as we usually do, using hex codes. Instead, we used **rgba**. This, enables us to define the opacity of a color as well.

`rgba(rgb code, opacity)`


`rgb(176, 175, 192);` is another way of defining the color with the hex code `#b0afc0`

You can find both the rgb and hex values of a color through [http://0to255.com](http://0to255.com).

> Try changing the last attribute of the `rgba` we just set.
> What happens when you set it to 1?
> What happens when you set it to 0?


-----
This ends our fifth lesson. How did you find the introduction to CSS3? Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.


