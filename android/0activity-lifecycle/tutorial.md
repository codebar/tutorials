---
layout: page
title: Android Dev - Activity Lifecycle
---

(this is a mini tutorial that can be completed at any time)

## 1. Intro

The aim of this tutorial is to look at how the activity lifecycle works which looks like this:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_E25ED0FC0DF5A9B6B084CB936BAE886D8F9B2E37A2183F438D75F8F9BC39F410_1487708990139_file.png)

> for more information take a look at https://developer.android.com/guide/components/activities/activity-lifecycle.html There's also a really great video by Kristin Marsicano https://realm.io/news/activities-in-the-wild-exploring-the-activity-lifecycle-android/

## 2. Logging

Firstly, we’re going to implement the different activity lifecycle methods. Android Studio has a lot of keyboard shortcuts which will write a lot of the code for us! On Mac OS Z press `Command + N` and on Windows press `Alt + Insert` . Here you can select `Override methods` and find the methods listed above.

We’re then going to write ourselves some Log messages. If you’ve ever written any JavaScript, this is the same as `console.log` . These we can check in the Android Monitor (probably a button at the bottom of your window in Android Studio) which methods are being called.

When you first look in the Android Monitor, you’ll notice **a lot** of messages coming through. We can filter out which ones we care about by using a tag, like so:


![](https://d2mxuefqeaa7sj.cloudfront.net/s_E25ED0FC0DF5A9B6B084CB936BAE886D8F9B2E37A2183F438D75F8F9BC39F410_1487710556648_Screen+Shot+2017-02-21+at+20.55.42.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E25ED0FC0DF5A9B6B084CB936BAE886D8F9B2E37A2183F438D75F8F9BC39F410_1487709397176_test.png) As you write a log message inside each method, speak to your coach about when you think this might get called!

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E25ED0FC0DF5A9B6B084CB936BAE886D8F9B2E37A2183F438D75F8F9BC39F410_1487708752616_Screen+Shot+2017-02-21+at+20.25.28.png)

> this is what my code looks like

Run this on a real device (or an emulator) and test it out and answer with your coach the following questions:

a. What methods get called when the app first starts up?
b. What methods get called if I go home and come back into the app?
c. What methods get called if I kill the app, and then open it again?

## 3. Gotchas

Which methods get called if you rotate your device?

Is that what you expected?

What other things could you do to your device that might destroy and re-create your activity? (Hint: changing the language)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_E25ED0FC0DF5A9B6B084CB936BAE886D8F9B2E37A2183F438D75F8F9BC39F410_1487709473122_test.png) Speak to your coach about your coach and see where they’ve learned the hard way about the activity lifecycle! Has it ever caused an app they’ve written to crash, or behave in a way they didn’t intend for?

## 4. Pop quiz

For the following questions, do you think they are true or false?


1. After **onCreate**, the activity is now visible to the user to interact with.
2. **onStart** always gets called every time the user comes back into the activity.
3. **onResume** always gets called when you return to the activity, regardless of whether you killed the activity or just briefly left it.
4. an activity in **onPause** can still be visible on the screen.
5. **onDestroy** is the best place to save anything a user did so they can see it when they come back.


Answers:

ǝnɹʇ ˙ʇɐƃnou uı sddɐ pǝʍopuıʍ ıʇןnɯ 'ǝnɹʇ 4 ˙ǝnɹʇ 3 ˙ǝsןɐɟ 2 ˙ǝɯnsǝɹuo ɹǝʇɟɐ s’ʇı 'ǝsןɐɟ 1
