---
layout: page
title: Expressive Elixir&#58; Thinking in Patterns

---

In this tutorial we will explore one of the most powerful features of Elixir called Pattern Matching and see how it helps us solve problems in a different, more *visual* way. To better understand the concepts we recommend you use **IEx** and follow along with the examples.

### Why Patterns?

Patterns are things we use in our day-to-day life to learn about the world and ourselves. A common pattern for example is the colour association we have for safety and danger. Something that is safe we usually associate with green. Something that is dangerous or requires caution, we associate with red.

What would a pattern look like in code? Let's take the following example:

```elixir
fruit_basket = ["apples", "oranges", "lemons"]
```

Here we have a list that contains 3 items. Let's assume we were playing a game where someone would have to guess what fruit are in the `fruit_basket` list. We could give them a hint by saying how many of them are in the list but hide the values and show them something like this:

```elixir
fruit_basket -> [fruit_1, fruit_2, fruit_3] # what fruit are in the list?
```

What we're trying to say here is that the list called `fruit_basket` fits the pattern of a list that contains 3 items. We don't know which ones but we know there's 3 of them.

Now if we change a couple of things in Elixir we can express the same idea. Go ahead and type the following in IEx:

```elixir
fruit_basket = ["apples", "oranges", "lemons"]

["apples", "oranges", "lemons"] = fruit_basket
```

In the first step we create a list with 3 fruit. In the next step we *matched on that pattern* by declaring a list with the 3 fruit in the same order.

### Match Operator

The above brings up an important point and that is the meaning of the `=` operator. In Elixir this is called the *match operator*. In many languages this operator is called the assignment operator and it's used to assign a value to a variable.

The `=` operator in Elixir is used to indicate whether *things match*. Let's analyse our fruit basket example:

```elixir
fruit_basket = ["apples", "oranges", "lemons"]
```

Here we're saying *"the fruit_basket variable matches the list on the right"*. Because the `fruit_basket` has no value, it takes whatever is on the right, in this case the list with the fruit, as its value. It works just like an assignment operator in other languages. Now that the `fruit_basket` has a value we can see a bit better how the match operator works. On the second line we have the following:

```elixir
["apples", "oranges", "lemons"] = fruit_basket
```

Unlike other languages, we can switch those values around. Here we're saying that *a list that contains apples, oranges and lemons matches the pattern of the fruit_basket.*. It's the same as typing:

```elixir
["apples", "oranges", "lemons"] = ["apples", "oranges", "lemons"]
```

What do you think will happen if you try this:

```elixir
["apples", "lemons"] = fruit_basket
```

### Pattern Matching Lists

If we combine our knowledge of how the match operator works and how patterns work, we can do some interesting things. Lets use our fruit basket example again:

```elixir
["apples", "oranges", "lemons"] = fruit_basket

[fruit_1, fruit_2, fruit_3] = fruit_basket
```

Can you guess what the values of `fruit_1`, `fruit_2` and `fruit_3` are? If you're not sure try it out in IEx!

Another useful pattern when working with lists is the following:

```elixir
[first | rest] = ["apples", "oranges", "lemons"]
```

This is a common pattern when working with lists in functional languages. The `first` and `rest` are just variables so the names could be anything. In fact some common names you will see for these variables are `head` and `tail`. Regardless of their name what they indicate is the following:

```elixir
head -> first element of the list
tail -> the rest of the list
```

### Pattern Matching Maps

Above we explored some common ways that we can use pattern matching to work with lists. We can also use pattern matching with maps. Let's look at an example!

Here we have a map that represents a person:

```elixir
alice = %{
  first_name: "alice",
  favourite_color: :green,
  favourite_books: ["The Alchemist", "1984", "Programming Elixir"]
}
```

Our task is to get the favourite books of Alice. If you recall in our last tutorial we saw a method we can use to get individual keys with `Map.get`. However we can also use pattern matching:

```elixir
%{favourite_books: books} = alice
```

Can you guess what the value of `books` is?

What we're doing here is indicating that on the right we have a value which is a map. Inside of that map there's a key called `favourite_books` which points to some value and we provide a  placeholder for that value with `books`.

Now you might ask, how does that work? Doesn't Alice have 2 more keys? The pattern on the left doesn't match the pattern on the right!

Maps, unlike lists, allow you to *partially match* a pattern. This means you don't have to match the exact pattern; only the piece (`favourite_books`) that you care about. This is a characteristic of maps and it's different to how lists work where you have to match the exact pattern.

### More Complex Pattern Matching

Often pattern matching can be very useful when working with complex data structures. Say we have some data relating to actresses and we're trying to find the latest movie of an actress. An actress record looks like this:

```elixir
actress = %{
  first_name: "Octavia Spencer",
  born:  "25-05-1970",
  movies: ["Hidden Figures", "Bad Santa 2", "Car Dogs"]
}
```

If we use the same approach we used in the example with Alice, we could do the following:

```elixir
actress = %{
  first_name: "Octavia Spencer",
  born:  "25-05-1970",
  movies: ["Hidden Figures", "Bad Santa 2", "Car Dogs"]
}

%{movies: movies} = actress

List.first(movies)
=> "Hidden Figures"
```

However we can combine what we learned from pattern matching on lists with what we can do with maps in one full swing:

```elixir
actress = %{
  first_name: "Octavia Spencer",
  born:  "25-05-1970",
  movies: ["Hidden Figures", "Bad Santa 2", "Car Dogs"]
}

%{movies: [latest_movie | previous_movies]} = actress

latest_movie
=> "Hidden Figures"

previous_movies
=> ["Bad Santa 2", "Car Dogs"]
```

Pattern matching allows us to visually express our intentions. We can also verify our thoughts and intentions by just looking at the structure of the patterns. This approach lends itself nicely to the way we often think as humans.

## Conclusion

Congratulations for making it this far! We learned what pattern matching is and showed some of its usages. However, there is more! In the next tutorials we will see how pattern matching can also be used in functions to produce shorter and more concise programs.

To wrap things up, here are some additional exercises that you can try in __IEx__:

1. How would you get the second element from the list `[1, 2, 3]` using only pattern matching?

2. How would you get the second element of the first list from the list `[[1, 2, 3], [4, 5, 6]]` using only pattern matching?

3. If you had the following expression `[head|tail] = [1]` what would be the value of `tail`?

4. Using pattern matching only, try to retrieve the post code from this structure:

   ```elixir
   %{name: "Alice", age: 21, address: %{street: "1 Wonderland St", post_code: "FX 1AA"}}
   ```

**Previous Step**: [Elixir Basics](../lesson3/tutorial.html) - **Next
Step**: [Expressive Elixir - Pipeline of Transformations](../lesson5/tutorial.html)

This ends our **Elixir Basics (Data Types)** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
