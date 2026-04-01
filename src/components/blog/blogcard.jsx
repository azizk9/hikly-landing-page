function BlogCard({ post, buttonText = "Read More →" }) {
  return (
    <article className="blog-card">
      <div className="blog-image-wrap">
        <img src={post.image} alt={post.title} />
        <span className="blog-category">{post.category}</span>
      </div>

      <div className="blog-content">
        <span className="blog-date">{post.date}</span>
        <h3>{post.title}</h3>
        <p>{post.description}</p>

        <button className="blog-btn" type="button">
          {buttonText}
        </button>
      </div>
    </article>
  );
}

export default BlogCard;