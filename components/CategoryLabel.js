import Link from 'next/link'
import { BLOG_CATEGORY_COLOR_KEY } from "@_data/config/settings";

export default function CategoryLabel({ children }) {

  return (
    <div
      className={`px-2 py-1 ${BLOG_CATEGORY_COLOR_KEY[children]} text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}