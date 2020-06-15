---
date: 2020-06-15
title: 'Building a WordPress theme'
template: post
slug: 'building-a-wordpress-theme'
categories:
  - 'code'
tags:
  - 'wordpress'
---

Below I've outlined the process I take when converting a custom design to a WordPress theme. With modern tools available like Roots Sage, TailwindCSS and Gutenberg, creating bespoke WordPress themes has not only become easier and quicker but also better for the user and Developer.

Recently I made the shift to TailwindCSS for all my CSS and it's dramtically reduced my development time. The great thing about TailwindCSS is that there's no tradeoff in quality, you utilize the same utility classes based on the design system you configure in the tailwind.config.js file. In essence, it saves a lot of repetitive CSS tasks so you can focus on the more vital website aspects like optimisation and responsiveness.

In terms of project Management I usuaslly use trello. This really depedns on the scope of the project, as most of my projects fall in the small - medium catergory, I find managing a trello board unnesseccary as it delays project builds. However, if the client requires a way to gauge the project progress, I normally create a staging website and update it daily throughout the project build.



## The process

1. Scan through the final designs extracting:
    * Base styles
    * Brand styles
    * Grid system
    * Unique content blocks.
2. Clone the [custom-sage](https://github.com/baillieogrady/custom-sage) theme, create a local WordPress website with docker and ensure WordPress is up to date.
3. Install [ACF Pro](https://www.advancedcustomfields.com/pro/) and ensure it's up to date.
4. Configure **tailwind.config.js** to generate utility classes based on brand styles extracted from the designs in step 1.
5. Create header & footer elements and implement global ACF options.
6. Iterate through and create a custom Gutenberg block for each unique content block extracted in step 1.
7. Iterate through each custom Gutenberg block and make them responsive.
8. Test all blocks, including the header and footer, on all modern browsers including IE 11, Firefox, Chrome, Safari & Android.
9. Optimise website to achieve < 2 seconds load time, implemented lazy loading, 
10. Setup staging website for the client to experiment with their new theme & provide them with a handover document to give a run down of how the theme was made and how to use it, [example](https://handover.baillieogrady.com).


I'm likely to update this post as time goes on but I hope this post provide a a good insight into how one WordPress developer builds themes.