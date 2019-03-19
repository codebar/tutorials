---
layout: page
title: Strings, Integers and Floats
---

In this tutorial, we're going to start to work with the basic types of Python:
strings (for text) and integers & floats (for numeric values).

Notice that in this tutorial you are working in REPL (IDLE). You can find more information
on REPL and how to start Python in your `cmd` or `terminal` in the [Installing Python tutorial](python/lesson0/tutorial.html) . 

## Hello, World!

In keeping with tradition, we're going to start by printing "Hello, World!" to
the console. In Python, the function to achieve this is aptly named `print()`.
Type the following next to the `>>>`:

    print("Hello, World!")

The REPL will simply print the text right back at you.

Now, print your name, and experiment a little!

### Multiple Arguments

Something else interesting about the `print()` function is that you can pass it
multiple arguments to print:

    >>> print("Hello", "Goodbye")

In fact, you can pass as many things into print as you like:

    >>> print("one", "two", "three", "four", "five", "six", "seven", "eight", "nine")

Of course, you could also get the same output with this:

    >>> print("one two three four five six seven eight nine")

It's up to you to decide what's appropriate and when.

## Maths

Everybody's favourite pastime.

### Simple Arithmetic

Python can do simple arithmetic. To start, let's try addition:

    >>> 5 + 7

You should now see the result of that calculation in your REPL.

Subtraction, multiplication and division work the same way.

    >>> 6 - 2
    >>> 8 * 4
    >>> 9 / 3

Now try a few more to see what results you get.  Try your hand at all of the
basic mathematical operators: `+`, `-`, `*` (multiplication), `/` (division),
`**` (exponents) and `%` (modulus).

### Combining Operations

Being able to only perform one operation at a time is pretty limiting, so
Python allows us to combine mathematical operations. Try this one:

    >>> 9 * 4 - 6

Now try a few more. You can combine as many operations as you like.

### Operator Precedence

Did you notice any unexpected results when you started combining operations? If
you didn't, try this:

    >>> 10 - 2 * 4

Python follows the traditional mathematical rules of precedence, which state
that multiplication and division are done before addition and subtraction. (You
may remember *[BODMAS](https://en.wikipedia.org/wiki/BODMAS)*.) This means in
our example above, 2 and 4 are multiplied first, and then the result is
subtracted from 10.

We can change the order of operations by using parentheses. Anything inside
parentheses is executed first.

Now try it like this:

    >>> (10 - 2) * 4

You should have a different answer.

Because of precedence rules, complex operations such as our first example can
be quite confusing to read. If you find yourself writing more complex
expressions, there is no harm in adding parentheses for clarity.

### Decimal Points

One of the things that tends to confuse newcomers to programming in general is
the concept of *floating point numbers*.  Basically, numbers with decimal
points tend to behave a little strangely when you're performing mathematical
operations on them.  The reasons for this are complex and rooted in the nature
of computing itself, so for now, let's just go with the understanding that
weird things happen with decimal numbers.

To see an example of this, try dividing `10` by `3`:

    >>> 10 / 3

The answer should go on forever, but it doesn't.  Now try something a little
more precision-sensitive:

    >>> 1.000000000000001 * 8

Probably not what you'd expect right?  For now, you'll just have to accept this
as a limitation, and later on you'll learn how other programmers work around
it.

### Concluding

Now let's combine what we have learnt today. We can tell `print()` to print
multiple things at once, separated by a comma:

    >>> print('The result of 2 + 2 is', 2 + 2)

### Saving Your Work

In this tutorial you coded in the REPL (IDLE), but a lot of times you want
to save your code instead. In such cases you can save your code to a file using a text editor. 
We give some information on text editors in our [Getting started guide](general/setup/tutorial.html) .

Open your text editor and write the code from the first exercise:

    print("Hello, World!")

Save the file as `ex1.py`. You can name your files as you like, 
but they should end with `.py`, so python can read them easily.
Reading your file into Python you will use your `cmd` or `terminal` shell again. 
You can read your file with the following command (type without the $ sign):

	$ python ex1.py

If you have `>>>`in front of your code, you are still in REPL(IDLE) and need to exit
it with:

	>>> quit()

Then you should be able to load the file. 
	
This concludes today's tutorial. In the next tutorial, we'll find out how to
combine the results of multiple separate expressions using variables, get input
from the user, and make decisions based on that information.

### Further Reading

There is a very good introductory article in [Google Developers Guide](https://developers.google.com/edu/python/introduction).

You can also find resources for beginners on [the Python website](https://www.python.org/about/gettingstarted/)
and refer to [the Python documentation](https://docs.python.org/3/tutorial/introduction.html),
where the language basics are explained.
