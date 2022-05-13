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
> Note: as of right now, only three files `favicon.ico` `robots.txt` and `manifest.json` are being moved to the root directory when building and exporting the project. if you need to put other files in the root directory, you have two options
> Option 1: You will need to put the files directory into the the default NEXT.js `public` folder
> Option 2: You can put the files inside the `_data/_public` but you will need to modify the package.json file to move the files for you on the `npm build`

Under `scripts` you will find the script `move_public` that is responsilbe for moving the files from `_data/_public` to the root directory "NEXT.js default" `public`

Similar to the following

```json
"move_public": "mv ./_data/assets public && mv ./_data/_public/favicon.ico public && mv ./_data/_public/manifest.json public && mv ./_data/_public/robots.txt public",
```

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


