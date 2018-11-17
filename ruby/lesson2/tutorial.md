---
layout: page
title: The basics
---

# Reading from the command line

_Use the **irb** to try out the examples_.

> Don't forget to type!

### Writing to the console

`print` is similar to `puts` but it doesn't add a new line to the end of the output.

`print "x + y ="`

### Reading from the console

To read input from the console:

```ruby
  input = gets
```

To read input without the new line use `chomp`

```ruby
  input = gets.chomp
```

### Ranges

A range is an interval with a beginning and an end.

To get the numbers between 1 until 5.

```ruby
(1..5).to_a
```

To get all the numbers from 1 up to 5, excluding 5.

```ruby
(1...5).to_a
```

> `to_a` returns an array representation of an object. In the above case, it converts a range to an array

### `Random.rand()`

Random is an interface to a number generator. The `rand()` method takes in an integer value **max**. It returns an integer greater than or equal to zero and less than **max**. You can also use a **range** as a parameter.

```ruby
Random.rand(5..10)
```

## Exercise 1: Numbers game!

In this exercise we'll create a small game to help us practise maths.

First, create an empty file called `numbers.rb`.

To execute the file, run the following:

```bash
ruby numbers.rb
```

In this exercise we want to generate two random numbers x and y using `Random.rand()`. We will output the numbers to the console and read in the answer.

```ruby
print "#{x} + #{y} = "

answer = gets.to_i
```

> [to_i](https://apidock.com/ruby/Symbol/to_i) returns an integer representation of an object.

if the answer is correct, output `Right!`. If the answer is incorrect, output `Wrong :(`.

> Use an _if .. else .._ statement

Now we also want to limit the generated number to be between 1 and 10. To do that, we can pass in a range as a parameter to `Random.rand()`.


### Extending the game

Let's add a loop, so that the game is repeated 10 times before it ends.

```ruby
turns = 0

while turns < 10
  turns = turns + 1

  # game code
end
```

We can also store the number of correct and failed attempts so we can calculate the score of the game. We can do that by incrementing the value of a `correct` and `wrong` variables when we check if the answer is correct or not.

To calculate the percentage of correct answers we need to divide the correct answers with the total attempts and multiply the result by 100.

```ruby
score = 100*...
```

Output the score after the loop

```ruby
puts "Rights #{correct}; Wrongs #{wrong}; Score #{score}%"
```

### Time!

To get the number of seconds that it takes to run the game we can store the timestamp at the beginning of the game and then subtract it at the end. To do that, we can use `Time.now`

> Try outputting `Time.now` in the irb

First create and assign the time to a variable `start`. Then, subtract `Time.now - start` and output that.

```ruby
puts "Total time #{duration} seconds"
```

> You can also calculate the average time it take to respond to each problem by dividing the duration with the amount of attempts.

```ruby
puts "#{duration/turns} seconds per problem"
```

### Bonus

At the beginning of the game ask for the number of turns. If return is pressed default to 0.

> To default value of a variable, only if the variable empty you can use the `||=` operant. This is called lazy loading.

```ruby
# here the number will get assigned to 1 as its value is nil
number = nil
number ||= 1

# The number will not get assigned to 1 because it already has a value
number = 2
number ||= 1
```

## Reading and writing to a file

In Ruby we can use the `File` object to read and write to files.

To open an existing file we use

```ruby
File.open(filename, mode)
```

The **mode** indicates if the file will be opened for **r**eading or **w**riting.

#### Writing to a file

To write to a file, we must open it using the write mode (w), write the new content and `close()` it when we are done.

```ruby
filename = "colors.txt"
file = File.open(filename, "w")
file.puts "red "
file.puts "green"
file.puts "blue"
file.close
```

Alternatively, we can use a block.

```ruby
filename = "colors.txt"
File.open(filename, 'w') do |file|
 file.write("red")
 file.write("green")
 file.write("blue")
end
```

#### Reading from a file

To read from a file, we first open it and then while there is more content, read each line.

```ruby
File.open('animals.txt', 'r') do |file|
  while line = file.gets
    puts line
  end
end
```

> Download the [animals.txt file](https://gist.github.com/despo/88924e78d0d294035b3d) used in the example.

## Exercise 2: Storing scores

Now that we know how to store information, we can store and load the scores for our numbers game.

Extend the game to ask for the player's name at the end of the game, and store the name and time each game has taken in the `scores.txt` file using comma separated values

```
player1, 12.24
player2, 8.32
player3, 9.12
```

Then display the five highest scores.

To get the highest scores you can read in each line and then use `split(",")` to turn it into an array.

```ruby
while entry = file.gets
  scores << entry.split(",")
end
```
You can then use the [array sort](http://ruby-doc.org/core-2.1.1/Array.html#method-i-sort) method.


# More practise

Download and try to go through as much of the [Ruby Koans](https://github.com/edgecase/ruby_koans) as you can.

After you download the repository, you can generate the koans using

```bash
rake gen
```

To regenerate and delete any progress you've already make run

```bash
rake regen
```

To try out the koans run `rake`. It gives you a hint as to what fails and you can move forward by fixing the file and running `rake` again.

If you are working through this at home you can ask for help in our [slack channel](https://slack.codebar.io/).

## Some reading material

[Why's poignant guide to Ruby](http://poignant.guide/) is a cartoon written about Ruby by a programmer called Why the Lucky Stiff. You can also download the [pdf version](http://www.rubyinside.com/media/poignant-guide.pdf).

---
This ends our **Ruby basics** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

[1]: https://rvm.io/rvm/install "Ruby Version Manager"
[2]: https://github.com/rbenv/rbenv "rbenv"
