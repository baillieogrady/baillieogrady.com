<!-- ---
date: 2020-10-27
title: 'Full screen Swiper JS slider'
template: post
type: 'post'
slug: 'full-screen-swiper-js-slider'
tags:
  - 'slider'
  - 'javascript'
---

Recently I created a full screen slider for a client using the Swiper JS library. I was struggling for a solution since they wanted quite a lot of functionality including navigation links and mouse wheel navigation. After experimenting with Slick js trying to hack my way to a solution I stumbled upon Swiper js. A  collegue recommened it to me a few years ago but I naively ignored the suggestion in favour of Slick, big mistake.

Swiper js is really powerful, you dont need jQuery, their main features are split into modules, so you only import what you need and their documentation is rock solid. With this library alone I was able to implement the following functionality, all of what the client needed:

- Navigation links
- Navigation buttons
- Mouse wheel navigation
- Cross fade slide transition
- Circle progress bar


Below I've listed the HTML, CSS and JavaScript used and also provided  a link to a codepen project to demonstrate the result. For simplcity I've created some static files with CDN links. Feel free to implement Swiper with ES6 using their NPM modules [here](https://www.npmjs.com/package/swiper). Also, big shoutout to CSS-Tricks for providng the code for the circle progress bar.
 -->
