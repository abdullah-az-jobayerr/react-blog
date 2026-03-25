import React from 'react';

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Getting Started with React in 2024",
      excerpt: "Learn the fundamentals of React and build your first application with this comprehensive guide...",
      author: "John Doe",
      date: "Mar 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500"
    },
    {
      id: 2,
      title: "The Art of Minimalist Living",
      excerpt: "Discover how simplifying your life can lead to more happiness, productivity, and peace of mind...",
      author: "Jane Smith",
      date: "Mar 12, 2024",
      readTime: "7 min read",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?w=500"
    },
    {
      id: 3,
      title: "Mastering Black & White Photography",
      excerpt: "Tips and techniques for creating stunning monochrome images that tell powerful stories...",
      author: "Mike Johnson",
      date: "Mar 10, 2024",
      readTime: "6 min read",
      category: "Photography",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500"
    },
    {
      id: 4,
      title: "Writing Clean Code: Best Practices",
      excerpt: "Essential principles for writing maintainable, readable, and efficient code in any language...",
      author: "Sarah Wilson",
      date: "Mar 8, 2024",
      readTime: "8 min read",
      category: "Programming",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500"
    },
    {
      id: 5,
      title: "Mindfulness in Digital Age",
      excerpt: "How to stay focused and present while navigating through our technology-driven world...",
      author: "Alex Chen",
      date: "Mar 5, 2024",
      readTime: "4 min read",
      category: "Wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500"
    },
    {
      id: 6,
      title: "Future of Web Development",
      excerpt: "Exploring upcoming trends and technologies that will shape the future of web development...",
      author: "Lisa Brown",
      date: "Mar 3, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500"
    }
  ];

  return (
    <section className="featured-posts">
      <div className="featured-container">
        <div className="section-header">
          <h2 className="section-title">
            Featured <span className="highlight">Posts</span>
          </h2>
          <p className="section-subtitle">
            Hand-picked articles for your reading pleasure
          </p>
        </div>

        <div className="posts-grid">
          {featuredPosts.map(post => (
            <article key={post.id} className="post-card">
              <div className="post-image">
                <img src={post.image} alt={post.title} />
                <span className="post-category">{post.category}</span>
              </div>

              <div className="post-content">
                <div className="post-meta">
                  <span className="post-date">{post.date}</span>
                  <span className="post-read-time">{post.readTime}</span>
                </div>

                <h3 className="post-title">
                  <a href={`/post/${post.id}`}>{post.title}</a>
                </h3>

                <p className="post-excerpt">{post.excerpt}</p>

                <div className="post-footer">
                  <div className="post-author">
                    <div className="author-avatar">
                      {post.author.charAt(0)}
                    </div>
                    <span>{post.author}</span>
                  </div>
                  <button className="read-more-btn">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="view-all">
          <button className="btn-view-all">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;