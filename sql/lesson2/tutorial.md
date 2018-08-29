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

Using the same database as in Lesson 1 (https://sqliteonline.com/#fiddle-5b7840f9bfb0b178jkzlqxor), run the following query.
```SQL
SELECT first_name, age FROM PERSON ORDER BY age DESC;
```

Is the result sorted by descending age? What happen in ages that appear more than once? Are the names sorted?

You can add more than one order by pairs of expression and direction:

```SQL
SELECT first_name, age FROM PERSON ORDER BY age DESC, first_name ASC;
```

With the SQL above, in case of equal ages, then records will be sorted by first name. Note that each sort has a different direction.

The following query is equivalent to the previous one, but instead of using column names, column positions are used.
```SQL
SELECT first_name, age FROM PERSON ORDER BY 2 DESC, 1 ASC;
```

This next query is an example of function. The function **LENGTH** in SQLite returns the length of the string passed as parameter (between the parentheses):
```SQL
SELECT first_name, last_name FROM PERSON ORDER BY LENGTH(first_name) DESC
```

Lets now use an arithmetic expression as a last example of sorting:
```SQL
SELECT first_name, last_name FROM PERSON ORDER BY (age + 2 * number_of_children) DESC
```

TIP: You can also add expressions and functions in the columns to show in the results: Try this out:
```SQL
SELECT first_name, last_name, (age + 2 * number_of_children) FROM PERSON ORDER BY (age + 2 * number_of_children) DESC
```

### Limiting the number of results and paginating

When you are building queries that will fill reports, when you are showing the results in pages, or simply when the result is too long, you may want to limit the number of rows you show. To do so, you can use the operator **LIMIT** as follows

```SQL
SELECT first_name, age FROM PERSON ORDER BY age DESC LIMIT 5;
```

Contrary to the query used before without LIMIT that returned all the rows in the table, this one only returns the first 5.

Although it is not strictly necessary to have an ORDER BY clause when you LIMIT the results, it is highly recommended. Doing so, you can be certain that you will always get the same results when running the same query multiple times.

If additionally you are paginating the result, you need to use LIMIT together with **OFFSET**. This operator can we understood as _Skip the first N records, and give me the ones after_. For example, if you run

```SQL
SELECT first_name, age FROM PERSON ORDER BY age DESC LIMIT 5 offset 3;
```

It will ignore the 3 oldest (Mia, Mason and Jacob), and will show the next 5 (Sophia, Benjamin, Abigail, William, and Liam).

With LIMIT and OFFSET you can create a pagination mechanism like this:

| Page | Query                                                                   | Results                                            |
| :--: | :---------------------------------------------------------------------- | :------------------------------------------------- |
| 1    | SELECT first_name, age FROM PERSON ORDER BY age DESC LIMIT 5 offset 0;  | The first 5 oldest                                 |
| 2    | SELECT first_name, age FROM PERSON ORDER BY age DESC LIMIT 5 offset 5;  | The 6th to the 10th                                |
| 3    | SELECT first_name, age FROM PERSON ORDER BY age DESC LIMIT 5 offset 10; | The 11th to the 12th, as there are no more records |

### Filtering with multiple values

Sometimes you need to filter some rows of your result and you may end up with queries like the one below

```SQL
SELECT first_name FROM PERSON WHERE age = 18 OR age = 21 OR age = 30;
```

This query works, but you can write it in a more readable way, thanks to the operator **IN**
```SQL
SELECT first_name FROM PERSON WHERE age IN (18,21,30);
```

Try these two in the database. Do you get the same results? The **IN** operator must be followed by an list of values. All the records having any of he values in the list in the given column (age in this example) will be kept in the result.

You can also negate the operator IN, using **NOT IN**. The results is pretty straight forward. Contrary to the IN alone, when using NOT IN, only the record for which their value is NOT in the list will be kept in the result.

This query works, but you can write it in a more readable way, thanks to the operator **IN**
```SQL
SELECT first_name FROM PERSON WHERE age NOT IN (18,21,30);
```

Try it in the Database. What do you get now?


### The NULL value

As defined in [Wikipedia](https://en.wikipedia.org/wiki/Null_(SQL), **NULL** is a special marker used in SQL to indicate that a data value does not exist in the database. Empty data values lead to a whole subject (_Three valued logic_) that we'll cover in future lessons, but if you are curious you can read more  [here](https://en.wikipedia.org/wiki/Three-valued_logic#Application_in_SQL). For now, we'll just use **IS** and **IS NOT** operators to filter records containing NULL. Two examples below:

```SQL
SELECT * FROM PERSON where studies IS NULL;
```

```SQL
SELECT * FROM PERSON where studies IS NOT NULL;
```

Study the results of each one. Easy huh?


Lesson 2:
- SELECT exercises:
    - Show the name and last name of all the persons. Sort the result by last name in ascending order, in case of equal last name sort by first name.
    - Show the last name and the biological sex of the person with higher number of children.
    - Show the country of birth of the oldest person.
    - Show the age of the oldest person.
    - Show all the host names.
    - Show the host name and the student capacity. Sort the result in descending order.
    - Pick a host ID and show the dates where workshops were held there. Order the result chronologically.
    - Show the top 5 host according to their capacity
    - Show the distinct ID of the persons that RSVP but then they did not show up (attendance = false).





...

## Lesson 2 exercises

For the exercises below, we'll use the two tables from previous lesson and PERSON and LOCATIONS and we'll introduce three new ones: HOST, WORKSHOP and RSVP.

### HOST table

HOST (id, name, location_id, students_capacity, coaches_capacity, contact_person)

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

### WORKSHOP table

WORKSHOP (id, host_id, date)

| id     | host_id  | date       |
| :----: | :------: | :--------: |
| 1      | 1        | 2017-08-01 |
| 2      | 1        | 2017-08-15 |
| 3      | 1        | 2017-09-03 |
| 4      | 1        | 2017-09-10 |
| 5      | 1        | 2017-09-24 |
| 6      | 1        | 2017-10-05 |
| 7      | 2        | 2017-10-10 |
| 8      | 2        | 2017-10-20 |
| 9      | 1        | 2018-01-25 |
| 10     | 3        | 2018-02-10 |
| 11     | 4        | 2018-02-15 |
| 12     | 5        | 2018-02-15 |
| 13     | 1        | 2018-02-17 |
| 14     | 1        | 2018-03-10 |
| 15     | 6        | 2018-03-11 |
| 16     | 6        | 2018-03-12 |
| 17     | 7        | 2018-03-25 |
| 18     | 8        | 2018-03-25 |
| 19     | 1        | 2018-03-25 |
| 20     | 3        | 2018-04-10 |
| 21     | 5        | 2018-05-23 |
| 22     | 7        | 2018-06-10 |


### RSVP table

RSVP (id, person_id, workshop_id, date_of_rsvp, attendance)

TODO: FILL IN THE TABLE WITH VALUES RELEVANT TO THE EXERCISES

Open this fiddle that will have the data shown in the tables above already loaded: https://sqliteonline.com/#XXXXXXXXXXXXXXXXXXX
* L2.1 Show the name and last name of all the persons. Sort the result by last name in ascending order, in case of equal last name sort by first name.
* L2.2 Show the last name and the biological sex of the person with higher number of children.
* L2.3 Show the country of birth of the oldest person.
* L2.4 Show the age of the oldest person.
* L2.5 Show all the host names.
* L2.6 Show the host name and the student capacity. Sort the result in capacity descending order.
* L2.7 Pick a host ID and show the dates where workshops were held there. Order the result chronologically.
* L2.8 Show the top 5 host according to their total capacity (Students + Coaches)
* L2.9 Show the distinct ID of the persons that RSVP but then they did not show up (attendance = false).

---
This ends our **SQL Lesson 2**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---
