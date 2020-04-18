---
date: 2019-10-04
title: 'Docker & WordPress'
template: 'post'
slug: 'docker-wordpress'
categories:
  - 'code'
tags:
  - 'docker'
  - 'wordpress'
---

Whether you’re using WAMP, MAMP or LAMP for your local WordPress development, [Docker](https://www.docker.com/) should be strong contender. It allows you to spin up a server environment from a simple docker-compose.yml file anywhere on your computer.

## Steps

1.  Sign up and follow the docker installation [here](https://www.docker.com/get-started).
2.  Once installed launch docker, provide docker permission and sign in to docker program with the same details you provided in step 1.
3.  Next, create a folder and open it up in you preferred code editor. I prefer to use [VScode](https://code.visualstudio.com/) for its built in terminal. Open the editor and just drag and drop your folder to the editor.
4.  Inside that folder create a **docker-compose.yml** file and paste in the below **docker-compose.yml** example.
5.  Open the built in terminal with `Ctrl + \` .Once opened executre **pwd** to ensure you're in the correct directory.
6.  In the terminal type **docker-compose up -d**. This will download and store the relevant images (if not already installed) and create unique containers for your local WordPress site. This may take a couple of minutes.
7.  Visit https://localhost:8000 and **_Voilà_** continue creating awesome websites. Visiting http://localhost:8080 will present you with a phpmyadmin GUI to import and export your databases.

### docker-compose.yml

```yaml
version: "3"

services:
  db:
    image: mysql:5.7
    volumes:
      - db_data:/var/lib/mysql
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: wp
      MYSQL_DATABASE: wordpress
      MYSQL_USER: wp
      MYSQL_PASSWORD: wp
  phpmyadmin:
    depends_on:
      - db
    image: phpmyadmin/phpmyadmin
    restart: always
    ports:
      - "8080:80"
    environment:
      PMA_HOST: db
      MYSQL_ROOT_PASSWORD: wp
  wordpress:
    depends_on:
      - db
    image: wordpress:latest
    ports:
      - "8000:80"
    restart: always
    environment:
      WORDPRESS_DB_HOST: db:3306
      WORDPRESS_DB_USER: wp
      WORDPRESS_DB_PASSWORD: wp
    working_dir: /var/www/html
    volumes:
      - ./:/var/www/html
      - ./uploads.ini:/usr/local/etc/php/conf.d/uploads.ini
volumes:
  db_data:
```

## Increase upload limit

Paste the below into the **uploads.ini** file in your WordPress root directory. As we’ve created a volume for this above, all changes to this file will be taken into effect inside the container. If you need to increase the size, simply change the values and restart your docker containers by running the `docker-compose down` command, to stop the containers, then the `docker-compose up -d` command to start them back up. You should see your uploads limits change when uploading to your media library.

### uploads.ini

    file_uploads = On
    memory_limit = 750M
    upload_max_filesize = 750M
    post_max_size = 750M
    max_execution_time = 600

**Inspiration** [david yeiser](https://davidyeiser.com/tutorial/docker-wordpress-theme-setup)