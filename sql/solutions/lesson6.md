---
layout: page
title: Lesson 6 solutions to exercises
---
# Lesson 6 solutions to exercises

## L6.1 List all the hosts that had at least one workshop hosted.

```SQL
SELECT h.name
  FROM hosts h
 WHERE EXISTS (
          SELECT *
            FROM workshops w
           WHERE h.id = w.host_id
         );
```
## L6.2 List all the persons that have someone else with their same age (Use only JOINs)

```SQL
SELECT distinct p1.name, p1.age
FROM people p1
         INNER join people p2
         ON p1.age = p2.age
         WHERE p1.name <> p2.name
```
## L6.3 List all the persons that have someone else with their same age (Use only EXISTS)

```SQL
SELECT p1.name
FROM people p1
WHERE EXISTS (
  SELECT p2.name
  FROM People p2
  WHERE p1.age = p2.age
AND p1.name <> p2.name)

```
## L6.4 List all the pair of persons that met at least in one workshop.

```SQL
SELECT p1.name, p2.name, r2.workshop_id
FROM RSVP r1
INNER JOIN people p1
ON r1.person_id = p1.id
INNER JOIN rsvp r2
ON r1.workshop_id = r2.workshop_id
INNER JOIN people p2
ON r2.person_id = p2.id
WHERE r1.Attendance = 1
AND r2.Attendance = 1
AND p1.name <> p2.name;

```
## L6.5 List all the persons with the number of workshops each one has been to.
```SQL
SELECT p.name, COUNT (*)
FROM people p
INNER JOIN rsvp r
ON p.id = r.person_id
WHERE attendance = 1
GROUP by p.name;
```
## L6.6 Create 3 VIEWs for the queries in L6.3, L6.4 and L6.5.
Solution 1:
```SQL

```
 Solution 2:
```SQL
CREATE VIEW Members_RSVP AS
SELECT p.id, p.name, r.workshop_ID, r.attendance
FROM people p
INNER JOIN rsvp r
where p.id = r.person_id

Select m1.name, m2.name, m1.workshop_id
FROM Members_RSVP m1
INNER JOIN Members_RSVP m2
ON m1.workshop_id=m2.workshop_id
WHERE m1.name<>m2.name
AND m1.attendance = 1
AND m2.attendance = 1

```
 Solution 3:
```SQL
SELECT name, COUNT(*)
FROM Members_RSVP
WHERE attendance = 1
GROUP BY name
```
