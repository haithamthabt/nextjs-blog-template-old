import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Pagination from "@/components/Pagination";
import Post from "@/components/Post";
import { POSTS_PER_PAGE } from "@/config/index";
import { getPosts } from "@/utils/posts";
import CategoryList from "@/components/CategoryList";
import {BLOG_POSTS_PATH} from "@/utils/content_paths"; 

export default function DefaultBlogPage({ posts, numPages, currentPage, categories }) {
  return (
    <Layout>
      <div className="flex justify-between">
        <div className="w-4/5 mr-10">
          <h1 className="text-5xl border-b-4 p-5 font-bold">Blog Posts</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>
          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>
        <div className="w-1/5">
          <CategoryList categories={categories}></CategoryList>
        </div>
      </div>
    </Layout>
  );
}

//This function is for the paganation functionality
export async function getStaticPaths() {
  // first we need to get the files
  const files = fs.readdirSync(path.join(BLOG_POSTS_PATH));

  // Then we need to get the number of pages
  // This will be based on how many posts per page we want to display
  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    });
  }
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // make /blog the defalut for the 1 pagination
  const page = parseInt((params && params.page_index) || 1);

  const files = fs.readdirSync(path.join(BLOG_POSTS_PATH));
  //console.log(files) //this to show the files in the dir

  // get the posts
  const posts = getPosts();

  // get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category);
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  );

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  };
}
