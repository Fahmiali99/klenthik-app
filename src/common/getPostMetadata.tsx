import matter from "gray-matter";
import fs from "fs";
export function getPostMetadata() {
  const path = require("path");
  const folder = path.join(process.cwd(), "/posts");
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file: any) => file.endsWith(".md"));
  const slugs = markdownPosts.map((fileName: any) => {
    const fileContents = fs.readFileSync(path.join(folder, fileName), "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      image: matterResult.data.image,
      date: matterResult.data.date,
      company: matterResult.data.company,
      slug: fileName.replace(".md", ""),
    };
  });

  return slugs;
}
