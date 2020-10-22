---
date: 2019-12-10
title: '5 useful jquery libraries'
template: post
type: 'post'
slug: '5-useful-jquery-libraries'
categories:
  - 'code'
tags:
  - 'jquery'
---

Below I’ve consolidated a list of 5 jQuery libraries I’ve used abundantly when creating my bespoke WordPress themes or websites for clients. Although react is [taking over](https://trends.google.com/trends/explore?date=today%205-y&geo=US&q=react,jquery) as the go to Javascript library (which I prefer to use), jQuery is ubiquitous and is still worth learning. You’ll notice many websites in the wild still using it, so make sure you leverage the best open sources libraries for all the functional complexities.

1\. slick.js
------------

Probably one of the most renowned libraries available, Slick provides out of the box slider functionality so you can focus on styling. It’s that popular there’s even a [react](https://github.com/akiran/react-slick) equivalent.

<a class="btn-link" href="https://kenwheeler.github.io/slick/">VIEW</a>

2\. isotope.js
--------------

A popular trend in web design is a filtering UI. Usually there’s a masonry grid of blog posts and at the top there will be filter buttons. Isotope allows you to filter these posts by attaching a click event listener to the button parent element. Then, when the button is pressed and shares the same class with any of the posts, all the posts not matching that class, will fade away. I personally love this library, the built in fade away animation and thorough documentation makes implementing a filtering feature a breeze.

**Bonus:** you don’t have to use jQuery with this library, vanilla JavaScript is an option to initiate an instance.

<a class="btn-link" href="https://isotope.metafizzy.co/">VIEW</a>

3\. masonry.js
--------------

Speaking of masonry, there’s no reason to fear when you see a brick wall styling block in designs anymore, masonry.js has your back. Metafizzy (creator of isotope) offers a very simple way to create that masonry UI. Although a masonry layout is somewhat more achievable in native CSS now with CSS grid, for initial prototyping masonry.js allows you to create this complex layout with just a little configuration. Also, [packery.js](https://packery.metafizzy.co/) achieves the same as this library with a few less options and being less in file size. I’ve found packery to be a little less buggy, especially when setting widths of the masonry elements and when resizing the window width.

<a class="btn-link" href="https://masonry.desandro.com/">VIEW</a>

4\. fancybox.js
---------------

In need of a light-box? fancybox to the rescue. Again, another very intuitive library to use. Options include: image light-box galleries, pop up models and instant play video light-boxes. It’s my go to light-box library to use when working with jQuery.

<a class="btn-link" href="http://fancyapps.com/fancybox/3/">VIEW</a>

5\. scrollify.js
----------------

Another popular trend I’ve noticed is full page scrolling. With a few lines of CSS and a little bit of JavaScript you can transform your page into a slide show. A paid and a more full featured alternative would be [fullpage.js](https://alvarotrigo.com/fullPage/), either one does the job brilliantly.

<a class="btn-link" href="https://projects.lukehaas.me/scrollify/#home">VIEW</a>

**Note:** Of course using a jQuery library is entirely subjective, sometimes it’s just easier to use plain vanilla javascript. For instance, to toggle a hamburger icon.