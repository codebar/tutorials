---
layout: page
title: Introduction to SQL
---

## About Lesson 5

The previous lessons showed you how to manipulate data from a single table. _Lesson 5_ will show you how to combine data from multiple tables and will bring out the _relational_ part of RDBMS.

In this lesson we will keep using the same database than before (https://sqliteonline.com/#fiddle-5be888fa749e451ljodase3y)

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

If we want to select all the hosts and for each of them pull in location data, we need what we call an inner join. This is a **SELECT** query that will join the `hosts` and `locations` tables to return a single data set. To do this, we add an **INNER JOIN** clause to our **SELECT** statement:

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts
       INNER JOIN locations
       ON hosts.location_id = locations.id;
```

The **INNER JOIN** clause is of the form:

```SQL
INNER JOIN table
ON link condition
```

Here the link condition tells the database to create a join for every `(host, location)` pair of records where `hosts.location_id` is equal to `locations.id`. Note the `.` notation to explicitly specify fields in given tables when manipulating several tables at the same time.

We can also limit the set of results using a **WHERE** clause as we did with simple **SELECT** statements:

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts
       INNER JOIN locations
       ON hosts.location_id = locations.id
 WHERE locations.country = 'UK';
```

#### Joining more than two tables

You can have multiple **INNER JOIN** clauses when connecting more than two tables. So for example if we wanted to know all workshop dates with host and location, we could do:

```SQL
SELECT hosts.name, locations.city, locations.country, workshops.date
  FROM hosts
       INNER JOIN locations
       ON hosts.location_id = locations.id

       INNER JOIN workshops
       ON workshops.host_id = hosts.id;
```

The way to create such a query is to start with a simple **SELECT** on the first table and then gradually extend table by table using **INNER JOIN** clauses.

#### Why inner?

The word "inner" in "inner join" refers to the fact that this type of join will only return data where records exist on both sides of the join. For instance, you will notice that we don't get all locations when running the following query:

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts
       INNER JOIN locations
       ON hosts.location_id = locations.id;
```

For example, Helsinki is missing because the database contains no host in Helsinki, even if there is a location record for it.

#### Alternative syntax

The **INNER JOIN** syntax presented above is explicit but used not to exist in SQL. So you may sometimes see the same thing done with an older syntax that is just a variant of the **SELECT** statement:

```SQL
SELECT hosts.name, locations.city, locations.country
  FROM hosts, locations
 WHERE hosts.location_id = locations.id;
```

### Left join

Remember earlier when we said that some locations did not have any hosts? How can we identify those? SQL can do that using a **LEFT JOIN** clause. The **LEFT JOIN** keyword returns all records from the left table (the table specified after **FROM**), and the matched records from the right table (the table specified after **LEFT JOIN**). The result is **NULL** from the right side, if there is no match.

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
 WHERE hosts.id is NULL;
```

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
* L5.3 Find all workshops that have no RSVP.

---
This ends our **SQL Lesson 5**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---
