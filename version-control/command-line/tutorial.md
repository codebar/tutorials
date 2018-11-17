---
layout: page
title: Introduction to the Git command line
---

## Introduction to the Git command line

**PREREQUISITE:** Basic understanding of the command line.

Git is a tool that makes sharing code and collaborating with other developers really easy. It also keeps our code tracked and safe. The following examples will help you understand how to use this tool on a daily basis.

## Before you begin
Install command line Git for your operating system ([OS X](https://sourceforge.net/projects/git-osx-installer/), [Windows](http://msysgit.github.io/) or [Linux](https://git-scm.com/download/linux)) and open your terminal / command prompt.

Create a directory where you will be storing all your projects. You can call it `code` or `projects`.

### Setup your Git details

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "name@domain"
```

### Setup an SSH key

An SSH key is used to identify trusted computers, without entering a password.
[Instructions on how to generate an SSH key](https://git-scm.com/book/en/v2/Git-on-the-Server-Generating-Your-SSH-Public-Key)


## Example 1: Everyday commands


### Create and add your project in Git

```bash
$ mkdir practising-git
$ cd practising-git
$ git init
```

### Create a file

```bash
$ echo "<h1>Learning git</h1>" > index.html
```

> The above command will output `<h1>Learning Git</h1>` and store it in `index.html`. Open up the file and have a look.

### Check the Git repository status.

```bash
$ git status
```

> The above command will tell you which files in the current directory have been changed, which files have not yet been added to the Git repository and so on.

### Add your file on the repository and commit your changes.

```bash
$ git add .
$ git status
$ git commit -m 'this is my first command-line commit!'
```

> `.` will add all the files in the current directory and subdirectories. You should only use it when initialising your repository. Rest of the time you can specify the file names to be added.

### Check the Git commit history.

```bash
$ git log
```

### Transferring project repository to an online service

First you need to create an account to the service of your choice ([GitHub](https://github.com/join), [GitLab](https://gitlab.com/)). Then, create a new project (or repository).

Copy the information about adding an existing project to the repository which should be something like the details below.


```bash
$ git remote add origin <repository-url>
$ git push -u origin master
```

#### What is `remote`

`remote` is simply the URL of your repository in any online repository hosting services. The `git remote` lists all the remote repositories you have configured. You could have the same repository stored in many places like GitHub and GitLab or Heroku and in such cases you will have a remote configured for each of the remote repository you have.

The structure of the command to add a new `remote` is `git remote <add|remove> <name of remote> <url of remote>`.

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

> When you are working with a remote repo it is important to sync your local repo before doing any commit, merge or push.

### Syncing the remote copy with your local copy

```bash
$ git push origin master
$ git log
```

# Example 2: Working with a remote service

Update the `index.html` file and then commit and push the changes

```html
<html>
    <head>
        <title>Learning Git!</title>
    </head>

    <body>
        <h1> Learning Git </h1>
          <dl>
            <dt>Initialise a Git repository</dt>
            <dd>git init</dd>
            <dt>Add files to Git</dt>
            <dd>git add filename</dd>
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

### Check the repository Git history

```bash
$ git log
```

### Check your code online (from the GitHub or GitLab website).


# Example 3: Verifying changes before any commit

Update `index.html`


```html
<html>
    <head>
        <title>Learning Git!</title>
    </head>

    <body>
        <h1> Learning Git </h1>
          <dl>
            <dt>Initialise a Git repository</dt>
            <dd>git init</dd>
            <dt>Add files to Git</dt>
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

**-** indicates lines removed from the code.

**+** indicates lines added to the code.

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
$ git add .
$ git commit -m 'Added git status description'
$ git push origin master
```

# Example 4: Discarding uncommitted changes

Edit the index.html file and then check the changes.

```bash
$ echo 'oh no!' > index.html
```

> Have a look at changes to the file using `git diff`

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
$ git checkout index.html
```

Don't forget to verify the changes

```bash
$ git diff
$ view index.html
```

# Example 5: Revert committed changes

Repeat the steps below to change and commit a file

```bash
$ echo "oh not again" > index.html
$ git diff
$ git add index.html
$ git commit -m 'Oops, I just deleted my list'
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

> The caret (^) after HEAD moves head back through commits. HEAD^ is short for HEAD^1 and in the same way you can apply HEAD^2 to go back two commits ago.

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

You can correct something you pushed accidentally by changing history. In the following example you will see how can you revert the last pushed commit.

### Run the following steps

```bash
$ echo "this change will be soon reverted" > index.html
$ git diff
$ git commit -am 'add another broken change'
$ git push origin master
$ git status
$ git log
```

> `git commit -am 'commit message` is short form for `git add .` followed by `git commit -m 'message'`.

> What does `git push` do?

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

After reverting the changes you have to push the code to the remote repo to apply them

```bash
git push origin master
```

# Extras

Following are some good resources to to help you set up Git.
https://help.github.com/articles/set-up-git/

## Configuring your Git environment

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

### Telling Git to try and fix whitespace issues before committing

```
[apply]
  whitespace = fix
```

### Ignoring files across directories

```
[core]
  excludesfile = ~/.gitignore
```

To apply this you need to create a .gitignore file in your root path. There you can add either specific files or extensions that you always want excluded. This is a handy list to help you start

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

In your aliases add this as an alias for viewing Git logs
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
