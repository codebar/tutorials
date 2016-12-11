---
layout: page
title: Elixir Basics
---
In this tutorial we will use __IEx__ and explore some of the basic and most often used data types in Elixir.

## Integers

In the previous tutorial we saw an example of a basic operation using integers with `1 + 1`. Elixir comes with most operations that exist in other languages too. In addition to addition, you can perform the following:

1. Subtract: `2 - 1`
2. Multiply: `2 * 2`
3. Divide: `2 / 1`

Go ahead and try them in __IEx__! Do you notice anything different between them?

The one noticeable difference is that the division operation returns a `Float` (`2.0`). Remember the helper function we mentioned in the previous tutorial? Try asking __IEx__ for more information on the `/` operation. _Hint_: It lives inside the `Kernel` module.

## Strings

In Elixir strings are declared with double quotes like so: `"Hello there!"`.

__Note__: In many languages you can alternate between single quotes (`'hello'`) and double quotes (`"hello"`) but that is not the case with Elixir. In Elixir single quotes denote a _char list_. These are most commonly used when talking to Erlang libraries and it's not something that you will use often so for now it is safe to ignore.

What are some fun things you can do with strings? Remember the concept of modules storing functions that operate on the same data type we discussed? The `String` module has plenty of useful functions that operate on strings. For example you can:

1. Get the first character of a string: `String.first("hello")`
2. Capitalise a string: `String.capitalize("hello")`
3. Check whether it starts with a given letter: `String.starts_with?("hello", "h")`

And many more so go ahead and investigate further using our good old friend __IEx__.

## Atoms

Atoms in Elixir are constants; things that don't really change once they're expressed. An atom looks like this: `:something`. They start with a colon and can have various characters like so: `:i_am_atom_1`. They cannot start with a number (`:1` is invalid) but they can start with a string (`:"1"`). We will see how atoms become useful shortly.

Next up on our list is…Lists!

## Lists

One of the most used data structures in Elixir is a list. A list can be declared using brackets `[]`. Lists in Elixir can hold values of the same type `[1, 2, 3]` or of varying types `[1, "two", :three]`. You can also have lists within other lists `[1, [2, 3]]`.

Another common usage of lists is for holding key-value pairs. This is known as a _keyword list_. A keyword list also utilises atoms like the ones above:

```elixir
[one: 1, "two": 2]
```

Notice how you can also denote an atom by adding the colon at the end. This only works though when you have a key-value structure like the above.

Similar to the string module we have a `List` module which can operate on lists. For example you can:

1. Grab the first element of a list: `List.first([1, 2, 3])`
2. Remove an item from the a list: `List.delete([1, 2, 3], 2)`
3. Find a key-value pair at a position: `List.keyfind([one: 1, "two": 2], :one, 0)`

__Note__: Underneath, a list in Elixir is constructed as a _[Linked List](https://en.wikipedia.org/wiki/Linked_list)_. You don't need to understand right now what this means but it's something to keep in mind as it comes with certain constraints. For example depending on the size of a list, accessing an element at a given index can be very inefficient.

## Maps

A map, also known as a hash or associative array in some languages, is a key-value data structure. You can declare a map using the percent sign with curly braces `%{}`. Maps are useful when you want to keep together data that are associated:

```elixir
%{first: "Alice", last: "Thompson", age: 25}
```

Here we have declared a map with 3 keys; the atoms `:first`, `:last` and `:age` with each pointing to a value.

Using the `Map` module we can perform certain actions on a map:

1. Retrieve a value using a key: `Map.get(%{first: "Alice", last: "Thompson", age: 25}, :last)`
2. Add a key-value pair: `Map.put(%{first: "Alice", last: "Thompson", age: 25}, :country, "UK")`

## Tuples

Next up, we have tuples! Tuples are declared using the curly braces `{}` and they're just another way of grouping related data together. For example the above map could be converted to a tuple like so:

```elixir
{"Alice", "Thompson", 25}
```

A common function that is used with tuples is `elem` which retrieves an element at a given index:

```elixir
elem({"Alice", "Thompson", 25}, 0)
```

The `elem` function comes from the `Kernel` module and like other functions from this module you don't need to add the prefix.

__Note__: Unlike lists, tuples are implemented in such a way that retrieving an element at a given index is a fast operation.

## Functions

Last but not least, we have functions. You can think of a function as an action that takes some data and performs some kind of transformation on it. We can declare a function like so:

```elixir
fn(a, b) -> a + b end
```

This a function that takes two inputs and adds them together. We start the function with the `fn` keyword and we end it with the `end` keyword. After the `fn` keyword we declare how many inputs this function takes with `(a, b)`. We then have an arrow `->` which indicates the point from which the _body_ of the function begins. This is where you will define what operation will take place.

You can call an anonymous function like so:

```elixir
(fn(a, b) -> a + b end).(1,2)
```

Notice the dot `.` followed by the parentheses `()` that includes the necessary inputs.

We can also store our function into a named variable:

```elixir
add = fn(a, b) -> a + b end
```

And call it like so:

```elixir
add.(1, 2)
```

Functions are one of the fundamental building blocks of Elixir and functional programming in general and as such we will cover them in more detail as we go through the tutorials.

## Conclusion

Congratulations for making it this far! We're still early in our journey through Elixir but covering the above will make the next lessons easier. To wrap things up, here are some additional exercises that you can try in __IEx__:

1. How would you add an element to a list?
2. How can you tell if a number is odd or even?
3. How can you check if diving two numbers leaves no remainder?
4. How can you check if a string contains a character or a word?
5. How can you check if a map contains a given key?
6. How can you retrieve all the values of a map?
7. Write a function that takes two strings and joins them together.

**Previous Step**: [Interactive Elixir](../lesson2/tutorial.html) - **Next Step**: [Expressive Elixir](../lesson4/tutorial.html)

This ends our **Elixir Basics (Data Types)** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
