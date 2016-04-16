---
layout: page
title: Introduction to Java
---

---
## Polite Reminder **'Show not tell'**
### Focus on getting the student to do stuff and get instant feedback.
**Aims:** Understand the core concepts of java and get something working from coding a small application, perhaps a small command line program or a game.  
**Target audience:** Someone who has never seen java before, but may have written computer code before.  
**Target duration:** 45mins - 1hour.

---

## What is Java
Java is a programming language, it's main selling point is that the code you write is written once and can be run an a variety of Operating Systems and irrespective of devices it is running on be it a computer, a phone or a web browser.

## How does Java Work
* **Source** - You will write Java source code
* **Compiler** - Your source will then be processed by a compiler which will check your code for any errors and won't let you compile until the compiler is happy your code will be able to run.
* **Output(code)** - The compiler will generate a new file written in java bytecode. Any compatible device with Java installed will be now able to now run your application
* **Virtual Machine** -  The bytecode will be run on the Java virtual machine which in available on over 3 billion devices.


#### What you've learned so far
Java is a programming language compiled to bytecode and can be run on a Java virtual machine

## Code Structure in Java
```
 ______________________________________
|Source file                           |
|   ________________________________   |
|  |Class File                      |  |
|  |   ___________    ___________   |  |
|  |  |           |  |           |  |  |
|  |  | method 1  |  | method 2  |  |  |
|  |  | statement |  | statement |  |  |
|  |  |           |  | statement |  |  |
|  |  |___________|  |___________|  |  |
|  |________________________________|  |
|______________________________________|
```
#### Source files
Source files have the extension .java and will contain class files. These class files make up the building blocks of your code.
```
public class fruit {



}
```
#### Class files
These Class files will contain methods which will be instructions.
```
public class fruit {
  void apple (){

  }
}
```
#### Statements
Statements are a series of instructions.
```
public class fruit {
  void apple (){
    String color = "Green";
  }
}
```
### What you've learned so far
Source files contain __class files__.  
Class files contain __methods__.  
Methods contain __statements__.

## Getting started
##### Requirements

* 15 minutes

##### Achievements

By the end of this tutorial you will be able to:

* write a **Hello World** Application that outputs on the:
    * Command Line (CLI)
    * Browser

---
## Comments
All programming languages allow for ways to leave notes for yourself or other developers. These annotations are called comments and in java they can be done in two different ways, single and multiple line comments.

```
/*
    Multiple line comments
*/
public class fruit {
  void apple (){
    // Single line comments
    String color = "Green"; // These can also be used inline
  }
}
```


## Writing your first line of Java


### What you've learned so far

## Variables and Types

### Keywords, identifiers, and strings

## Arrays
Lets make an array. Arrays are collections of objects of the same type. The size of the array must be decided when created.
```
String [] days = new String[7];
```
|index|item|
|---|-------------|
|0  | null        |
|1  | null        |
|2  | null        |
|3  | null        |
|4  | null        |
|5  | null        |
|6  | null        |

Lets add some items to an array. Each item is accessed by an numerical index that indicates the position where the object is stored in an array. Note in computer programming counting generally starts from zero.

```
String [] days = new String[7];
day[0]="monday";
days[1]="tuesday";
days[2]="wednesday";
```
|index|item|
|---|-------------|
|0  | "monday"    |
|1  | "tuesday"   |
|2  | "wednesday" |
|3  | null        |
|4  | null        |
|5  | null        |
|6  | null        |
**Question:** what will the below code return?
```
System.out.println(days[1]);
```


## Conditionals

## Functions

### What you've learned so far

## Further Reading
* [Codecademy Learn the fundamentals](Learn the fundamentals of the Java programming language)https://www.codecademy.com/learn/learn-java
* [Interactive Java Tutorial](http://www.learnjavaonline.org/)
* [Java 101: Learn Java from the ground up](http://www.javaworld.com/article/2076075/learn-java/core-java-learn-java-from-the-ground-up.html)
