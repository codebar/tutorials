---
layout: page
title: Introduction to SQL Solutions
---
# Lesson 1 solutions to exercises

## L1.1 Show all the data available of all the people.

```SQL
SELECT *
  FROM people;
```

##  L1.2 Show the name and Country of residence of all the people 23 years old or above.

```SQL
SELECT name, country_of_residence
  FROM people
 WHERE age >= 23;
```

##  L1.3 Show the name and age of all the people living in UK.

```SQL
SELECT name, age
  FROM people
 WHERE country_of_residence = 'UK';
```

##  L1.4 Show the name and age of all the people not living in their birth place.

Solution 1:
```SQL
SELECT name, age
  FROM people
 WHERE NOT country_of_birth = country_of_residence;
```

Solution 2:
```SQL
SELECT name, age
  FROM people
 WHERE country_of_birth <> country_of_residence;
```

##  L1.5 Show the distinct countries of residence of all the people.

```SQL
SELECT DISTINCT country_of_residence
  FROM people;
```

##  L1.6 Show the distinct studies of the people having less than 2 children.

```SQL
SELECT DISTINCT studies
  FROM people
 WHERE number_of_children < 2;
```
