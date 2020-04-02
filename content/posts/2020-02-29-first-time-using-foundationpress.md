---
date: 2020-02-29
title: 'First time using Foundationpress'
template: post
slug: 'first-time-using-foundationpress'
categories:
  - 'code'
tags:
  - 'wordpress'
---

One of my clients use FoundationPress as their starter WordPress theme, so as a test of my adaptation skills I decided to test it out by building a bespoke WordPress theme based on the designs they provided. Despite the theme being deprecated, meaning there’s no active developer/s maintaining it, it’s simplicity allows it to run flawlessly as of 29/02/2020.

In summary, FoundationPress is a WordPress starter theme that integrates the foundation front-end framework. It has a really organised and intuitive structure, utilising gulp and sass. One thing I really love is the ‘library’ directory which stores all the stray pieces of PHP that’s usually thrown into the functions.php file in individual files. To summarise I’ve highlighted, in my opinion, three reasons to use and three reasons to avoid using this starter theme for your next bespoke WordPress theme build.

## Good

### 1\. Simple

Amongst all the starter themes I’ve used, FoundationPress is by far the most simple to use. From using gulp to easily manage your assets and production builds to having intuitive directory names to manage all your PHP. Moreover, FoundationPress includes a starter SCSS directory with a ‘_settings.scss’ file. In this file you can easily configure your grid, enabling you to change the breakpoints, gutter size and even the number of columns, based on the foundation framework.

<figure><iframe src="https://giphy.com/embed/3o6Zt16nOfEI0C9sPu" width="100%" height="350" allowfullscreen=""></iframe></figure>

### 2\. Support for ES6

Thanks to transpilers like babel and bundlers like webpack, writing JavaScript with ES6 syntax has become the norm. FoundationPress comes with babel already configured, allowing you to import npm modules like jQuery or slick straight into the main JS file. Enabling you to use the ‘import’ keyword as opposed to enqueuing a separate script via PHP. What’s more, for all your foundation lovers, you can import individual JavaScript modules from the foundation framework, thus removing any redundant code that would otherwise slow your website down.

<figure><iframe src="https://giphy.com/embed/Um3ljJl8jrnHy" width="100%" height="350" allowfullscreen=""></iframe></figure>

### 3\. Production commands

Although these are fairly easy to set up, FoundationPress configures gulp with all the functions you could possibly need to instantly build your production assets for quick deployment to your live server. By running npm run build, this runs the gulp production methods, reproducing your dist folder to contain your minified CSS and JS ready to deploy.

<figure><iframe src="https://giphy.com/embed/lkdvAg0iKQB1TPV1j3" width="100%" height="350" allowfullscreen=""></iframe></figure>

## Bad

### 1\. Deprecated

Although the starter theme still works with no hiccups as of 29/02/2020 the lack of anyone supporting it going forward could lead to compatibility issues. As you’re probably aware software improves and accelerates consistently and without testing, that’s when things start to break.

<figure><iframe src="https://giphy.com/embed/3ohs7KViF6rA4aan5u" width="100%" height="350" allowfullscreen=""></iframe></figure>

### 2\. Foundation baked in

The primary reason you would use this starter theme is for the Foundation framework. If it’s your go to framework for most of your builds then ignore this point but if you prefer say Bootstrap, then I’d recommend using an alternate starter theme to avoid the headache of removing the already baked in foundation framework code. On the other hand, as mentioned earlier I would definitely still mimic the overall structure of the theme, maybe fork the [GitHub repo](https://github.com/olefredrik/FoundationPress) and remove the foundation related parts, just an idea.

<figure><iframe src="https://giphy.com/embed/l0MYOwKlDcMWvsMXC" width="100%" height="350" allowfullscreen=""></iframe></figure>

### 3\. ‘ Npm Run package ‘ command ignores folders

You’ll notice on the GitHub repo you can run the command `npm run package`, which packages all your themes folders and files, including your minified assets, into a zip folder ready to upload as a theme. However, I needed to include a separate ‘icons’ folder in the root of the theme that contains global icons like the logo and unfortunately, this command ignores any other folder and files it is not instructed to include. More of a minor luxury but would save time.

<figure><iframe src="https://giphy.com/embed/QBd2kLB5qDmysEXre9" width="100%" height="350" allowfullscreen=""></iframe></figure>

## Conclusion

If foundation is your front-end framework of choice, then I couldn’t recommend it more. Its simple and intuitive structure allows for a comfortable build and the ability to use modern tools. However, if you’re not interested in foundation and prefer it’s mighvty cousin Bootstrap, for instance, then maybe consider another starter theme or better still, replicate the theme structure and remove the foundation parts as mentioned earlier.