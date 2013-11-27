---
layout: page
title: HTML Lesson 6
footer: true
---

##  HTML AND CSS - Advanced HTML5

### Recap

In the last lesson, we briefly introducted **HTML5** and **CSS3** with more focus on **CSS3**

### Today we will be focusing more on HTML5

The page we will build will look similar to this [example page](http://codebar.github.io/tutorials/html/lesson6/index.html "Women in Programming")

## But before we start...

### Required files

Download the files required to begin working through the tutorial from [here](https://gist.github.com/despo/7680133)


## HTML5 stuctural semantics

### Sectioning

In the previous lessons, we used some HTML5 elements, like `<header>` and `<footer>`, `<section>` . There are a lot more elements, some other ones that are quite commonly used are `<section>`, `<nav>` and `<article>`.

![](assets/images/html5-example.png)

 The purpose of structural semantics is that the elements describe parts of a website.

### `<section>`
A section is usually a blob of content. When you are considering using it, try and ask yourself if what you are thinking of defining as section has a natural heading. If not, you should propably avoid it. It is also used for sectioning elements.

If you just want to use it to style a part of the page, `<div>` would be more appropriate.

### `<article>`
The article element represents a component of a page that consists of a self-contained composition in a document, page, application, or site and that is intended to be independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content.

Besides content, an `<article>` could have a heading `<header>` and sometimes a `<footer>`. It's commonly used for blog posts, comments and stories.

### `<aside>`
aside can be used within different contexes. For example, if you are using it inside the page, the content needs to be  related to the context of the page. Some example usage would be list of posts (if the page displays posts), advertising - if that is related to the page, or event additional navigation). If you use it within an article element, then the context should be specifically related to that article.

### Other elements

#### `<address>`
The `<address>` provides contact information for the page, or part of the page. Some information we could include in it are email addresses, postal addresses, telephone details and other means of contact.

```html
<address>
  <a href="http://twitter.com/by_codebar">Codebar</a>
  <a href="http://twitter.com/despo">Despo</a>
  <a href="http://twitter.com/mariakhait">Maria</a>
</address>
```

```html
<address>
  For more details, contact
  <a href="mailto:feedback@codebar.io">Codebar</a>.
 </address>
```

This is **bad usage**, unless this information is directly relevant to the page.

```html
<address>
  Mr. Jack Random<br>
  HTML5 street,<br>
  The internets,<br>
  Word Wide Web,<br>
  Tel: +44 (0) xxx xxx
</address>
```

#### `<figure>` and `<figcaption`
`<figure>` can be used in conjunction with the `<figcaption>` element to describe images, pictures, illustrations and diagrams (and even more).
`<figcaption>` respresents a caption or legend for a picture.

```html
<figure>
 <img src="assets/images/pug.png">
 <figcaption>
  Sceptical pug
 </figcaption>
</figure>
```

![](assets/images/concerned-pug.png)

### `<video>` and `<audio>`
The `<video>` and `<audio>` tags were introduced to support build-in media and offer the ability to easy embed media into HTML documents.

When you include a video, if the browser used does not support it, it will fallback to the message you contain within the container

```html
<video src="path/to/video">
  Your browser doesn't support embedded video!
</video>
```

The same applies to the `<audio>`. You can also make the audio file start playing automatically by setting the **autoplay** property

```html
autoplay="autoplay"
```

## Getting started with out page

Today, we will be following a different approach to building our page.

You now know enough to build the page from scratch. Using this [page](http://codebar.github.io/tutorials/html/lesson6/index.html "Women in Programming") try and build it yourself, using the HTML5 elements we mentioned today and what you have learned in the previous tutorials.


### Links and resources you will be needing

```
Hi I'm Ada Lovelace - http://codebar.github.io/tutorials/html/lesson3/example.html
Grace Hopper - http://codebar.github.io/tutorials/html/lesson4/example.html
Anita Borg - Where are we and where are we going. - http://codebar.github.io/tutorials/html/lesson4/example.html
Grace Hopper on Letterman - http://codebar.github.io/tutorials/html/lesson6/assets/images/grace-letterman.mp4

```

Also, dont forget to refer to the [previous tutorials](http://codebar.github.io/tutorials)

> Don't afraid to ask help from your coach.

> Remember to use your browser inspector!

> Use Chrome to test the video playing, there is a small issue with playing the video on Firefox.

## CSS Bonus

Rotate elements using transform

```css
  transform: rotate(20deg);
```


-----
This ends our sixth lesson. How did you find the introduction to HTML5? Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
