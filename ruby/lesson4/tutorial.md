---
layout: page
title: Object Oriented Ruby and Inheritance
---

# Before we start

There won't be any sample files for the examples today as you should already know how to create a new Ruby file yourself. Before you begin, remember to create a new directory in your Github project or a new repository where you can store your exercises.

Don't forget to commit regularly and try to type out the examples as much as possible instead of copy pasting!

If you are going through the tutorial yourself and need any help, [join the chat](https://gitter.im/codebar/tutorials) but remember to first go through our [code of conduct](http://codebar.io/code-of-conduct) as we do not tolerate any bad behavior.

# What is Object Oriented Programming?

Object Oriented Programming is a way of programming where different concepts as represented as **objects** and different functionality of those objects is called **methods**. In Ruby, an object is defined by a **class** and everything is an object; Strings, Integers, even true and false.

## What is a class?

A class is simply a way of representing an object. It enables us to  package up data and ways of manipulating them.

To define a class we need to specify the keyword **class** followed by the name we want to name out class, and the keyword **end** to close the definition.

```ruby
# defining a Color class
class Color

end
```

The name must be defined in camel case format. **CamcelCase** is a way of writing compound words or phrases such that each word begins with a capital letter e.g. ColorCode, EmailAddress etc.

## Defining a class

To create a new instance of an object, we use the keyword **new**. To specify parameters when defining a new class we can do so by defining a **contructor**. In Ruby, a constructor is specified using the `initialize` method.

```ruby
class Color

  def initialize(name, hexcode)
    @name = name
    @hexcode = hexcode
  end
end

color1 = Color.new("purple", "#8824a4")
color2 = Color.new("blue", "#4c6fcc")
```

## Variables and methods

To define attributes for a class, we use instance variables. Instance variable are defined using the **@** operator. They cannot be accessed outside the class unless we expose them through methods.

```ruby
class Color

   ...

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

We can also define the value of different attributes via methods (called setter methods)

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

By default, any method you define in Ruby is public. This means that anyone can call any of its methods with the exception of `initialize` which is always private and can be accessed through calling `new`.

Besides **public** there is also a way to define **private** and **protected**  and methods.

- **public** can be called by anyone
- **private** can only be accessed from within the class
- **protected** can only be invoked by objects of the class and the defining subclasses


Let's try this in the Color class by adding the `protected` keyword before defining the methods we want to protect, in our case, the `update_hexcode` method..

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

This should now throw a `NoMethodError`

Let's now put into practise what we have learned so far.

# Exercise 1: Celsius to Fahrenheit

Create a Celsius class, that takes as a parameter the temperature.

> Remember to use the `initialize` method

Define a method that returns the temperature in Fahrenheit. For the conversion we can use the formula `temperature*1.8 + 32`. Round up the result so it doesn't contain any decimal values.

> Use the `round` method

Create a `to_s` method, that returns the Celsius temperature formatted e.g. 16 &deg;C

Create a script that prompts you to fill in the temperature for each day of the week (Monday - Sunday) and for the inputs 16, 17 18, 18, 21, 16, 19 prints out the following output:

> If you don't remember how to create a script, you can look at the sample file for the first exercise of the [second Ruby tutorial](http://codebar.github.io/tutorials/ruby/lesson2/tutorial.html) on Github, and read the instructions of the first Exercise.

```html
Mon | 16°C  | 61°F
Tue | 17°C  | 63°F
Tue | 17°C  | 63°F
Wed | 18°C  | 64°F
Thu | 18°C  | 64°F
Fri | 21°C  | 70°F
Sat | 16°C  | 61°F
Sun | 19°C  | 66°F
```

> You can store each created Celsius object in a Hash and iterate over the collection to print the results e.g. temperatures[:mon] = Celsius.new(temperate) and use [each_pair](http://www.ruby-doc.org/core-1.9.3/Hash.html)


# Exercise 2: Tutorials

In this exercise we want to create an object for the codebar tutorials. Each object should hold the following information

- name
- type
- difficulty

The difficulty of each tutorial must be defined by a symbol, and the available values are :easy, :medium, :hard, :advanced and :expert.

In the `Tutorial` class create a method called `is_harder_than?` that takes in another `tutorial` as a parameter and returns `true` if parent tutorial's difficulty level is higher than the tutorial passed in a parameter and `false` if the difficulty level is lower. This only happens if the tutorial types are the same. Alternatively, it outputs `You cannot compare a Ruby with a JavaScript tutorial` where _Ruby_ and _JavaScript_ are the types of the given tutorials.

Try it out with the following data to make sure that you get back the correct result.

```ruby
tutorial1 = Tutorial.new("Object Oriented Ruby", :ruby, :medium)
turorial2 = Tutorial.new("Introduction to JavaScript", :javascript, :easy)
turorial3 = Tutorial.new("HTTP Requests, AJAX and APIs", :javascript, :medium)

tutorial1.is_harder_than?(tutorial2)
# You cannot compare a Ruby with a JavaScript tutorial

tutorial2.is_harder_than?(tutorial1)
# You cannot compare a JavaScript with a Ruby tutorial

tutorial2.is_harder_than?(tutorial3)
# false

tutorial3.is_harder_than?(tutorial2)
# true
```

## Inheritance

Inheritance is a way for a class to get features from another parent class. It can make creating a program much simpler.

In the example below, we create a Person class and a SuperHero class. As not all people have special powers, we can use SuperHero for those with special powers and Person for anyone else.

```ruby
class Person

  def initialize(name, age)
    @name = name
    @age = age
  end

  def to_s
    "#{@name} is #{age} years old."
  end
end

class SuperHero < Person
  def initialize(name, age, superpower)
    super(name, age)
    @superpower = superpower
  end
end
```

**Person** in this case is our **base** class and **SuperHero** the subclass.

**super** sends a message to the parent class asking it to call the method with the same name.


### is_a?(Class)

You can check if the class or one of the superclasses (base) of an object is of a specific type by using `is_a`

Try this out. Before running this discuss it with your coach. What do you expect the result to be?

```ruby
emily = Person.new("Emily", 28)
jean_grey = SuperHero.new("Jean Grey", 51, "Telekinsis")

emily.is_a?(Person)
jean_grey.is_a?(Person)

emily.is_a?(SuperHero)
jean_grey.is_a?(SuperHero)
```

### Overriding methods

Overriding methods is a way you can change the functionality of a method defined in the superclass that you don't want your Class that inherits from it to have. For our superheroes example, we want the `to_s` method to return a different string that includes the super power, instead of the same string as a normal person.

```ruby
def to_s
  "#{@name} is #{age} years old and has the superpower #{power}"
end
```

> [to_s](http://ruby-doc.org/core-2.1.1/Object.html#method-i-to_s) stands for **to string** and returns a String representation of the Object.

# Exercise 3: Codebar Workshops and Members

Codebar has two different type of Members; Students and Coaches.
Each member has the following attributes:

- full_name

Additionally, each Student also has:

- about (why they want to learn)

and each Coach has:

- a bio
- skills (You can store the skills as an array of Strings)

Codebar also has Workshops. A workshop has:

- a date
- a venue_name
- coaches and
- students

Create an `add_participant` method that has a `member` attribute. If the member is a Coach, then it get added to the `coaches` list. If a member is a student, it gets added to the `students` list.

Create another method `print_details` that outputs the details of the workshop.

Make your code work for the following calls and print out the response you can see in the comments below.

```ruby
workshop = Workshop.new("12/03/2014", "Shutl")

jane = Student.new("Jane Doe", "I am trying to learn programming and need some help")
lena = Student.new("Lena Smith", "I am really excited about learning to program!")
vicky = Coach.new("Vicky Ruby", "I want to help people learn coding.")
vicky.add_skill("HTML")
vicky.add_skill("JavaScript")
nicole = Coache.new("Nicole McMillan", "I have been programming for 5 years in Ruby and want to spread the love")
nicole.add_skill("Ruby")

workshop.add_participant(jane)
workshop.add_participant(lena)
workshop.add_participant(vicky)
workshop.add_participant(nicole)
work.print_details
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

```

---
This ends our **Object Oriented Ruby and Inheritance** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
