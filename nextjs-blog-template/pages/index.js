import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';

export default function HomePage({posts}) {
  console.log(posts)
  return (
    <Layout>
      <h1>Hello World!</h1>
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
          posts
      },
  }
}
