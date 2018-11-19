---
layout: page
title: Object Oriented Ruby and Inheritance
---

# Before we start

There are no sample files for this tutorial as you should already know how to create a new Ruby file yourself. Before you begin, remember to create a new directory in your Github project or a new repository where you can store your exercises and try out code.

Don't forget to commit to git regularly and also try to **type** out the examples as much as possible instead of copy &amp; pasting!

If you are going through the tutorial in your own time and need any help then [join our slack channel](https://slack.codebar.io/), but first read our [Code of Conduct](https://codebar.io/code-of-conduct) as we will not tolerate any inappropriate behavior.

# What is Object Oriented Programming?

Object Oriented Programming is a way of programming where concepts are represented as **objects**, and the functionality of those objects are called **methods**. In Ruby, an object is defined by a **class** and everything is an object; Strings, Integers, even true and false.

## What is a class?

A class is a way of representing an object, a blueprint for describing how it should look and behave. It enables us to package up data, and define the ways in which it can be changed.

To define a class we need to specify the keyword **class**, followed by the name we want our class to be known by, then the keyword **end** to close the definition.

```ruby
# defining a Color class
class Color

end
```

The name must be defined in camel case. **CamelCase** is a way of writing compound words or phrases such that each word begins with a capital letter e.g. ColorCode, EmailAddress etc.

## Creating an instance of a class

To create an object, we call the **new** method on its class. If you want to pass information to the object, then you can write an `initialize` method, which Ruby will call whenever you call the classes' `new` method. Any parameters defined for the `initialize` method need to be passed to `new`.

The `initialize` method is often called a **constructor**, as it helps *construct* new objects.

```ruby
class Color

  def initialize(name, hexcode)
    # Do cool things with name and hexcode
    puts "The color #{name} has hexcode #{hexcode}"
  end
end

color1 = Color.new("purple", "#8824a4")
color2 = Color.new("blue", "#4c6fcc")
```

Sometimes you'll hear objects referred to as **instances** of a particular class. This just means that the class was used as the blueprint to create the object.

## Instance variables and methods

To define attributes for a class, we use instance variables. Instance variables are defined and used in the same way as normal variables, but their name must start with the **@** symbol, and they cannot be accessed outside of the object unless exposed via methods.

```ruby
class Color

  def initialize(name, hexcode)
    @name    = name
    @hexcode = hexcode
  end

  def name
    @name
  end

  def hexcode
    @hexcode
  end
end

color = Color.new("purple", "#8824a4")
puts "The hexcode of #{color.name} is #{color.hexcode}"
```

We can also change the values of attributes via methods (often called setter methods):

```ruby
class Color

   ...

   def update_hexcode(hexcode)
     @hexcode = hexcode
   end
end

color = Color.new("purple", "#8824a4")
color.update_hexcode("#9427b2")

puts "The hexcode of #{color.name} is #{color.hexcode}"
```

## Privacy

By default, any method you define in Ruby (and most other languages too) is public. This means that anything outside of the object can call any of the methods, with the exception of `initialize` which is always private and can only be called by `new`.

Besides **public** you can also have **private** and **protected**  methods.

- **public** can be called by anyone
- **private** can only be called from within the class
- **protected** can only be called by objects of the class and the defining subclasses

Let's try this out in the Color class by adding the `protected` keyword before defining the methods we want to protect, in our case, `update_hexcode` method.

```ruby
class Color

   ...

   protected

   def update_hexcode(hexcode)
     @hexcode = hexcode
   end
end

color = Color.new("purple", "#8824a4")
color.update_hexcode("#9427b2")
```

This should now throw a `NoMethodError`. Change **protected** to **private** and run the code again.

Let's now put into practise what we have learned so far.

# Exercise 1: Celsius to Fahrenheit

Create a Celsius class, that takes the temperature as a parameter.

> Remember to use the `initialize` method

Define a method that returns the temperature in Fahrenheit. For the conversion we can use the formula `temperature*1.8 + 32`. Round up the result so it doesn't contain any decimal values.

> Use the `round` method

Create a `to_s` method, that returns the Celsius temperature formatted e.g. 16 degrees C

Create a script that prompts you to fill in the temperature for each day of the week (Monday - Sunday) and for the inputs 16, 17 18, 18, 21, 16, 19 prints out the following output:

```html
Mon | 16 degrees C  | 61 degrees F
Tue | 17 degrees C  | 63 degrees F
Wed | 18 degrees C  | 64 degrees F
Thu | 18 degrees C  | 64 degrees F
Fri | 21 degrees C  | 70 degrees F
Sat | 16 degrees C  | 61 degrees F
Sun | 19 degrees C  | 66 degrees F
```
> If you don't remember how to create a script, you can look at the sample file for the first exercise of the [second Ruby tutorial](https://tutorials.codebar.io/ruby/lesson2/tutorial.html) on Github, and read the instructions of the first Exercise.



> Hint: You can store each created Celsius object in a Hash and iterate over the collection to print the results e.g. temperatures[:mon] = Celsius.new(temperate) and use [each_pair](http://ruby-doc.org/core-1.9.3/Hash.html)


# Exercise 2: Tutorials

In this exercise we want to create an object for the codebar tutorials. Each object should hold the following information

- name
- type
- difficulty

The difficulty of each tutorial must be defined by a symbol, and the available values are `:easy`, `:medium`, `:hard`, `:advanced` and `:expert`.

In the `Tutorial` class create a method called `is_harder_than?` that takes in another `tutorial` as a parameter and returns `true` if parent tutorial's difficulty level is higher than the tutorial passed in a parameter and `false` if the difficulty level is lower. This only happens if the tutorial types are the same. Alternatively, it outputs `You cannot compare a Ruby with a JavaScript tutorial` where _Ruby_ and _JavaScript_ are the types of the given tutorials.

Try it out with the following data to make sure that you get back the correct result.

```ruby
tutorial1 = Tutorial.new("Object Oriented Ruby", :ruby, :medium)
tutorial2 = Tutorial.new("Introduction to JavaScript", :javascript, :easy)
tutorial3 = Tutorial.new("HTTP Requests, AJAX and APIs", :javascript, :medium)

tutorial1.is_harder_than?(tutorial2)
# You cannot compare a Ruby with a JavaScript tutorial

tutorial2.is_harder_than?(tutorial1)
# You cannot compare a JavaScript with a Ruby tutorial

tutorial2.is_harder_than?(tutorial3)
# false

tutorial3.is_harder_than?(tutorial2)
# true
```

> Hint: To compare the difficulty levels you can create a Hash with the difficulty levels and an Integer value assigned to each that you can use for comparison.

## Inheritance

Inheritance is a way for a class to get features from another parent class. It can make creating a program much easier to implement when functionality needs to be shared between objects.

In the example below, we create a `Person` class and a `SuperHero` class. As not all people have superpowers, we can use `SuperHero` for those with superpowers and Person for anyone else.

```ruby
class Person

  def initialize(name, age)
    @name = name
    @age = age
  end

  def to_s
    "#{@name} is #{@age} years old."
  end
end

class SuperHero < Person
  def initialize(name, age, superpower)
    super(name, age)
    @superpower = superpower
  end
end
```

**Person** in this case is our **base** class and **SuperHero** the **subclass**.

**super** sends a message to the parent class asking it to call the method with the same name.


### is_a?(Class)

With [`is_a?`](http://ruby-doc.org/core-2.1.1/Object.html#method-i-is_a-3F) you can check if the class or one of the superclasses (base) of an object.
Try this out. Before running the code in the example below, discuss it with your coach. What do you expect the result to be?

```ruby
emily = Person.new("Emily", 28)
jean_grey = SuperHero.new("Jean Grey", 51, "Telekinesis")

emily.is_a?(Person)
jean_grey.is_a?(Person)

emily.is_a?(SuperHero)
jean_grey.is_a?(SuperHero)
```

### Overriding methods

By overriding methods, you can change the behavior of a method defined in the superclass. For our superheroes example, we want the `to_s` method to return a different `String` than its base class, including the superpower.

```ruby
def to_s
  "#{@name} is #{@age} years old and has the superpower #{@superpower}"
end
```

> [to_s](http://ruby-doc.org/core-2.1.1/Object.html#method-i-to_s) stands for **to string** and returns a String representation of the Object.

# Exercise 3: Codebar Workshops and Members

Codebar has two different types of Members; Students and Coaches.
All members have the attribute `full_name`.

Additionally, each Student also has an `about` attribute with information about why they want to learn programming, and each Coach has  a `bio` and `skills`.

Codebar also has Workshops. A workshop has:

- a date
- a venue_name
- coaches and
- students

Create an `add_participant` method that accepts a `member` attribute. If the Member is a Coach, add them to the `coaches` list. If a Member is a Student, add them to the `students` list.

Create another method `print_details` that outputs the details of the workshop.

Make your code work for the following calls and print out the response you can see in the comments below.

```ruby
workshop = Workshop.new("12/03/2014", "Shutl")

jane = Student.new("Jane Doe", "I am trying to learn programming and need some help")
lena = Student.new("Lena Smith", "I am really excited about learning to program!")
vicky = Coach.new("Vicky Ruby", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Coach.new("Nicole McMillan", "I have been programming for 5 years in Ruby and want to spread the love")
nicole.add_skill("Ruby")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
workshop.print_details
#
# Workshop - 12/03/2014 - Venue: Shutl
#
# Students
# 1. Jane Doe - I am trying to learn programming and need some help
# 2. Lena Smith - I am really excited about learning to program!
#
# Coaches
# 1. Vicky Ruby - HTML, JavaScript
#    I want to help people learn coding.
# 2. Nicole McMillan - Ruby
#    I have been programming for 5 years in Ruby and want to spread the love
#

```

## Bonus

The `print_details` method does a number of different things, like printing out: workshop details, the list of Students and the list of Coaches.

Create a method to print the workshop details, a method to print out the students and one to print out the coaches. Call these from `print_details` instead of having all the code there. Also, make sure that these methods cannot be invoked from outside the class.

---
This ends our **Object Oriented Ruby and Inheritance** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
