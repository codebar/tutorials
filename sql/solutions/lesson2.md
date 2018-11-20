---
layout: page
title: Introduction to SQL Solutions
---
# Lesson 2 solutions to exercises

## L2.1 Show the names of all the people. Sort the result by name in ascending (alphabetical) order, in case of equal name sort by country of residence in alphabetical order.

```SQL
SELECT name
  FROM people
 ORDER BY name ASC, country_of_residence ASC;
```

##  L2.2 Show the name and the country of birth of the person with highest number of children.

```SQL
SELECT name, country_of_birth
  FROM people
 ORDER BY number_of_children DESC
 LIMIT 1;
```

##  L2.3 Show the country of birth of the oldest person.

```SQL
SELECT country_of_birth
  FROM people
 ORDER BY age DESC
 LIMIT 1;
```

##  L2.4 Show the age of the oldest person.

```SQL
SELECT age
  FROM people
 ORDER BY age DESC
 LIMIT 1;
```

##  L2.5 Show the location of cities in UK.

Solution 1:
```SQL
SELECT city
  FROM locations
 WHERE country = 'UK';
```

Solution 2:
```SQL
SELECT DISTINCT city
  FROM locations
 WHERE country = 'UK';
```

##  L2.6 Show all the host names.

Solution 1:
```SQL
SELECT name
  FROM hosts;
```

Solution 2:
```SQL
SELECT DISTINCT name
  FROM hosts;
```

##  L2.7 Show the host name and the student capacity. Sort the result in capacity descending order.

Solution 1:
```SQL
SELECT name, students_capacity
  FROM hosts
 ORDER BY students_capacity DESC;
```

Solution 2:
```SQL
SELECT DISTINCT name, students_capacity
  FROM hosts
 ORDER BY students_capacity DESC;
```

## L2.8 Pick a host ID and show the dates where workshops were held there. Order the result chronologically.

Solution 1:
```SQL
SELECT *
  FROM workshops
 WHERE host_id = 7
 ORDER BY workshop_date;
```

Solution 2:
```SQL
SELECT *
  FROM workshops
 WHERE host_id = 7
 ORDER BY workshop_date DESC;
```

## L2.9 Show the top 5 host according to their total capacity (Students + Coaches)

```SQL
SELECT *
  FROM hosts
 ORDER BY (students_capacity + coaches_capacity) DESC
 LIMIT 5;
```

## L2.10 Show the distinct ID of the people that RSVP but then they did not show up (attendance = false in attendance).

```SQL
SELECT person_id
  FROM rsvp
  WHERE attendance = 0;
```

## L2.11 Show dates when workshops were held in these 3 hosts Edincode, Kanguland, and CodeLab (TIP: think of the usage of IN)

Solution 1:
To get the host ids:
```SQL
SELECT id
  FROM hosts
  WHERE name in ('Edincode', 'Kanguland', 'CodeLab');
```
That should give you (4, 5, 6) as the host ids.

Then find dates when workshops where held at those hosts:
```SQL
SELECT workshop_date
  FROM workshops
 WHERE host_id IN (4, 5, 6);
```

Write the above all together using a subquery:
Solution 2:
```SQL
SELECT workshop_date
  FROM workshops
 WHERE host_id IN
       (SELECT id
          FROM hosts
         WHERE name in ('Edincode', 'Kanguland', 'CodeLab'));
```
