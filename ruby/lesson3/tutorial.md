---
layout: page
title: The basics (part 2)
---

# Storing data - PStore

In the previous tutorial we briefly described how you can store data by writing and reading to a file. Ruby has a build in library, [PStore](http://ruby-doc.org/stdlib-2.1.0/libdoc/pstore/rdoc/PStore.html) which implements a way to persist data using a Hash like mechanism.

To use this library, you must require it at the beginning of your ruby file and initialise a new PStore object

```ruby
require 'pstore'

data = PStore.new("filename.pstore")
```

_To store or retrieve data from the data store, you must do so within a transaction._

When saving data, you must also **commit** all your changes.

```ruby

data.transaction do
 data["countries"] = [ "England", "Scotland", "France" ]

 data.commit
end

```

Similar to a hash, you can store more data by appending values to the existing hash

```ruby
data.transaction do
  data["countries"] << "Italy"
  data.commit
end
```

To read the values, you can just return the hash object

```ruby
data.transaction do
  data["countries"]
end
```

> Don't forget to wrap your interactions within `transaction` blocks


## Exercise: Contacts list

Using what we have learned in the last couple of ruby lessons we will create a contact list where we can store people's names and date of birth.

Create a new ruby script file named `contacts.rb`.

You can execute it using `ruby contacts.rb`.  

Unlike last time, we don't want this program to exit unless we tell it to. We can do that by setting a variable to true, and only changing it to false if the user tells the program to exit.

```ruby
run = true
while(run) do
  #our main program code will go here
end
```

So what we want the program to do is

1. output the available options, so 1, to add a new contact, 2, to retrieve a contact's birthday, 3, to list all contacts and 4 to exit
2. Manage each input using a conditional statement
  1. Capture the name and date of birth and store the information
  2. Request the full name and print out the date of birth
  3. Make the program exit  by changing the value of the `run` variable.


Tips for this exercise
- don't forget to require `pstore`
- to append values to a PStore key you must first initialise it, if it's empty. You can do that using lazy assignment `||= []` where if the object is empty, you first create an array so you can append values to it
- use `print` instead of `puts` if you don't want to output a new line at the end of your sentence

> Can you think of ways to extend the program? Store and display more information about your contacts.

## Ruby koans

Have you gone through Ruby Koans? Don't be disappointed if you haven't managed to finish the Koans yet. It takes a lot of time and repetition to manage to understand and fix the entire collection. Ask your coach to guide you and answer your questions.

If you haven't started going through Ruby Koans yet, you can find more information in the [previous tutorial](https://tutorials.codebar.io/ruby/lesson2/tutorial.html).

## More practise

There are a lot of online interactive tutorials that you can work through. Understanding basic concepts its important before moving forward. Try practising what you've learned so far by coming up and applying your own ideas. If you get stuck or needs help, bring your questions with you to our next session or ask your questions on our [slack channel](https://slack.codebar.io/)

---
This ends our **Ruby basics (part 2)** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
