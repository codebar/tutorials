---
layout: page
title: Lists, Tuples & Dictionaries
---

There's two more basic types in Python that you should know before going
forward.  Lists and dictionaries are very common in Python and are structures
you can use to organise your data.

## Lists

Lists are just what they sound like: they're an ordered collection of *things*.
Like a shopping list, or a top ten list, it's a convenient way for you to write
code that processes things in a deliberate order.

For our example, we're going to make a simple travel diary.  Here's a list of
countries Alice wants to visit one day, sorted in order of preference:

* Mexico
* Portugal
* Kenya
* Nepal
* New Zealand

If we were to represent this as a Python list, we'd use the `[` and `]`
characters:

    places_to_visit = ["Mexico", "Portugal", "Kenya", "Nepal", "New Zealand"]

### Indexes

The primary trait of lists is that they're sorted.  This means that if you ask
a list for its first element, it will always be the same value unless you
modify that list.  In other words, given the above, you should always be able
to say "what is the 3rd value in my list" and always get `Kenya`.

The tricky/annoying part of indexing however is that **it starts at 0**, not 1,
which is where most people would expect things to start.  This means that the
*first* element of a list is referred to with a `0`, the second element is
referred to with a `1`, and so on.  Perhaps an example would be helpful:

    >>> places_to_visit[0]
    'Mexico'
    >>> places_to_visit[2]
    'Kenya'

Positive numbers aren't the only thing you can use for indexes though. Negative
numbers invert the index, so you can get the *last* element of a list by using
`-1`, or the third-to-last by using `-3`:

    >>> places_to_visit[-1]
    'New Zealand'
    >>> places_to_visit[-3]
    'Kenya'

Try it yourself now: Try to get `Nepal` out of `places_to_visit` using both a
positive and negative number for the index.

### Modifying

Lists are *mutable*.  This means that once created, you can change their
contents and Python will just work with the updated list.  You can add to a
list a number of ways:

* Setting a value in the list explicitly with `[n]` where `n` is the index you
  want to change.
