---
date: 2019-11-26
title: 'GatsbyJS homepage with WordPress'
template: post
slug: 'gatsbyjs-homepage-with-wordpress'
categories:
  - 'code'
tags:
  - 'wordpress'
  - 'gatsbyjs'
  - 'es6'
  - 'javascript'
  - 'graphql'
---

From beginning my journey a few weeks back with GatbyJS I instantly fell in love with it. Despite the initial learning curve, if you have a solidish background in JavaScript, react and the ability to follow documentation, producing GatsbyJS websites are really rewarding, check it out [here](https://www.gatsbyjs.org/).

Anyway, that’s enough rambling, the first obstacle I faced when creating a GatsbyJS website with headless WordPress was dynamically creating my WordPress homepage with the path of ‘ / ‘ rather than ‘ /home ‘. A simple solution would be to filter a separate GraphQL query with the home page’s wordpress_id (Post ID), chain this onto the intial query that creates the other pages and finally, exclude this wordpress_id from the initial query to avoid creating a ‘ /home ‘ page.

Firstly, copy the query creating the WordPress pages and paste it after this query. Include the filter ‘ (filter: {wordpress_id: {in: 1107}}) ‘ at the beginning of the GraphQL query and change path argument on the createPage function to ‘ / ‘.

## JS

        // home page
        .then(() => {
          return graphql(`
            {
              allWordpressPage(filter: {wordpress_id: {in: 1107}}) {
                edges {
                  node {
                    id
                    slug
                    status
                  }
                }
              }
            }
          `)
        })
        .then(result => {
          if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
          }

          const pageTemplate = path.resolve(`./src/templates/page.js`)

          // Create a Gatsby page for each WordPress page
          _.each(result.data.allWordpressPage.edges, ({ node: page }) => {
            createPage({
              path: `/`,
              component: pageTemplate,
              context: {
                id: page.id,
              },
            })
          })
        })

Next, as you’ve already created your homepage to be index page ‘ / ‘, you want to remove the ‘ /home ‘ page from being created. This can be accomplished by again including a filter on the initial query thats creating the remaining pages, like so:

## JS

    exports.createPages = ({ actions, graphql }) => {
      const { createPage } = actions
        // pages
      return graphql(`
        {
          allWordpressPage (filter: {wordpress_id: {nin: 1107}}) {
            edges {
              node {
                id
                slug
                status
              }
            }
          }
        }
      `)
        .then(result => {
          if (result.errors) {
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors)
          }

          const pageTemplate = path.resolve(`./src/templates/page.js`)

          // Only publish pages with a `status === 'publish'` in production. This
          // excludes drafts, future posts, etc. They will appear in development,
          // but not in a production build.

          const allPages = result.data.allWordpressPage.edges
          const pages =
            process.env.NODE_ENV === 'production'
              ? getOnlyPublished(allPages)
              : allPages

          // Call `createPage()` once per WordPress page
          _.each(pages, ({ node: page }) => {
            createPage({
              path: `/${page.slug}/`,
              component: pageTemplate,
              context: {
                id: page.id,
              },
            })
          })
        })

This may not be a bulletproof solution but even if your client say changes the WordPress page name, the post ID will still remain the same. Also, with creating a separate query, you can pass in a separate template argument to the component, just for your home page. In my case, my homepage uses the same template as all other pages, but the option’s there if you need it.