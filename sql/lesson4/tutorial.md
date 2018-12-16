---
layout: page
title: Introduction to SQL
---

## About Lesson 4

Up until now, you've practised selecting data and formatting it but you haven't updated any of it. _Lesson 4_ will show you how to do that with three new operators: **UPDATE** to update existing records, **INSERT** to insert new ones and **DELETE** to delete existing ones.

In this lesson we will keep using the same database than before (https://sqliteonline.com/#fiddle-5be888fa749e451ljodase3y)


### Updating existing records

When you want to update existing records, SQL offers the **UPDATE** statement, which is of the form:

```SQL
UPDATE table
   SET field1 = value1, field2 = value2
 WHERE condition
```

#### Updating a single record

Let's assume that Emma Smith recently had a birthday and we need to set her age to `19`. We need to construct an **UPDATE** statement that only updates Emma's record and set the field correctly. The **WHERE** clause is the part of the update statement that selects what records to update so the simple way to check that it is correct is to use it in a **SELECT** statement first:

```SQL
SELECT *
  FROM people
 WHERE id = 1;
```

This should only return the record for Emma and we can confirm that her age is currently set to `18`. So let's construct an **UPDATE** statement that will change her age:

```SQL
UPDATE people
   SET age = 19
 WHERE id = 1;
```

We can then verify that her age has been changed by running the previous **SELECT** statement:

```SQL
SELECT *
  FROM people
 WHERE id = 1;
```

But how do we know that no other record has been accidentally updated? We can check by verifying all entries with age `19`:

```SQL
SELECT *
  FROM people
 WHERE age = 19;
```

And we can confirm that only Emma was updated.

#### Updating multiple records

Let's assume that both Mia and Abigail had birthdays. We could run two **UPDATE** statements but we notice that they share part of the name so we should be able to do it in one go using a **LIKE** statement. In order to do this, we need two things:
- A **WHERE** clause that only selects the two records we want to update
- A **SET** clause that is able to add 1 to their age rather than set them to a set value

We can try the **WHERE** clause using a **SELECT** statement:

```SQL
SELECT *
  FROM people
 WHERE name LIKE '%Moore%';
```

And then it's just a case of using SQL arithmetic capabilities to set the value correctly:

```SQL
UPDATE people
   SET age = age + 1
 WHERE name LIKE '%Moore%';
```

#### Updating all records in a table

If we omit the **WHERE** clause in our **UPDATE** statement, it can update all records in a table. This is very powerful and allows us to set all names to uppercase for example:

```SQL
UPDATE people
   SET name = UPPER(name);
```

However, be very careful with this as it can update a large amount of data in one go.

### Inserting new records

In order to insert new records, SQL offers the **INSERT INTO** statement. It comes in two forms: a simple form where you have to provide all fields in the record and an explicit form where you can specify what fields to insert.

#### Simple form

Let's add a new student called Valerie Knight, aged 44, no children, born and lives in the UK, studies Arts, and has a job:

```SQL
INSERT INTO people
VALUES (41, 'Valerie Knight', 44, 'UK', 'UK', 0, 'Arts','yes');
```

#### Explicit form

The downside of the simple form is that the list of values needs to be provided in order and it is sometimes difficult to tell what value is what. By using the explicit form, we can make the code more readable and ensure that it will still work even if new fields are added to the table. So let's insert a record for a new student named Sonia Gupta Pacin for whom we don't know the studies, neither we know if she has a job:

```SQL
INSERT INTO people (id, name, age, country_of_birth, country_of_residence, number_of_children)
VALUES (42, 'Sonia Gupta Pacin', 25, 'ES', 'IN', 1);
```

### Deleting records

Finally, let's delete some records. SQL offers the **DELETE** statement for this. Like the **UPDATE** statement, **DELETE** can operate on multiple records depending on its **WHERE** clause and will delete all records in a table if no **WHERE** clause is provided. So make sure that you test your **WHERE** clause with a **SELECT** first. Let's delete Valerie's record:

```SQL
DELETE FROM people
 WHERE id = 41;
```

Or if we want to delete all people who are not yet 18 years of age:

```SQL
DELETE FROM people
 WHERE age < 18;
```

## Lesson 4 exercises

For the exercises below, we'll use the same tables from previous lesson. You can find the whole database in the following link https://sqliteonline.com/#fiddle-5be888fa749e451ljodase3y

### Summary of the tables

people (id, name, age, country_of_birth, country_of_residence, number_of_children, studies, has_job)

locations (id, city, country, start_date)

hosts (id, name, location_id, students_capacity, coaches_capacity, contact_person)

workshops (id, host_id, date)

rsvp (id, person_id, workshop_id, date_of_rsvp, attendance)

## Write the following queries

Open this fiddle that will have the data already loaded: https://sqliteonline.com/#fiddle-5be888fa749e451ljodase3y
* L4.1 Update the age of the person named Luis Marco Polo.
* L4.2 Increase by 1 the age of all the people who were born in Italy.
* L4.3 Set all names to lowercase.
* L4.4 Insert a new student. What is the minimum amount of information about a student you have to input to create a new student? How does the database handle the missing values?
* L4.5 Delete the record you just inserted.
* L4.6 Delete the people with no children.
* L4.7 Add to the people the following study: "programming". Separate it by a comma. (You will have to investigate how to concatenate strings. Don't worry about those with _NULL_ for now).
* L4.8 Add a new location.

---
This ends our **SQL Lesson 4**. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

---
