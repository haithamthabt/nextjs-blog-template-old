# Next.js Blog Template

This Project is a blog template using Next.js, tailwind, and markdown.



## `_data` Folder

Everything you need to change is in this folder

Inisde this folder you have files and subfolders and each one has its job

- `_data`
  - `_public`
  - `about`
  - `assets`
    -`images`
    -`fonts`
  - `content`


### `_data/_public` Folder

This folder is for any file that need to be put inside the root folder such as `favicon.ico` `robots.txt` 
Any file you need to put inside the root directory, just put it inside `_data/_public` and after the build and export, it will be put inside the root directory.

### `_data/about` Folder
This folder contains a file `about.md` 
This file is where you write your about me content

### `_data/assets` Folder
This is the main folder where you put all your assets such as iamges on so on

>Note: the url for any file in this will be similar to `www.example.com/assets/images/image.png`

So in your md files make sure to put the url similar to `/assets/images/image1.png`

### `_data/content` Folder
This folder is where you put your content. 
For blog posts you need to put your blog posts inside the sub folder `_data/content/blog_posts`

### `_data/config` Folder
This folder is where you can change lots of things of the website
Inside this folder this is js file `index.js` here where you can change the name of the website, contact email, and all the stuff that needed customization.

Here is some of the stuff you can change

```javascript

export const POSTS_PER_PAGE = 3;
export const LOGO_TEXT = "NEXTjs.net";
export const CONTACT_EMAIL = "contactform@nextjs.net"
export const WEBSITE_DIRECTION = "ltr" // to make the website right to left change this to rtl

```


