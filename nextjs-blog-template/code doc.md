# Code Documentation

I try to document everything about how I coded this blog-template here
I tried to make this template as abstract as possoble so it can work with any blog website. 
This template can be updated whenever there is any change and all you need to do is just replace the data folder with yours. Everything else should work fine. 

## Styles

For styling this website, we are using tailwind framework. This framework is good because we dont have to write any `css`. All we do is to just write the classes in the `html tags`

## Components

In the `components` folder we create our `components` and what I mean by that is to create anything that is gonna be used everywhere such as the `header` component, the `footer` component, `layout` component, and so on

## Layout.js

This is the general code for every page in the website. We include this file for almost every page we create inisde the `page` folder

This file is where we put the stuf inside the `<head>` tag such as meta tags, `<title>` and so on

## Header.js

This is where we put the header stuff such as the navbar, menu and logo


## Pages

This is the folder where we put all the pages we need such as `index.js` and so on

## page/index.js

This is the homepage of the webiste. Anything we need to show on the homepage, we write it in this file

## blog folder

Here we put the files of any blog things related such as `blog.js` and so on

## Data folder

I created this folder so we can store anything related to custom website. This tempalte should be abstract and anything custom, such as blogposts, categories or anything related to the website itself and not the tempalate should be in this folder.

> Note: the structure of this folder should be abstract to all website, but the content may differ from website to website depends on what the website is about.

#### data/settings

This is where we store the website settings such as, the website names, and so on

#### data/posts

This is where we store the blogposts

## Data Fetching

For data fetching we used the function `getStaticProps()`
In order to get data from a dirctory we need to import the node module `fs`

```javascript
import fs from 'fs';
```

### Slug

We will get the slug based on the file name.

### Frontmatter

This is used to get the info of each post in a special format, such as the title, keywords, date, content, ...etc

For the fronmatter we are gonna use a package called `gray-matter` which will take a string with a frontmatter and turn it into and object





