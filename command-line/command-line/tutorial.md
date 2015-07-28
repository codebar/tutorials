---
layout: page
title: More command line
---

In the previous lesson we have learnt how to navigate the directories (folders) of our computer using the command line, and how to create directories and files. In this lesson we'll look at more command line commands that will allow us to manipualte the directories and files on our computer even further.

## Example 1: copying, moving and removing directories and files

### `cp` or copying files and directories

```bash
$ cp something.txt something_else.txt
```

```bash
$ cp folder/something.txt other_folder/
```

```bash
$ cp folder/something.txt folder/other_something.txt other_folder/
```

### `mv` or moving files

```bash
$ mv something.txt other_folder/
```

```bash
$ mv something.txt something_else.txt other_folder/
```

```bash
$ mv something.txt something_else.txt
```

above command renames somethingtxt to something_else.txt

### `rm` or removing files

```bash
$ rm something.txt
```

rm -r command? 


### `rmdir` or removing directoris (only works on empty directories)

to delete folders with files in them use rm -r command

### `cat` or printing? streaming? files

```bash
$ cat file.txt
```

```bash
$ cat file.txt > other_file.txt
```

redirecting and rewriting

```bash
$ cat file.txt >> other_file.txt
```

redirecting and appending