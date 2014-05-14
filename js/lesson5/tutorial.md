---
layout: page
title: HTTP Requests, AJAX and APIs (part 2)
---

This is the second tutorial on HTTP Requests, AJAX and APIs. You can find the [first part](../lesson4/tutorial.html) of the tutorial.

## Todays lesson

In the last lesson we've explained an HTTP Requests is when we ask the server some information.

In the two exercises we used the **GET** request. Today we will be building a Hangman game using an existing API that will handle the game logic for us.

We will be using the **POST**, **PUT** and **GET** requests, and other things we've learned in the last couple of lessons.


| Verb | Description |
| ---- | ----------- |
| **GET**  | fetching a resource (e.g. /index.html  will return the HTML of the page) |
| **PUT**  |  updating an existing resource. |
| **POST** |  Create a new resource. |


##Request using JQuery

To use **POST** and **PUT** requests we must specify the `type` in the `ajax()` call that we introduced in the previous lesson.

You can also specify any `data` as a JSON object.

```js
$.ajax({
  type: request_type,
  data: { field: 'value',  other_field: 'other value' }
  ...
});
```

##Exercise - Hangman!

![](assets/images/hangman.png)

[Download](https://gist.github.com/despo/c76a7bd0bef66713a9ac/download) the exercise files or clone them directly from Github `git clone https://gist.github.com/c76a7bd0bef66713a9ac.git`

###API
| type | resource | parameters | description |
| ---- | -------- | ---------- | ----------- |
| **POST**  | `http://hangman-api.herokuapp.com/hangman` | - | Create a new game |
| **PUT**  | `http://hangman-api.herokuapp.com/hangman` | `{ token: game token, letter: guess }` | Guess a letter |
| **GET**  | `http://hangman-api.herokuapp.com/hangman` | `{ token: game token }` | Get solution |

###What we will be doing:

1. Create a new game

    1. Issue **POST** request

    2. Update the displayed string on the page and store the token
        - Use the hidden field with the class `token`

    3. Don't allow the user to start a new game, hide the **New game** bubtton

2. Interact with the API to try out different guesses

    1. Issue **PUT** request
        - Use `data.correct` to check if the response was successful or not

    2. Update the displayed word

    3. Update the stored token

    4. Update remaining attempts and display all guesses
        - If an attempt is not succesful, appent it to the `$('.attempts')` using a span with the class `wrong`
        - You can then find out how many wrong attempts there wer using `$('.wrong').length+1;`

3. On the 7th failure, retrieve the solution using the **GET** request

    1. Display the solution, hide the input field and allow a user to start a new game

4. **Bonus** don't process letters, guesses that have already been attempted or empty space 

    1. You can use JQuery's `$.isNumeric(character))` to check if a letter is a number

    2. `trim()` removes all space around a string. You can apply `trim()` and check for the length to make sure the guess is one character long

    3. All the attempted guesses are already in `.attempts`. You can use `indexOf(character)` to check if it's contained in a string.

    4. Add the class `error` to the letter field when the character is not allowed.

### Other help

- Use `toLowerCase()` for comparing strings as `a` is not the same as `A`

Here is our version of [Hangman](../../examples/hangman/index.html).

---
This ends our **HTTP Requests, AJAX and APIs** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
