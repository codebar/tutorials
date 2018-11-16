---
layout: page
title: Introduction to SQL
---

## About these lessons

SQL (often pronounced "sequel") is a programming language that allows you to interact with databases.

The majority of applications available today store some kind of information, so learning SQL is a good investment of time.

This tutorial is structured in lessons, each of the lessons build on top of previous ones, so we recommend you follow their order.

At the end of each lesson, there will be some exercises.

If you already have some knowledge of SQL, you can check the exercises at the end of the lesson. If you can do all of them, you can safely jump to the next lesson.

SQL, like many other programming languages, has reserved words. Reserved words will be in capitals.

During this tutorial, we'll provide you the basic commands and explanations. If you want to go deeper, these online resources can help a lot:

* [W3Schools](https://www.w3schools.com/sql/)
* [Wikipedia](https://en.wikipedia.org/wiki/SQL)

## Style guide

During these tutorials you will find SQL code fragments. There is a lot of bibliography out there about naming conventions and formatting recommendations, but it is not always possible to follow all of them. Thus, we have picked one style for these lessons. If you want to have a deeper look, you can find it [here](https://www.sqlstyle.guide/).

## About Lesson 1

_Lesson 1_ will be an introduction to SQL and its querying possibilities. You'll work with an online database already filled in with some data and you'll focus on the **SELECT** operator. But before doing so, you'll learn what a **TABLE** is and how it is structured. At the end, you'll find some exercises to _capture_ the knowledge.

## What is a SQL?

SQL stands for Structured Query Language. As explained above, it is a programming language for interacting with databases. SQL commands can be classified under: data structure; data manipulation; and data querying.

Unlike most programming language it's a declarative language not an imperative one: you describe what you want as a result and you let the computer decide how to do it.

## What are databases?

Databases are collections of structured data (tables of information) that are typically [related](https://en.wikipedia.org/wiki/Relational_database). In a nutshell, a database can be considered a relational one, when it is composed of one or more tables.


A **TABLE** is a set of entities (stored in rows, aka records) that have the same attributes (stored in columns, aka fields)  

eg. a table that stores information about movies may look like:

| name                  | genre       | director         | writer           | duration       | language |
|:--------------------- |:----------- |:---------------- | :--------------- |:--------------:|:--------:|
| Titanic               | Drama       | James Cameron    | James Cameron    | 194            | en       |
| Star Wars             | Action      | George Lucas     | George Lucas     | 121            | en       |
| 2001: A Space Odyssey | Sci-Fi      | Stanley Kubrick  | Arthur C. Clarke | 149            | en       |
| Nueve Reinas          | Drama       | Fabian Bielinsky | Fabián Bielinsky | 114            | es       |


In the table above, you can see that the table has 6 columns with headings and 4 rows.

_Rows_ are used to store the actual data we want to save in our database tables.

Using **SQL** you can query the data in this table. When doing so, you can decide which _rows_ you want to show and which _columns_ you want to show.

In this first lesson, we will not change the data yet. We will only query the existing _records_

## Querying the database

### Showing all the records and all the columns

The first SQL statement is for data querying. It allows you to show all the rows and all the columns of a table.

This is the minimum syntax of this type of statement (aka query):

```SQL
SELECT {columns}
  FROM {table name};
```

Where:

* **SELECT** This word is the command for returning selected data from the database
* **{columns}** is a comma-separated list of columns you want to return, or * meaning _every column_
* **FROM {table name}** This specifies the source of the data i.e. which table

Please note that a SQL command always end with a ```;```.

Let's try it out. But first, a short introduction to SqLite.

### SqLite

**SqLite** is a lightweight relational database engine. It will allow you to manage your tables and do queries during this tutorial. It has a version that can be installed locally, but it also has an online version.

We will be using the online version in this first tutorial. If you want to run this locally the setup information is at the bottom of this tutorial.

### Showing all records and all column (continuation)

Open (https://sqliteonline.com/#fiddle-5be8813c749e151ljod9lwa9).
Type the statement below in the box beneath the house icon. Then press the blue 'Run' button at the top.

```SQL
SELECT *
  FROM movies;
```

Below this statement you should see the entire database table **movies** displayed. The output of a SELECT statement are generally known as the results.

Hooray!!! You just did your first query! Lets keep going, this is just the beginning!

### Showing only some columns

In SQL ```*``` means all. A ```SELECT * ...``` means *show me all the columns*. It is really handy when you don't know them!

Now change the * to the name of some columns. Try this:
```SQL
SELECT name, director
  FROM movies;
```

What do you get when you click **run**? Are only two columns displayed? Are all four rows displayed?

Now run this:
```SQL
SELECT genre
  FROM movies;
```
What do you get? Are there still four rows? Are there any repetitions in Genre?

In SQL, when we want only unique, distinct records in the result we can use another reserved word: **DISTINCT**. It should be placed before the list of column names. Try this:

```SQL
SELECT DISTINCT genre
  FROM movies;
```
Nice, isn't it?

### Showing only some rows

Now the juicy part starts :)
It's time to introduce a new reserved word: **WHERE**. WHERE will allow you to remove some rows from the result. Or in other words, it allows you to select those rows that will _stay_ in the result.

A **WHERE** clause is composed of the keyword WHERE and a test condition, typically comprising a _column_ name, an _operator_ and a _value_ . For each row where the test condition is true, the record is kept.

The next table shows the most common operators (there are more, but you'll learn them in next lessons). As you can see these are a lot like the 'if' conditions in other programming languages.

| Symbol  | Meaning               | Example           |
|:-------:| -----------           | ---------         |
| =       | Equal                 | language = 'en'   |
| <>      | Not equal             | genre <> 'Drama'  |
| >       | Greater than          | duration > 121    |
| >=      | Greater than or equal | duration >= 121   |
| <       | Lower than            | duration < 121    |
| <=      | Lower than or equal   | duration <= 194   |

Try this statement:

```SQL
SELECT *
  FROM movies
 WHERE language = 'en';
```

Does the language column contain only rows equal to 'en'?

Try out the other operators examples. See what happens.

You can compare columns in the conditions too, for example:
```SQL
SELECT *
  FROM movies
 WHERE writer = director;
```

You can combine conditions using the words **OR** and **AND**.

| Symbol  | Meaning                                                 | Example                             |
|:-------:| -----------                                             | ---------                           |
| OR      | At least one of the expressions must be true            | language = 'es' OR genre = 'Action' |
| AND     | Both of the expressions must be true                    | language = 'en' AND genre = 'Drama' |


```SQL
SELECT *
  FROM movies
 WHERE language = 'es' OR genre = 'Action';
```

Why did you get _Star Wars_ if it is in English? Why did you get _Nueve Reinas_ if it's a Drama?
Try the **AND** one now. Can you think of other combinations?

What do you think this query below will return? Can you predict the result before running it?

```SQL
SELECT *
  FROM movies
 WHERE duration > 120
   AND (genre = 'Sci-Fi' OR genre = 'Drama');
```

## Lesson 1 exercises

For the exercises below, we'll use a new table: _people_. This table could be part of codebar.io database. Lesson after lesson we'll be adding tables or extending the existing ones to construct the whole database by the end of this tutorial.

### People table

people (id, name, age, country_of_birth, country_of_residence, number_of_children, studies, has_job)

| id       | name                    | age   | country_of_birth | country_of_residence | number_of_children | studies         | has_job |
| :------: | :---------------------: | :---: | :--------------: | :------------------: | :----------------: | :-----:         | :-----: |
|1         | Emma Smith              |18     |UK                |UK                    |1                   |Computer science | yes     |
|2         | Noah Johnson            |21     |UK                |US                    |0                   |Accountancy      | yes     |
|3         | Luis Marco Polo         |23     |ES                |UK                    |0                   |Maths            | yes     |
|4         | Olivia Juanes           |21     |AR                |PT                    |1                   |Arts             | yes     |
|5         | William Brown           |25     |BR                |BR                    |1                   |Photography      | yes     |
|6         | Sophia Davis            |30     |PT                |UK                    |2                   |NULL             | no      |
|7         | Jacob Miller            |35     |NL                |NL                    |2                   |Graphic designer | yes     |
|8         | Mason Wilson            |42     |FR                |FR                    |3                   |NULL             | yes     |
|9         | Mia Moore               |50     |US                |UK                    |4                   |Law              | yes     |
|10        | Abigail Moore           |28     |CA                |ES                    |2                   |Law              | yes     |
|11        | Michael Anderson        |22     |IT                |IT                    |1                   |Human Resources  | no      |
|...       | ...                     |...    |...               |...                   |...                 |...              | yes     |
|40        | Benjamin Martinez Lopez |30     |ES                |IT                    |1                   |Computer science | yes     |

## Write the following queries

Open this fiddle that will have the data shown in the tables above already loaded: https://sqliteonline.com/#fiddle-5be8825d749e251ljod9s39t

* L1.1 Show all the data available of all the persons.
* L1.2 Show the name and Country of residence of all the persons 23 years old or above.
* L1.3 Show the name and age of all the persons living in UK.
* L1.4 Show the name and age of all the persons not living in their birth place.
* L1.5 Show the distinct countries of residence of all the persons.
* L1.6 Show the distinct studies of the persons having less than 2 children.

---
This ends our **SQL Lesson 1**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---

For the lessons, when you find a link to https://sqliteonline.com/ followed by a #fiddle it means that the link will open an SQLLite online console with some data already loaded into the tables. Additionally, in case you are curious or you want to load the data in a local installation, we will provide you the SQL used to load the data at the end of the section Using the fiddle id as title. Don't worry if you don't completely understand the annex SQL statements yet.
----

## ANNEX

### #fiddle-5be8813c749e151ljod9lwa9

```SQL
CREATE TABLE movies (
  name      TEXT      NOT NULL,
  genre     TEXT      NOT NULL,
  director  TEXT      NOT NULL,
  writer    TEXT      NOT NULL,
  duration  NUMBER    NOT NULL,
  language  TEXT      NOT NULL
);

INSERT INTO movies (name, genre, director, writer, duration,language)
VALUES ('Titanic','Drama','James Cameron','James Cameron',194,'en'),
       ('Star Wars','Action','George Lucas','George Lucas',121,'en'),
       ('2001: A Space Odyssey','Sci-Fi','Stanley Kubrick','Arthur C. Clarke',149,'en'),
       ('Nueve Reinas','Drama','Fabian Bielinsky','Fabian Bielinsky',114,'es');
```

### #fiddle-5be8825d749e251ljod9s39t
```SQL
CREATE TABLE people (
    id                    INTEGER     NOT NULL,
    name                  VARCHAR(40) NOT NULL,
    age                   SMALLINT,
    country_of_birth      VARCHAR(2),
    country_of_residence  VARCHAR(2),
    number_of_children    SMALLINT,
    studies               VARCHAR(30),
    has_job               BOOLEAN
);

INSERT INTO people (id, name, age, country_of_birth, country_of_residence, number_of_children, studies, has_job)
VALUES (1,"Emma Smith",18,"UK","UK",1,"Computer science","yes"),
       (2,"Noah Johnson",21,"UK","US",0,"Accountancy","yes"),
       (3,"Luis Marco Polo",23,"ES","UK",0,"Maths","yes"),
       (4,"Olivia Juanes",21,"AR","PT",1,"Arts","yes"),
       (5,"William Brown",25,"BR","BR",1,"Photography","yes"),
       (6,"Sophia Davis",30,"PT","UK",2,NULL,"no"),
       (7,"Jacob Miller",35,"NL","NL",2,"Graphic designer","yes"),
       (8,"Mason Wilson",42,"FR","FR",3,NULL,"yes"),
       (9,"Mia Moore",50,"US","UK",4,"Law","yes"),
       (10,"Abigail Moore",28,"CA","ES",2,"Law","yes"),
       (11,"Michael Anderson",22,"IT","IT",1,"Human Resources","no"),
       (40,"Benjamin Martinez Lopez",30,"ES","IT",1,"Computer science","yes");

```
