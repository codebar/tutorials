---
layout: page
title: PHP Tutorial 2
---

##### Requirements

* PHP Installation with command-line (use our [guide](../using-php/simple.html) for help on this)

* That you have taken one of the other programming language courses, like the Javascript, Ruby or Python courses so that you are familiar with some of the typical things you see in computer languages.

##### Achievements

You will explore types of values, variables and some simple expressions and lexical features in PHP.

---

## Using Interactive PHP mode

For this tutorial, we will be using the interactive mode of the PHP command-line (CLI). Please see our [guide](../using-php/simple.html#interactive-mode) for more information about using this mode.


#### Comments

Let's try doing nothing. You can add comments in three ways:
```php
//    Comment style 1 - anything after the double slash to the end of the line is ignored
#     Comment style 2 - anything after the hash sign to the end of the line is ignored
/*    Comment style 3 - anything to the next star and slash are ignored, can be in the middle of a
      line, or be several lines long */
```
Try these out and see absolutely nothing happen! We'll be using these on the end of our example lines to explain them and what you might see as output. You *don't* have to type out comments.


## Simple Values

#### Numbers

PHP can store numbers as _integers_ (whole numbers) and _floating-point_ (numbers with a fractional part). Try typing:
```php
echo 3;
echo 4.1;
```
This should display the number `3` and number `4.1` respectively. We can do calculations as well:
```php
echo 3 + 5;                // displays 8
echo 2 - 0.3;              // displays 1.7
echo 2 * 5;                // displays 10
echo 1 / 4;                // displays 0.25
echo 6 % 5;                // displays 1 (modulus, or the remainder of a division)
echo 22 / 7;               // displays 3.1428571428571
```
Technically the last calculation should have more digits, but the default storage space only stores this many digits. This is called its' _precision_.

PHP has a [maths library](https://secure.php.net/manual/en/ref.math.php). We'll cover functions in more detail later, but here are some simple examples:
```php
echo floor(4.7);           // displays the number rounded down to the nearest whole, should be 4
echo round(4.5);           // displays the whole number nearest to the fraction, should be 5
```

#### Strings

String represent text.
```php
echo "I'm a little teapot";
```
You can use double or single quotes to wrap strings, but they behave slightly differently. The single quote is more _literal_:
```php
echo "This will display \n on 2 lines";
echo 'This will not display \n on 2 lines';
```
The `\` indicates an escape sequence is about to follow. Escaping allows you to access special characters. `\n` means newline.

You can join strings together in php using a period `.`, e.g.:
```php
echo "Let's all " . "join together!";
```

Like the maths library for numbers, PHP has a [string library](https://secure.php.net/manual/en/ref.strings.php) for having fun with strings. Here are a few simple examples:
```php
echo substr("bit of a string", 0, 3);                    // displays bit
echo trim("  no space at the inn  ");                    // displays no space at the inn
echo stripslashes('no\nslopes');                         // displays nonslopes
echo strpos("where dat?", "dat");                        // displays 6
echo str_repeat("badger ", 1000);                        // you get the idea!
echo str_replace("Love", "<3", "Love coding");           // displays <3 coding
```

#### Booleans

Booleans represent true or false. When you do conditional tests in your code, they end up as a boolean.
```php
echo true;                 // displays 1
echo false;                // displays false... wut?
```
As you can see, it's not as straightforward as all that. What's going on here is that `true` is represented as the number `1` when outputted as a string, but false is outputted as nothing. To see these properly, it's worth introducing you to a handy debugging function, `var_dump`:
```php
var_dump(true);            // displays bool(true)
var_dump(false);           // displays bool(false)
```
`var_dump` returns more information about a value or variable, including its' type.

#### Arrays

Want to store a list of things? Let's use an array:
```php
echo [4, 5, 6];
```
This will output:
```
PHP Notice:  Array to string conversion in php shell code on line 1
Array
```
Err, wasn't expecting that? The PHP echo command has to convert values to strings to display them. Most of the time it knows what to do, but it doesn't like to second guess you so wants you to be more specific. So actually it's outputted the string `Array` and warned you with the `PHP Notice` line why it's not what you expected. We can use a `var_dump`, or a string function that can tell it how to format the array items. Here's an example:
```php
echo implode(", ", [4, 5, 6]);
```
This tells it to join each element in the array together with a comma, so the output becomes:
```
4, 5, 6
```
You don't have to have items of just one type in an array, you can mix them up. E.g:
```php
echo implode(", ", ["odd", "squad", 4, true]);    // displays odd, squad, 4, 1
```

#### Associative Arrays

Arrays in PHP also double as _hashes_ or _maps_. This means you can name the way refer to values in the array, using a _key_. We'll switch back to using `var_dump` as echo won't show the keys:
```php
var_dump(["fred" => 43, "barney" => 34]);
```
Will output:
```
array(1) {
  'fred' =>
  int(43)
  'barney' =>
  int(34)
}
```
We'll revisit arrays further down to see how you recall individual values from them.

Arrays have their own set of [array functions](https://secure.php.net/manual/en/ref.array.php)

#### Nothing

There is another value to be aware of, that of `NULL`. We'll have to use var_dump again to see this;
```php
var_dump(null);            // displays NULL
```
Wow, that was worth it! `NULL` is a special keyword of PHP to represent a purposeful non-present value, so that it doesn't get mixed up with an empty string `""` or the value 0. It's a bit more useful in conditions.


## Variables

PHP can store information for retrieval elsewhere, in variables. They can store numbers, strings, arrays, objects, and special resource handlers (such as a file or network handler). All variables start with a `$` followed by at least 1 letter of the alphabet, followed by combination of letters and numbers to make up the name, e.g. `$name`, `$emailAddress`, `$address2`. It can also include underscores, e.g. `$under_score`. Let's try putting some stuff in variables!
```php
$num = 4;
echo $num;                           // displays 4
```
```php
$str = "nice pizza!";
echo $str;                           // displays nice pizza!
```
```php
$calc = 1.2 + 3.4;
echo $calc;                          // displays 4.6
```
```php
$bit_of_pizza = substr($str, 5);
echo str_repeat($bit_of_pizza, 3);   // displays pizza! pizza! pizza!
```

### Arrays (slight return)

Remember those arrays we looked at? It's a bit easier to see how we access elements from them if we put them in variables:
```php
$nums = [4, 5, 6];
echo $nums[1];                        // displays 5
```
Expecting the first item to be 4? Array items start from 0, so `$nums[1]` refers to the 2nd item in the array.

Another feature with arrays is the ability to alter them. E.g.
```php
$nums[1] = 3;
echo $nums[1];                        // displays 3
```

Here's a convenient way to add another item to the array:
```php
$nums[] = 7;
echo join(", ", $nums);               // displays 4, 3, 6, 7
```
Let's revisit associative arrays and show how to access items in these:
```php
$cartoon_ages = ["Fred" => 43, "Barney" => 34];
echo $cartoon_ages["Fred"];           // displays 43
```
Again, you can add more entries to this array:
```php
$cartoon_ages["Betty"] = 30;
```
If the key `Betty` already existed, it would overwrite the value with the new one that you set.

You may be wondering with arrays whether you can mix normal arrays with associative arrays? Why not?! Well, yes you can! Let the madness ensue!
```php
$allIn = [4, 5, "here" => "for", 20 => "some reason"];
var_dump($allIn);
```
Will output:
```
array(4) {
  [0] =>
  int(4)
  [1] =>
  int(5)
  'here' =>
  string(3) "for"
  [20] =>
  string(11) "some reason"
}
```
Yes, you can even write integers as keys to truly upset the keys in the array!


## Summary

In this tutorial, you have gone through the basic types of values in PHP, and how they can stored in variables and then retrieved from them.
