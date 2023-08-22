import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import fs from "fs";
import Layout from "@/common/layout";
import Up from "@/common/up";

import DetailPage from "@/components/activity/detail/detailpage";

const ActivityDetail = (props: any) => {
  const post = props.post;

  return (
    <div>
      <Layout>
        <Up />
        <DetailPage
          slug={post.slug}
          title={post.title}
          image={post.images}
          date={post.date}
          company={post.company}
          content={post.content}
        />
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
      company: matterResult.data.company,
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
