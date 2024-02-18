import BlogPreview from "./components/BlogPreview";
import getBlogMetadata from "./components/getBlogMetadata";

const HomePage = () => {
  const blogMetadata = getBlogMetadata();
  const blogPreviews = blogMetadata.map((blog) => (
    <BlogPreview key={blog.blog} {...blog} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{blogPreviews}</div>
  );
};

export default HomePage;
