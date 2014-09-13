---
---
layout: page
title: Introduction to SQL
---

## This early draft for prototyping the lesson (copied from a Javascript tutorial) is about ready for a review. The early part of this draft is still a bit sketchy, so if you are reviewing it, please bear that in mind.

## What is SQL?

**SQL** is a language that enables searching a database, managing connections between related sets of data, and updating existing data.

Today we'll deal with the most common case of using SQL, which is to work with a relational database. SQL can be used to work with other data sets, but working with databases is most common. In a relational database, all data exists in one or more tables - no data exists anywhere else. This will all become clear to you soon.

Some common usages around the web are:

#### Lots of major sites ! (Need to put some real examples here)

<br>


### Today we will use an example database for a fictional store 

We're going to work with a database that represents a pet store that has been in business for a while, so the database already contains data.

We'll start by seeing how powerful SQL can be at showing information about the store's business. In the next tutorial, we will use SQL to store data for new customers and new pet purchases.


## But before we start...

### Required files

Download the database file required to begin working through the tutorial from [here](https://gist.github.com/jkbits1/dac13e90598d04b97fd7/download).

Put the database file, `store.db`, in a new folder on your computer, just as you would with a html file, etc.

#### Get sqlite

Go to the sqlite download page: 
`http://www.sqlite.org/download.html`

Find the "precompiled binaries" section for your OS. The first link of the section is for a `command-line shell`. Download this .zip file. For Windows, the .zip file just contains a single file, `sqlite3.exe`. Copy this file to your folder that contains the store.db file.


## Set up our SQL environment

Open a command prompt (terminal window, etc) and go to the folder for where you have stored the downloaded files.

Type: 
```
sqlite3 store.db
```


At the new command prompt, type these lines (make sure to include the full stop shown at the start of each line):

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

This should respond with 10. This shows we have the database set up correctly. Hooray!

> The SQL environment does not execute any command until it meets a `;`. If there is no response to your query, look to see if the semi-colon is there.


##Tables and Fields

In our database, the SQL command below has already been executed to create the customers table. 

```
CREATE TABLE customers (
    id integer,
    firstName text,
    lastName text,
    email text,
    address text,
    town text,
    county text,
    country text
);
```

Let's learn something about what this command did.

### What are Tables?

A table can be considered to be like many excel worksheets or reports that show data in a tabular format. Each column stores an item of data, such as name, email, town, etc. A row stores all data for a single entry in that table. People who work with databases usually refer to columns as **fields**, and rows as **rows**.

If this sounds unclear, don't worry. It becomes easier to grasp when we use some queries shortly.

### What are fields?

There are different types of fields that we can declare. Here are some examples from the various tables in our database:

- **text** - any group of characters

In the field definition for the "items" table

```
name text;
```

The field "name" has the type of text.

> If you feel it helps to to see this definition in context, either look again at the create table command for "items" or wait and see if the queries below make it clear.

Some other SQL databases use different definitions for text data, but the principles are the same.

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


##Basic Queries

A query is a statement that makes a search on a table, and that may return data. We say that any returned data "matches" our query.

### How to write a Query 

To query data, we use the **select** and **from** keywords in this format:

```
select * from table_name;
```

> Jargon - we often refer to a statement that contains "select" as a "database query", or just a "query".

When we search for data, the database does not make guesses about where to look. We have to tell the database exactly which tables to search. We replace "table\_name" by a specific table name.

 The * tells the database to return information on all fields.

> Jargon: the "*" is known as the "wildcard" operator. Roughly speaking, to SQL it means "everything".

 Let's understand this better by writing our first query.


#### View all data in a table

Let's see all the people who've visited our store:

```
select * from customers;
```

This command is powerful, and shows us a lot of data. Perhaps a bit too much to make sense of it all? We can fix that easily.

#### View specific fields only

SQL is very powerful at providing us with a lot of data for a simple query, but sometimes it's hard to see the wood for the trees. We can cut down the amount of data by specifying the field names of the data that interests us. Try that out now.

> You can access previous typed commands by using the "up" arrow on your keyboard. This may save you some typing.

```
select firstName, lastName, email, town from customers;
```

Did you find that was a bit easier to read through? From now on, decide for yourself whether to use * or to name the columns.

### Organise data to make it clear

#### Ordering data

That list was an improvement, but we can make it more readable yet, by adjusting the query further.

We can use **order by** to request that the computer arranges the data in a way  more friendly to us humans.

```
select firstName, lastName, email, town from customers order by lastName;
```

That was a lot better, wasn't it? We can use order by with any of the fields in a table. Have a go at this, by making a small change to our last query. Your coach can help you.

#### Ordering data this way and that

The ordering was useful, but perhaps we prefer to look at the data in reverse order. By default, an order by query is assumed to have **asc** at the end. This means ascending order. We can put this at the end to make our query clearer, if we want.

A bit more usefully, if we put **desc** at the end (short of descending), then the order is reversed. Try out asc and desc with the order by queries we just used. Ask your coach if you're not sure of anything.


#### What's in store?

The table that stores information on pets and associated products is called `items`. Write a query that shows information for all the our pets and products, then adjust that query to show them alphabetically.

> If you're not sure, take a look at the start of the Queries section again. Begin with a very simple statement to get started. Your coach can help you.

That's excellent. Maybe you can think of another interesting query for this table, using what we've learnt?

### Some other ways to manage data

#### Limiting data (max number of rows shown)

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

#### Counting our customers

As well as providing data, SQL can do some counting for us, too. It can be hard to count the number of results by looking at the screen. It's much easier to let SQL do that for us.

To get a count of our customers we use the **count()** function.

> Jargon: a "function" performs some action. You can spot them because they have rounded brackets after the name. The item between the brackets affects the function in some way. Here we pass the wildcard.

```
select count(*) from customers;
```

This was the test function we ran after setting up the database. The result is still 10.

##Comparison queries

Most queries written specify some kind of comparison to be made against the data in the tables. We'll see how quickly and easily we can use such queries to generate powerful effects.  

### Limiting data (by comparing data to values)

Up to now, the limits that we've applied with our queries have not been based on the data itself. Applying such limits is a very useful technique, and it is easy to do.

We'll do this now, to search for customers by area of the UK.

For instance, when viewing our customers, perhaps we'd like those who've come all the way from Scotland. We achieve this by using **where** with **comparison operators**.

Here's an example to find the customers who live in Scotland:

```
select firstName, lastName from customers where country == "Scotland";
```

Let's understand this query a bit better:

#### Equality `==`

The query that we just ran uses the equality operator. When we enter this query, the database goes through the table, one row at a time. For each row, the database checks if the specified field (in this case, "country") matches the value ("Scotland"). If so, the row is printed.

Now, can you write a query that tells us how many customers are from England? You've understood enough to have a go. Ask your coach if you have any questions.

> You'll need to use "count(*)", which we learnt about just recently.

#### Inequality `!=`

Let's find out how many customers visited us from anywhere else but England. We use the inequality operator this time, but the database checks row by row, exactly as before.

```
select firstName, lastName from customers where country != "England";
```

Notice how this query finds customers from multiple places, and only ignores those from England. This is much easier than us having to do this with the equality operator.


#### Greater than `>`

We are now going to execute some comparisons on a table that stores numeric amounts, representing a customer payment. This table is the **orders** table, which has a field named **amount**.

This table stores the amount paid for a purchase by a specific customer. The customer is represented in the table by the **customer_id** field .

> Jargon: we use the customer's id field to specify a customer, which is more efficient for storage. But more importantly, it means we do not duplicate information about the customer in the database. To do this would both require more effort to enter information to database, and increase the chances of a mistake where the data is not the same in both places. Such mistakes might cause queries to give incorrect results. This avoidance of duplication is called **normalisation**.

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

##Maths queries

Excel is popular for it's maths capabilities, and SQL has many similar functions.

### SQL does maths, too (using maths functions)

We are starting to see some of the benefits of using a database, and now it's time to see that we can make the computer
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

---
This ends our **Introduction to SQL** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

