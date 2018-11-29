---
layout: page
title: Introduction to SQL Solutions
---
# Lesson 5 solutions to exercises

## L5.1 Select the list of workshops that have RSVP records.
 Solution 1:
```SQL
SELECT DISTINCT workshops.id, workshops.workshop_date
  FROM workshops
       INNER JOIN rsvp
       ON rsvp.workshop_id = workshops.id;
```
 Solution 2:
```SQL
SELECT DISTINCT workshops.id, workshops.workshop_date
  FROM workshops
  JOIN rsvp
    ON rsvp.workshop_id = workshops.id;
```
# L5.2 Select students with the list of workshops they have sent an RSVP to.
 Solution 1:
```SQL
SELECT people.name, workshops.id, workshops.workshop_date
  FROM workshops
       INNER JOIN rsvp
       ON rsvp.workshop_id = workshops.id       
       INNER JOIN people
       ON people.id = rsvp.person_id
 ORDER BY people.name;
```
 Solution 2:
```SQL
SELECT people.name, workshops.id, workshops.workshop_date
  FROM workshops
  JOIN rsvp
    ON rsvp.workshop_id = workshops.id
  JOIN people
    ON people.id = rsvp.person_id
 ORDER BY people.name;
```
## L5.3 Find all workshops that have no RSVP.
 Solution 1:
```SQL
SELECT DISTINCT workshops.id, workshops.workshop_date
  FROM workshops
       LEFT JOIN rsvp
       ON workshops.id = rsvp.workshop_id
       WHERE rsvp.id IS NULL;
```
