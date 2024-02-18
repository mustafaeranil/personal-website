import fs from "fs";
import matter from "gray-matter";
import { BlogMetadata } from "./BlogMetadata";

const getBlogMetadata = (): BlogMetadata[] => {
  const folder = "blogs/";
  const files = fs.readdirSync(folder);
  const markdownBlogs = files.filter((file) => file.endsWith(".md"));
  const blogs = markdownBlogs.map((fileName) => {
    const fileContents = fs.readFileSync(`blogs/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      blog: fileName.replace(".md", ""),
    };
  });

  return blogs;
};

export default getBlogMetadata;
