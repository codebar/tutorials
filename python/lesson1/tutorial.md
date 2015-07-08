---
layout: page
title: Introduction to Python
---

# Introduction to Python

Welcome to the first Python tutorial. We're going to look at getting Python up and running on your computer, then trying a few simple operations to get to grips with the development environment, the syntax and basic computation.

## Installation

First thing, install Python.

On Mac, you already have Python.

On Windows:

1. Head to [the Python website](https://www.python.org/).
2. Click "Downloads".
3. There will be two options; one for Python 3 and one for Python 2. **Download Python 2.** At the time of writing, the version available is 2.7.10.
4. Run the downloaded installer and click *Next* until you reach the *Customization* page.
5. Scroll down to the bottom and choose to *Add python.exe to PATH*.
6. Continue clicking *Next* until it's installed.

## Opening the REPL

Python is often developed with the aid of a *REPL*, or *Read-Eval-Print-Loop*. The REPL is a way of getting immediate feedback as you work.

Python's REPL is called **IDLE**.

On Windows, you can run it by clicking on the shortcut in your Start menu or Start screen named "IDLE (Python GUI)".

On Mac OS, open the Terminal and type "python" to start the REPL. At the top, you'll see something similar (but probably not identical) to this:

    Python 2.7.6 (default, Sep  9 2014, 15:04:36)

If you see it, make sure you're running Python 2, not Python 3, otherwise parts of this exercise will not make sense. Once you've checked that, we're ready to move on to writing Python.

## Hello, World!

In keeping with tradition, we're going start by printing "Hello, World!" to the console. In Python, the command to achieve this is aptly named `print`. Type the following:

    print "Hello, World!"

The REPL will simply print the text right back at you.

Now, print your name.

## Maths

Everybody's favourite pastime.

### Simple Arithmetic

Python can do simple arithmetic. To start, let's try addition:

    5 + 7

You should now see the result of that calculation in your REPL.

Subtraction, multiplication and division work the same way.

    6 - 2
    8 * 4
    9 / 3

Now try a few more to see what you get.

Let's see what happens when you divide 14 by 4. Notice the remainder is chopped off. We can use the *modulus* operator, `%`, to get the remainder instead. Try `14 % 4` and see.

### Combining Operations

Being able to only perform one operation at a time is pretty limiting, so Python allows us to combine mathematical operations. Try this one:

    9 * 4 - 6

Now try a few more. You can combine as many operations as you like.

### Operator Precedence

Did you notice any unexpected results when you started combining operations? If you didn't, try this:

    10 - 2 * 4

Python follows the traditional mathematical rules of precedence, which state that multiplication and division are done before addition and subtraction. (You may remember what *BODMAS* means.) This means in our example above, 2 and 4 are multiplied first, and then the result is subtracted from 10.

We can change the order of operations by using parentheses. Anything inside parentheses is executed first.

Now try it like this:

    (10 - 2) * 4

You should have a different answer.

Because of precedence rules, complex operations such as our first example can be quite confusing to read. If you find yourself writing more complex expressions, there is no harm in adding parentheses for clarity.

### Decimal Points

Remember dividing 14 by 4? The result probably surprised you. Fortunately, there is a way to convince Python that you really do want the full answer, not just the whole number. We can do this by *starting* with numbers with decimal points:

    14.0 / 4.0

Now try a few more and see how it goes. Remember that you can also use non-whole numbers in your calculations.

You may notice that there are still some limitations. For example, try:

    10.0 / 3.0

The answer should go on forever, but it doesn't. This is because there is only a finite amount of space to store the number, and it runs out after approximately 15 significant figures.

### Concluding

Now let's combine what we have learnt today. We can tell `print` to print multiple things at once, separated by a space:

    print 'The result of 2 + 2 is', 2 + 2

This concludes today's tutorial. In the next tutorial, we'll find out how to combine the results of multiple separate expressions using variables, get input from the user, and make decisions based on that information.

### Further Reading

There is a very good introductory article in [Google Developers Guide](https://developers.google.com/edu/python/introduction)

You can also find resources for beginners on [the Python website](https://www.python.org/about/gettingstarted/) and refer to [the Python documentation](https://docs.python.org/2/tutorial/introduction.html), where the language basics are explained.
