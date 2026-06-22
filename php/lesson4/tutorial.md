---
layout: page
title: PHP Tutorial 4
---

##### Requirements

* PHP Installation with web server (use our [in-depth guide](../using-php/using-php) for help on this)

* This builds on the previous lessons in this tutorial on PHP.

* You should be familiar with HTML, as we will be modifying it. We provide tutorials on HTML.

##### Achievements

You will explore the features of PHP, showing it's typical uses for making small improvements to make web pages dynamic.

---

## PHP In Web Pages

One of PHP's greatest features is that it integrates with HTML. When you use the `<?php` start and `?>` end markers, you are breaking into PHP mode from within HTML markup. We're going to demonstrate PHP's features by building a page that is dynamic.

*Fetch the example files*

### Variables

PHP can store information for retrieval elsewhere. It stores numbers, strings, arrays and objects. All variables start with a `$` followed by at least 1 letter of the alphabet, followed by combination of letters and numbers to make up the name, e.g. `$name`, `$emailAddress`, `$address2`. It can also include underscores.

#### Strings

Let's have a go at creating a string to save some repetition on our page. We have repeated the page title twice so that it appears consistently in the tab and as the main heading on the page. Let's make it so that we only set it once.

At the very top of the page, above the doctype declaration, type in the following to assign a value to the variable we'll use to store our page title.

```php
<?php
    $pageTitle = "Wild Owl - Owl Park";
?>
```

Now in the two locations in the page where we have used the title, i.e. between the `<title>` and `<h1>` tags, replace it with:

```php
<?php echo $pageTitle; ?>
```

Now when you run the page, you should see no change. But now if you change the text in the string we assigned to `$pageTitle`, you should see it change in both locations.


#### Dates

We have a copyright notice at the bottom of the page, and it's so laborious that each year we have to update it. We can fix that!

Internally, PHP handles dates by working with a value called the UTC timestamp, the number of seconds since the new year in 1970 in Grenwich, London. It then provides tools that converts this to a format more palettable. This means it can easily support time zones (offsets from GMT, including summertimes), and locales (different expressions of time around the world).

PHP actually has 2 date/time tools. A set of [functions](http://php.net/manual/en/ref.datetime.php), and some [utility classes](http://php.net/manual/en/class.datetime.php). We'll use the more up-to-date class implementation.

To get a Date object that represents the time now, we can add this line (best we do this at the top of our script, under where we set `$pageTitle`):
```php
$now = new DateTime();
```
This creates a new `DateTime` object and stores it in a variable called `$now`. Because we gave it no arguments, it assumes we want the current date. Later we'll see how you can create date objects for other dates.

Now, let's get just the current year and display it in the copyright notice. Replace the 2nd year in the copyright notice with the following:
```php
<?php echo $now->format('Y'); ?>
```
The `->` is how we access a method in the DateTime class that's stored in `$now`. `format` is the name of the method we want to access. `Y` is a string representing the [format of the date](http://php.net/manual/en/datetime.formats.php) stored in `$now`, where Y is just the year as 4 digits.

#### Arrays

The list of top owls changes quite frequently. Changing them in-situ in the page can be a pain. Let's make it easier by using an array.
Let's declare the array, again at the top of the page just under where we set `$now`. We're using the _shorthand_ way of defining the array, it only works beyond PHP v5.4.
```php
$topOwls = [
    "Barn Owl",
    "Eastern Grass-Owl",
    "Golden Masked-Owl",
    "Barking Owl",
    "Buffy Fish-Owl"
];
```
Individual items in the array can be accessed like this: `$topOwls[4]`, which would return the value `Barking Owl`.

Now let's render the list. Delete all the `<li>` tags under the `<ul>` in the _top-owls_ section. Replace them with:
```php
<?php
    foreach ($topOwls as $owl) {
        echo "<li>$owl</li>";
    }
?>
```
`foreach` is a version of a `for` loop that loops through each item in `$topOwls`, setting `$owl` to the value of the item (note, this is usually a copy of the value, but in some cases could be a reference to the value in `$topOwls`). We then write out the list item tag with the name of the owl inside it. Double speech marks allow us to include variable names within the string.

#### Associate Arrays

Arrays in PHP have a special feature, they can also behave like hash objects. A hash is a variable with sub keys to store different bits of information. Let's have a go at trying to make our opening times a bit easier to work with. Here's how we can represent them with an array of associative arrays:
```php
<?php
$openingTimes = [
    [
        "season_start" => new DateTime('2018-05-01'),
        "season_end"   => new DateTime('2018-09-31'),
        "opening_time" => DateTime::createFromFormat("HH", "18"),
        "closing_time" => DateTime::createFromFormat("HH", "03"),
    ]
];
?>
```
The associative array is defined by a comma-separated list of the construct `key => value`. The values can be accessed like this: `$openingTimes[0]["season_start"]`.

We're now also defining the dates in a new way. The string argument to a DateTime constructor (a constructor is a method that's called when an object is created) is a date string. PHP tries to make the best guess at understanding the date from the string, but this is not always possible. This is why we define the hours using the `createFromFormat()` method. This method doesn't act on the data stored in a DateTime class, but is defined in the DateTime class. This is known as a static, and uses the class name plus `::` to call it without accessing the instance (we use `->` to access instance methods, but `::` to access static methods). The createFromFormat class allows to specify exactly how to understand the string we're giving it. In this case, we're only providing the hours, so we need to be aware that the DateTime class has stored an actual date of 6pm 1st January 1970.

Let's try rendering the opening times from this array. As before, replace the list item tags in the opening-times section with this snippet:
```php
<?php
    foreach ($openingTimes as $season) {
        echo "<li><span class=\"period\">{$season['season_start'].format('F')} - " .
            "{$season['season_end'].format('F Y')}</span> " .
            "<span class=\"hours\">{$season['season_start'].format('ga')} - " .
            "{$season['season_start'].format('ga')}</span></li>";
    }
?>
```
The `format()` method uses slightly [different format strings]() to createFromFormat. We enclose the variables in curly braces to more easily distinguish it from normal printables in the string. We've also used single quotes surrounding the key for clarity. Because we've included speech marks inside the string too, we have to _escape_ them, by adding a `\` in front of it.


