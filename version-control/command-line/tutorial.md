# GIT command line tutorial

Git is an easy to share and collaborate tool that keeps our code tracked and safe.
With the following examples we understand how to deal with the daily usage of the tool.

## Before you begin
Install command line git for [OS X](http://code.google.com/p/git-osx-installer) or [Windows](http://msysgit.github.com/) and open your terminal.

Create a directory where you will be storing all your projects. You can call is `code` or `projects`.

### Setup your git details

```bash
$ git config --global user.name "Your Name"
$ git config --global user.email "name@domain"
```


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

### Check the git repo status.

```bash
$ git status
```

### Add your file on the repo and commit your changes.

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

### Transferring project repo to online service

**First you need to create an account to the service of your choice ([Github](http://github.com/join), [Gitlab](http://gitlab.com)).**
Then, create a new project (or repository).

Copy the information about adding an existing project to the repository which should be something like the details below.


```bash
$ git remote add origin https://github.com/<username>/<git-repo-name>.git
$ git push -u origin master
```

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

# Example 2: Working with github

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

### Check your code online from the github website.


# Example 3: Running checks before any commit/push

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

### Then check the changes before the commit.

```bash
$ git status
$ git diff

```

**On the git diff results you can see -/+ indications:**

**Lines marked with "-" indicate the lines that were removed from the file/code.**

**Lines marked with "+" indicate the lines that were added to the file/code.**

```bash
$ git diff
diff --git a/index.html b/index.html
index aae57ff..4a74c00 100644
--- a/index.html
+++ b/index.html
@@ -4,6 +4,6 @@
    </head>

    <body>
-       My first page
+       <b>My first page</b>
    </body>
 </html>
```

### If the results is acceptable then commit and push your changes with the following commands.

```bash
$ git commit -am 'Added bold message'

$ git push origin master

```


# Discard uncommitted changes
# Example 4

### With the following example will understand how we can revert accidental uncommitted changes.
### Edit the index.html file and then check the changes.

```bash
$ echo "codebar codebar codebar codebar" >> index.html

$ cat index.html
```

###check the changes

```bash
$ git diff

diff --git a/index.html b/index.html
index 4a74c00..bba960e 100644
--- a/index.html
+++ b/index.html
@@ -7,3 +7,4 @@
        <b>My first page</b>
    </body>
 </html>
+codebar codebar codebar codebar
```

###Then check the repo status

```bash
$ git status

$ git status
# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
# modified:   index.html
#
no changes added to commit (use "git add" and/or "git commit -a")
```

### To discard changes run the following command

```bash
$ git checkout -- index.html
```

###and then

```bash
$ git diff

$ cat index.html
```

# Revert committed changes
# Example 5

### With the following example will understand how we can reset accidental committed changes

###Repeat the following steps.

```bash
$ echo "codebar codebar codebar codebar" >> index.html

$ cat index.html

$ git diff

$ git status

$ git commit -am 'Added unchecked code'

$ git status

$ git log
```

### Check the log history.

```bash

$ git log
 commit f4d8d2c2ca851c73176641109172780487da9c1d
 Author: Your Name <your@mail>
 Date:   Fri Jan  1 00:00:10 2014 +0100

    Added unchecked code

 commit aa0f3b20baed214b29ea05b2e88b6e8fcf5f94bc
 Author: Your Name <your@mail>
 Date:   Fri Jan  1 00:00:00 2014 +0100

    Added bold message
...
...
...
```

###Next step reset the last commit.

```bash
$ git reset HEAD^

Unstaged changes after reset:
M index.html
```
### Check again the logs.
### The latest commit should be reset.


```bash
$ git log
```

### Now check the status.

```bash
$ git status

# On branch master
# Changes not staged for commit:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
# modified:   index.html
#
no changes added to commit (use "git add" and/or "git commit -a")

```

### Next step: Discard the changes or edit the file.
### To discard the changes run the following command.
```bash
$ git checkout -- index.html
```



# Revert committed and pushed changes.
# Example 6

###Very often we push changes on the remote git repo which are not working properly. The best practice is to correct your code with one more commit, but some times fixing the issues is harder than reverting the last pushed commits. With the following example you will see how can you revert the last pushed commit.

###Repeat the following steps
```bash

$ echo "codebar codebar codebar codebar" >> index.html

$ cat index.html

$ git diff

$ git status

$ git commit -am 'Added unchecked code'

$ git push origin master

$ git status

$ git log
```

###Now lets see how we can revert a commit
```bash

$ git log
 commit f4d8d2c2ca851c73176641109172780487da9c1d
 Author: Your Name <your@mail>
 Date:   Fri Jan  1 00:00:10 2014 +0100

    Added unchecked code

 commit aa0f3b20baed214b29ea05b2e88b6e8fcf5f94bc
 Author: Your Name <your@mail>
 Date:   Fri Jan  1 00:00:00 2014 +0100

    Added bold message
...
...
...
```

### we need the commit id for the following command and we use it like that

```bash
$ git revert 4d8d2c2ca851c73176641109172780487da9c1d
```
### After that we have reverted the changes local now we need to push the local repo into remote repo.

###now check the file if it is clean from the unwanted changes

```bash
cat index.html
```
### and push the changes into remote repo (github)
'''bash
git push origin master
...


# Extras

Check the following link if you are mac user.
https://help.github.com/articles/set-up-git


To configure your environment for permanent you need the following files

create the file ~/.gitconfig

```bash
[user]
    name = Your name
    email = Your@mail
[core]
    editor = vim
    pager = less -x4
excludesfile = ~/.gitignore_global
[color]
    branch = auto
    diff = auto
    status = auto
    ui = auto
[difftool "sourcetree"]
cmd = opendiff \"$LOCAL\" \"$REMOTE\"
path =
[mergetool "sourcetree"]
cmd = /Applications/SourceTree.app/Contents/Resources/opendiff-w.sh \"$LOCAL\" \"$REMOTE\" -ancestor \"$BASE\" -merge \"$MERGED\"
trustExitCode = true
[alias]
sync = !git pull --rebase && git push
com = !git add . && git commit -am

```

Create the file ~/.gitignore_global

```bash
*~
.DS_Store
*.gem
*.rbc
*.log
*.gz
*.zip
*.pkg
*.rar
```

Make your bash PROMPT more frendly
Add the following lines be careful with the changes.

```bash
export GITAWAREPROMPT=~/.bash
source $GITAWAREPROMPT/main.sh

HISTSIZE=10000
HISTFILESIZE=20000

export PS1="\u@\h{ \[$txtcyn\]\$git_branch\[$txtred\]\$git_dirty\[$txtrst\] \w }\n$ "

source ~/.profile

```

