---
layout: page
title: HTTP Requests, AJAX and APIs (part 2)
---

This is the second tutorial on HTTP Requests, AJAX and APIs. You can find the [first part](../lesson4/tutorial.html) of the tutorial.

## Todays lesson

In the last lesson we learnt that an HTTP Request is when we ask the server for some information.

In the two earlier exercises we used the **GET** request. Today we will be building a Hangman game using an existing API that will handle the game logic for us. Additionally, we will explore modern methods like the Fetch API for making HTTP requests in JavaScript.

We will be using the **POST**, **PUT** and **GET** requests, and other things we've learned in the last couple of lessons.


| Verb | Description |
| ---- | ----------- |
| **GET**  |  Fetching a resource (e.g. /index.html  will return the HTML of the page) |
| **PUT**  |  Updating an existing resource. |
| **POST** |  Create a new resource. |


## Request using jQuery

To use **POST** and **PUT** requests we must specify the `type` in the `ajax()` call that we introduced in the previous lesson.

You can also specify any `data` as a JSON object.

```js
$.ajax({
  type: request_type,
  data: { field: 'value',  other_field: 'other value' }
  ...
});
```

## Modern Approach: Fetch API

The Fetch API is a modern way to make HTTP requests in JavaScript. Unlike $.ajax(), Fetch API uses Promises to handle responses, making it more readable and flexible.

So Why Use Fetch?

✔ Uses Promises, making it easier to handle responses. ✔ More readable and modern compared to older methods. ✔ Supports asynchronous operations efficiently.

```js
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

## Interactive Example: Fetch GitHub User Data 

You can paste the code below into online editors like JSFiddle or CodePen.
For example, you can search username codebar in the input bar.


```html
<input type="text" id="username" placeholder="Enter GitHub username" />
<button id="fetchButton">Get User Info</button>
<div id="userInfo"></div>
```

```js
document.getElementById('fetchButton').addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const url = `https://api.github.com/users/${username}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('userInfo').innerHTML = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
        <p><strong>Followers:</strong> ${data.followers}</p>
        <img src="${data.avatar_url}" alt="Avatar" width="100" />
      `;
    })
    .catch(error => {
      document.getElementById('userInfo').innerHTML = `<p>${error.message}</p>`;
    });
});
```


## Exercise - Hangman!

![](assets/images/hangman.png)

[Download](https://gist.github.com/despo/c76a7bd0bef66713a9ac/download) the exercise files or clone them directly from Github `git clone https://gist.github.com/c76a7bd0bef66713a9ac.git`

### API

| Type | Resource | Parameters | Description |
| ---- | -------- | ---------- | ----------- |
| **POST**  | `http://hangman-api.herokuapp.com/hangman` | - | Create a new game |
| **PUT**  | `http://hangman-api.herokuapp.com/hangman` | `{ token: game token, letter: guess }` | Guess a letter |
| **GET**  | `http://hangman-api.herokuapp.com/hangman` | `{ token: game token }` | Get solution |

### What we will be doing:

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
        - Append each attempt to the `$('.attempts')` using a span
        - If the attempt is successful, include the class `correct` in the span; if it is unsuccessful, include the class `wrong`
        - You can then find out how many wrong attempts there were using `$('.wrong').length+1;`

3. On the 7th failure, retrieve the solution using the **GET** request

    1. Display the solution, hide the input field and allow a user to start a new game

4. **Bonus** don't process numbers, guesses that have already been attempted or empty space

    1. You can use jQuery's `$.isNumeric(character))` to check if a letter is a number

    2. `trim()` removes all space around a string. You can apply `trim()` and check for the length to make sure the guess is one character long

    3. All the attempted guesses are already in `.attempts`. You can use `indexOf(character)` to check if it's contained in a string.

    4. Add the class `error` to the letter field when the character is not allowed.

### Other help

- Use `toLowerCase()` for comparing strings as `a` is not the same as `A`

Here is our version of [Hangman](../../examples/hangman/index.html).

---
This ends our **HTTP Requests, AJAX and APIs** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

## Extras

Now that you are familiar with HTTP requests, AJAX and APIs, how about you go away and create a webpage that pulls in all instagram pictures with a certain hashtag.

Or embed a google map onto a webpage with it pointing to a destination of your choice in London.
