import Layout from '@/components/Layout';
import Link from 'next/link';
import { getTutorials } from '@/utils/tutorials';

export default function TutorialsPage({tutorials}) {
  return (
    <Layout>
      <h1 className='text-5xl border-b-4 p-5 font-bold'>Tutorials</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {tutorials.map((tutorial, index) => (
          <Link key={index} href={`tutorials/css/${tutorial.slug}`}>
          {tutorial.frontmatter.title}
          </Link>
        )) }
      </div>
    </Layout>
  )
}

export async function getStaticProps(){

  return {
      props: {
          tutorials: getTutorials(),
      },
  }
}
