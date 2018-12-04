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
  JOIN rsvp
    ON rsvp.workshop_id = workshops.id;
```

Solution 2:
```SQL
SELECT DISTINCT workshops.id, workshops.workshop_date
 FROM workshops
      INNER JOIN rsvp
      ON rsvp.workshop_id = workshops.id;
```

# L5.2 Select students with the list of workshops they have sent an RSVP to.

Solution 1:
```SQL
SELECT people.name, workshops.id, workshops.workshop_date
  FROM workshops
  JOIN rsvp
    ON rsvp.workshop_id = workshops.id
  JOIN people
    ON people.id = rsvp.person_id
 ORDER BY people.name;
```

Solution 2:
```SQL
SELECT people.name, workshops.id, workshops.workshop_date
 FROM workshops
      INNER JOIN rsvp
      ON rsvp.workshop_id = workshops.id       
      INNER JOIN people
      ON people.id = rsvp.person_id
ORDER BY people.name;
```
## L5.3 Find all workshops, with the workshop dates, that the individual with id 17 has RSVPed to, and the date of their RSVPs.

```SQL
SELECT workshops.id workshop_id, workshops.workshop_date,
       rsvp.person_id, rsvp.date_of_rsvp
  FROM workshops
  JOIN rsvp
    ON workshops.id = rsvp.workshop_id
 WHERE rsvp.person_id = 17;
 ```


## L5.4 Find all workshops that have no RSVP.

Solution 1:
```SQL
SELECT DISTINCT workshops.id, workshops.workshop_date
  FROM workshops
       LEFT JOIN rsvp
       ON workshops.id = rsvp.workshop_id
       WHERE rsvp.id IS NULL;
```
If your query returns no results, you are correct! There are no workshops that have received no RSVPs.
