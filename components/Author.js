import Link from 'next/link'

export default function Author({ author }) {
  return (
    <div className='w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6'>
      <img
        src={author.frontmatter.author_image}
        alt=''
        height={220}
        width={300}
        className='mb-4 rounded'
      />
      <div className='mt-2'>
        <Link href={`/authors/${author.slug}`}>
          <a className='text-2xl text-gray-700 font-bold hover:underline'>
            {author.frontmatter.title}
          </a>
        </Link>
        <p className='mt-2 text-gray-600'>{author.frontmatter.excerpt}</p>
      </div>

      <div className='flex justify-between items-center mt-6'>
        <Link href={`/authors/${author.slug}`}>
          <a className='text-gray-900 hover:text-blue-600'>Read More</a>
        </Link>
      </div>
    </div>
  )
}