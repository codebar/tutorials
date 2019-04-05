---
layout: page
title: Introduction to SQL Solutions
---
# Lesson 4 solutions to exercises

## L4.1 Update the age of the person named Luis Marco Polo.

Solution 1:
First find person's id:
```SQL
SELECT *
  FROM people
 WHERE name = 'Luis Marco Polo';
```
Update age using id number:
```SQL
UPDATE people
   SET age = age + 1
 WHERE id = 3;
```

Solution 2:
Just use their name as identifier to update age. When could this cause problems?

In fact, this is so unreliable that you should only update information regarding a single person, or any unique entity, when referencing them by their unique id.
**Warning: the below solution is a false friend. Do not use!**
```SQL
UPDATE people
   SET age = age + 1
 WHERE name = 'Luis Marco Polo';
```
## L4.2 Increase by 1 the age of all the people who were born in Italy.

```SQL
UPDATE people
   SET age = age + 1
 WHERE country_of_birth = 'IT';
```

## L4.3 Set all names to lowercase.

```SQL
UPDATE people
   SET name = LOWER(name);
```

## L4.4 Insert a new student.

Solution 1:
What problems could arise with this solution?

```SQL
INSERT INTO people (id, name, age, country_of_birth, country_of_residence, number_of_children, studies, has_job)
VALUES (42, 'Valerie Knight', 32, 'US', 'UK', 1, 'Law', 'yes');
```

Solution 1 (with the minimum amount of information about a student needed to create a new student):
What problems could arise with this solution?

```SQL
INSERT INTO people (id, name)
VALUES (42, 'Valerie Knight');
```

Solution 2:
This solution satisfies the request, but it may be difficult to understand until you finish lesson 5. Skip it if it's not clear yet. You can always come back later to check it again.
```SQL
INSERT INTO people (id, name)
VALUES (
	   (SELECT id
          FROM people
         ORDER BY id DESC
         LIMIT 1) + 1,
       'Valerie Knight');
```


## L4.5 Delete the record you just inserted.

Solution 1:
First ensure that you have the correct id for the record you would like to delete.
```SQL
DELETE FROM people
WHERE id = 45;
```

## L4.6 Delete the people with no children.

```SQL
DELETE FROM people
 WHERE number_of_children = 0;
```

## L4.7 Add to the people the following study: "programming". Separate it by a comma. (You will have to investigate how to concatenate strings. Don't worry about those with _NULL_ for now).

Solution 1:
This works in SQLite.
```SQL
UPDATE people
   SET studies = studies || ', programming';
```

Solution 2:
In many other SQL databases you would use CONCAT.
```SQL
UPDATE people
   SET studies = CONCAT(studies, ', programming');
```

## L4.8 Add a new location.

Solution 1:
```SQL
INSERT INTO locations (id, city, country)
VALUES (20, 'Seattle', 'US');
```

Solution 2:
```SQL
INSERT INTO locations (id, city, country)
VALUES (
  	   (SELECT id
          FROM locations
         ORDER BY id DESC
         LIMIT 1) + 1,
       'San Francisco', 'US');
```
