---
date: 2021-04-19
title: 'Migrating a WordPress website'
template: post
type: 'post'
slug: 'migrating-a-wordpress-website'
categories:
  - 'code'
tags:
  - 'wordpress'
---

Migrating a WordPress website can be a daunting task. Recently I managed to migrate an 18 GB WordPress website to a staging server, in order to test a new theme I was building for a client. Although the process was quite slow, it cloned everything, flawlessly. 

Of course there's a plethora of ways to accomplish this, FTP the files, export and import the database file etc... but my weapon of choice is the [All-in-one wp migration](https://wordpress.org/plugins/all-in-one-wp-migration/) plugin by [Servmask](https://servmask.com/). With this method, you don't have to mess around exporting and importing all the different components of a WordPress website, it does everything all at once, hence the name. The free version allows you to migrate a website up to 512 MBs and the unlimited version, only $69, allows unlimited MBs. I'm yet to have a problem with this plugin, it does exactly what it says on the tin.

## Exporting

Firstly, head to the WordPress website you'd like to export and install and activate the [All-in-one wp migration](https://wordpress.org/plugins/all-in-one-wp-migration/) plugin. Once done, navigate to the export edit screen as demonstrated below:

![All-in-one wp migration export option](../images/posts/all-in-one-migration-export.png)

Once clicked, you should be greeted with a screen that enables you to execute a search and replace on the database, and the ability to exclude certain parts of the website on export (neither is required). For simplicity, we'll export to a File by clicking the green **EXPORT TO** button then the **FILE** option. This will eventually prompt you with an animating download button, click it:

![All-in-one wp migration export edit screen](../images/posts/all-in-one-migration-export-edit-screen.png)

## Importing

Next, once downloaded, switch to the website you'll be migrating to, install and activate the [All-in-one wp migration](https://wordpress.org/plugins/all-in-one-wp-migration/) plugin once more and navigate to the import edit screen:

![All-in-one wp migration import option](../images/posts/all-in-one-migration-import.png)

Here you'll be able to drag and drop the export file you previously downloaded. Alternatively, click **IMPORT FROM** then **FILE** to select the file manually on your computer:

![All-in-one wp migration import edit screen](../images/posts/all-in-one-migration-import-edit-screen.png)

**Note:** The maximun upload file size depends on your server configuration. To extend it to 512mb simply download, install and activate the free [All-in-One WP Migration Import](https://import.wp-migration.com/) plugin.

Moving on, once you've uploaded the import file, let All-in-one do its thing. Sooner or later, depending on the size the import, it'll prompt you to proceed:

![All-in-one wp migration proceed button](../images/posts/all-in-one-proceed.png)

**Note:** once you click this button, it'll override all existing data on the website you're importing into.

Finally, after the import has completed it'll present a final **Finish** button which finalizes the process. Now, as you're importing an entirely different WordPress website, when trying to visit anywhere on your dashboard, it'll ask you to log in. Don't panic, this'll be the login details from the website you're importing. I also recommend to refresh your permalinks via settings -> permalinks then clicking the **Save changes** button located at the bottom of the page.

## Conclusion

Let's be honest, migrating a live site can be frustrating. I'm sure there's a much more efficient technical method these days but if you like to keep things simple and intuitive, All-in-one might be for you. Moreover, when migrating the 18 GB website I mentioned earlier, my upload speed was ~10mb and it took about 5 hours. I basically glued my laptop to the router and routinely checked on it, but it worked.