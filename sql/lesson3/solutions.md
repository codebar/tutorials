---
layout: page
title: Introduction to SQL Solutions
---
# Lesson 3 solutions to exercises

## L3.1 How many people are not living in their country of birth.

Solution 1:
```SQL
SELECT COUNT(*)
  FROM people
 WHERE country_of_birth IS NOT country_of_residence;
```

Solution 2:
```SQL
SELECT COUNT(*)
FROM people
WHERE country_of_birth != country_of_residence;
```

Solution 3:
```SQL
SELECT COUNT(*)
FROM people
WHERE country_of_birth <> country_of_residence;
```

##  L3.2 What is the average age of the people not living in their country of birth.

```SQL
SELECT AVG(age)
  FROM people
 WHERE country_of_birth IS NOT country_of_residence;
```

## L3.3 Show the age of the oldest person. (Find a different way to the one used in Lesson 2).

Solution 1:
```SQL
SELECT MAX(age)
  FROM people;
```

Solution 2 (as learned in lesson 2):
```SQL
SELECT age
  FROM people
 ORDER BY age DESC
 LIMIT 1;
```

## L3.4 Show the number of employed and unemployed people.

```SQL
SELECT has_job 'Employed', COUNT(*)
  FROM people
 GROUP BY has_job;
```

## L3.5 Show the number of people per country of residence.

Solution 1:
```SQL
SELECT country_of_residence, COUNT(*)
  FROM people
 GROUP BY country_of_residence;
```

## L3.6 Show the country and number of locations in that country.

Solution 1:
```SQL
SELECT country, COUNT(*)
  FROM locations
 GROUP BY country;
```

## L3.7 Show the workshop id and the date of the latest RSVP per workshop.

Solution 1:
```SQL
SELECT workshop_id, MAX(date_of_rsvp) 'Latest RSVP'
  FROM rsvp
 GROUP BY workshop_id;
```

## L3.8 Show the distinct studies capitalized.

Solution 1:
```SQL
SELECT DISTINCT UPPER(studies)
  FROM people
 WHERE studies IS NOT NULL;
```

## L3.9 Show the name of the 3 youngest people.

Solution 1:
```SQL
SELECT name
  FROM people
 ORDER BY age
 LIMIT 3;
```

## L3.10 Show the number of people of each age. Sort the result in descending order by number of people.

Solution 1:
```SQL
SELECT age, COUNT(*) 'Number People'
  FROM people
 GROUP BY age
 ORDER BY COUNT(*) DESC;
```
