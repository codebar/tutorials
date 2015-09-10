---
layout: page
title: Testing your code
---

# Why test code?
Testing should be at the foundation of all projects. Whether this
be basic, integration or unit tests. Automated (CI), run by hand or
some other method.

While this tutorial is around *writing a program to test expectations
of what will be. There's no harm in testing by an individual.

This tutorial is to introduce you to the concept of computer based tests.
The goal. Make life better and easier for yourself and others.

Chances are for every feature you will introduce more complexity will arise.
Thus by writing rules and expectations for existing and new features you
will discover problems, mistakes and other things sooner.

## Ideal Prerequisites
* A grasp of CLI (command-line)
* The Python tutorial
* Willingness to succeed!

## Example time
Take the following code from below. Save into a new file.

      import unittest

      class someTest(unittest.TestCase):
          def test_number_values(self):
              self.assertEqual(2,1)

      if __name__ == '__main__':
          unittest.main()

What is the output you get from running the file? Good, bad, excessive?
Below is an example of what output we should get returned.

      .
      ----------------------
      Ran 1 test in 0.000s

      OK

Note the above output is edited slightly for readability.

Let's start reading line by line. The first line should be all our returned
results for each test case (TestCase) a grand total of one symbol, one test!
The next next line is to seperate the command-line visualisation from our
spoken phrase of how many tests were run and in how long. Poorly written
tests can be diagnosed here!

When you run the tests program, it give us either a Fail (F) or an OK (.)
for each of our test cases.

OKAY! So if there's a failing test then we'll look at the testcase and
deduce the problem. In this case try changing: "2, 1" to "3, 1".

Or think again and try to understand what the method does. It should be
possible to read out that line of code and solve this without too much
difficulty. If you do discover difficulty... read on and hopefully we'll
grok this strange problem together!

## Reflection time
Did that fix it? Do you understand what is going on?

It's vital you grasp as much as possible rather than just change things.
Ask questions. Understand as much as possible. Don't give up yet!
Try to write out what the problem is if possible. Ideally on a piece of
paper or sketched out in some way.

## Almost there
Our program thanks to Python knows of a module called `unittest`, also
written in Python. This is a framework to solve test our code with. That's
where the function `assertEqual` comes from. And with this we pass it two
arguments (in this case) of two values (integers). The function then does
a look up similar to the common equality operator `==`.

The module `unittest` is imported in the same way you would import
FileUtils, DateTime (see previous tutorials) and other tutorials.

The positive thing it shows gets passed and not "Failed". Let's do some
editing together. Duplicate the function `test_number_values` and then
change it for a test on different types of values. Different words, compare
arrays of things. Regardless the goal is to have more than 1 test run!

Here is some more reading to do. Look up the following: 'snake_case',
'camelCase', 'assert' and 'equal'. Start to understand what you like
about each and go on from there to discover more types of assertions!

## Something a little more complex

Below we have some tests that look at an `Animal`. We instantiate an Animal
using parentheses and pass it the type of animal and give animal a name.

Our tests then start to check these things exist.

      import unittest

      class Animal:
          def __init__(self, *args):
              self.type = args[0]
              self.name = args[1]

      class compareAnimals(unittest.TestCase):

          def test_is_cat(self):
              animal_discovered = Animal('cat', 'meow')
              self.assertEqual(animal_discovered.type, 'cat')

          def test_has_name(self):
              animal_discovered = Animal('cat', 'meow')
              self.assertEqual(animal_discovered.name, 'meow')

          # def test_is_dog(self):
          #     animal_discovered = Animal('cat')
          #     self.assertEqual(animal_discovered.type, 'dog')
          #
          # def test_is_cat_or_penguin(self):
          #     animal_discovered = Animal('cat')
          #     self.assertEqual(animal_discovered, 'penguin')

      if __name__ == '__main__':
          unittest.main()

Please note. This is far for being the correct way you should write tests.
As you write more. You should be asking yourself and with others how to
write better, concise and clear tests that cover as much as possible.

If you discover a problem in your program. Think about how to
recreate the problem as a test case and then solve it in your program.

Programs and tests should ideally be two seperate things! Here we've crudely
combined the two. However, if possible seperate them into `animal_tests.py`, `animal.py` or some equivalent names.

## Congratulations!
This ends our **initial testing Python** tutorial. Is there something you don't understand?
Try and go through the provided resources with your coach. If you have any
feedback, or can think of ways to improve this tutorial
[send us an email](mailto:feedback@codebar.io) and let us know.
