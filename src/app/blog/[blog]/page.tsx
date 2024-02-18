import type { Metadata, ResolvingMetadata } from "next";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getBlogMetadata from "../components/getBlogMetadata";

type Props = {
  params: { blog: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Metadata {
  // read route params
  const { blog } = params;
  const { REACT_APP_USER } = process.env;
  const { data } = getBlogContent(blog);

  return {
    title: `${REACT_APP_USER} - ${data.title}`,
    description: data.subtitle,
  };
}

const getBlogContent = (blog: string) => {
  const folder = "blogs/";
  const file = `${folder}${blog}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const blogs = getBlogMetadata();
  return blogs.map((blog) => ({
    blog: blog.blog,
  }));
};

const BlogPage = ({ params, searchParams }: Props) => {
  const blog = params.blog;
  const content = getBlogContent(blog);

  return (
    <div>
      <div className="my-12 text-center">
        <h1 className="text-2xl text-slate-600 ">{content.data.title}</h1>
        <p className="text-slate-400 mt-2">{content.data.date}</p>
      </div>

      <article className="prose">
        <Markdown>{content.content}</Markdown>
      </article>
    </div>
  );
};

export default BlogPage;
