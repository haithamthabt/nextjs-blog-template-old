import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Post from '../../components/Post';
import {sortByDate} from '../../utils';

export default function HomePage({posts}) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post}/>
        )) }
      </div>
    </Layout>
  )
}

export async function getStaticProps(){

  const files = fs.readdirSync(path.join('data/posts'))
  //console.log(files) //this to show the files in the dir


  // map thru the files array and create a new array with the slug and the frontmatter data
  const posts = files.map(filename => {
      const slug = filename.replace('.md', '');

      const markdownWithMeta = fs.readFileSync(path.join('data/posts', filename), 'utf-8');

      //Using gray-matter package to turn the string of the frontmatter to object
      //We are renaming the data object to frontmatter
      const {data:frontmatter} = matter(markdownWithMeta)

      return {
          slug,
          frontmatter,
      }
  })

  return {
      props: {
        //return the post but after you sort by date
        // and only return the latest 6 posts
          posts: posts.sort(sortByDate),
      },
  }
}