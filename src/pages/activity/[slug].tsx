import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import fs from "fs";
import Layout from "@/common/layout";
import Up from "@/common/up";
import { format, parseISO } from "date-fns";

const ActivityDetail = (props: any) => {
  const post = props.post;
  return (
    <div>
      <Layout>
        <Up />
        <div className="pt-10 container mx-auto px-4 sm:px-4 md:px-4 lg:px-0">
          <div className="rounded-2xl flex justify-center">
            <div
              className="relative w-full lg:w-3/5 h-64 flex justify-center items-center rounded-2xl"
              style={{
                backgroundImage: `url(${post.images})`,
              }}
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-2xl" />
              <div className="z-10 text-center text-white">
                <h1 className="text-2xl font-semibold md:text-2xl lg:text-3xl text-slate-600">
                  {post.title}
                </h1>
                <p className="text-slate-400 mt-2 pt-2">
                  {format(parseISO(post.date), "MMMM dd, yyyy")}
                </p>
              </div>
            </div>
          </div>
          {/* content 2 */}
          <div className="lg:flex lg:justify-center">
            <article className="prose">
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const { slug } = context.query;
  const folder = "./posts"; // Use relative path
  const file = `${folder}/${slug}.md`;

  try {
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    const contentString = matterResult.content.toString();

    const serializablePost = {
      title: matterResult.data.title,
      date: matterResult.data.date,
      images: matterResult.data.image,
      content: contentString,
    };

    return {
      props: {
        post: serializablePost,
      },
    };
  } catch (error) {
    console.error("Error reading file:", error);
    return {
      notFound: true,
    };
  }
}

export default ActivityDetail;
