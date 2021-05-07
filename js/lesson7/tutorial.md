---
layout: page
title: Introduction to Testing
---

## Today's lesson

### What is testing?

Testing is a way to ensure that the code you have written works correctly. It verifies the quality of your code and makes it easier to identify and fix problems.

Today we will be briefly explaining how you can test-drive your code. Testing is not just a way to ensure that everything works well together, but also a means of improving the quality and keeping your code simple and readable.

## JavaScript Testing Frameworks

There are [a number](https://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#JavaScript) of libraries written to assist with testing JavaScript, but we will use [Jasmine](https://jasmine.github.io/). The syntax is quite simple and it doesn't require any additional configuration in order to use.

## Jasmine

### Syntax

In Jasmine, you can use `describe()` to describe the purpose of a suite of tests, and `it()` to describe a specific test.


```javascript
describe('Calculator', function() {
  describe('adding numbers', function() {
    it('returns the sum of the numbers', function() {
      expect(add(3,5)).toEqual(8);
    });
  });
});
```

![](assets/images/calculator-test.png)

When a test is no longer working you get a failure

![](assets/images/calculator-test-fail.png)


> Don't forget that you must refresh your browser when you update the tests!

# Exercise 1: Unit Converter

Using Jasmine to test drive our code, today we will implement a Unit Converter.

To get started, download the code from [our Github repository](https://github.com/codebar/TestingJavascript).

For Jasmine to work, it must know about our code and test files. So, before we begin using Jasmine to test, we must update the `SpecRunner.html` to include our files. The code is stored in the `src` directory (which stands for **source**), and our test files in `spec`.

Update the head of the page to include the files.

```html
<!-- include source files here... -->
<script type="text/javascript" src="src/Converter.js"></script>

<!-- include spec files here... -->
<script type="text/javascript" src="spec/ConverterSpec.js"></script>
```


## Converting Fahrenheit to Celsius

Now, open the SpecRunner in your browser. You will notice that the one test we have is failing.

When we are writing code, it's ok to write a test that is failing before making it work. This way, instead of focusing on getting things to work, we focus on what we want to achieve and then gradually work around that.

We have already added a method that will be handling the conversion of Fahrenheit to Celsius. We also know that the formula is

```javascript
celsius = (farenheit - 32)/1.8
```

Try implementing the solution to make your test work.

### `toFixed()`

You will notice that this doesn't quite work as we are getting back a number with multiple decimals. We can use the `toFixed(decimal_places)` method to round up the number to one decimal.

```javascript
return celsius.toFixed(1);
```

> Did you manage to get your test working?

> When you have a test passing, it's the right time to commit your code to git.

> Add another test using a different value for the temperature. Verify the result using google search `X Fahrenheit to Celsius`


## Converting Celsius to Fahrenheit

Now that we have that working, let's add another function that converts **Celsius** to **Fahrenheit** instead.
First, don't forget to add your test and the expected solution. (You can use Google to figure out the result)

To reverse the result we can use this formula:

```javascript
fahrenheit = celsius * 1.8 + 32
```

## Converting other units

Now, add the tests and implement the conversion between the following units. Don't forget to commit first, after you write each of your tests and then when you get the test passing.

1. Pounds to kilos (Weight)
```
kilo = pound * 0.4536
```

2. Litre to Gallons (Volume)
````
gallons = litres * 0.22
````

3. Miles to Km (distance)
```
kms = miles * 1.609
```

> Can you think of any other unit conversions you would find handy? Can you implement them?

## Homework
 Build an HTML page for your converter.

# Test matchers

Besides the `toEqual()` method, Jasmine has a big set of matchers that we can use to verify the results of our tests like `toBe()`, `not.toBe()`, `toBeNull()` and [a lot of others](https://jasmine.github.io/2.5/introduction#section-Included_Matchers)


# Exercise 2: Calculator

Download the [Testing JavaScript project again](https://github.com/codebar/TestingJavascript) and create a Calculator.js, under the `/src` directory, and a CalculatorSpec.js under the `/spec` directory. Don't forget to update the SpecRunner so it includes your tests and code files.

1. Write a simple calculator that adds, subtracts, divides and multiplies two numbers together.
2. Commit when you add a test, and after you make each test pass.
3. Create a styled website for your calculator


# Additional Resources

You should now understand enough about JavaScript to create and test your own code.
To gain a deeper understanding of JavaScript, we recommend reading [JavaScript, the good parts](https://www.amazon.co.uk/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742), by Douglas Crockford.

---
This ends our **Introduction to Testing** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
