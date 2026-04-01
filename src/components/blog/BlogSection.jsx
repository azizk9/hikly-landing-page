import "./blogs.css";
import BlogCard from "./BlogCard";

function BlogSection({ data }) {
  if (!data) return null;

  return (
    <section className="blog-section">
      <div className="blog-container">
        <div className="section-header">
          <span className="section-kicker">{data.subtitle}</span>
          <h2 className="section-title">{data.title}</h2>
          <p className="section-description">{data.description}</p>
        </div>

        <div className="blog-grid">
          {data.posts?.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              buttonText={data.buttonText || "Open Article →"}
            />
          ))}
        </div>

        <div className="blog-footer">
          <button className="btn-primary" type="button">
            {data.footerButtonText || "View All Articles →"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;