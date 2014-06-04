---
layout: page
title: Git: Introduction to command line
---

## Git: Introduction to command line

**PREREQUISITE:** Basic understanding of the command line.

Git is an easy to share and collaborate tool that keeps our code tracked and safe.
With the following examples we understand how to deal with the daily usage of the tool.

## Before you begin
Install command line git for [OS X](http://code.google.com/p/git-osx-installer) or [Windows](http://msysgit.github.com/) and open your terminal. If you are on linux you should already have git installed.

Create a directory where you will be storing all your projects. You can call is `code` or `projects`.

### Setup your git details

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "name@domain"
```

### Setup an SSH key

You need an ssh key so you don't have to authenticate every time you want to commit to git.


## Example 1: Everyday commands


### Create and add your project in git

```bash
$ mkdir practising-git
$ cd practising-git
$ git init
```

### Create a file

```bash
$ echo "Learning git" > index.html
```

> The above command will output `<h1>Learning git</h1>` and that will be pipped in index.html. Open up the file and have a look.

### Check the git repository status.

```bash
$ git status
```

### Add your file on the repository and commit your changes.

```bash
$ git add .
$ git status
$ git commit -m 'this is my first command-line commit!'
```

> . will add all the files in the current directory and subdirectories. You should only use it when initialising your repository, alternatively you can specify the file name.

### Check the git commit history.

```bash
$ git log
```

### Transferring project repository to online service

First you need to create an account to the service of your choice ([Github](http://github.com/join), [Gitlab](http://gitlab.com)). Then, create a new project (or repository).

Copy the information about adding an existing project to the repository which should be something like the details below.


```bash
$ git remote add origin <repository-url>
$ git push -u origin master
```

#### What is `remote`

`remote` git all the remote repositories you have configured. You could have the same repository stored in multiple resources like Github and Gitlab or Heroku.

The structure of the command is `git remote <add|remove> <name of remote> <url of remote>`

#### List all your remote repositories

`git remote`

Or to see more information you can use the verbose (-v) flag

`git remote -v`

### Syncing your local copy with the remote copy

```bash
$ git pull origin master

Username for 'https://github.com': <your username>
Password for 'https://<username>@github.com': <your password>
```

> When you are working with remote repo is important to sync your local repo before any commit, merge or push.

### Syncing the remote copy with your local copy

```bash
$ git push origin master
$ git log
```

# Example 2: Working with a remote service

Update the index.html file and then commit and push the changes

```html
<html>
    <head>
        <title>Learning Git!</title>
    </head>

    <body>
        <h1> Learning Git </h1>
          <dl>
            <dt>Initialise a git repository</dt>
            <dd>git init</dd>
            <dt>Add files to git</dt>
            <dd>git add <filename></dd>
          </dl>
    </body>
</html>
```

_index.html_

### Check the status of your repository

```bash
$ git status
```

### Commit and push the changes

```bash
$ git add index.html
$ git commit -m 'updated to include the commands I learned today'
$ git push origin master
```

### Check the repository git history

```bash
$ git log
```

### Check your code online (from the Github or Gitlab website).


# Example 3: Verifying changes before any commit

Edit index.html


```html
<html>
    <head>
        <title>Learning Git!</title>
    </head>

    <body>
        <h1> Learning Git </h1>
          <dl>
            <dt>Initialise a git repository</dt>
            <dd>git init</dd>
            <dt>Add files to git</dt>
            <dd>git add <filename></dd>
            <dt>Checking file changes</dt>
            <dd>git status</dd>
          </dl>
    </body>
</html>
```

### Check the changes

```bash
$ git status
$ git diff
```

The -/+ indications you can see mean

**-** indicates the lines that were removed from the code.

**+** indicates the lines that were added to the code.

```bash
$ git diff

diff --git a/index.html b/index.html
index 21f15d1..c2031f1 100644
--- a/index.html
+++ b/index.html
@@ -10,6 +10,8 @@
             <dd>git init</dd>
             <dt>Add files to git</dt>
             <dd>git add <filename></dd>
+            <dt>Checking file changes</dt>
+            <dd>git status</dd>
           </dl>
     </body>
 </html>
```

### After you verify your change, commit and push them

```bash
$ git commit -m 'Added git status description'
$ git push origin master
```

# Example 4: Discarding uncommitted changes

Edit the index.html file and then check the changes.

```bash
$ echo "oh no!" > index.html
```

> Have a look at the file using `git diff`

### Check the status of the repository

```bash
$ git status

On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

	modified:   index.html

no changes added to commit (use "git add" and/or "git commit -a")
```

### To discard the changes checkout the file

```bash
$ git checkout -- index.html
```

Don't forget to verify the changes

```bash
$ git diff
$ view index.html
```

# Example 5: Revert committed changes

Repeat the steps below to modify and commit a file

```bash
$ echo "oh not again" > index.html
$ git diff
$ git add index.html
$ git commit -am 'Oops, I just deleted my list'
```

> Can you explain the commands you just used?

### Check the log history.

```bash
$ git log

commit aafbe36777e19244ba5030cbc9467244a7163b61
Author: Jane Doe <jane@codebar.io>
Date:   Tue Jun 3 21:12:57 2014 +0100

    Oops, I just deleted my list

commit dbb313d28de82c11535968584ce2e149b1fc74ad
Author: Jane Doe <jane@codebar.io>
Date:   Tue Jun 3 21:06:09 2014 +0100

    Added git status description

commit c0bb15bf9f75613930c66760b90b2ccc1af0d2d6
...
...
```

### Resetting the last commit.

```bash
$ git reset HEAD^

Unstaged changes after reset:
M index.html
```

> The caret (^) after HEAD moves head back through commits. HEAD^ is short for HEAD^1 and in the same way you can apply HEAD^2 to go back two commit ago.

### Check the log again

```bash
$ git log
```

> Did you notice that the last commit is no longer there?


### Now check the status and discard the changes in the file

```bash
$ git status
```

> Do you remember how to discard the changes? Have a look earlier in the tutorial.


# Example 6: Revert committed and pushed changes.

You can correct something you pushed accidentaly by changing history. In the following example you will see how can you revert the last pushed commit.

### Run the following steps

```bash
$ echo "this change will be soon reverted" > index.html
$ git diff
$ git commit -am 'add another broken change'
$ git push origin master
$ git status
$ git log
```

> What does git push do?

### Reverting a commit

```bash
$ git log

commit f4d8d2c2ca851c73176641109172780487da9c1d
Author: Jane Doe <jane@codebar.io>
Date:   Tue Jun 3 21:17:57 2014 +0100

    add another broken change

commit dbb313d28de82c11535968584ce2e149b1fc74ad
Author: Jane Doe <jane@codebar.io>
Date:   Tue Jun 3 21:06:09 2014 +0100

    Added git status description

commit c0bb15bf9f75613930c66760b90b2ccc1af0d2d6
...
...
...
```

### You need to grab the commit identifier and then revert to it

```bash
$ git revert f4d8d2c2ca851c73176641109172780487da9c1d
```

After reverting the changes you have to push the code to the remote repo for them to be applied

```bash
git push origin master
```

# Extras

If you are on OS X, check the following resources

https://help.github.com/articles/set-up-git

## Configuring your git environment

Create the file `.gitconfig` in your root directory and add the following configuration

```bash
[user]
  name = <Your name>
  email = <Your email>
```

### Creating shortcuts (aliases)

```
[alias]
  ci = commit
  dc = diff --cached
```

> Can you think of another command that you would find handy to shorten down?

### Telling git to try and fix whispace issues before committing

```
[apply]
  whitespace = fix
```

### Ignoring files across directories

```
[core]
  excludesfile = ~/.gitignore
```

To apply this you need to create a .gitignore file in your root path. There you can add either specific files or extentions that you always want excluded. This is a handy list to help you start

```
*.DS_Store
*~
*.log
*.zip
*.pkg
*.rar
```

> Do you know what these files are? You normally wouldn't want to commit logs or packages.


### Pimping your log history

In your aliases add this as an alias for viewing git logs
```
  lg = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative
```

Try it out by running `git lg`

### Store commands in your history

Add HISTSIZE and HISTFILESIZE to your .bashrc file.  **HISTSIZE** is the number of commands stored in memory when you are using the terminal. **HISTFILESIZE** is the number of commands stored in memory when you are using the terminal

```bash
HISTSIZE=10000
HISTFILESIZE=20000
```

After typing a couple of command in the terminal, try executing

Ctrl+R followed by the command you want to run e.g. `git lg`


> You can see the entire history by running `history`

---
This ends **Git: Introduction to command line** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
