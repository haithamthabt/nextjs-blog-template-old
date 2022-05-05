import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../../components/Layout";
import Pagination from "../../../components/Pagination";
import Link from "next/link";
import Post from "../../../components/Post";
import { sortByDate } from "../../../utils";
import { POSTS_PER_PAGE } from "../../../config";

export default function DefalutBlogPage({ posts, numPages, currentPage }) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Blog Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Pagination currentPage={currentPage} numPages={numPages} />
    </Layout>
  );
}

//This function is for the paganation functionality
export async function getStaticPaths() {
  // first we need to get the files
  const files = fs.readdirSync(path.join("data/posts"));

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

  const files = fs.readdirSync(path.join("data/posts"));
  //console.log(files) //this to show the files in the dir

  // map thru the files array and create a new array with the slug and the frontmatter data
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("data/posts", filename),
      "utf-8"
    );

    //Using gray-matter package to turn the string of the frontmatter to object
    //We are renaming the data object to frontmatter
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
  const pageIndex = page - 1;
  const orderedPosts = posts
    .sort(sortByDate)
    .slice(pageIndex * POSTS_PER_PAGE, (pageIndex + 1) * POSTS_PER_PAGE);

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
    },
  };
}
