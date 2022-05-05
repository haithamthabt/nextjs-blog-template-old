import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";

export default function CategoryBlogPage({ posts, categoryName }) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">
        {categoryName.toUpperCase()}
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
}

// to get and fetch the categories with their paths
export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("data/posts"));

  const categories = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("data/posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.category.toLowerCase();
  });

  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {


  //get the posts using getPosts function from /lib
  const posts = getPosts()

  // filter posts based on category
  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );

  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
    },
  };
}
