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


Lesson 2:
- Operators: IN, NOT IN.
- ORDER BY, LIMIT
- NULL value, IS and IS NOT
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

For the exercises below, we'll use two new tables: PERSON and LOCATIONS. These two tables could be codebar.io database. Lesson after lesson we'll be adding tables or extending the existing ones to construct the whole database by the end of this tutorial.


---
This ends our **SQL Lesson 2**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---
