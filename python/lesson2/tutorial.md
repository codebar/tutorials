---
layout: page
title: Playing with variables
---

In this tutorial we are going to look at variables, user input and decision
making.

## Creating a variable

Python allows us to store data in something called variables so that we are
able to use this data at a later point. To place an item in a variable we give
it a name then set its value.

Now in the REPL type:

    >>> year = 2016

In this example you have now stored the value `2016` into the variable `year`.
See what happens next when you type `year' into the REPL. Does it show it back
to you?

How about saving your age into a variable or your lucky number? Have a play
around with storing numbers into variables.

## Storing numbers in variables

Now that you are familiar with the use of variables, we are able to combine
variables with the maths operations we learnt in the previous tutorial.

Now in the REPL type the following:

    >>> revenue = 1000
    >>> costs = 200
    >>> profit = revenue - costs

Now type `profit` to see the results of this calculation.

Now work out the cost of running a codebar workshop if 60 people turned up and
pizza cost £8 per 2 people?

Along with pizza, students and cost, what other variables can you think of that
could go into this calculation?

## Storing text in variables

As well as numbers variables are able to store text, known in Python as
strings.

Now in the REPL type:

    >>> name = 'codebar'
    >>> url = "codebar.io"

Now type `print(name)` and `print(url)` to see these strings shown back to you.
As you can see Python allows both single and double quotes to denote a string
variable. Double quotes are required if there is going to be an apostrophe in
the string.

For example:

    message = "I'm a string"

Sometimes you will need to use an apostrophe within a single quote, on
occasions like this it is recommended to use "string escaping". This would look
like:

    message ='I\'m a string'

Try storing a string within a variable without quotes, see what happens?
Numbers do not require quotation marks, whereas they are mandatory for storing
strings.

Now store some strings in variables that contain apostrophes and some that do
not.

## Types & casting

Python is what's called a "typed language".  This is to say that there are
multiple *types* of objects that you work with in Python, and they don't all
act the same way.  The three types you've learnt so far are *integers* (`int`),
*floats* (`float`), and *strings* (`str`). Integers are whole numbers, floats
are numbers with a decimal point, and strings are any number of characters
surrounded by either "" or ''. This is important to know because every Python
programmer has tried to do this at least once in their career:

    "7" + 8

Go ahead and try this in your REPL, it explodes with a `TypeError`.  You just
tried to add a number to something that isn't a number and Python doesn't know
how to do that.  Additionally, the output of this may surprise you:

    "7" * 8

This tells Python to multiply a string by 8 so you get eight sevens rather than
what you might expect.  This is actually a very powerful feature of Python, but
when you're just starting out, it can be pretty confusing.

For now, all you really need to know is that if you have a string that you mean
to treat like a number, you have to *cast* it that way.  This is a string:

    "7"

While this is a number:

    int("7")

This is an integer:

    7

While this is a string:

    str(7)

Go ahead an experiment with `int()`, `float()`, and `str()`.  You'll need one
of these for the final part of this tutorial.

## Storing user input in variables

Now we are going to look at capturing user input using the python input
command. Let's create a variable in which to store the user input.

Now type this into your REPL:

    >>> lucky_number = input("What is your lucky number? ")

Type back your answer after it asks you.

Now in the REPL type:

    >>> food = input("What is your favourite food? ")

Now we are going to put your response into another variable.

Now try:

    >>> my_name = input("What is your name? ")
    >>> greeting = "Hello " + my_name

Then type `greeting` into your REPL to receive your message.

## Decision making using variables

Now that we know how to use variables and know how to store data, let's play
around with decision making and changing prints based on your answer. In Python
(and many other languages), one of the most common ways in which this is done
is using an `if` statement. For example:

    >>> number = 4
    >>> if number > 3:
    ...     print("Bigger than three")
    ... elif number < 3:
    ...     print("Smaller than three")

Here we can see that if a number we have passed into this decision making code
is bigger than three, we will receive a message telling us so. There is a
different message if the number is smaller than three.

Also, now that we are getting more in depth with Python, we should say that
Python is very particular about indentation. With Python, if any lines are not
indented correctly the code will not run. If you are running into bugs, this
is a good place to start.

In this final exercise we are going to ask you the number of coffees you have
drunk today and then change the statement returned to you, depending on your
answer.

Let's create a variable called `coffee` and put your coffee cup total into it:

    >>> coffee = input("How many cups of coffee have you consumed today? ")

Now we'll use some simple if/else logic to decide what to say about your
drinking habits:

    >>> if int(coffee) > 4:
    ...     print("You have a coffee problem")
    ... else:
    ...     print("You do not have a coffee problem")

Note the use of `int()` here to cast `coffee` as an integer.  Without it,
Python wouldn't know how to properly compare `coffee` to `4`.  Try setting
`coffee` to different numbers and then re-typing the if/else logic to see what
comes out.  Next you'll learn about *functions*, so you'll be able to do this
without all the re-typing.
