---
layout: page
title: Introduction to the command line
---

## What is the command line?

The command line is a text interface for your computer. Just like Windows Explorer on Windows or Finder on Mac OSX it lets you navigate through the files and folders of your computer, but it is completely text based. The command line works by typing commands against a prompt, which then gets passed to the operating system of the computer that runs these commands.

## How do I access the command line?

To access the command line, we use a terminal emulator, usually called a terminal. On Mac OSX you can access the terminal by opening the Terminal application from your Applications folder. On Windows you can download Git [here](https://git-scm.com/download/win) which includes a terminal.

Before we get started, you should note some **DO's** and **DONT's** while using the command line. The command line is a powerful tool that can significantly speed up your workflow but can also irreversibly harm your computer so make sure you use it responsibly.

If you are not sure what a command does **DO NOT** type it into your terminal. The command `rm -rf /` is a classic one that you should never use, it will delete all the files in your computer. If you are stuck and in need of help make sure you ask from someone you trust. It goes without saying that all commands in this tutorial are safe to use.

## Example 1: navigating around in the terminal

Once you opened up your terminal, type in the following after the `$` or `>` sign and hit enter: (`$` or `>` is the prompt, you don't have to retype that in the terminal, only the characters that come after them):

```bash
$ pwd
```

> What do you think happened there? In your own words, try to explain what this command does.

### `pwd` or print working directory

The `pwd` command prints out the current directory you are in. What are directories? Directories are folders, these terms are used interchangeably. If you just opened up your terminal, you are probably in the home directory of your computer, and should get an output similar to this:

```bash
/Users/your-username
```

Now that you know how to tell where you are in your computer, you might ask yourself: how I do know which files are in a directory? That's where the `ls` command comes in handy.

### `ls` or list

In your terminal type:

```bash
$ ls
```

and hit enter. Most likely this command returned you a bunch of files and folders. The `ls` command prints out the contents of a directory. If you are in the home directory of your computer you should see directories printed out such as Documents, Applications, etc. Now, how do you move across directories?

### `cd` or change directory

The `cd` command allows you to move between directories. The `cd` command takes an argument, usually the name of the folder you want to move to, so the full command is `cd your-directory`.

In the terminal, type:

```bash
$ ls
```

Let's say we wanted to move to the Desktop folder: just type in your terminal

```bash
$ cd Desktop
```

Now type:

```bash
$ pwd
```

This should return you something like:

```bash
/Users/your-username/Desktop
```

Now that we moved to your Desktop, you can type `ls` again, then `cd` into it. We have just changed into a new directory. You can use these two commands to navigate around your computer.

This is all good so far, but sometimes you might want to go deeper than one level in one command. `cd` allows you to do this by chaining the directories with a `/`, so `cd your-directory` becomes `cd your-directory/directory-inside-your-directory`.

We now know how to move forward. But how to go back up the directory tree? Type in your terminal:

```bash
$ cd ..
```

Now do a `pwd`. You just went back one directory! Chaining works backwards too, so if you type `cd ../..` you should be taken back two directories.

> If you want to go back to the home directory of your computer, simply type `cd` into the terminal. `cd` without an argument takes you back to the home directory regardless of where you are currently in the directory structure

### Exercise 1: use `ls` and `cd` to move in and out of a few directories on your computer

These are the basics of navigating around in the terminal. What else would we want to do in there? How about creating directories and files?

## Example 2: creating directories and files

### `mkdir` or make directory

Go back to the home directory of your computer, and type:

```bash
$ cd
$ mkdir temp
```

into the terminal. Now use `ls` to see the contents of the home directory. You should see a new folder, temp there. You just created a new folder! As its name suggests, `mkdir` creates directories. What if we wanted to create a directory inside a directory? `cd` into temp and type:

```bash
$ mkdir -p stuff/bits
```

Now do an `ls` and you should see the `stuff` folder. Now run `cd stuff` and do another `ls`. Inside stuff, the `bits` directory was created. 

What if you wanted to create files?

### `touch` or create files 

Inside the `bits` folder, type:

```bash
$ touch bobs.txt
```

Do an `ls` to check whether the file has been created. Inside bits, there should be a new file called bobs.txt. We used `touch` to create files. With touch you can create files with any extension, just don't forget to specify what kind of file you are creating: for example, `index.html`, `script.js`, `style.css` are all valid extensions. 

### `mv` or move item

What if you created a file in the wrong place? There's a command for that. Let's move `bobs.txt` to somewhere new. Inside the `bits` folder type:

```bash
$ mv bobs.txt ..
```

Type `ls` and the file is no longer there. Type `cd ..`, this moves you one folder up to the `stuff` folder.  Then type `ls` and the bobs.txt file will be there. There are 3 parts to this command, the `mv` command, the item to be moved, here it's `bobs.txt`, and the new destination for the item, here we have it as `..` or one directory up the structure. You could also type the destination directory, replacing the `..` with `stuff` and it would do the same job.

### Exercise 2: `cd` back into temp and create a couple of new folders with files in them

### Bonus: if you are on a Mac, type this into your terminal:

```bash
$ say hello
```
