---
layout: page
title: Coach's guide to tutorials
---

# Introduction

This document serves as a quick guide to coaches about what each
tutorial contains. It's intended to help advise students on which
tutorials are appropriate for them, and to guide coaches on what parts
of a tutorial the student should be focussing on.

# HTML & CSS

## Lesson 1: Introduction to HTML

### Prerequisites

- A web browser
- A text editor (see the getting started guide)

### Learning goals

- Understand what an element is and how their syntax works
  - Opening and closing tags
  - Attributes
- Understand what these things do:
  - Headings `h1`..`h6`
  - Block elements `p` and `div`
  - Links `a`
  - Lists `ul` and `ol`
  - Images `img`
  - Comments `<!-- -->`
  - Entities `&quot;`
- Some understanding of how URIs work in links and images

## Lesson 2: Introduction to CSS

### Prerequisites

- A text editor
- Able to read and write HTML syntax (no need to understand what the
  tags do)

### Learning goals

- Know what a CSS rule is and how its syntax works
- Understand these selectors:
  - type `a`
  - class `.foo`
  - id `#foo`
  - descendant `.foo a`
  - `:first-child`
- Some understanding of how specificity affects cascade order
- Understand these properties:
  - line-height
  - border, margin, and padding
  - float
  - background-color
  - height and width
  - text-align

## Lesson 3: Beyond the basics

### Prerequisites

- A web browser
- A text editor
- Able to read and write HTML syntax
- Able to read and write a simple CSS rule

### Learning goals

- Know what a CSS rule is and how its syntax works
- Know the difference between inline and block elements
- Have a simple understanding of the box model
- Understand that HTML is for structure and CSS is for presentation
- Be familiar with the following pseudo-classes
  - `:link`
  - `:visited`
  - `:hover`
  - `:active`

## Lesson 4: Layouts and formatting

### Prerequisites

- A web browser
- A text editor
- Able to read and write HTML syntax
- Able to read and write a simple CSS rule

### Learning goals

- Some understanding of how to use HTML to structure content in a document
- Know what the `header` and `footer` elements are for
- Understand floats
- Some understanding of the following position values:
  - `static`
  - `relative`
  - `absolute`
  - `fixed`
- Some understanding of z-index

## Lesson 5: Diving into HTML5 and CSS3

### Prerequisites

- A web browser
- A text editor
- Able to read and write HTML syntax
- Able to read and write a simple CSS rule

### Learning goals

- Understand these properties:
  - max-width, min-width
  - text-shadow
  - border-radius
  - box-shadow
  - background, background-size, background-image, background-attachment and background-repeat
  - `:not`
  - `:nth-child()`
- Understand the `em` and `px` units of measurement
- Understand rgba color and opacity

## Lesson 6: Advanced HTML5

### Prerequisites

- A web browser
- A text editor
- Able to read and write HTML5 syntax
- Able to read and write CSS3

### Learning goals

- Demonstrate ability to structure an HTML document using semantic HTML5 elements
- Know how to use the following elements
  - `section`
  - `article`
  - `aside`
  - `address`
  - `figure` and `figcaption`
  - `video` and `audio`
- Demonstrate use of a range of CSS properties
- Demonstrate use of web inspector

## Lesson 7: Responsive layouts and Media Queries

### Prerequisites

- A web browser
- A text editor
- Able to read and write HTML5 syntax
- Able to read and write CSS3

### Learning goals

- Understand what the viewport is
- Some understanding of mobile first principles
- Know how to use media queries to target different viewport sizes and media
- Demonstrate use of web inspector

# JavaScript

## Lesson 1: Introduction to JavaScript

### Prerequisites

- A text editor (see the getting started guide)
- Chrome or firefox

### Learning goals

- Some understanding of basic javascript syntax
- Understand:
  - what variables and expressions are
  - how to print things with `console.log`
  - Operators `+`, `-`, `*` and `/`
  - `if` statements
  - Operators `===`, `!==`, `>` and `<`
  - how to write and call functions
  - variable scope in functions

## Lesson 2: Beginning JavaScript

### Prerequisites

- Some understanding of basic javascript syntax
- Understand (from lesson 1):
  - what variables and expressions are
  - how to print things with `console.log`
  - how to call functions
- Understand basic HTML elements

### Learning goals

- Understand these things:
  - `while` and `for(;;)` loops
  - arrays
  - properties and methods
  - array methods `push`, `unshift`, `pop`, and `sort`
  - creating objects with initializers
- Know how to find DOM objects via `document`
- Know how to add new DOM objects to the page

## Lesson 3: Introduction to jQuery

### Prerequisites

- Understand basic HTML elements
- Some understanding of basic javascript syntax
- Understand (from lesson 1):
  - what variables and expressions are
  - how to write and call functions
- Understand (from lesson 2):
  - properties and methods

### Learning goals

- Understand these things:
  - constructing jQuery objects with CSS selectors
  - adding and removing elements with `append` and `remove`
  - changing elements with `text`, `val`, and `addClass`
  - adding event handlers with `on`
  - changing css properties with `css`
  - `Array.prototype.forEach`
  - `$(document).ready`
- Know how to write event handlers for keyboard and mouse events
- Know how to change web pages in response to events

## Lesson 4: HTTP Requests, AJAX, and APIs

### Prerequisites

- Understand (from lesson 1):
  - what variables and expressions are
  - how to write and call functions
  - how to print things with `console.log`
- Understand (from lesson 2):
  - properties and methods
- Everything in lesson 3 goals

### Learning goals

- Understand these things:
  - basic structure of HTTP requests and responses
  - basic structure of JSON apis
  - using `XMLHttpRequest` to send queries
  - using `JSON.parse` to consume responses
  - using `$.ajax` to send queries and consume responses

## Lesson 5: HTTP Requests, AJAX, and APIs (part 2)

### Prerequisites

- Lesson 4

### Learning goals

- Understand these things:
  - using `POST` and `PUT` requests
- Practice working with jQuery and json apis

## Lesson 6: Drawing in Canvas

### Prerequisites

- Understand basic HTML elements
- Understand (from lesson 1):
  - what variables and expressions are
  - how to write and call functions
  - how to print things with `console.log`
- Understand (from lesson 2):
  - properties and methods

### Learning goals

- Understand these things:
  - setting up a canvas for drawing
  - canvas coordinate system
  - drawing rectangles
  - drawing paths, using lines and arcs
  - transforming with rotate, translate, and scale

## Lesson 7: Introduction to Testing

### Prerequisites

- Understand (from lesson 1):
  - what variables and expressions are
  - how to write and call functions
  - how to print things with `console.log`
  - Operators `+`, `-`, `*` and `/`
- Understand (from lesson 2):
  - properties and methods

### Learning goals

- Know how to write tests with Jasmine
- Get some experience of writing unit tests

## Lesson 8: Building your own app

This isn't a tutorial like the others, it's a few pointers on how to
start building something independently.

### Prerequisites

- As a minimum, lesson 3
