import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Link from 'next/link'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'
import {AUTHORS_PATH} from "@/utils/content_paths"; 

export default function PostPage({
  frontmatter: { title, author_image },
  content,
  author_slug,
}) {
  return (
    <Layout title={title}>
      <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
        <div className='flex justify-between items-center mt-4'>
          <h1 className='text-5xl mb-7'>{title}</h1>
        </div>
        <img src={author_image} alt='' className='w-full rounded' />

        <div className='flex justify-between items-center bg-gray-100 p-2 my-8'>
          <div className='flex items-center'>
            <img
              src={author_image}
              alt=''
              className='mx-4 w-10 h-10 object-cover rounded-full hidden sm:block'
            />
          </div>
        </div>

        <div id='md-container' className='blog-text mt-2'>
          <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(AUTHORS_PATH))

  const paths = files.map((filename) => ({
    params: {
      author_slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { author_slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join(AUTHORS_PATH, author_slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      author_slug,
    },
  }
}