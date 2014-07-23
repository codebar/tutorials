---
layout: page
title: Introduction to SQL
---

## This is a draft for prototyping the lesson. The main work is in tasks.txt. By all means, work/read through this, but check tasks.txt for what is actually in the lesson, not just old text that's not been deleted.

## What is SQL?

**SQL** is a language that enables searching a database, managing connections between related sets of data, and updating existing data.

Some common usages around the web are:

Some examples ...
#### Pretty much any major site !
More examples ...




### Today we will be focusing on understanding the basics

We're going to work with a db that represents a pet store that has been in business for a while.

We'll start by seeing how powerful SQL can be at showing info about the store's business. Later, we will use SQL to store data for new customers and new pet purchases.


## But before we start...

### Required files

Download the files required to begin working through the tutorial from [here](https://gist.github.com/despo/0b674ec9d5ae9cb09704/download)

NOTE: need to decide what initial state of db will be.

NOTE: considering two start points/gists, one with tables & data, one without

For now - install sqlite, and download store.db.

    This is the start point with tables already created, which contain data

### Setting up tables

We'll deal with the most common case of using SQL, which is to work with a relational db. SQL can be used to work with other data sets, but working with dbs is most common.

In a relat db, all data exists in one or more tables - no data exists anywhere else. This will become clear to you soon.

## Let's try out some SQL!

We'll start by just outputting some data in our tool's environment.

First open a command prompt and run **sqlite3**.

```
sqlite3 store.db
```

At the command prompt, type these lines

```
.mode column
```

```
.headers on
```

> The SQL environment does not execute any command until it meets a ";". If it doesn't respond to a query, look to see if the semi-colon is there.

Let's write out something in the console, to make sure that our data is in place and working!

```sqlite>
select count(*) from customers;
```

This should respond with 10.

##Tables and Fields

##NOTE: here or at the start of Queries below, we need to describe briefly the customers table.

### What are Tables?

A table can be considered to be similar to many excel worksheets. each column stores an item of data, such as name, email, city, etc. a row stores all data for a single, entry in that table. People who work with db's usually refer to columns as fields, and rows as ... rows.

### What are fields?

There are different types of fields that we can declare:

- **text** - group of characters

Field definition for "items" table

```
name text;
```

The field "name" has the type of text.

> If you feel it helps to to see this definition in context, ask your coach to show you.

- **numbers**

Field definition for "orders" table

```
id integer;
```

The field "id" has the type of integer (a fancy word for a whole number).

Field definition for "orders" table

```
amount numeric;
```

The field "amount" has the type of numeric (so that this field can store prices).



##Queries

!! CHECK
A query is any statement that makes a search on a table, and returns data. We say that data "matches" our query.

### Query data - default ordering

To query data, we use the select keyword in this format:

```
select * from table_name;
```

When we search for data, the db does not make a guess about where to look. We have to tell the db the tables to search in. We replace "table_name" in "from table_name" by a specific table name.

 The * tells the db to return info on all fields.

 Let's understand this better by building some simple queries.


#### View all data in a table

let's see all the people who've visited our store.

```
select * from customers
```

This command is powerful, and shows us a lot of data. Perhaps a bit too much to make sense of?

We can fix that easily.

### Organise the data so it makes more sense

#### View specific fields only

SQL is very powerful at providing us with a lot of data for a simple query, but sometimes it's hard to see the wood for the trees.

We can cut down the amount of data by specifying the column names of the data that interests us. Try that out now.

```
select name, email, city from customers
```

Did you find that was a bit easier to read through? From now on, decide for yourself whether to use * or to name the columns.

#### Ordering data

That list still isn't very readable, is it?

We can use "order by" to request that the computer arranges the data in a way  more friendly to us humans.

```
select name, email, city from customers order by name
```

That was a lot better, wasn't it? We can user order by with any of the fields in a table. Have a go at this, making a small change to our last query. Your coach can help you.

#### Ordering data this way and that

The ordering was useful, but perhaps we prefer to look at the data in reverse order. By default, an order by query is assumed to have "asc" at the end. This means ascending order. We can put this at the end to make our query clearer, if we want.

A bit more usefully, if we put "desc" at the end, meaning descending, the order is reversed. Try out asc and desc with the order by queries we just used. Ask your coach if you're not sure of anything.


### What's in store?

This table that stores info on pets is called "items". Write a query that shows info for all the pets and associated products, then adjust that query to show them alphabetically.

> If you're not sure, take a look at the start of the Queries section again. Begin with a very simple statement to get started.

That's excellent. Maybe you think of another interesting query for this table, using what we've learnt?

```
if (codebarIsAwesome) {
  console.log("Codebar is AWESOME!");
}
```

## sql work ends here for now - more to come soon !

Isn't that cool! :)

We can also write a condition that checks for the opposite, so, not true

```js
if (!codebarIsAwesome) {
  console.log("Codebar is not so awesome :(!");
}
```

> This should  not output anything. Try setting `codebarIsAwesome` to false before running this expression.

> Did you use `var`? Since we have already declared our variable, you shouldn't need to do that.


Conditions work with a number of evaluated statements. Some of the comparisons we can use are

#### Equality `==`

```js
var apples = "apples";
var oranges = "oranges";

if (apples == oranges) {
  console.log("Apples and Oranges are the same thing!");
}
```

This should not output anything, **apples** and **oranges** are not the same thing!

#### Inequality `!=`

```js
if (apples != oranges) {
  console.log("Apples are not Oranges!");
}
```

#### Greater than `>`

```js
var coaches = 20;
var students = 24;
var pizzas = 25;

var people = coaches + students;

if (people > pizzas) {
  console.log("We have more people than pizzas!");
};

if (students > pizzas) {
  console.log("But we have more students than pizzas! Let's not give the coaches any food.");
};
```

#### Less than `<`

```js
if (coaches < students) {
  console.log("We have less coaches than students.");
}
```

### If Else statements

An **if else** statement enables us to run alternative actions when our condition is not true

```js
if (people > pizzas) {
  console.log("We have more people than pizzas. That's not very good :/");
} else {
  console.log("We have waaay too much pizza. That can never be bad! :)");
}

```

> Try changing the numbers. What happen when you set students to `2`. Do you see the else part of the statement being evaluated?

## Functions

Functions are a major part of every programming language. They enable us to create meaningful snippets of code that we can rerun without having to define the same things again.

Let's write a small function that prompts someone accessing our page with a message.

Let's to this in steps. First create a function:

```js
function hello() {
 console.log("Hello!");
}
```

If you refresh the browser, you will notice that nothing is outputted. This is because we must call our function in order for it to be evaluates and give us a result.

```js
hello();
```

Now let's extend out function to take in **arguments**. We want it to say hello to different people.

```js
function hello(name) {
 console.log("Hello " + name + "!");
};
```

If you now run `hello();` you will notice that it says "Hello undefined".

>  Why is that? Do you know? Have a look at **undefined variables*** if you don't remember

Ok, so let's call the function with our name.

```js
hello("Codebar");
```

> Call the function with your name and your coach's name. Do you see the output?


Let's write an improved version of this that shows a small dialog with the message.

> We'll only give you a part of the function, try to make this work.

```js
function popupHello() {
  alert("Hello " + name);
}
```

Now that you fixed the problem, call the function from you browser's console!

> Don't add the call to the function in your `script.js`(It will get annoying to see it ever time you refresh!)

### Multiple arguments

So far we've tried out functions with no and one argument. But no one limits how many we can use.
Let's try writing a function with multiple arguments.

```js
function whatIAmDoingToday(coach, place) {
 console.log("Today, I am at " + place + " and I am learning a bit of JavaScript with the help of " + coach);
}
```


### Returning values

Besides outputting, which is nice when learning as it makes it easier to see the result, we can also `return` values.

Create a function that adds two numbers together

```js
function addNumbers(x, y) {
  x + y;
}
```
> Try to run this. Not what you expected is it?

To fix this, we must explicitly use `return` when we want the function to give us back the result

Change the function to

```js
return x+y;
```

> Anything after the return will be ignored. What happens when you add some content before the end of your function but after defining `return`?

We can also call functions, from functions. What do you expect to get when running `addNumbers(addNumbers(1,2), 4);`? Try it out.

### Scope

When we declare variable within a function, they are not visible outside it.

```js
function subtractNumbers(x,y) {
  var result = x-y;
  return result;
}

subtractNumbers(10,3);
console.log(result);
```

But, when we declare them outside the function, they are

```js
var result;
function subtractNumbers(x,y) {
  result = x-y;
  return result;
}

subtractNumbers(10,3);
console.log(result);
```

## Bonus
Now you know enough to write your own little **SQL** program!

With help from your coach try and write a program to do the following
- Store your name in a variable

- Store information about yourself in a variable

- Store how many codebar sessions you have attended

- Make the program output
  ```
  Hi! My name is _name_.
  A couple of things about me _about you_.
  I have attended _number of sessions_ Codebar sessions so far!
  ```

- if the number of sessions attended is 0
  ```
  This is the first time I'm attending Codebar!
  ```
- If the number of sessions attended is more than 0
  ```
  This is not my first time here. I <3 Codebar!
  ```

---
This ends our **Introduction to SQL** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.







Let's output the value of pi.

```js
var pi = 3.14;

console.log("The value of pi: " + pi);
```

Now let's output the current year, and auto-calculate the value of the next year using **addition**

```js
var year = 2013;
var nextYear = year + 1;

console.log("We are in " + year +", but " + nextYear + " is just around the corner!");
```

That's great! We can combine strings together and add up numbers.

> Is something not working? In JavaScript you must make sure to end every line with a *;*

- **booleans** - true/false

```js
var codebarIsAwesome = true;
var weatherIsAmazing = false;

console.log("Is Codebar AWESOME? " + codebarIsAwesome);
console.log("Is the weather in London amazing? " + weatherIsAmazing);
```

- **undefined variables**
If no value is set for a variable, then it won't have a type until you set it.

```js
var iDontHaveAValue;

console.log("What kind of variable am I? " + iDontHaveAValue);
```
