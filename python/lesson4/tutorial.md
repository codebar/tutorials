---
layout: page
title: Fun with Functions
---

In this tutorial we are going to look at what functions are, how we use them
and why.

## Calling a function

A function is a collection of statements grouped together, that can be called
later to run these statements. Python comes with plenty of functions already
built in that you can use to perform common tasks. One example should be
something you're already familiar with:

	>>> print("This is a function")
	This is a function
	
It is also possible to store the output of a function in a variable for future
use. Let's try this with the built in function `len()`, which will provide us
with the length of a string:

	>>> length_of_my_string = len("This is my string")
	>>> print(length_of_my_string)
	17

The function `len()` takes one *argument*: the string it's measuring, and it
returns an *integer*: the length of the string.  Here, we're storing the output
of that function into a variable and then printing it out.

We can also chain functions to use the output of other functions as parameters.
In the earlier example, we stored the integer provided by the `len()` function
in a variable, and then passed that variable as a parameter for the `print()`
function, which then printed the list of numbers to the screen. That's more
steps than are really necessary.  We can just as easily use the output of
`len()` as an argument for `print()`:

    >>> print(len("This is my string"))
    17

This is called *nesting* and it can be very useful in making code more concise,
but using it too much could make code harder to read. Knowing when to use
variables instead of chaining functions comes with experience; in reading and
in writing code.

Try using `len()` to measure different strings with different lengths.  Looking
at the [documentation](https://docs.python.org/3/library/functions.html#len "Python 3 built in functions documentation")
is always a good idea when learning more about the language. You can also learn
more by purposefully trying to break the function: What happens when you don't
provide any parameters, or try to measure an integer?

## Defining your own functions

Now we are going to create our own function. To do this we use the `def`
keyword, provide a unique (and descriptive) name for the function and specify
any parameters that may be accepted by the function. Then we write the code we
want to be run when the function is called. Let's start with a simple function
that takes no parameters:

    >>> def print_name():
    ...     print("My name is Bart")
        
We can then call this function like we would any other:
 
     >>> print_name()
     My name is Bart

We can change the function to use a parameter. Let's change it so that it
allows the user to specify the name they want to print:

    >>> def print_name(name):
    ...     print("My name is " + name)
    ...
    >>> print_name("Lisa")
    My name is Lisa

You may have noticed that the code inside the function is indented. This is to
let the Python interpreter know what is part of the function we are defining,
and what is not. That is why when we write `print_name("Lisa")` directly after,
it knows to call the function and not include it in the function definition, it
is not indented.

Now that we have defined a parameter, the function will raise an error if no
parameter is provided. Try it yourself, it's good to get used to understanding
how Python errors work and what they mean. It's an important skill when
debugging more complex code.

We can enhance the function to run with a default name if one is not provided.
Let's do that by specifying a default value.

    >>> def print_name(name='Bart'):
    ...     print("My name is " + name)
    ...
    >>> print_name("Lisa")
    My name is Lisa
    >>> print_name()
    My name is Bart

## Different kinds of functions

Our function prints stuff out to the string, but returns `None`. Let's make a
function that returns a value:

    >>> def get_statement(name='Bart'):
    ...    return "My name is " + name

Now the function returns a value that we can work with. We could store this in
a value to be used later. Let's try storing it as a value, and using that value
as a parameter in another `print()` function call.

    >>> statement = get_statement("Lisa")
    >>> print(statement)
    My name is Lisa

Notice that we now need to use the print function to print to the screen. While
the REPL will print what the function returns to the console, if run as a
script, simply calling the function without a print statement would not print
anything to the screen. This is because the function is returning a value, and
no longer printing a string.

A subtle indicator of this is the quote marks around the sentence that denotes
a string is being output to the screen, rather than something being printed
with the print function:

    >>> statement = get_statement("Lisa")
    >>> statement
    'My name is Lisa'

## Why use functions

At first glance it may not seem obvious why it is worth expending the extra
effort of defining and calling a function, rather than just writing the code
independent of such things. Defining tasks as functions reduces the need to
copy and paste the same code multiple times to achieve the same effect. Simply
calling the function multiple times makes it much easier to not only write
code, but to read it also.

Using functions also makes it a lot easier to fix and change code. If you are
performing the same tasks in multiple places and discover a bug, without
functions you would need to fix the same bug multiple times. However with
functions, you simply fix the bug once, and all of the subsequent function
calls will now behave accordingly.

## Further reading

Python comes with a lot of built-in functions that are worth learning about,
as they have been created specifically to perform the most common tasks that
developers require. They are listed in the [documentation](https://docs.python.org/3/library/functions.html "Python 3 built in functions documentation").
To begin with, try using a few to see what they do, and how they behave with
varying parameters. Once you have grasped how a few of them work, try writing
your own functions that call the built in functions within them, like we did
when we used the `print` function in our own custom `print_name()` function.

Additionally, the site LearnXinYminutes has some [good material](https://learnxinyminutes.com/docs/python3/)
on Python.
