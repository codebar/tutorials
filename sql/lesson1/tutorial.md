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

_Lesson 1_ will be an introduction to SQL and its querying possibilities. You'll work with an online database already filled in with some data and you'll focus in the **SELECT** operator. But before doing so, you'll learn what a **TABLE** is and how it is structured. At the end, you'll find some exercises to _capture_ the knowledge.

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
SELECT {columns} FROM {table name};
```

Where:

* **SELECT** is the first reserved word you'll learn. This word tells the SQL parser that a query statement is coming.
* **{columns}** can be a _column_ list (separated by commas), or * meaning _every column_,
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

## Lesson 1 exercises

For the exercises below, we'll use two new tables: PERSON and LOCATIONS. These two tables could be codebar.io database. Lesson after lesson we'll be adding tables or extending the existing ones to construct the whole database by the end of this tutorial.

### PERSON table

PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies)

| id       | first_name     | last_name | age   | biological_sex | country_of_birth | country_of_residence | number_of_children | studies         |
| :------: | :------------: | :-------: | :---: | :------------: | :--------------: | :------------------: | :----------------: | :-----:         |
|1         | Emma           |Smith      |18     |Female          |UK                |UK                    |1                   |Computer science |
|2         | Noah           |Johnson    |21     |Male            |UK                |US                    |0                   |Accountancy      |
|3         | Liam           |Williams   |23     |Male            |ES                |UK                    |0                   |Maths            |
|4         | Olivia         |Jones      |21     |Female          |AR                |PT                    |1                   |Arts             |
|5         | William        |Brown      |25     |Male            |BR                |BR                    |1                   |Photography      |
|6         | Sophia         |Davis      |30     |Female          |PT                |UK                    |2                   |NULL             |
|7         | Jacob          |Miller     |35     |Male            |NL                |NL                    |2                   |Graphic designer |
|8         | Mason          |Wilson     |42     |Intersex        |FR                |FR                    |3                   |NULL             |
|9         | Mia            |Moore      |50     |Female          |US                |UK                    |4                   |Law              |
|10        | Abigail        |Moore      |28     |Female          |CA                |ES                    |2                   |Law              |
|11        | Michael        |Anderson   |22     |Intersex        |IT                |IT                    |1                   |Human Resources  |
|...       | ...            |...        |...    |...             |...               |...                   |...                 |...              |
|40        | Benjamin       |Taylor     |30     |Male            |ES                |IT                    |1                   |Computer science |

### LOCATION table

LOCATION (id, city, country, start_date)

| id    | city         | country | start_date    |
| :---: | :----------: | :-----: | :-----------: |
| 1     | London       | UK      | 2013-06-01    |
| 2     | Brighton     | UK      | 2013-10-01    |
| 3     | Cambridge    | UK      | 2014-01-01    |
| 4     | New York     | US      | 2015-05-01    |
| 5     | Manchester   | UK      | 2015-07-01    |
| 6     | West London  | UK      | 2015-10-01    |
| 7     | West London  | UK      | 2015-10-01    |
| 8     | Bournemouth  | UK      | 2015-10-01    |
| 9     | Edinburgh    | UK      | 2016-11-01    |
| 10    | Barcelona    | ES      | 2017-01-01    |
| 11    | Berlin       | DE      | 2017-02-01    |
| 12    | Glasgow      | UK      | 2017-06-01    |
| 13    | Oxford       | UK      | 2017-08-01    |
| 14    | Sydney       | AU      | 2017-10-01    |
| 15    | Kent         | UK      | 2017-12-01    |
| 16    | Helsinki     | FI      | 2018-01-01    |
| 17    | Oslo         | NO      | 2018-02-01    |
| 18    | Accra        | GH      | 2018-03-01    |
| 19    | Norwich      | UK      | 2018-05-01    |

## Write the following queries

Open this fiddle that will have the data shown in the tables above already loaded: https://sqliteonline.com/#fiddle-5b7840f9bfb0b178jkzlqxor

* L1.1 Show all the data available of all the persons.
* L1.2 Show the name and last name of all the persons 23 years old or above.
* L1.3 Show the name and last name of all the persons living in UK.
* L1.4 Show the name and last name of all the persons not living in their birth place.
* L1.5 Show the distinct studies of all the persons.
* L1.6 Show the distinct studies of female biological born persons.
* L1.7 Show the locations cities in UK.

---
This ends our **SQL Lesson 1**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---

## ANNEX

### #fiddle-5b75dd36bfae7178jkx0i87f

```SQL
CREATE TABLE MOVIE (name text not null, genre text, director text, duration number, language text);
INSERT INTO MOVIE (name, genre, director,duration,language) VALUES ("Titanic","Drama","James Cameron",194,"en"),("Star Wars","Action","George Lucas",121,"en"),("2001: A Space Odyssey","Sci-Fi","Stanley Kubrick",149,"en"),("Nueve Reinas","Drama","Fabian Bielinsky",114,"es");
```

### #fiddle-5b7840f9bfb0b178jkzlqxor
```SQL
CREATE TABLE PERSON (
    id INTEGER not null,
    first_name VARCHAR(20) not null,
    last_name VARCHAR(20) not null,
    age SMALLINT,
    biological_sex VARCHAR(8),
    country_of_birth VARCHAR(2),
    country_of_residence VARCHAR(2),
    number_of_children SMALLINT,
    studies VARCAHR(30)
);

INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (1,"Emma","Smith",18,"Female","UK","UK",1,"Computer science");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (2," Noah","Johnson",21,"Male","UK","US",0,"Accountancy");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (3," Liam","Williams",23,"Male","ES","UK",0,"Maths");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (4," Olivia","Jones",21,"Female","AR","PT",1,"Arts");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (5," William","Brown",25,"Male","BR","BR",1,"Photography");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (6," Sophia","Davis",30,"Female","PT","UK",2,NULL);
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (7," Jacob","Miller",35,"Male","NL","NL",2,"Graphic designer");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (8," Mason","Wilson",42,"Intersex","FR","FR",3,NULL);
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (9," Mia","Moore",50,"Female","US","UK",4,"Law");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (10," Abigail","Moore",28,"Female","CA","ES",2,"Law");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (11," Michael","Anderson",22,"Intersex","IT","IT",1,"Human Resources");
INSERT INTO PERSON (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (40," Benjamin","Taylor",30,"Male","ES","IT",1,"Computer science");

CREATE TABLE LOCATION (
  id INTEGER not null,
  city VARCAHR(20) not null,
  country  VARCHAR(2) not null,
  start_date DATE
);

INSERT INTO LOCATION (id, city, country, start_date) VALUES (1,"London","UK","2013-06-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (2,"Brighton","UK","2013-10-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (3,"Cambridge","UK","2014-01-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (4,"New York","US","2015-05-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (5,"Manchester","UK","2015-07-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (6,"West London","UK","2015-10-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (7,"West London","UK","2015-10-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (8,"Bournemouth","UK","2015-10-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (9,"Edinburgh","UK","2016-11-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (10,"Barcelona","ES","2017-01-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (11,"Berlin","DE","2017-02-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (12,"Glasgow","UK","2017-06-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (13,"Oxford","UK","2017-08-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (14,"Sydney","AU","2017-10-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (15,"Kent","UK","2017-12-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (16,"Helsinki","FI","2018-01-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (17,"Oslo","NO","2018-02-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (18,"Accra","GH","2018-03-01");
INSERT INTO LOCATION (id, city, country, start_date) VALUES (19,"Norwich","UK","2018-05-01");
```
