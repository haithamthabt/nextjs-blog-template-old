import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Layout from "@/components/Layout";
import { CONTACT_CONTENT_PATH } from "@/utils/content_paths";

export default function ContactPage({ content }) {
  return (
    <Layout title="About Nextjs.net">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">Contact Us</h1>

      <div className="flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-6">
        <div className="bg-white shadow-lg rounded-xl p-10 mt-6">
          <div className="blog-text mt-2">
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: marked(content) }}
            ></div>
          </div>
        </div>
        <div class="bg-white shadow-lg rounded-xl p-10 mt-6">
          <h4 class="text-center text-3xl p-6">Contact Us</h4>

          <form>
            <div class="grid grid-cols-2 gap-5">
              <input
                type="text"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="First Name"
              />
              <input
                type="text"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500"
                placeholder="Last Name"
              />
              <input
                type="email"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Email"
              />
              <input
                type="text"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Subject"
              />
              <textarea
                cols="10"
                rows="5"
                class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-purple-500 col-span-2"
                placeholder="Write your message..."
              ></textarea>
            </div>
            <input
              type="submit"
              value="Send Message"
              class="focus:outline-none mt-5 bg-gray-900 px-4 py-2 text-white font-bold w-full"
            />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const markdownWithMeta = fs.readFileSync(
    path.join(CONTACT_CONTENT_PATH, "contact.md"),
    "utf-8"
  );
  const MDdata = matter(markdownWithMeta);

  return {
    props: {
      content: MDdata.content,
    },
  };
}
