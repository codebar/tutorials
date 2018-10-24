---
layout: page
title: Introduction to SQL
---

## About Lesson 3

_Lesson 3_ will extend your knowledge of the **SELECT** operator by explaining some new functions and operators. You'll continue working with an online database already filled in with some data. At the end, you'll find some exercises constructing on top of the first 3 lessons.


### Using aggregation Functions
When you want to start analyzing your data, it might be handy to be able to find some figures among your records. Figures like maximum, average or minimum values; or simply the total number of records in a table. To accomplish that, you can use some SQL basic Functions

#### Using COUNT function

**COUNT** function returns the number of records in the result. Open this lesson fiddle (https://sqliteonline.com/#fiddle-5bd0543f72a31o2ajnn2b4ij) and run the following query. We'll analyze the result right after.

```SQL
SELECT COUNT(*) FROM person;
```

How many rows did you get in the result? Only one, right? this is because this function aggregates the whole result in one single value. In this case, the **number of records** in the **person** table.

What happens if you combine this function with a WHERE statement? Something like this:
```SQL
SELECT COUNT(*) FROM person WHERE biological_sex = 'Female';
```

Which records is the COUNT function considering now?

#### Using MIN, AVG and MAX functions

Similarly, **MIN**, **AVG**, and **MAX** functions will return the minimum, average or maximum value of the given column. Contrary to COUNT, in this case the name of a column must be given as parameter. Look at these examples:

```SQL
SELECT MIN(age) FROM person;

SELECT MAX(age) FROM person;
```

As with COUNT, you can add WHERE conditions to your statements:

```SQL
SELECT MIN(age) FROM person WHERE biological_sex = 'Female';

SELECT MAX(age) FROM person WHERE biological_sex = 'Male';

SELECT AVG(age) FROM person WHERE biological_sex = 'Male';
```

#### Using SUM function

The last of the most common functions we'll explain here is **SUM**. This function adds all the values for the column given as parameter. SUM(number_of_children), for example, will sum up all the number of children on each row and reply with the total.

```SQL
SELECT SUM(number_of_children) FROM person;
```

#### Combining them

One way of combining them is by adding more than one function in the SELECT statement. For example:
```SQL
SELECT MAX(age), MIN(age), MAX(number_of_children), SUM(number_of_children) FROM person;
```

### Aliases

In queries like the one above, you may want to give a more readable title to the columns in the results. To do so, you can use aliases.
The following query defines aliases for the four columns in the result.

```SQL
SELECT MAX(age) 'Oldest person', MIN(age) 'Youngest person', MAX(number_of_children) 'Maximum kids', SUM(number_of_children) 'Total children in the community' FROM person;
```

### Sanitizing data: UPPER and LOWER

Sometimes, if you allow your data in uppercase and lowercase, some WHERE conditions may not act as you expect. For example, 'Martin' will not result equal to 'martin'. Check this out with the following query:

```SQL
SELECT * FROM person WHERE name = 'emma smith';
```

Did you get any result? Try now with 'Emma Smith' instead.

To avoid issues like this one, you can transform the values to a known case. Either uppercase (capital letters) or lowercase (small letters). To do this, you can use the functions **UPPER** and **LOWER**. Try the following query, Do you get results now?

```SQL
SELECT * FROM person WHERE LOWER(name) = 'emma smith';
```

In the statement above, _LOWER(name)_ transforms the value in the column _name_ into lowercase ('Emma Smith' -> 'emma smith'). Is for this reason, that when compared to 'emma smith' it results true and then the record is shown in the result.

You can also use these functions in the SELECT part of the query as follows:

```SQL
SELECT UPPER(name) 'Name', LOWER(country_of_residence) 'Residence' FROM person;
```

### Splitting the tables in GROUPS.

Look at the next three queries.
```SQL
SELECT * FROM person WHERE biological_sex = 'Male';

SELECT * FROM person WHERE biological_sex = 'Female';

SELECT * FROM person WHERE biological_sex = 'Intersex';
```

_biological_sex_ has a fixed number of values in the table: Male, Female and Intersex. This column can be used to group records using **GROUP BY** statement as below:

```SQL
SELECT COUNT(*) FROM person GROUP BY biological_sex;
```
How many rows do you get with the query above?
Three, right? Why do you think you get three now?

Your theory is correct. There is one row for each of the groups you made when using **GROUP BY**. To help you knowing which one corresponds to each group, it's always good to also add the group column in the SELECT part. Like this:

```SQL
SELECT biological_sex, COUNT(*) 'Quantity' FROM person GROUP BY biological_sex;
```

Check these other examples, make sure you understand what each one is doing before moving to next section (the aliases may help):

```SQL
SELECT country_of_residence 'Residence country', MAX(age) 'Oldest' FROM person GROUP BY country_of_residence;

SELECT country_of_residence 'Residence country', COUNT() 'Quantity' FROM person GROUP BY country_of_residence;

SELECT country_of_residence 'Residence country', COUNT() 'Quantity', MAX(age) 'Oldest',MIN(age) 'Youngest' FROM person GROUP BY country_of_residence;

SELECT country, COUNT(*) 'Number of locations in the country' FROM location GROUP BY country;

SELECT country, MIN(start_date) 'Country join date' FROM location GROUP BY country ORDER BY start_date;
```

### Splitting the tables in GROUPS (using more than one column)

**GROUP BY** can be used with more than one column. When you add more than one column, the DB engine first looks at all the existing combinations of those columns and creates one group for each of the combinations. Then it calculates the aggregation values (MIN, COUNT, MAX, etc) for each group.

How many different combinations of country_of_residence and biological_sex are there in the table **person**? The following query can help knowing:

```SQL
SELECT DISTINCT country_of_residence, biological_sex FROM person;
```

Now, how many persons are on each of those groups?

```SQL
SELECT country_of_residence, biological_sex, COUNT(*) FROM person GROUP BY country_of_residence, biological_sex;
```

Does it make sense? How would you change this query to return the oldest and youngest person on each group?

## Lesson 3 exercises

For the exercises below, we'll use the same tables from previous lesson. You can find the whole database in the following link https://sqliteonline.com/#fiddle-5bd0543f72a31o2ajnn2b4ij

### Summary of the tables

person (id, name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies)

location (id, city, country, start_date)

host (id, name, location_id, students_capacity, coaches_capacity, contact_person)

workshop (id, host_id, date)

rsvp (id, person_id, workshop_id, date_of_rsvp, attendance)

## Write the following queries

Open this fiddle that will have the data already loaded: https://sqliteonline.com/#fiddle-5bd0543f72a31o2ajnn2b4ij
* L3.1 How many persons are not living in their birth country.
* L3.2 What is the average age of the persons not living in their birth country.
* L3.3 Show the age of the oldest person. (Find a different way to the one use in Lesson 2).
* L3.4 Show the number of female, intersex, and male born persons.
* L3.5 Show the number of persons per country of residence.
* L3.6 Show the country and number of locations in that country.
* L3.7 Show the workshop id and the date of the latest RSVP per workshop.
* L3.8 Show the distinct studies capitalized.
* L3.9 Show the biological sex of the 3 youngest persons.
* L3.10 Show the number of persons of each age. Sort the result in descending order by number of persons.

---
This ends our **SQL Lesson 3**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---
