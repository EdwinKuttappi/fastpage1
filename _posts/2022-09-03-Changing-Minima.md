---
comments: true
layout: post
toc: true
show_tags: true
title: Changing Theme for Fastpage
description: This is me trying to change the theme for the fastpage, but showing it doesn't work
categories: [theme, tri1, week2]
---

When you make a fastpage from fastai, if you want to change the style, you have to go to the _sass folder but by default it is known as minima. I tried to change the minima but it resulted in an error message
![]({{ site.baseurl }}/images/remotetheme.png)

This was the error message I got when I changed the theme to something else, in this case, I did minimal instead of minima
![]({{ site.baseurl }}/images/errormessagecssstyle.png)

In the above image we see that everything worked except the Jekyll build because it did not recognize that and it was not able to deploy it on the website so the actual appearance of the fastpage did not change