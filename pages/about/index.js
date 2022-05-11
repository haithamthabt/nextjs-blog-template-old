import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from '@/components/Layout'
import {ABOUT_CONTENT_PATH} from "@/utils/content_paths"; 

export default function AboutPage({content}) {
  return (
    <Layout title='About Nextjs.net'>
        <h1 className='text-5xl border-b-4 pb-5 font-bold'>About Us</h1>

        <div className="bg-white shadow-md rounded-lg px-10 py-6 mt6">
        <div id='md-container' className='blog-text mt-2'>
          <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
        </div>
    </Layout>
  )
}



export async function getStaticProps(){

  const markdownWithMeta = fs.readFileSync(path.join(ABOUT_CONTENT_PATH, 'about.md'), 'utf-8');
  const MDdata = matter(markdownWithMeta)

  return {
    props: {
      content: MDdata.content,
    },
  }
}
