---
layout: page
title: Installing Elixir
---
## For Mac

The best way to install Elixir on a mac is through [Homebrew](http://brew.sh). If you don't have Homebrew  installed, follow the instruction on the [website](http://brew.sh) to install it. Once it is installed, open your terminal and type the following:

```shell
brew update

brew install elixir
```

You can verify Elixir was installed successful by typing the following:

```shell
elixir -v
```

The numbers that will show up might vary but the output should be similar to this:

```shell
Erlang/OTP 19 [erts-8.1] [source] [64-bit] [smp:8:8] [async-threads:10] [hipe] [kernel-poll:false] [dtrace]

Elixir 1.3.2
```

## For Windows

There are two options for Windows on the [Elixir website](http://elixir-lang.org/install.html#windows). We will use the second one with [Chocolatey](https://chocolatey.org).

### Step 1 - Install Chocolatey

Click the windows icon on the bottom left of your screen and search for an app called **Command Prompt**. Right click on it and select the option "**Run as administrator**". Once the screen is open paste the following and press enter:

```powershell
@powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
```

Once program is finished, you can verify that *chocolatey* is installed by typing `choco` which should output the following (again numbers may be different):

```powershell
Chocolatey v0.10.3
```

### Step 2 - Install Elixir using Chocolatey

Once chocolatey is installed, you can install Elixir by typing the following:

```powershell
cinst elixir
```

Follow the installation steps and press `Y` whenever prompted until the installation is complete. Once the installation has completed, we need to refresh our program to include the changes we made. To do so, type `refreshenv`.

Now you can verify Elixir was installed by typing `elixir -v` which should produce the similar output to the mac result above.

**Previous
Step**:
[Introduction to Functional Programming](../lesson0/tutorial.html) - **Next Step**: [Interactive Elixir](../lesson2/tutorial.html)

This ends our **Installing Elixir** tutorial. Is there something you don't understand? Try and go through the provided resources with your coach. If you have any feedback, or can think of ways to improve this tutorial [send us an email](mailto:feedback@codebar.io) and let us know.
