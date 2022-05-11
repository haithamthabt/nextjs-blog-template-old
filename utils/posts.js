import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import {sortByDate} from '@/utils/index';
import {BLOG_POSTS_PATH} from "@/utils/content_paths"; 


// get the files
const files = fs.readdirSync(path.join(BLOG_POSTS_PATH))


// This function returns all the posts we have inside the data/post folder
export function getPosts(){

    const posts = files.map(filename => {
        const slug = filename.replace('.md', '');

        
  
        const markdownWithMeta = fs.readFileSync(path.join(BLOG_POSTS_PATH, filename), 'utf-8');
  
        //Using gray-matter package to turn the string of the frontmatter to object
        //We are renaming the data object to frontmatter
        const {data:frontmatter} = matter(markdownWithMeta)
  
        return {
            slug,
            frontmatter,
        }
    })

    return posts.sort(sortByDate);

}