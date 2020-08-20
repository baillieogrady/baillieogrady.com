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

<!-- 
Recently I made the shift to TailwindCSS for all my CSS and it's dramtically reduced my development time. The great thing about TailwindCSS is that there's no tradeoff in quality, you utilize the same utility classes based on the design system you configure in the tailwind.config.js file. In essence, it saves a lot of repetitive CSS tasks so you can focus on the more vital website aspects like optimisation and responsiveness. -->

<!-- In terms of project management I usually use Trello. This really depends on the scope of the project, as most of my projects fall in the small - medium catergory, I find managing a trello board unnesseccary as it delays development time. However, if the client requires a way to gauge the project progress, I normally create a staging website and update it daily throughout the project build. -->


## The process

1. Scan through the final designs extracting brand styles, Grid system & unique content blocks.
2. Create a local WordPress website with [docker](/docker-wordpress) and clone my [custom-sage](https://github.com/baillieogrady/custom-sage) into the themes folder.
3. Install [ACF Pro](https://www.advancedcustomfields.com/pro/).
4. Configure **tailwind.config.js** to generate utility classes based on brand styles extracted in step 1.
5. Create header & footer elements and implement global ACF options.
6. Iterate through and create a custom Gutenberg block for each unique content block extracted in step 1.
7. Iterate through each custom Gutenberg block and make them responsive.
8. Test all blocks, including the header and footer on all modern browsers including Firefox, Chrome and Safari.
9. Optimise website to achieve < 2 seconds load time on each page. 
10. Setup a staging website for the client to experiment with their new theme & provide them with a brief handover document, lsiting all the custom Gutenberg blocks.

I'm likely to update this post as time goes on, but I hope this post provides a good insight into how one WordPress developer builds WordPress themes based on completely custom designs.