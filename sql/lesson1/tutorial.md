---
layout: page
title: Introduction to SQL
---

## About these lessons

SQL is a programming language that allows you to interact with databases. It allows you to create, modify, and delete tables. It also allows you insert, update, delete, and consult (a.k.a query) data in those tables.

Majority of the applications available today stores some kind of informations, so learning SQL sooner or later will be very useful for you.

This tutorial is structured in lessons, each lessons construct on top of the previous ones, so we recommend you follow their order.
At the end of each lesson, there will be some queries requirements. If you already have some knowledge on SQL, you can check the exercises at the end of the lesson. If you can do all of them, you can safely jump to the next lesson.

SQL, as many other programming languages have reserved words. We'll mark those reserved words in **bold** so it's easier for you to remember them.

During this tutorial, we'll provide you the basic commands and explanations. If you want to go deeper, these online resources can help a lot:

* [W3Schools](https://www.w3schools.com/sql/)
* [Wikipedia](https://en.wikipedia.org/wiki/SQL)

## About Lesson 1

_Lesson 1_ will be an introduction to SQL and its querying possibilities. You'll work with an online database already filled in with some data and you'l focus in the **SELECT** operator. But before doing so, you'll learn what a **TABLE** is and how it is structured. At the end, you'll find some exercises to _capture_ the knowledge.

## What is a sql? and a Database?

SQL stands for Structured Query Language. As explained above, it is a programming language to interact with database. Especially, [Relational Databases](https://en.wikipedia.org/wiki/Relational_database). In a nutshell, a database can be consider a relational one, when it is composed by one or more tables.

A **TABLE** is a group of columns and rows that store data of the same type. Employees, Students, Movies, Singers are all possible examples of different tables. For each of these cases you may be interested in storing different data. Name, Birthday, Salary, for Employees; Name, Director, Genre for Movies; as examples.

Each quality you want to store in a table is defined in one _column_. So for example, your _MOVIE_ table may look like:

| name                  | genre       | director         | duration       | language |
|:--------------------- |:----------- |:---------------- |:--------------:|:--------:|
| Titanic               | Drama       | James Cameron    | 194            | en       |
| Star Wars             | Action      | George Lucas     | 121            | en       |
| 2001: A Space Odyssey | Sci-Fi      | Stanley Kubrick  | 149            | en       |
| Nueve Reinas          | Drama       | Fabian Bielinsky | 114            | es       |

In the table above, you can see that the table has 5 columns. It also has 4 rows (and the title row, but that one does not count).
_Rows_ are used to store the actual data we want to save in our database tables.

Using **SQL** you can query the data in this table. When doing so, you can decide which _rows_ you want to show and which _columns_ you want to show.

In this first lesson, we'll not change the data yet. We'll only query the existing _records_ (a _record_ is a synonym for _row_ in databases context).

## Querying the database

### Showing all the records and all the columns

The first and more trivial SQL statement you'll learn allows you to show all the rows and all the columns of a table.

This is the minimum syntax of this type of statement:

```SQL
SELECT {column} FROM {table name};
```

Where:

* **SELECT** is the first reserved word you'll learn. This word tells the SQL parser that a query statement is coming.
* **{column}** can be a _column_ list (separated by commas), or * meaning _every column_,
* **FROM** is the second reserved word you'll learn. This word tells the SQL parser that after a table name is coming.
* **{table name}** must be the name of one of the _TABLE_ in the database.

Let's try it out. But first, a short introduction to Sqlite.

### SQL Lite

**SQL Lite** is a lightweight relational database engine. It will allow you to manage your tables and do queries during this tutorial.
It has a version that can be installed locally, but it also has an online version which you'll be using during the first lessons.
Along the lessons, when you find a link to https://sqliteonline.com/ followed by a #fiddle it means that that link will open you an SQLLite online console with some data already loaded into the tables. Additionally, in case you are curios or you want to load the data in a local installation, we'll provide you the SQL used to load the data at the end of the section Using the fiddle id as title. Don't worry if you don't completely understand the annex SQL statements yet.

### Showing all records and all column (continuation)

Open (https://sqliteonline.com/#fiddle-5b75dd36bfae7178jkx0i87f) and run the following query
```SQL
SELECT * FROM MOVIE;
```

Do you get the all the rows all the columns?

Hooray!!! You just did your first query! Lets keep going, this is just the beginning!

### Showing only some columns

Now change the * by the name of some columns. Something like this:
```SQL
SELECT name, director FROM MOVIE;
```

What do you get when you click **run**? Are all columns displayed? Are all rows displayed?

Now run this:
```SQL
SELECT genre FROM MOVIE;
```
What do you get? How many rows? is there anything awkward in the result?

In SQL, when we want only unique distinct records in the result we can use another reserved word: **DISTINCT**. It should be placed before the list of column names. Something like:
```SQL
SELECT DISTINCT genre FROM MOVIE;
```
Nice, isn't it?

### Showing only some rows

Now the juicy part starts :)
It's time to introduce a new reserved word: **WHERE**. WHERE will allow you to remove some rows from the result. Or in other words, it allows you to select those rows that will _stay_ in the result.

A **WHERE** clause is normally composed by a _column_ name, an _operator_ and a _value_ (which can sometimes be the name of another column). This expression is evaluated by the SQL parser and all those rows where this expression is TRUE will remain in the result.

The next table shows most common operators (there are more, but you'll learn them in next lessons)

| Symbol  | Meaning               | Example           |
|:-------:| -----------           | ---------         |
| =       | Equal                 | language = "en"   |
| <>      | Not equal             | genre <> "Drama"  |
| >       | Greater than          | duration > 121    |
| >=      | Greater than or equal | duration >= 121   |
| <       | Lower than            | duration < 121    |
| <=      | Lower than or equal   | duration <= 194   |

Try this statement:
```SQL
SELECT * FROM MOVIE WHERE language = "en";
```

Do you get all the rows from the table? Which ones you don't get?

Try out the other operators examples. See what happens.

Can you combine conditions? **Of course**. But you need to know the logical concatenations **OR** and **AND**.

| Symbol  | Meaning                                                 | Example                             |
|:-------:| -----------                                             | ---------                           |
| OR      | At least one of the expressions around it must be true  | language = "es" OR genre = "Action" |
| AND     | Both of the expressions around it must be true          | language = "en" AND genre = "Drama" |


```SQL
SELECT * FROM MOVIE WHERE language = "es" OR genre = "Action";
```

Study the rows you got. Why did you get _Star Wars_ if it is in English? Why did you get _Nueve Reinas_ if it's a Drama?
Try the **AND** one now. Can you think of other combinations? Can you use OR and AND in the same SQL?

What do you think this query will return? Can you predict the result before running it?

```SQL
SELECT * FROM MOVIE WHERE duration > 120 AND (genre = "Sci-Fi" OR genre = "Drama");
```

(To be continued. See ../lessons_summary.txt for details of what is missing here)

## ANNEX

### #fiddle-5b75dd36bfae7178jkx0i87f

```SQL
CREATE TABLE MOVIE (name text not null, genre text, director text, duration number, language text);
INSERT INTO MOVIE (name, genre, director,duration,language) VALUES ("Titanic","Drama","James Cameron",194,"en"),("Star Wars","Action","George Lucas",121,"en"),("2001: A Space Odyssey","Sci-Fi","Stanley Kubrick",149,"en"),("Nueve Reinas","Drama","Fabian Bielinsky",114,"es");
```
