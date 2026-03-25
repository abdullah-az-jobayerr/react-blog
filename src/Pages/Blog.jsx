import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    console.log(data);


    return (
        <div>
            <section className="featured-posts">
                <div className="card-design">
                    {
                        data.map(item => {
                            return (
                                <>
                                    <div key={item.id} className="featured-container">
                                        <div className="blog-grid">
                                            <article className="post-card">
                                                <div className="post-image">
                                                    <img src={item.image} alt="Post title" />
                                                    <span className="post-category">{item.category}</span>
                                                </div>

                                                <div className="post-content">
                                                    <h3 className="post-title">
                                                        <a href="/post/1">{item.title.slice(0,20)}</a>
                                                    </h3>

                                                    <p className="post-excerpt">
                                                       {item.description.slice (0,20)}
                                                    </p>

                                                    <div className="post-footer">
                                                        <div className="post-author">
                                                            <div className="author-avatar">J</div>
                                                            <span>John Doe</span>
                                                        </div>
                                                        <button className="read-more-btn">
                                                            Read More →
                                                        </button>
                                                    </div>
                                                </div>
                                            </article>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </section>
        </div>
    );
};

export default Blog;