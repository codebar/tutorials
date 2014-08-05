---
---
layout: page
title: Introduction to SQL
---

## This is a draft for prototyping the lesson, copied from a Javascript tutorial. The queries are written in tasks.txt. By all means, work/read through this, but watch out for old text that's not been deleted or adjusted to suit sql queries.

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

## Set up our SQL environment

First open a command prompt and run **sqlite3**.

```
sqlite3 store.db
```

At the new command prompt, type these lines:

```
.mode column
```

```
.headers on
```

```
.width 15
```

These settings make the data easier to view.

## Let's try out some SQL!

Let's write out something in the console, to make sure that our data is in place and working!

```sqlite>
select count(*) from customers;
```

This should respond with 10. This shows we have the db set up correctly. Hooray!

> The SQL environment does not execute any command until it meets a ";". If it doesn't respond to a query, look to see if the semi-colon is there.



##Tables and Fields

##NOTE: here or at the start of Queries below, we need to describe briefly the customers table.

### What are Tables?

A table can be considered to be similar to many excel worksheets. each column stores an item of data, such as name, email, city, etc. A row stores all data for a single, entry in that table. People who work with db's usually refer to columns as **fields**, and rows as ... **rows**.

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

Field definition for "orders" table:

```
id integer;
```

The field "id" has the type of **integer** (a fancy word for a whole number).

Field definition for "orders" table:

```
amount numeric;
```

The field "amount" has the type of **numeric** (so that this field can store prices).



##Queries

!! CHECK
A query is any statement that makes a search on a table, and returns data. We say that data "matches" our query.

### Query data - default ordering

To query data, we use the **select** and **from** keywords in this format:

```
select * from table_name;
```

> Jargon - we often refer to a statement that contains "select" as a "db query", or just a "query".

When we search for data, the db does not make guesses about where to look. We have to tell the db exactly which tables to search. We replace "table\_name" by a specific table name.

 The * tells the db to return info on all fields.

> Jargon: the "*" is known as the "wildcard" operator. Roughly speaking, to SQL it means "everything".

 Let's understand this better by building some simple queries.


#### View all data in a table

Let's see all the people who've visited our store:

```
select * from customers;
```

This command is powerful, and shows us a lot of data. Perhaps a bit too much to make sense of it all? We can fix that easily.

### Organise the data to make it clear

#### View specific fields only

SQL is very powerful at providing us with a lot of data for a simple query, but sometimes it's hard to see the wood for the trees. We can cut down the amount of data by specifying the field names of the data that interests us. Try that out now.

```
select firstName, lastName, email, city from customers;
```

Did you find that was a bit easier to read through? From now on, decide for yourself whether to use * or to name the columns.

#### Ordering data

That list was an improvement, but we can make it more readable yet, by adjusting the query further.

We can use **order by** to request that the computer arranges the data in a way  more friendly to us humans.

```
select firstName, lastName, email, city from customers order by lastName;
```

That was a lot better, wasn't it? We can use order by with any of the fields in a table. Have a go at this, by making a small change to our last query. Your coach can help you.

#### Ordering data this way and that

The ordering was useful, but perhaps we prefer to look at the data in reverse order. By default, an order by query is assumed to have **asc** at the end. This means ascending order. We can put this at the end to make our query clearer, if we want.

A bit more usefully, if we put **desc** at the end (short of descending), then the order is reversed. Try out asc and desc with the order by queries we just used. Ask your coach if you're not sure of anything.


### What's in store?

The table that stores info on pets and associated products is called **items**. Write a query that shows info for all the our pets and products, then adjust that query to show them alphabetically.

> If you're not sure, take a look at the start of the Queries section again. Begin with a very simple statement to get started. Your coach can help you.

That's excellent. Maybe you can think of another interesting query for this table, using what we've learnt?

### Limiting data (max number of rows shown)

Sometimes, as well as limiting the columns shown, we only want to see some of the rows. For instance, when viewing customers, perhaps we'd like to see only those at the start or end of the list. We do this with **limit**.

Enter this to view the first five customers (by lastName):

```
select firstName, lastName, email from customers order
by lastName limit 5;
```

To view the last five customers, we first reverse the list order as above, then apply the limit:

```
select firstName, lastName, email from customers order
by lastName desc limit 5;
```

### Counting our customers

As well as providing data, SQL can do some counting for us, too. It can be hard to count the number of results by looking at the screen. It's much easier to let SQL do that for us.

To get a count of our customers we use the **count()** function.

> Jargon: a "function" performs some action. You can spot them because they have rounded brackets after the name. The item between the brackets affects the function in some way. Here we pass the wildcard.

```
select count(*) from customers;
```

This was the test function we ran after setting up the db. The result is still 10.

## Limiting data (by comparing the data to values)

Up to now, the limits that we've applied with our queries have not been based on the data itself. Applying such limits is a very useful technique, and it is easy to do.

