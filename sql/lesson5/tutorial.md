---
layout: page
title: Introduction to SQL
---

## About Lesson 5

The previous lessons showed you how to manipulate data from a single table. _Lesson 5_ will show you how to combine data from multiple tables and will bring out the _relational_ part of relational databases.

Tables in a relational database relate to each other as they contain keys which allow information from multiple tables to be combined easily. The real power of relational databases, and SQL, comes from working with multiple tables at once.

In this lesson we will keep using the same database as before (https://sqliteonline.com/#fiddle-5be888fa749e451ljodase3y)

### Primary and Foreign Keys

All tables in a relational database need to have a primary key. This is an identifier that uniquely identifies each row. We saw in _Lesson 4_ that the `people` table uses the `id` field as a primary key. The key aspects of the primary key field are that it is never empty and it is unique: every record in a table has one and only one record can have a given primary key. For instance, in the `people` table, record with `id` `1` is the record for `Emma Smith`. If we try to insert a new record with the same `id` primary key, it will fail. If we try to insert a record with no value for `id` it will fail too.

Any table can also have a number of foreign key fields. Each foreign key contains the value for a primary key in another table. For example, if we select the data in the `hosts` table:

```SQL
SELECT *
  FROM hosts;
```

You will notice the `location_id` field. This field is a foreign key to the `locations` table. The value of this field for the first record, Happy Code is `2`. So let's have a look at the locations table:

```SQL
SELECT *
  FROM locations;
```

This shows us that the record in the `locations` table that has `id` set to `2` is the location record for Brighton in the UK. That's great, we can now go from `hosts` to `locations` with two queries but can we get this data in a single query and for all records? This is where table joins come in.

### Inner join

#### Joining two tables

If we want to select all the hosts and for each of them pull in location data, we need what we call an inner join. This is a **SELECT** query that will join the `hosts` and `locations` tables to return a single data set. Inner joins can be written either with an **INNER JOIN** or a **JOIN** clause. Both of the **SELECT** statements below result in identical SQL queries and return the same results:

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts
 INNER JOIN locations
    ON hosts.location_id = locations.id;
```

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts
  JOIN locations
    ON hosts.location_id = locations.id;
```

Note that SQL is not affected by the use of white space, which is used to improve the legibility of queries. White space in SQL is commonly used to line up root keywords so that they end on the same character boundary, thus forming a river that runs down the query helping the reader to scan over the code. White space is also used with subqueries, to nest the subquery in an indented block.

#### Why are these joins called 'inner' joins?

The word "inner" in "inner join" refers to the fact that this type of join will only return data where records exist on both sides of the join.

In other words, inner joins only add rows to the combined data set that satisfy the join condition set forth in the **ON** statement.

For instance, you will notice that we don't get all locations when running the following query:

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts
  JOIN locations
    ON hosts.location_id = locations.id;
```

Helsinki is missing because the database contains no host in Helsinki, even if there is a location record for it.

#### Using WHERE with a JOIN statement

We can limit the set of results using a **WHERE** clause as we did with simple **SELECT** statements:

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts
  JOIN locations
    ON hosts.location_id = locations.id
 WHERE locations.country = 'UK';
```

#### Joining more than two tables

You can have multiple **JOIN** clauses when connecting more than two tables. So for example if we wanted to know all workshop dates with host and location, we could do:

```SQL
SELECT hosts.name, locations.city, locations.country, workshops.date
  FROM hosts
  JOIN locations
    ON hosts.location_id = locations.id
  JOIN workshops
    ON workshops.host_id = hosts.id;
```

The way to create such a query is to start with a simple **SELECT** on the first table and then gradually extend table by table using **JOIN** clauses.

### LEFT JOIN

Remember earlier when we said that some locations did not have any hosts? How can we identify those? SQL can do that using a **LEFT JOIN** clause. The **LEFT JOIN** keyword returns all records from the left table (the table specified after **FROM**), and the matched records from the right table (the table specified after **LEFT JOIN**). If the left table contains rows that do not match with any data from the right table then columns for those rows, that would have contained right table data, are filled with **NULL**.

In other words, **LEFT JOIN** returns all rows a **JOIN** would have returned and unmatched rows from the left table.

```SQL
SELECT locations.city, locations.country, hosts.name
  FROM locations
  LEFT JOIN hosts
    ON hosts.location_id = locations.id;
```

In this example, the left table is `locations` and the right table is `hosts` so it will select all entries in `locations` and the matched records from `hosts`. In addition it will also show all entries in `locations` that do not have any matches in `hosts` and will set all corresponding values to `null`.

This is not quite what we wanted as we wanted only the locations that have no host. To do this, we need to add a **WHERE** clause to filter the records and only keep the ones for which the `hosts.id` value is **NULL**. It's generally better to use the primary key of the right table in the **WHERE** clause because this value cannot normally be **NULL** so the only situation in which it can match **NULL** is when there is no match as a result of the left join.

```SQL
SELECT locations.city, locations.country, hosts.name
  FROM locations
  LEFT JOIN hosts
    ON hosts.location_id = locations.id
 WHERE hosts.id IS NULL;
```

### RIGHT JOIN

Right joins are the mirror image of left joins: **RIGHT JOIN** returns all rows a **JOIN** would have returned and unmatched rows from the right table.

You can change a left join to a right join by changing the join term and by flipping the table order. For example, the following two queries are equivalent and return the same results:

```SQL
SELECT locations.city, locations.country, hosts.name
  FROM locations
  LEFT JOIN hosts
    ON hosts.location_id = locations.id;
```

```SQL
SELECT locations.city, locations.country, hosts.name
  FROM hosts
 RIGHT JOIN locations
    ON hosts.location_id = locations.id;
```

In practice, the convention is to write these types of joins as a **LEFT JOIN**.

### FULL OUTER JOIN

If **LEFT JOIN** and **RIGHT JOIN** return unmatched rows from one of the tables, a **FULL OUTER JOIN**, which can also be written as a **FULL JOIN** returns unmatched rows from both tables. 


## Lesson 5 exercises

For the exercises below, we'll use the same tables from previous lesson. You can find the whole database in the following link https://sqliteonline.com/#fiddle-5be888fa749e451ljodase3y

### Summary of the tables

people (id, name, age, country_of_birth, country_of_residence, number_of_children, studies, has_job)

locations (id, city, country, start_date)

hosts (id, name, location_id, students_capacity, coaches_capacity, contact_person)

workshops (id, host_id, date)

rsvp (id, person_id, workshop_id, date_of_rsvp, attendance)

## Write the following queries

Open this fiddle that will have the data already loaded: https://sqliteonline.com/#fiddle-5be888fa749e451ljodase3y
* L5.1 Select the list of workshops that have RSVP records.
* L5.2 Select students with the list of workshops they have sent an RSVP to.
* L5.3 Find all workshops, with the workshop dates, that the individual with id 17 has RSVPed to, and the date of their RSVPs.
* L5.4 Find all workshops that have no RSVP.

---
This ends our **SQL Lesson 5**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---
