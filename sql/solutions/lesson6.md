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
SELECT DISTINCT p1.name, p1.age
  FROM people p1
       INNER join people p2
       ON p1.age = p2.age
 WHERE p1.id <> p2.id;
```
## L6.3 List all the persons that have someone else with their same age (Use only EXISTS)

```SQL
SELECT p1.name
  FROM people p1
 WHERE EXISTS (
         SELECT p2.name
           FROM People p2
          WHERE p1.age = p2.age
                AND p1.id <> p2.id
       );

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
       AND p1.id <> p2.id;

```
## L6.5 List all the persons with the number of workshops each one has been to.
```SQL
SELECT p.name, COUNT (*)
  FROM people p
       INNER JOIN rsvp r
       ON p.id = r.person_id
 WHERE attendance = 1
 GROUP BY p.name;
```
## L6.6 Create 3 VIEWs for the queries in L6.3, L6.4 and L6.5.
Solution View L6.3:
```SQL
CREATE VIEW PEOPLE_SAME_AGE AS
  SELECT p1.name
    FROM people p1
   WHERE EXISTS (
           SELECT p2.name
             FROM People p2
            WHERE p1.age = p2.age
                  AND p1.id <> p2.id
        );

```
Solution View L6.4:
```SQL
CREATE VIEW PEOPLE_THAT_MET AS
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
         AND p1.id <> p2.id;

```
Solution View L6.5:
```SQL
CREATE VIEW PEOPLE_ATTENDANCE AS
  SELECT p.name, COUNT (*)
    FROM people p
         INNER JOIN rsvp r
         ON p.id = r.person_id
   WHERE attendance = 1
   GROUP BY p.name;
```