We'll do this now, to search for customers by area of the UK.

For instance, when viewing our customers, perhaps we'd like those who've come all the way from Scotland. We achieve this by using **where** with **comparison operators**.

Here's an example to find the customers who live in Scotland:

```
select firstName, lastName from customers where country == "Scotland";
```

Let's understand this query a bit better:

#### Equality `==`

The query that we just ran uses the equality operator. When we enter this query, the db goes through the table, one row at a time. For each row, the db checks if the specified field (in this case, "country") matches the value ("Scotland"). If so, the row is printed.

Now, can you write a query that tells us how many customers are from England? You've understood enough to have a go. Ask your coach if you have any questions.

> You'll need to use "count(*)", which we learnt about just recently.

#### Inequality `!=`

Let's find out how many customers visited us from anywhere else but England. We use the inequality operator this time, but the db checks row by row, exactly as before.

```
select firstName, lastName from customers where country != "England";
```

Notice how this query finds customers from multiple places, and only ignores those from England. This is much easier than us having to do this with the equality operator.


#### Greater than `>`

We are now going to execute some comparisons on a table that stores numeric amounts, representing a customer payment. This table is the **orders** table, which has a field named **amount**.

This table stores the amount paid for a purchase by a specific customer. The customer is represented in the table by the **customer_id** field .

> Jargon: we use the customer's id field to specify a customer, which is more efficient for storage. But more importantly, it means we do not duplicate info about the customer in the db. To do this would both require more effort to enter info to db, and increase the chances of a mistake where the data is not the same in both places. Such mistakes might cause queries to give incorrect results. This avoidance of duplication is called **normalisation**.

If you use count(*) on the orders table, it shows there are 50 orders.

Now assume that we want to know the orders of &pound;35 or more. If we perform "select * from orders", this is not easy to count. Even if we add on "order by amount", it's a fiddly thing to do.

For an instant and correct answer, we use the **greater than** operator:

```
select count(*) from orders where amount > 35;
```

That's a lot quicker and easier!

#### Less than `<`

The **less than** operator works in the same way:

```
select count(*) from orders where amount < 35;
```

> We could have obtained the same result by switching "amount" and "35". Usually though, it's best to write the query in the way it sounds best to you.


#### Similarity `like`

The **like** operator is very powerful when searching text fields. It is very common to look for text that matches some pattern, e.g. a field that starts with some text.

In the items table, we use the name field to store item codes - "rabbit01", "food01", etc. Here, we use "LIKE", along with **"&#37;"** to represent any or no characters, to search for all the pets:

```
select * from items where name like "rabbit%";
```

Experiment with "%" in some other queries that use "like", so you get a feel for how it works.


### Make SQL do some maths work for us (using maths functions)

We are starting to see some of the benefits of using a db, and now it's time to see that we can make the computer
perform calculations on numeric fields from multiple rows.

#### Total of values `sum()`

Earlier, we saw that the store has received 50 amounts from our customers, using "select amount from orders;". Perhaps that query provides a rough idea of how much money the store has brought in, but adding up all those numbers would tax most people's mental arithmetic.

In SQL, it's easy to add up the values from several rows using the sum() function. We say that "amount" is "passed to" the function - by placing with between the brackets, the function works with this field:

```
select sum(amount) from orders;
```

That was easier that doing it ourselves!

#### Mininum values `min()`

SQL finds the minimum value with the min() function:

```
select min(amount) from orders;
```

#### Maximum values `max()`

We can find the maximum value using the max() function:

```
select max(amount) from orders;
```

#### Average values `avg()`

We can find the average value (the total of some values divided by how many values there are) :

```
select avg(amount) from orders;
```

That seemed like a lot of numbers after the decimal point! We use the round() function to adjust a value to a more standard format.

```
select round(avg(amount)) from orders;
```

> Instead of passing a value or field name to the round() function, we have passed the result of "avg(amount)" to round(). In other words, "avg(amount)" is calculated, and the result given to round(). This may seem strange at first, so ask your coach if you have any questions.



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
Now you know enough to write your own **SQL** queries to compare the spending habits of two specific customers!

Your queries will tell us who, of two customers, has the highest average purchase amount, and who of the two made the smallest purchase. So, with help from your coach, try to write a set of queries to do the following:

- View all customers in the table

- Pick two customers by name, and make a note of their id numbers
> HINT: See the Greater Than section if this sounds unfamiliar

- In separate queries for each chosen customer, perform the following tasks:

- Find the purchase amounts made by that customer.
> HINT: See the section on comparing data to values for how to use "where".

- Now revise your queries to obtain the average purchase amount made by each customer.

 Hooray! We know now which, of the two customers, pays more on average than the other. Maybe it's a good to time to contact that customer and offer them a discount on their next purchase?

- Now adjust your queries again, to find which customer made the smallest purchase. Let your coach know if this is the same customer or the other one.

 **Well done** for getting this far!

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
