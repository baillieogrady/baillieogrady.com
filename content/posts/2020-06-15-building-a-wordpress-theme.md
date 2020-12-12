---
date: 2020-06-15
title: 'Building a WordPress theme'
template: post
type: 'post'
slug: 'building-a-wordpress-theme'
tags:
  - 'wordpress'
---

Below I've outlined the process I take when building a WordPress theme from custom website designs. The majority of designs I receive from clients are either in Figma, Photoshop or Adobe XD.

1\. **Analyse**
---------------

After receiving the designs, I analyse them thoroughly, ensuring I grasp the clients entire vision and expectations. This avoids any tedious revisits and potentially time consuming amends later on in the build. I also ask many questions, some stupid, reminding myself never to assume design aspects, especially animations. Also, prior to this point, a quote and timeline has already been agreed.

2\. **Plan**
------------

Next, I plan the entire build by creating an itemised list of all the tasks that need completing. Normally, I just use a apple notes checklist and tick off each task as I complete it. I refer to the designs when creating my plan with the main task categories being:

- Prep
- Coding
- Test
- Optimise
- Documentation

I'll iterate over each one in the next steps.

3\. **Prep**
------------

At this stage I create a local version of the WordPress theme for development. I use Roots Sage and TailwindCSS for the foundation paired with the ACF Pro WordPress plugin, if needed. Also at this stage I run through the style guide extracting all the global styles inherited through the designs and implement them into the theme.

4\. **Coding**
--------------

I normally split this stage into two distinct parts, global and blocks.

Global is where I inspect the designs and code in the universal elements of the website such as the header and footer utilising ACF options. Blocks refers to the custom Gutenberg blocks I create based on the unique blocks of content given in the designs.

After coding each distinct element from the designs at desktop size, I then iterate through each element and make them responsive. As I use TailwindCSS this part of the process quite quick.

Next up is animations. Normally all animations are specified in the brief but they normally include subtle hover and fade in effects.

Finally, after implementing the PHP and CSS I then implement the JavaScript for the interactive parts of the website such as the mobile menu, sliders and accordions.

5\. **Test**
------------

Moving on, now's the time for testing. I test on all the following browsers, fixing any bugs as I go along:

- Chrome
- Firefox
- Safari
- Edge


6\. **Optimise**
----------------


Once tested and everything is acting as expected, I move on to optimising the website, ensuring fast page load times and a smooth editing experience. For this I usually install the Autoptimize plugin, lazy load images and remove any redundancies such as unnecessary plugins used throughout development.

7\. **Documentation**
---------------------

Arguably the most important part of the process is documentation. This is where I create a handover document detailing the build, providing a run down of how the theme was created with clear and concise instructions on how to use and populate the website using the theme.