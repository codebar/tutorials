---
layout: page
title: Android Dev - Layouts
---

(this is a mini tutorial that can be completed at any time)

## 1. Intro

The aim of this worksheet is to demonstrate how to position elements by building an “about” page. We will also look at how we can apply the same style to elements that are very similar.

![](https://i.imgur.com/uiBO8Ial.png])
> here’s how my about page looked at the end


## 2. New layout resource

First, we need to create a new layout file. To do this, right click on your layout folder (inside resources) in Android Studio. You want to select a `layout resource file` . You should get a dialog popup like so:

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F796CF6A0040ADCCBAB2B9B20BC5945521E219A338BC472B843F87820F2EE3E3_1487608985363_Screen+Shot+2017-02-20+at+16.42.54.png)

> here you want to write the name of the file at the top, and then press ok! We don’t need to worry about the any of the available qualifiers!


## 4. Building the layout

Next, we need to then start building the your profile card! Ideally, you need to put up between three and five pieces of information, such as your twitter account, linked in profile, public website!

https://d2mxuefqeaa7sj.cloudfront.net/s_F796CF6A0040ADCCBAB2B9B20BC5945521E219A338BC472B843F87820F2EE3E3_1487623536028_Screen+Shot+2017-02-20+at+20.45.15.png


Experiment with the following attributes to position elements exactly where you want them:

- align
- margin
- padding

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F796CF6A0040ADCCBAB2B9B20BC5945521E219A338BC472B843F87820F2EE3E3_1487764459586_test.png) Try to work through positioning an element once on your own, then ask your coach for some feedback on how they might’ve positioned it. Learn from that and then work on the next element!


## 5. Styles

After filling in a couple of pieces of information, you’ve probably started copying and pasting whole sections of layout code. Wouldn’t it be nicer if there was a better way to do this?

Fortunately, in Android we can use apply a style. A style will apply a bunch of attributes that you specify to any element you want. For example, our text is the same text size, and colour. We can specify those in a style!

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F796CF6A0040ADCCBAB2B9B20BC5945521E219A338BC472B843F87820F2EE3E3_1487621977280_Screen+Shot+2017-02-20+at+20.14.27.png)

> the code before

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F796CF6A0040ADCCBAB2B9B20BC5945521E219A338BC472B843F87820F2EE3E3_1487624799339_Screen+Shot+2017-02-20+at+21.06.25.png)

> my style 🎉


![](https://d2mxuefqeaa7sj.cloudfront.net/s_F796CF6A0040ADCCBAB2B9B20BC5945521E219A338BC472B843F87820F2EE3E3_1487621986762_Screen+Shot+2017-02-20+at+20.18.26.png)

> the code after!


## 7. Finishing

Make sure you test out your design on different phones, and different orientations! How will you make it work on a really tiny device and a really big device?

![](https://d2mxuefqeaa7sj.cloudfront.net/s_F796CF6A0040ADCCBAB2B9B20BC5945521E219A338BC472B843F87820F2EE3E3_1487764549342_test.png) Speak to your coach if you’d like advice on how we handle supporting many different device sizes. For more information take a look at https://developer.android.com/guide/practices/screens_support.html
