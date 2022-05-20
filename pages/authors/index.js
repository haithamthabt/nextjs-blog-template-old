import Layout from "@/components/Layout";
import Author from "@/components/Author";
import { getAuthors } from "@/utils/authors";

export default function AuthorsHomePage({ authors }) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Authors</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {authors.map((author, index) => (
          <Author key={index} author={author} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  
  return {
    props: {
      authors: getAuthors(),
    },
  };
}