* Using a [method](https://docs.python.org/3.5/tutorial/datastructures.html#more-on-lists "Methods of lists")
  of the `list` object like `.append()` or `.pop()`

There's a lot that you can do with lists, so much that we simply can't cover it
all here, so instead here are some examples, and a [link to the documentation](https://docs.python.org/3.5/tutorial/datastructures.html#more-on-lists "Methods of lists")
for a more complete reference:

    >>> places_to_visit
    ['Mexico', 'Portugal', 'Kenya', 'Nepal', 'New Zealand']

    >>> places_to_visit[5] = "Peru"
    >>> places_to_visit
    ['Mexico', 'Portugal', 'Kenya', 'Nepal', 'New Zealand', 'Peru']
    
    >>> places_to_visit.pop()
    'Peru'
    >>> places_to_visit
    ['Mexico', 'Portugal', 'Kenya', 'Nepal', 'New Zealand']
    
    >>> places_to_visit.append("Columbia")
    >>> places_to_visit
    ['Mexico', 'Portugal', 'Kenya', 'Nepal', 'New Zealand', 'Columbia']

Try some of these out yourself:

* Try adding a country to a list with either the explicit indexing (`[n]`) or
  `.append()`.  What happens if you give an index that's larger than the list?
* Take a look at the documentation and try out some of the other methods.
  `.count()` is a simple one, and `.reverse()` is handy to know.

### Subsets

But we're not finished!  You can do even more interesting things with `[` and
`]` on a list, like getting a subset of your data.  Say for example you wanted
to get the first four elements of a list *as another list*.  That's easy with
the subset syntax:

    >>> places_to_visit[0:4]
    ["Mexico", "Portugal", "Kenya", "Nepal"]
    >>> places_to_visit[:4]
    ["Mexico", "Portugal", "Kenya", "Nepal"]

You can do some interesting things with negative numbers too:

    >>> places_to_visit[-3:4]
    ['Kenya', 'Nepal']
    >>> places_to_visit[-3:]
    ['Kenya', 'Nepal', 'New Zealand']

...and as getting a subset returns a list itself, you can get a subset of a
subset:

    >>> places_to_visit[0:4][-1]
    'Nepal'

### Nesting

The last list-related thing we'll cover here is that there's nothing stopping
you from putting a list inside a list.  In fact, you can put a list inside a
list, inside a list, inside a... you get the idea.  You're only limited by how
many levels deep you can go before your code is too confusing:

    cake_flavours = ["chocolate", ["chocolate", "vanilla"], "red velvet"]

    cake_flavours[0]
    'chocolate'

    cake_flavours[1]
    ['chocolate cake', 'vanilla icing']

    cake_flavours[1][1]
    'vanilla icing'

There's a lot more things you can do with lists including concatenating,
diffing, sorting, and (scary, but fun) subclassing.  This is enough to get you
started though.

## Tuples

Tuples are a lot like lists with one key exception: they're *immutable*.  This
means that you can create them, reference them with all of the indexing tricks
mentioned above, *but you can't modify them*.  Any attempts to modify a tuple
will result in a `TypeError`.

Tuples are represented using `(` and `)`:

    places_to_visit = ("Mexico", "Portugal", "Kenya", "Nepal", "New Zealand")

    places_to_visit[1]
    'Portugal'

    places_to_visit[0:3]
    ('Mexico', 'Portugal', 'Kenya')

This however will fail with a `TypeError`:

    places_to_visit[1] = "Canada"

Tuples are commonly used in cases where you're defining something that
shouldn't ever change, but should you ever need to modify something that's in a
tuple, you can always *cast* it as a list:

    my_tuple = (1, 2, 3)

    my_list = list(my_tuple)
    my_list[3] = 99

    my_list
    [1, 2, 3, 99]

    my_tuple
    (1, 2, 3)

This will make a **copy** of the tuple that's a list, so you can edit it, but
the tuple itself will remain unchanged.

Take some time to experiment with tuples and get comfortable with the
limitations.  Try to create one, and watch how Python will explode when you try
to modify it.  Then try casting a tuple as a list and a list as a tuple.

## Dictionaries

Sometimes called "associative arrays" or "hashmaps" by people coming from other
languages, Python's dictionaries are a simple way to store *keys* and their
corresponding *values*.  You'll often seen them as a simple way to have a
lookup table or crude database in an application.  For this tutorial we'll use
a dictionary for a phone book:

    my_phone_book = {
        "Arya": "+4407485376242",
        "Breanne": "+3206785246863",
        "Cersei": "+14357535455",
        "Davos": "+244562726258"
    }

As you can see, where lists use `[` and `]`, dictionaries use `{` and `}` and
then separate the keys & values with a `:`.  The addressing style is similar
though.  This will give you Cersei's phone number:

    my_phone_book["Cersei"]

There's nothing restricting you to strings as values in your dictionary though.
You can have *anything* in there:

    my_crazy_dictionary = {
        "a number": 7,
        "a float": 1.23456789,
        "a string": "hello, world!",
        "a list": ["This", "is my", "list"],
        "another dictionary!": {
            {
                "Arya": "+4407485376242",
                "Breanne": "+3206785246863",
                "Cersei": "+14357535455",
                "Davos": "+244562726258"
            }
        }

Actually, you can have any type you like as a *key* as well, though this can
sometimes lead to reduced readability, so use this with caution.  For example,
while this is valid Python, it's not exactly easy to understand:

    my_unreadable_dictionary = {
        {"a number": 8}: {"a string": "hello, world!"}
    }

Your turn: try creating a dictionary or two of your own.  Try using different
types as keys and values, and then try to access them using the standard
`my_dictionary["my key"]` syntax.

### Modifying

Like lists, dictionaries are *mutable*, so you can change the values associated
with keys, add a key/value pair, or remove a pair altogether.  The means of
doing this should hopefully feel intuitive by now:

Change a value for a key:

    my_phone_book["Breanne"] = "+830685432195"

Add a new key/value pair:

    my_phone_book["Ellaria"] = "+560538942621"

This one is new: delete a key/value pair:

    del(my_phone_book["Ellaria"])

Now that you've got the tools to change your dictionaries, give a shot
yourself.  Try changing Cersei's phone number.  In fact, change it to a list of
phone numbers, and then add a character you love... and then delete them :-(

### .keys(), .values() and .items()

Dictionaries are useful structures for your data, but after using them for a
while, you'll soon find that you'll want to break them up into specific
manageable parts.  Thankfully, Python has you covered with `.keys()`,
`.values()`, and `.items()`.  Let's work with some examples:

    >>> my_phone_book = {
        "Arya": "+4407485376242",
        "Breanne": "+3206785246863",
        "Cersei": "+14357535455",
        "Davos": "+244562726258"
    }
    >>> my_phone_book.keys()
    dict_keys(['Davos', 'Cersei', 'Breanne', 'Arya'])

    >>> my_phone_book.values()
    dict_values(['+3206785246863', '+14357535455', '+244562726258', '+4407485376242'])
    
    >>> my_phone_book.items()
    dict_items([('Breanne', '+3206785246863'), ('Cersei', '+14357535455'), ('Davos', '+244562726258'), ('Arya', '+4407485376242')])

As you can see, `.keys()` and `.values()` do what you'd expect: they return the
keys and values respectively.  You may have noticed however that rather than a
`list` or a `tuple`, these methods return `dict_keys` and `dict_values` types.
These are sort of like tuples: you can't edit them, and if you want to do
anything with them other than read them as a complete entity, you'll have to
cast them as a list:

    >>> list(my_phone_book.keys())
    ['+3206785246863', '+14357535455', '+244562726258', '+4407485376242']

    >>> list(my_phone_book.keys())[2]
    '+244562726258'

The last one there, `.items()` is interesting.  It returns all of the data in
your dictionary, but dumps it out as `dict_items` which is a sort of *tuple of
tuples*.  This allows you to reference your dictionary with list syntax:

    >>> tuple(my_phone_book.items())[0]
    ('Breanne', '+3206785246863')
    
    >>> tuple(my_phone_book.items())[0][1]
    '+3206785246863'

Truth be told though, you probably won't be accessing these values directly
like this.  These methods come in handy inside *flow control statements* like
`for` and `while`, where you can do things like loop over all of the items in
`my_phone_book.items()` and do different things to the keys vs. the values.

That's for another lesson though.
