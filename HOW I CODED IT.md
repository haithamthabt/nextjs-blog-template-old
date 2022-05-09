# Code Documentation

I try to document everything about how I coded this blog-template here
I tried to make this template as abstract as possoble so it can work with any blog website. 
This template can be updated whenever there is any change and all you need to do is just replace the data folder with yours. Everything else should work fine. 

## Styles

For styling this website, we are using tailwind framework. This framework is good because we dont have to write any `css`. All we do is to just write the classes in the `html tags`

## Tailwind and Markdown

Unfortunatly `Tailwind` removes the default styles that come with `markdown`; therefore, we used the `prose` Class from tailwind so we can use the default styles of markdown.

For the codes styles, we used the javascript package called `prismjs`. This is used to style any code snippets we have in the blog or the tutorials

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

We used the `fs` module to get the files from the directory, created a slug, passed the front-matter with grey-matter and basically returned the slug and the front-matter as the post prop.


## Using the Next.js Export

>Note: for using the Next,js `next export`, you are not gonna be able to use the Image optimization functionality;therefore we are gonna need to replace the Next.js `<Image>` tag with the default html `<img>` tag


## Pagination
For the pagination, we created `page` folder and inside it we created the file `[page_index].js` we have our abstract code inside this folder, and for the `blog/index.js` we just added the code `export default DefalutBlogPage` so we can import the abstract code from `blog/page/[page_index].js`

### For the Categories, we have not yet built the pagination functionality


## The folder `config` in the root folder
This folder is used to add any settings, configuration or any custom stuff for the website


## `utils` Folder
This folder is used to write any abstract/common functions that can be used in multiple places

## `jsconfig.json` 
In this file we wrote some code so we can have dynamic paths to the folders we have in the project

## `_data` 
this is the only folder you need to change. Here you can add content, change website data, configs, names, settings, ...etc


=====================================================================================================
5/8/2022 8PM
I renamed `data` folder to `_data` so this can be the only folder people change. This is where you change the website content/settings

I created `utils/content_paths.js` file so I can add global veriables for the content paths so I only change this whenever the content path changes










