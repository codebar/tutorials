---
layout: page
title: Introduction to SQL
---

## About Lesson 2

_Lesson 2_ will extend your knowledge of the **SELECT** operator by explaining some new operators, ways to sort the results and to **LIMIT** the number of results shown. You'll continue working with an online database already filled in with some data. At the end, you'll find some exercises constructing on top of the lessons 1 and 2.

### Ordering query results

Normally, when you write a query, you'll want your results to be shown in a specific order. Doing so is very simple knowing the operator **ORDER BY**.
This operator is placed at the end of the **SELECT** statement. It's basic syntax is the following:

```SQL
SELECT {columns} FROM {table name} WHERE {conditions} ORDER BY {expression} {direction};
```
Where:

* **SELECT**, **FROM**, and **WHERE** are the same as in previous lesson,
* **{expression}** can be a _column_ name, the _column_ position, a function, or an arithmetic expression,
* **{direction}** is either ASC or DESC, if omitted ASC is assumed.

Using the same database as in Lesson 1 (https://sqliteonline.com/#fiddle-5bd0521d72a30o2ajnn1zerx), run the following query.
```SQL
SELECT name, age FROM person ORDER BY age DESC;
```

Is the result sorted by descending age? What happen in ages that appear more than once? Are the names sorted?

You can add more than one order by pairs of expression and direction:

```SQL
SELECT name, age FROM person ORDER BY age DESC, name ASC;
```

With the SQL above, in case of equal ages, then records will be sorted by name. Note that each sort has a different direction.

The following query is equivalent to the previous one, but instead of using column names, column positions are used.
```SQL
SELECT name, age FROM person ORDER BY 2 DESC, 1 ASC;
```

This next query is an example of function. The function **LENGTH** in SQLite returns the length of the string passed as parameter (between the parentheses):
```SQL
SELECT name FROM person ORDER BY LENGTH(name) DESC;
```

Lets now use an arithmetic expression as a last example of sorting:
```SQL
SELECT name FROM person ORDER BY (age + 2 * number_of_children) DESC;
```

TIP: You can also add expressions and functions in the columns to show in the results: Try this out:
```SQL
SELECT name, (age + 2 * number_of_children) FROM person ORDER BY (age + 2 * number_of_children) DESC;
```

### Limiting the number of results and paginating

When you are building queries that will fill reports, when you are showing the results in pages, or simply when the result is too long, you may want to limit the number of rows you show. To do so, you can use the operator **LIMIT** as follows

```SQL
SELECT name, age FROM person ORDER BY age DESC LIMIT 5;
```

Contrary to the query used before without LIMIT that returned all the rows in the table, this one only returns the first 5.

Although it is not strictly necessary to have an ORDER BY clause when you LIMIT the results, it is highly recommended. Doing so, you can be certain that you will always get the same results when running the same query multiple times.

If additionally you are paginating the result, you need to use LIMIT together with **OFFSET**. This operator can we understood as _Skip the first N records, and give me the ones after_. For example, if you run

```SQL
SELECT name, age FROM person ORDER BY age DESC LIMIT 5 offset 3;
```

It will ignore the 3 oldest (Mia, Mason and Jacob), and will show the next 5 (Sophia, Benjamin, Abigail, William, and Luis).

With LIMIT and OFFSET you can create a pagination mechanism like this:

| Page | Query                                                             | Results                                            |
| :--: | :---------------------------------------------------------------- | :------------------------------------------------- |
| 1    | SELECT name, age FROM person ORDER BY age DESC LIMIT 5 offset 0;  | The first 5 oldest                                 |
| 2    | SELECT name, age FROM person ORDER BY age DESC LIMIT 5 offset 5;  | The 6th to the 10th                                |
| 3    | SELECT name, age FROM person ORDER BY age DESC LIMIT 5 offset 10; | The 11th to the 12th, as there are no more records |

### Filtering with multiple values
#### IN operator

Sometimes you need to filter some rows of your result and you may end up with queries like the one below

```SQL
SELECT name FROM person WHERE age = 18 OR age = 21 OR age = 30;
```

This query works, but you can write it in a more readable way, thanks to the operator **IN**
```SQL
SELECT name FROM person WHERE age IN (18,21,30);
```

Try these two in the database. Do you get the same results? The **IN** operator must be followed by a list of values. All the records having any of the values in the list for the given column (age in this example) will be kept in the result.

You can also negate the operator IN, using **NOT IN**. The results is pretty straight forward. Contrary to the IN alone, when using NOT IN, only the record for which their value is NOT in the list will be kept in the result.

```SQL
SELECT name FROM person WHERE age NOT IN (18,21,30);
```

Try it in the Database. What do you get now?

#### LIKE operator

Another operator you can use to select multiple records at a time is the operator **LIKE**. This operator is used to filter text columns with partial matches.

When using **LIKE**, there are two wildcards you can use in your conditions. Those are:

* % - The percent sign represents zero, one, or multiple characters
* _ - The underscore represents a single character

For example:
```SQL
SELECT name FROM person WHERE name LIKE '%li%';
```

Will return Olivia Juanes and William Brown. Both have _li_ in them.

The following one, will return those starting with _M_:
```SQL
SELECT * FROM PERSON WHERE name LIKE 'M%';
```

And this one, those ending with _s_:
```SQL
SELECT * FROM PERSON WHERE name LIKE '%s';
```

If using the _ then this one will return any name where there is an _m_, followed by any character, and the but an _r_:
```SQL
SELECT * FROM person where name like '%m_r%';
```

### The NULL value

As defined in [Wikipedia](https://en.wikipedia.org/wiki/Null), **NULL** is a special marker used in SQL to indicate that a data value does not exist in the database. Empty data values lead to a whole subject (_Three valued logic_) that we'll cover in future lessons, but if you are curious you can read more  [here](https://en.wikipedia.org/wiki/Three-valued_logic#Application_in_SQL). For now, we'll just use **IS** and **IS NOT** operators to filter records containing NULL. Two examples below:

```SQL
SELECT * FROM person where studies IS NULL;
```

```SQL
SELECT * FROM person where studies IS NOT NULL;
```

Study the results of each one. Easy huh?

It's time to do some exercises now... :)

## Lesson 2 exercises

For the exercises below, we'll use the table from previous lesson: **person** and we'll introduce four new ones: **location**, **host**, **workshop** and **rsvp**. The next sections show a few rows as examples of the values. If you want to see the whole table, you'll find the fiddle link and the SELECT statement under each table.


### LOCATION table

location (id, city, country, start_date)

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

### HOST table

host (id, name, location_id, students_capacity, coaches_capacity, contact_person)

| id             | name           | location_id    | students_capacity| coaches_capacity | contact_person |
| :------------: | :------------: | :------------: | :--------------: | :--------------: | :------------: |
| 1              | Happy code     | 2              | 16               | 9                | Mark           |
| 2              | London code    | 1              | 15               | 20               | Laura          |
| 3              | BCN school     | 10             | 20               | 10               | George         |
| 4              | Edincode       | 9              | 5                | 5                | Maria          |
| 5              | Kanguland      | 14             | 40               | 20               | Zoe            |
| 6              | CodeLab        | 1              | 15               | 25               | Sam            |
| 7              | Nemosoft       | 2              | 15               | 12               | Martin         |
| 8              | Sosasoy        | 1              | 15               | 5                | Mercedes       |

https://sqliteonline.com/#fiddle-5bd0543f72a31o2ajnn2b4ij
```SQL
SELECT * FROM host;
```

### WORKSHOP table

workshop (id, host_id, date)

| id     | host_id  | date       |
| :----: | :------: | :--------: |
|1|7|2016-01-25|
|2|4|2016-03-08|
|3|2|2016-04-17|
|4|7|2016-05-24|
|5|4|2016-06-23|
|6|7|2016-07-21|
|...|...|...|
|21|3|2018-03-23|
|22|3|2018-06-25|

https://sqliteonline.com/#fiddle-5bd0543f72a31o2ajnn2b4ij
```SQL
SELECT * FROM workshop;
```


### RSVP table

rsvp (id, person_id, workshop_id, date_of_rsvp, attendance)

| id             | person_id      | workshop_id    | date_of_rsvp     | attendance       |
| :------------: | :------------: | :------------: | :--------------: | :--------------: |
|1|16|1|2016-01-11|true|
|2|13|1|2016-01-12|false|
|3|12|1|2016-01-16|true|
|4|4|1|2016-01-22|true|
|5|8|1|2016-01-25|true|
|6|7|2|2016-01-30|true|
|...|...|...|...|...|
|170|3|22|2018-06-15|true|
|171|12|22|2018-06-18|true|
|172|3|22|2018-06-25|true|

https://sqliteonline.com/#fiddle-5bd0543f72a31o2ajnn2b4ij
```SQL
SELECT * FROM rsvp;
```
## Write the following queries

Open this fiddle that will have the data shown in the tables above already loaded: https://sqliteonline.com/#fiddle-5bd0543f72a31o2ajnn2b4ij
* L2.1 Show the name of all the persons. Sort the result by name in ascending order, in case of equal name sort by country of residence.
* L2.2 Show the name and the biological sex of the person with higher number of children.
* L2.3 Show the country of birth of the oldest person.
* L2.4 Show the age of the oldest person.
* L1.5 Show the locations cities in UK.
* L2.6 Show all the host names.
* L2.7 Show the host name and the student capacity. Sort the result in capacity descending order.
* L2.8 Pick a host ID and show the dates where workshops were held there. Order the result chronologically.
* L2.9 Show the top 5 host according to their total capacity (Students + Coaches)
* L2.10 Show the distinct ID of the persons that RSVP but then they did not show up (attendance = false).
* L2.11 Show dates where workshops were held in these 3 hosts _Edincode_, _Kanguland_, and _CodeLab_ (TIP: think of the usage of **IN**)

---
This ends our **SQL Lesson 2**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---

## ANNEX

As in previous lesson, this sections contains the SQL statements used to create the fiddle with the given reference.

### #fiddle-5bd0543f72a31o2ajnn2b4ij

```SQL
CREATE TABLE person (
    id INTEGER not null,
    name VARCHAR(40) not null,
    age SMALLINT,
    biological_sex VARCHAR(8),
    country_of_birth VARCHAR(2),
    country_of_residence VARCHAR(2),
    number_of_children SMALLINT,
    studies VARCHAR(30)
);

INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (1,"Emma Smith",18,"Female","UK","UK",1,"Computer science");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (2,"Noah Johnson",21,"Male","UK","US",0,"Accountancy");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (3,"Luis Marco Polo",23,"Male","ES","UK",0,"Maths");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (4,"Olivia Juanes",21,"Female","AR","PT",1,"Arts");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (5,"William Brown",25,"Male","BR","BR",1,"Photography");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (6,"Sophia Davis",30,"Female","PT","UK",2,NULL);
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (7,"Jacob Miller",35,"Male","NL","NL",2,"Graphic designer");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (8,"Mason Wilson",42,"Intersex","FR","FR",3,NULL);
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (9,"Mia Moore",50,"Female","US","UK",4,"Law");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (10,"Abigail Moore",28,"Female","CA","ES",2,"Law");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (11,"Michael Anderson",22,"Intersex","IT","IT",1,"Human Resources");
INSERT INTO person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies) VALUES (40,"Benjamin Martinez Lopez",30,"Male","ES","IT",1,"Computer science");

CREATE TABLE location (
  id INTEGER not null,
  city VARCHAR(20) not null,
  country  VARCHAR(2) not null,
  start_date DATE
);

INSERT INTO location (id, city, country, start_date) VALUES (1,"London","UK","2013-06-01");
INSERT INTO location (id, city, country, start_date) VALUES (2,"Brighton","UK","2013-10-01");
INSERT INTO location (id, city, country, start_date) VALUES (3,"Cambridge","UK","2014-01-01");
INSERT INTO location (id, city, country, start_date) VALUES (4,"New York","US","2015-05-01");
INSERT INTO location (id, city, country, start_date) VALUES (5,"Manchester","UK","2015-07-01");
INSERT INTO location (id, city, country, start_date) VALUES (6,"West London","UK","2015-10-01");
INSERT INTO location (id, city, country, start_date) VALUES (7,"South London","UK","2015-10-01");
INSERT INTO location (id, city, country, start_date) VALUES (8,"Bournemouth","UK","2015-10-01");
INSERT INTO location (id, city, country, start_date) VALUES (9,"Edinburgh","UK","2016-11-01");
INSERT INTO location (id, city, country, start_date) VALUES (10,"Barcelona","ES","2017-01-01");
INSERT INTO location (id, city, country, start_date) VALUES (11,"Berlin","DE","2017-02-01");
INSERT INTO location (id, city, country, start_date) VALUES (12,"Glasgow","UK","2017-06-01");
INSERT INTO location (id, city, country, start_date) VALUES (13,"Oxford","UK","2017-08-01");
INSERT INTO location (id, city, country, start_date) VALUES (14,"Sydney","AU","2017-10-01");
INSERT INTO location (id, city, country, start_date) VALUES (15,"Kent","UK","2017-12-01");
INSERT INTO location (id, city, country, start_date) VALUES (16,"Helsinki","FI","2018-01-01");
INSERT INTO location (id, city, country, start_date) VALUES (17,"Oslo","NO","2018-02-01");
INSERT INTO location (id, city, country, start_date) VALUES (18,"Accra","GH","2018-03-01");
INSERT INTO location (id, city, country, start_date) VALUES (19,"Norwich","UK","2018-05-01");

CREATE TABLE host (
    id INTEGER not null,
    name VARCHAR(20) not null,
    location_id INTEGER not null,
    students_capacity SMALLINT,
    coaches_capacity SMALLINT,
    contact_person VARCHAR(20)
);

INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (1, "Happy code", 2, 16, 9, "Mark");
INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (2, "London code", 1, 15, 20, "Laura");
INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (3, "BCN school", 10, 20, 10, "George");
INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (4, "Edincode", 9, 5, 5, "Maria");
INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (5, "Kanguland", 14, 40, 20, "Zoe");
INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (6, "CodeLab", 1, 15, 25, "Sam");
INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (7, "Nemosoft", 2, 15,12, "Martin");
INSERT INTO host (id, name, location_id, students_capacity, coaches_capacity, contact_person) VALUES (8, "Sosasoy", 1, 15, 5, "Mercedes");

CREATE TABLE workshop (
    id INTEGER not null,
    host_id INTEGER not null,
    date DATE
);

INSERT INTO workshop (id, host_id, date) VALUES (1,7,'2016-01-25');
INSERT INTO workshop (id, host_id, date) VALUES (2,4,'2016-03-08');
INSERT INTO workshop (id, host_id, date) VALUES (3,2,'2016-04-17');
INSERT INTO workshop (id, host_id, date) VALUES (4,7,'2016-05-24');
INSERT INTO workshop (id, host_id, date) VALUES (5,4,'2016-06-23');
INSERT INTO workshop (id, host_id, date) VALUES (6,7,'2016-07-21');
INSERT INTO workshop (id, host_id, date) VALUES (7,4,'2016-10-07');
INSERT INTO workshop (id, host_id, date) VALUES (8,4,'2016-11-03');
INSERT INTO workshop (id, host_id, date) VALUES (9,3,'2017-01-19');
INSERT INTO workshop (id, host_id, date) VALUES (10,5,'2017-02-21');
INSERT INTO workshop (id, host_id, date) VALUES (11,4,'2017-03-19');
INSERT INTO workshop (id, host_id, date) VALUES (12,8,'2017-05-05');
INSERT INTO workshop (id, host_id, date) VALUES (13,6,'2017-06-03');
INSERT INTO workshop (id, host_id, date) VALUES (14,4,'2017-07-04');
INSERT INTO workshop (id, host_id, date) VALUES (15,7,'2017-09-05');
INSERT INTO workshop (id, host_id, date) VALUES (16,8,'2017-10-28');
INSERT INTO workshop (id, host_id, date) VALUES (17,2,'2017-12-01');
INSERT INTO workshop (id, host_id, date) VALUES (18,6,'2018-01-02');
INSERT INTO workshop (id, host_id, date) VALUES (19,8,'2018-01-28');
INSERT INTO workshop (id, host_id, date) VALUES (20,1,'2018-03-04');
INSERT INTO workshop (id, host_id, date) VALUES (21,3,'2018-03-23');
INSERT INTO workshop (id, host_id, date) VALUES (22,3,'2018-06-25');

CREATE TABLE rsvp (
    id INTEGER not null,
    person_id INTEGER not null,
    workshop_id INTEGER not null,
    date_of_rsvp DATE,
    attendance BOOLEAN
);

INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (1,16,1,'2016-01-11',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (2,13,1,'2016-01-12',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (3,12,1,'2016-01-16',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (4,4,1,'2016-01-22',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (5,8,1,'2016-01-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (6,7,2,'2016-01-30',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (7,2,2,'2016-02-03',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (8,15,2,'2016-02-06',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (9,15,2,'2016-02-16',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (10,11,2,'2016-02-17',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (11,10,2,'2016-02-18',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (12,10,2,'2016-02-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (13,15,2,'2016-03-03',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (14,4,2,'2016-03-08',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (15,17,3,'2016-03-15',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (16,14,3,'2016-03-24',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (17,13,3,'2016-03-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (18,11,3,'2016-04-01',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (19,7,3,'2016-04-06',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (20,1,3,'2016-04-15',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (21,9,3,'2016-04-17',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (22,3,4,'2016-04-18',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (23,11,4,'2016-04-19',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (24,5,4,'2016-04-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (25,1,4,'2016-04-29',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (26,4,4,'2016-05-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (27,5,4,'2016-05-09',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (28,4,4,'2016-05-16',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (29,4,4,'2016-05-20',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (30,9,4,'2016-05-24',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (31,4,5,'2016-05-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (32,2,5,'2016-06-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (33,11,5,'2016-06-12',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (34,5,5,'2016-06-16',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (35,1,5,'2016-06-17',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (36,19,5,'2016-06-22',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (37,3,5,'2016-06-23',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (38,4,6,'2016-06-29',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (39,12,6,'2016-07-06',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (40,19,6,'2016-07-13',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (41,5,6,'2016-07-21',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (42,1,7,'2016-07-26',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (43,8,7,'2016-08-01',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (44,3,7,'2016-08-09',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (45,6,7,'2016-08-19',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (46,18,7,'2016-08-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (47,15,7,'2016-08-27',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (48,12,7,'2016-09-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (49,13,7,'2016-09-12',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (50,4,7,'2016-09-21',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (51,6,7,'2016-09-24',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (52,19,7,'2016-10-01',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (53,2,7,'2016-10-07',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (54,17,8,'2016-10-17',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (55,10,8,'2016-10-20',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (56,4,8,'2016-10-26',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (57,15,8,'2016-10-27',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (58,7,8,'2016-11-03',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (59,5,9,'2016-11-11',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (60,3,9,'2016-11-19',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (61,19,9,'2016-11-24',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (62,7,9,'2016-12-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (63,9,9,'2016-12-14',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (64,10,9,'2016-12-21',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (65,14,9,'2016-12-23',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (66,18,9,'2016-12-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (67,18,9,'2016-12-31',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (68,8,9,'2017-01-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (69,3,9,'2017-01-05',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (70,10,9,'2017-01-15',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (71,12,9,'2017-01-19',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (72,6,10,'2017-01-20',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (73,14,10,'2017-01-23',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (74,19,10,'2017-01-27',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (75,6,10,'2017-02-02',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (76,2,10,'2017-02-11',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (77,15,10,'2017-02-15',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (78,11,10,'2017-02-21',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (79,2,11,'2017-02-26',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (80,12,11,'2017-03-07',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (81,3,11,'2017-03-08',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (82,8,11,'2017-03-15',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (83,17,11,'2017-03-18',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (84,1,11,'2017-03-19',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (85,4,12,'2017-03-22',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (86,18,12,'2017-03-25',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (87,5,12,'2017-03-27',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (88,18,12,'2017-04-01',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (89,9,12,'2017-04-11',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (90,15,12,'2017-04-21',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (91,9,12,'2017-04-24',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (92,2,12,'2017-05-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (93,12,12,'2017-05-05',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (94,12,13,'2017-05-09',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (95,7,13,'2017-05-11',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (96,14,13,'2017-05-20',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (97,14,13,'2017-05-30',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (98,13,13,'2017-06-03',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (99,10,14,'2017-06-09',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (100,7,14,'2017-06-14',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (101,6,14,'2017-06-21',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (102,3,14,'2017-06-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (103,1,14,'2017-07-02',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (104,11,14,'2017-07-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (105,12,15,'2017-07-05',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (106,17,15,'2017-07-10',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (107,3,15,'2017-07-11',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (108,16,15,'2017-07-16',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (109,1,15,'2017-07-23',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (110,18,15,'2017-07-28',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (111,11,15,'2017-08-04',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (112,4,15,'2017-08-10',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (113,9,15,'2017-08-14',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (114,1,15,'2017-08-24',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (115,6,15,'2017-08-30',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (116,4,15,'2017-09-05',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (117,18,16,'2017-09-13',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (118,3,16,'2017-09-18',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (119,1,16,'2017-09-27',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (120,19,16,'2017-10-01',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (121,2,16,'2017-10-03',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (122,5,16,'2017-10-06',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (123,11,16,'2017-10-14',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (124,6,16,'2017-10-22',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (125,18,16,'2017-10-24',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (126,7,16,'2017-10-28',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (127,10,17,'2017-11-01',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (128,4,17,'2017-11-09',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (129,10,17,'2017-11-13',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (130,12,17,'2017-11-14',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (131,10,17,'2017-11-21',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (132,2,17,'2017-11-23',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (133,6,17,'2017-12-01',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (134,8,18,'2017-12-09',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (135,12,18,'2017-12-12',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (136,16,18,'2017-12-20',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (137,13,18,'2017-12-30',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (138,11,18,'2018-01-02',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (139,19,19,'2018-01-08',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (140,7,19,'2018-01-14',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (141,7,19,'2018-01-20',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (142,9,19,'2018-01-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (143,1,19,'2018-01-28',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (144,9,20,'2018-02-07',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (145,17,20,'2018-02-10',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (146,10,20,'2018-02-13',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (147,13,20,'2018-02-20',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (148,7,20,'2018-02-23',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (149,14,20,'2018-02-26',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (150,1,20,'2018-03-04',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (151,13,21,'2018-03-11',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (152,8,21,'2018-03-17',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (153,6,21,'2018-03-21',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (154,8,21,'2018-03-22',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (155,6,21,'2018-03-23',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (156,6,22,'2018-04-02',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (157,13,22,'2018-04-03',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (158,11,22,'2018-04-09',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (159,17,22,'2018-04-18',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (160,18,22,'2018-04-21',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (161,4,22,'2018-04-28',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (162,7,22,'2018-05-01',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (163,9,22,'2018-05-11',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (164,17,22,'2018-05-13',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (165,6,22,'2018-05-22',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (166,15,22,'2018-05-25',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (167,1,22,'2018-05-30',false);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (168,1,22,'2018-06-07',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (169,3,22,'2018-06-13',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (170,3,22,'2018-06-15',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (171,12,22,'2018-06-18',true);
INSERT INTO rsvp (id, person_id, workshop_id, date_of_rsvp, attendance) VALUES (172,3,22,'2018-06-25',true);
```
