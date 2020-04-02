---
date: 2019-10-25
title: 'How do you center content in css?'
template: post
slug: 'how-do-you-center-content-in-css'
categories:
  - 'code'
tags:
  - 'css'
---

Centering content in CSS can be rather confusing, sometimes it’s just the matter of applying `text-align: center;` and by magic everything centers. Below are the 4 main CSS methods I use on a regular basis.

## Text-align

Probably the most renowned way would be to apply `text-align: center;` to a block-level element and providing the nested elements are block-level, they will center. As images are inline by default simply apply either `display: block;` or `display: inline-block;` to it and watch the magic happen.

## Flexbox

Applying `display: flex;`, `justify-content: center;` and `align-items: center;` to your parent element will perfectly center any nested elements, vertically and horizontally. If you just want to center content horizontally just use `display: flex;`, `justify-content: center;` . Vertically just use `display: flex;` and `align-items: center;`. Please visit [css-tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for a more comprehensive guide on flexbox.  

## Absolutely

If you intend to absolutely position an element within a `position: relative;` parent, applying the following css will allow you to center this element horizontally and vertically. `position: absolute;`, `top: 50%;`, `left: 50%;` , `transform: translateX(-50%), translateY(-50%);`

## Margin

Last but not least, margin. Applying `margin: 0 auto;` will center elements providing they have a width applied to them, like a container for instance.