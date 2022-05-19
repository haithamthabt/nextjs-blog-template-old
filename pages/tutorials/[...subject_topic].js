import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";
import { TUTORIALS_PATH } from "@/utils/content_paths";

export default function SubjectsAndTopicsPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  topic,
}) {
  return (
    <Layout title={title}>
      <Link href="/blog">Go Back</Link>
      <div className="w-full px-10 py-6 bg-white rounded-lg shadow-md mt-6">
        <div className="flex justify-between items-center mt-4">
          <h1 className="text-5xl mb-7">{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <img src={cover_image} alt="" className="w-full rounded" />

        <div className="flex justify-between items-center bg-gray-100 p-2 my-8">
          <div className="flex items-center">
            <img
              src={author_image}
              alt=""
              className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
            />
            <h4>{author}</h4>
          </div>
          <div className="mr-4">{date}</div>
        </div>

        <div id="md-container" className="blog-text mt-2">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </div>
    </Layout>
  );
}


export async function getStaticPaths() {

  //get folders
  const folders = fs.readdirSync(path.join(TUTORIALS_PATH));


  //To-Do
  //Now get all files for each folder




  //testing the CSS folder inside the tutorials folder _data/content/tutorials/CSS
  const test_files = fs.readdirSync(path.join(TUTORIALS_PATH, "CSS"));

  const paths = test_files.map((filename) => ({
    params: { subject_topic: ["css", filename.replace(".md", "").toString()] },
  }));


  return {
    paths: paths, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback
  };
}




export async function getStaticProps(context) {
  console.log("===============================================");
  console.log(context.params.subject_topic);
  const subject = context.params.subject_topic[0];
  const topic = context.params.subject_topic[1];

  const markdownWithMeta = fs.readFileSync(
    path.join(TUTORIALS_PATH, subject, topic + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      topic,
    },
  };
}

