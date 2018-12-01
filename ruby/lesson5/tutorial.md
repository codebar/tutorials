---
layout: page
title: Object Oriented Ruby and Inheritance (continued)
---

In today's tutorial, we will be again going through OO concepts - some of which the we already introduced in the previous lesson - and build a small text adventure game to practise what we learn.

Don't forget to commit to git regularly and also try to **type** out the examples as much as possible instead of copy &amp; pasting!

If you are going through the tutorial in your own time and need any help then [join the slack channel](https://slack.codebar.io/), but first read our [Code of Conduct](https://codebar.io/code-of-conduct) as we will not tolerate any inappropriate behavior.

# How does inheritance fit in OO?

To make things a bit clearer, you must understand that **every** class in Ruby is a subclass of [Object](http://ruby-doc.org/core-2.1.1/Object.html), even though we don't explicitly say so. This is why methods like the `to_s`, that we mentioned in the previous tutorial, or `inspect` exist in all classes, because they are **inherited** from parent `Object` class.

## public_methods

In Ruby you can do some cool things, like check what methods are available on an object using `public_methods`. **Public methods** are the methods of an object that can be called from the outside world.

```ruby
class Dog
   def bark
     # do something
   end

   def walk
     # go for a walk
   end

   private

   def scratch
     # scratch self
   end
end
```

In the example above, `bark` and `walk` are public methods; however `scratch` is private and can only be called from the Dog class directly.

> This is handy if you don't have the documentation available and want to view a class's API.


## accessors, readers and writers

We've already learned how to expose update different instance variables of an object using **setter** methods, and how to retrieve values by exposing the variables with **getter** methods.

```ruby
class Flower
  def initialize(color)
    @color = color
  end

  def color
    @color
  end

  def update_color(new_color)
    @color = new_color
  end
end
```

Ruby has some special methods for simplying this functionality.

`attr_reader :color` will give you a getter method, `attr_writer :color` will give you a setter and `attr_accessor :color` will give you both a getter and a setter.

Modify the Flower class so that it no longer has a `color` and an `update_color` method, but instead using the methods we just learned.

## class methods

So far we've only discussed instance methods, even though we have already used class methods like `File.open()` and `Random.rand()`.

### So what's the difference?

Class methods, are methods that can be called on a class rather an an instance of it. For example, `Random.rand()`, which generates a random number doesn't need an instance of Random to be generate, the same applies to `File.open()`; there is no file to apply the open operation on yet.

Let's define a class method `with_red_color`, in the `Flower` class. To define a class method we must use `self.` in front of the method name.

```ruby

class Flower

  def self.with_red_color
    Flower.new("red")
  end

  ...

end
```

By running `Flower.with_red_color` we get back an instance of the Flower class with the color set to red.

### Altenative syntax

Class methods can also be defined by appending self to class

```ruby

class Flower

  class << self
    def with_red_color
      Flower.new("red")
    end
  end

end
```

This behaves exactly like `self.with_red_color`. However, the first way is encouraged as it's easier to spot class methods when you have a lot of code. Why is this mentioned then? Being able to read and understand code that other people have written is important, and using `class << self` is not that uncommon.

## Constants

Constants are similar to variables with the difference that the value remains unchanged while the program runs.

```ruby
class Flower
  ROSE = "red"
  ANEMONE = "purple"
  CHRYSANTHEMUM = "yellow"


  ...
end

```

We can now use the constants to create new types of known flowers.

```ruby
Flower.new(Flower::ROSE)
```

# Exercise: A text based game

To practise what we've learned so far, we will be writing a text based adventure game!

For the adventure we will create a `Player`, a `Location` and a `Map` class.

Let's start by defining `Player`. A player has an array of `items` and a `location`.

```ruby
class Player

  def initialize
    # initialize attributes
  end
end
```

### Task 1: Viewing location and picking up items

For now, let's use the following hash as the location.

```ruby
location = { description: "You are in the living-room. A wizard is snoring loudly on the couch.",
             items: ["whiskey", "bucket"] }
```

So using this example, let's implement the following methods on `Player`

- `look_around` prints out the description of the location.

- `pick_up(item)` removes and item from the location, and adds it to `Players`'s `items` array

- extend `look_around` to print out all the items of a location
   - For each item print `"You see a #{item} on the floor"`

Let's try this out by passing in this location hash to a new instance of `Player`.

```ruby
player = Player.new(location)
player.look_around
player.pick_up("whiskey")
player.look_around
```

### Task 2: Moving between locations

So far, our `Player` only knows about one location, but in the game we can move between multiple locations through different paths.

To do that, let's create a `Map`. The map get initialized with a list of `locations` and assigns the `current_location` to the **first location** on the list.

In `Map`, add a method `describe` that prints out the `description` of the `current_location`.

For implementing `move_to(direction)`, first let's use a new version of the location hash.

```ruby
locations = [{ name: "living_room",
               description: "You are in the living-room. A wizard is snoring loudly on the couch.",
               items: ["whiskey", "bucket"],
               edges: [{ direction: "upstairs",
                         item: "ladder",
                         location: "attic" }] }, {
               name: "attic",
               description: "You are in the attic. There is a giant welding torch in the corner.",
               edges: [{ direction: "downstairs",
                        item: "ladder",
                        location: "living_room" }] }]

```

The `move_to` method receives the direction that we want to move towards. It must find the location connected to the current location with that path. To do that, we need to iterate over the `locations` and then the `edges` of each location, and return the edge's location **if its direction matches the direction we are trying to go towards**.

```ruby
@locations.each do |location|
  location[:edges].each do |edge|
    location_name = # do something if # check condition
  end
end
```

Not that we know the location name, let's find the new location from the list and assign it to `@current_location`.

> To make it easier to explain what the code does, can first move the code that finds the location's and then update the current location

Let's try it out!

```ruby
map = Map.new(locations)
map.describe
map.move_to("upstairs")
map.describe
```

Let's also extend the `describe` method of the map to print out the location's available paths. You can use `puts "There is a #{path[:item]} going #{path[:direction]} from here."`. This way we know what path we can move towards.

### Task 3: Using both `Map` and `Player`

To use the `Map` with the `Player`, let's change the `Player` to accept an instance of `Map` when it's initialized.

On the `Player` class create

- a `location` method that points to `@map.current_location`
- a `walk` method that call's `Map`'s `move_to(direction)`.

### Task 4 - Loading data

To get more data in the game, you'll need to load them from a YAML file, using the ruby [yaml](http://ruby-doc.org/stdlib-2.1.0/libdoc/yaml/rdoc/YAML.html) library.

We have loaded data from a file before in the [second Ruby tutorial](https://tutorials.codebar.io/ruby/lesson2/tutorial.html); the only difference with loading data from a YAML file is that  after reading the contents of a file using `File.read()` we need to process the content through yaml.

```ruby
require 'yaml'

data = File.read(filename)
adventure_map = YAML.load(data)
```

As `yaml` is not part of Ruby's core libraries (but is part of the standard libraries), you need to `require` it before making use of it.

You can [download the file](https://gist.github.com/despo/c3ea3f753c0630fea000) with all the data setup for our adventure from Github.

### Bonus: Exception Handling

**Exceptions** are errors thrown by the program when something goes wrong. We can manage  **Exceptions** using **try catch blocks**.

```ruby
begin
  # broken code
rescue
  # handling exception
end
```

We can use **Exception handling** to manage errors when we attempt to **move_to** a non existing locations. To do that, we need to wrap finding the location name, and assigning it to the `@current_location` in a `begin` block, and in the `rescue` block following it we can output something like `put "You can't go that #{direction"}`

Try this out by attempting to move `left` on the map.

```ruby
...
map.move_to("left")
```

### Homework: Extending the game

Extend the game so that

1. a `Player`can drop an item. The item should be removed from the `Player`'s item list and added to the `current_location`'s items.
2. add an `inventory` method to a `Player`. Calling `inventory` prints out a list with all the items that the `Player` is holding
3. extract a `Location` object. Modify your code so that it works with the location object, instead of a hash.

If you need any help don't hesitate to ask [in our chatroom](https://gitter.im/codebar/tutorials).

---
This ends our **Object Oriented Ruby and Inheritance (part 2)** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.

### Further reading 

If you want to challenge yourself further and dive into the world of Rails, a Ruby framework for building websites, here is a tutorial book to [get you started.](https://www.railstutorial.org/book/frontmatter) 


