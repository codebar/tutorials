---
layout: page
title: Interactive Elixir
---
## Enter IEx

**IEx** is Elixir's interactive shell and a powerful ally to your journey
of learning Elixir. You will also hear the term *REPL* used to refer to
IEx.

REPL stands for (__R__)ead - (__E__)valuate - (__P__)rint - (__L__)oop. To
understand what this means lets look at an example.

Open your terminal (mac) or command prompt (windows) and type `iex`. You
should see the following output (numbers may vary):

```elixir
Erlang/OTP 19 [erts-8.1] [source] [64-bit] [smp:8:8] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]

Interactive Elixir (1.3.2) - press Ctrl+C to exit (type h() ENTER for help)
iex(1)>
```

Now type the expression `1 + 1` and press enter. You should see `2` printed
on the screen. You may have noticed that you can type another expression
now, for example `1 - 1`. A REPL therefore:

1. _Reads_ an expression like `1 + 1`
2. _Evaluates_ it (1 + 1 = 2),
3. _Prints_ it to the screen
4. _Loops_ back at the beginning so you can type expressions again

## Modules

In our first lesson we talked about the idea of _functions_ and _data_. In
functional languages it is common to group related functions into something
called a _module_. A module can be thought of as a container for actions
that act upon similar pieces of information.

For example in Elixir we have a `Integer` module which contains functions
that act upon integers.

Try the following inside IEx:

```elixir
Integer.digits(123)
```

## Exploring IEx

There's one particular function that you can use in IEx that can be a very
handy. Try typing `h`. What do you see? `IEx` comes packed with many useful
helper functions that can help you when you want to learn more about
specific things. It can even tell you things about itself! (try `h(IEx)`)

Many common actions that you will be using on different data, often live
inside modules that are associated with that data like the `Integer` module
we showed above. You can even ask a module about what functions it has by
typing the following:

```elixir
Integer.__info__(:functions)
```

You can also ask more specific questions like what a particular function
does:

```elixir
h(Integer.digits)
```

Another way that you can get the available functions of a module is by
typing the name of the module with a dot at the end like so: `Integer.` and
then pressing tab.

__Note__: For this to work on Windows, open your command prompt and type the following:

```powershell
setx IEX_WITH_WERL true
```

Now restart the prompt and type `iex`.

## Exercise

Explore IEx! Try finding out more information about a module and some of its functions.

**Previous Step**: [Installing Elixir](../lesson1/tutorial.html) - **Next Step**: [Elixir Basics](../lesson3/tutorial.html)

This ends our **Interactive Elixir** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
