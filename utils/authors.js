import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { AUTHORS_PATH } from "@/utils/content_paths";

// get the files
const files = fs.readdirSync(path.join(AUTHORS_PATH));

// This function returns all the authos we have inside the authors folder
export function getAuthors() {

  const authors = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join(AUTHORS_PATH, filename),
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

  return authors
}
