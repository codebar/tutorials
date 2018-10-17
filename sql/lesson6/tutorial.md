---
layout: page
title: Introduction to SQL
---

## About Lesson 6

The previous lessons showed you how to manipulate data from a single table and from multiple tables using **JOIN**. _Lesson 6_ will show you how to use aliases, the **EXISTS** operator, and how to save complex queries into **VIEWs**.

In this lesson we will keep using the same database than before (https://sqliteonline.com/#fiddle-5bc61b9572968o2ajnbzhjy6)

### Using aliases

The moment we start combining tables as we did in _Lesson 5_, we need to tell the database engine from which table we want to pick the columns. So far, the `.` notation to explicitly specify the tables worked since we only joined a given table once per query. But, what happens if we need to join the same table more than once in the same query? Let's have a look at this example:

```SQL
SELECT * FROM person INNER JOIN person where person.age = person.age;
```

Do you think this statement will work? It will not, and the reason is that in the **WHERE** part, it does not know to which person table you are referring to. To solve this, you can use alias as follows

```SQL
SELECT *  FROM person p1 INNER JOIN person p2 where p1.age = p2.age;
```

_p1_ is the alias of the first _person_ table (the one after FROM), and _p2_ is the alias to the second _person_ table (The one after JOIN). You can also use the aliases in the SELECT part. Have a look at this other example from previous lesson:


```SQL
SELECT h.name, loc.city, loc.country FROM host h
INNER JOIN location loc ON h.location_id = loc.id
WHERE loc.country = 'UK';
```
In this case, the aliases are _h_ and _loc_.

### (NOT) EXISTS operator

Sometimes you need to combine more than one table in a query to add more columns to the results, but in some cases, you only need other tables to check some conditions. Imagine you want to list all the persons that has RSVP to at least one event. You could do this using JOINs as follows:

```SQL
SELECT DISTINCT p.first_name, p.last_name
FROM person p JOIN rsvp event ON event.person_id = p.id;
```

But if you look closer, we are not using any column from the _rsvp_ table in the result. In cases like this, we can use the **EXISTS** operator. Look at the query below, it produces the same result:

```SQL
SELECT p.first_name, p.last_name
FROM person p
WHERE EXISTS (SELECT * FROM rsvp event where event.person_id = p.id);
```

The **EXISTS** operator is followed by a query. The row from the _person_ table will be kept in the result set if the query after **EXISTS** returns at least 1 row.
Note that in the _rsvp_ query (a.k.a inner query), we are referring to p, which is the alias of the _person_ table. Also note that the **DISTINCT** operator is not needed anymore since in _person_ table each person is there only once.

**NOT EXISTS** can also be used to check the opposite condition. In this case, the row will be kept if the inner query returns no results. In this case, persons that never rsvp to an event:

```SQL
SELECT p.first_name, p.last_name
FROM person p
WHERE NOT EXISTS (SELECT * FROM rsvp event where event.person_id = p.id);
```
Try it yourself, you should only get Benjamin in this last query.

## GROUP BY in JOINed tables

Do you remember the **GROUP BY** from _lesson 3_? When joining tables, **GROUP BY** becomes even more powerful. Lets see the following query:

```SQL
SELECT * FROM location loc
INNER JOIN host h ON h.location_id = loc.id
INNER JOIN workshop w ON w.host_id = h.id;
```
These two JOINs create a result where locations, hosts, and workshops are put together. If we then **GROUP BY** by city and add a **COUNT** column, we can easily know how many workshops had place per city. Try this out:

```SQL
SELECT loc.city, loc.country, COUNT(*) FROM location loc
INNER JOIN host h ON h.location_id = loc.id
INNER JOIN workshop w ON w.host_id = h.id
GROUP BY loc.city, loc.country;
```

## Immortalizing complex queries in VIEWs

You can create a **VIEW** to isolate the users from the complexity of some queries giving them a simpler structure. Once created, you can use a **VIEW** the same way we have been using tables in the queries.

Lets create our first **VIEW**, as follows:

```SQL
CREATE VIEW active_members as
SELECT p.first_name, p.last_name, p.age
FROM person p
WHERE EXISTS (SELECT * FROM rsvp event where event.person_id = p.id);
```

The first row informs the RDBMS that we are creating a view with name _active_members_. After the _as_, a select statement should follow.

We can now use it in any select statement:

```SQL
SELECT * FROM active_members;
SELECT * FROM active_members WHERE age < 21;
SELECT * FROM active_members ORDER BY age asc LIMIT 5;
```

It is important to mention that the VIEWs do not have their own data. The data is coming from the tables in their definition. For this reason, any change in the underlying tables data, will automatically be reflected in the VIEWs using that table.

## Lesson 6 exercises

For the exercises below, we'll use the same tables from previous lesson. You can find the whole database in the following link https://sqliteonline.com/#fiddle-5bc61b9572968o2ajnbzhjy6

### Summary of the tables

person (id, first_name, last_name, age, biological_sex, country_of_birth, country_of_residence, number_of_children, studies)

location (id, city, country, start_date)

host (id, name, location_id, students_capacity, coaches_capacity, contact_person)

workshop (id, host_id, date)

rsvp (id, person_id, workshop_id, date_of_rsvp, attendance)

## Write the following queries

Open this fiddle that will have the data already loaded: https://sqliteonline.com/#fiddle-5bc61b9572968o2ajnbzhjy6
* L6.1 List all the hosts that had at least one workshop hosted
* L6.2 List all the persons that have someone else with their same age (Use only JOINs)
* L6.3 List all the persons that have someone else with their same age (Use only EXISTS)
* L6.4 List all the pair of persons that met at least in one workshop.
* L6.5 List all the persons with the number of workshops each one has been to.
* L6.6 Create 3 VIEWs for the queries in L6.3, L6.4 and L6.5.

---
This ends our **SQL Lesson 6**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---
