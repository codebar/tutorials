---
layout: page
title: PHP Tutorial 3
---

##### Requirements

* PHP Installation with command-line (use our [guide](../using-php/simple.html) for help on this)

* That you have taken one of the other programming language courses, like the Javascript, Ruby or Python courses so that you are familiar with some of the typical things you see in computer languages.

##### Achievements

You will explore the world of classes and objects in PHP, building an example musical database.

---

## Using Script mode

For this tutorial, we will be using the script mode of the PHP command-line (CLI). Please see our [guide](../using-php/simple.html#script-mode) for more information about using this mode.

You need only work in one script file for this tutorial.

## Introduction to Classes and Objects

PHP follows similar languages and provides classes. They are used to represent some _thing_ in your project that has various bits of data and possibly code associated with it. It's a nebulous explanation because it's a very versatile tool in terms of what it can represent and how it can be used.

The _class_ is the template or definition of the _thing_. But in your code, you create _instances_ (also known as _objects_, though _object_ is often used to cover the concept of both class and instance) of classes, where the data is filled in. An example class definition might be like below. When you type this into the interactive editor, it realizes you are entering a command that will span across multiple lines.
```php
class Song {
    public $title;
    public $artist;

    public function toMp3Path() {
        return $this->artist . '/' . $this->title . '.mp3';
    }
}
```
The scene is set! This has defined a `Song` class for which we can create instances. It contains 3 public variables, `public` means that you can read and write to them directly without using functions. We've also defined a typical function for a song which is to get its' filename as though it was in your music folder. It uses the special variable `$this` that will refer to the instance it's called in, i.e. itself. Let's have a go at using it:
```php
$myTune = new Song();
$myTune->title = "Lullaby";
$myTune->artist = "The Cure";
echo $myTune->toMp3Path();        // displays The Cure/Lullaby.mp3
```
The first line has created the instance of a `Song` and assigned it to the `$myTune` variable. We've then accessed the _properties_ (internal variables, if you like) and set them in lines 2 & 3. Then we've called the function that we defined, and `$this` will be referring to the instance that we created.

We can still modify the instance we created and re-run the function. E.g.
```php
$myTune->title = "Pictures of you";
echo $myTune->toMp3Path();        // displays The Cure/Pictures of you.mp3
```

We can also create more instances:
```php
$anotherTune = new Song();
$anotherTune->title = "Lovesong";
$anotherTune->artist = "The Cure";
echo $myTune->toMp3Path();        // displays The Cure/Lovesong.mp3
```
There is also another feature of classes, _inheritence_. This is the premise that the definition of a _thing_ may have subsets that have the same basic properties of that thing, but may have additional properties or functions. In our song example, we may identify a song as being the album version or the single. Let's define these:
```php
class Single extends Song {
    public $highestUKChartPosition;
    public $highestUSChartPosition;

    public function highestChartPosition() {
        if ($this->highestUKChartPosition < $this->highestUSChartPosition) {
            return ["chart" => "UK", "position" => $this->highestUKChartPosition];
        } else {
            return ["chart" => "US", "position" => $this->highestUSChartPosition];
        }
    }
}
class AlbumSong extends Song {
    public $album;
    public $trackNumber;

    public function toMp3Path() {
        return $this->artist . '/' . $this->album . '/' . $this->trackNumber. '. ' . $this->title . '.mp3';
    }
}
```
For the single, we have added the chart positions in the UK & US, and a function that will tell us the highest position in which chart. For the album version of a song, we've added the album and track number. Because we have more information that we can make a better MP3 filename, we're able to redefine the function to take on this additional information. Let's use these:
```php
$greatSingle = new Single();
$greatSingle->title = "Jean Genie";
$greatSingle->artist = "David Bowie";
$greatSingle->highestUSChartPosition = 71;
$greatSingle->highestUKChartPosition = 2;
echo $greatSingle->toMp3Path();                // displays David Bowie/Jean Genie.mp3
$chartPosition = $greatSingle->highestChartPosition();
echo "Reached " . $chartPosition["position"] . " on " . $chartPosition["chart"] . " chart";
            // displays Reached 2 on UK chart

$songOnAlbum = new AlbumSong();
$songOnAlbum->title = "One";
$songOnAlbum->artist = "Ed Sheeran";
$songOnAlbum->album = "X";
$songOnAlbum->trackNumber = 1;
echo $songOnAlbum->toMp3Path();                // displays Ed Sheeran/X/1. One.mp3
```

It's a bit of a pain having to set up the artist and song title each time on separate lines, and we have to set them up every time for every instance. Is there an easier way to do this? Yes! We can use a _constructor_. This is a piece of code that gets run when you create the instance as part of the `new` statement. It allows us to set arguments in the brackets on that line.

Let's define an album class that takes advantage of this. We'll also define a way of easily adding songs to this album, because classes can also act as _containers_ for other instances.
```php
class Album {
    public $title;
    public $artist;
    public $songs = array();

    public function __construct($title, $artist) {
        $this->title = $title;
        $this->artist = $artist;
    }

    public function addSong($title) {
        $song = new AlbumSong();
        $song->title = $title;
        $song->artist = $this->artist;
        $song->album = $this->title;
        $song->trackNumber = count($this->songs) + 1;
        $this->songs[] = $song;
    }
}
```
Notice how we're able to use the information for the album to autocomplete our track information? Handy! We're using an array function `count` to tell us how big the songs array is (we add 1 because the first track will be added when the array is empty, so `count($this->songs)` will be 0). `__construct` is a special function name, represented by the double underscore. There are others which provide extra features

So now all we need type to define a whole album is:
```php
$pfMeddle = new Album("Meddle", "Pink Floyd");
$pfMeddle->addSong("One of these days");
$pfMeddle->addSong("A pillow of winds");
$pfMeddle->addSong("Fearless");
$pfMeddle->addSong("San tropez");
$pfMeddle->addSong("Seamus");
$pfMeddle->addSong("Echos");
```
We'll borrow a statement from a later tutorial to display all the song MP3 names:
```php
foreach ($pfMeddle->songs as $song) { echo $song->toMp3Path() . "\n";}
```
Which will display
```
Pink Floyd/Meddle/1. One of these days.mp3
Pink Floyd/Meddle/2. A pillow of winds.mp3
Pink Floyd/Meddle/3. Fearless.mp3
Pink Floyd/Meddle/4. San tropez.mp3
Pink Floyd/Meddle/5. Seamus.mp3
Pink Floyd/Meddle/6. Echos.mp3
```

## Summary

In this tutorial, you have gone through an introduction to classes and objects to build up a small data structure and seen ways to use and manipulate data with it.
