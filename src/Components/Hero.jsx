import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Welcome to <span className="highlight">MyBlog</span>
                    </h1>
                    <p className="hero-subtitle">
                        Where words come to life and stories find their voice
                    </p>
                    <p className="hero-description">
                        Discover thoughtful articles, inspiring stories, and practical insights
                        about technology, lifestyle, and everything in between.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary">Start Reading</button>
                        <button className="btn-secondary">Explore Topics</button>
                    </div>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <h3>100+</h3>
                            <p>Articles</p>
                        </div>
                        <div className="stat-item">
                            <h3>50+</h3>
                            <p>Authors</p>
                        </div>
                        <div className="stat-item">
                            <h3>1K+</h3>
                            <p>Readers</p>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="image-grid">
                        <div className="grid-item">
                            <img src="https://pbs.twimg.com/media/EVIenv6UcAAS5ST.jpg" alt="" />
                        </div>
                        <div className="grid-item">
                            <img src="https://i.ytimg.com/vi/5ovMIkgUg6Y/hq720.jpg?sqp=-oaymwEXCK4FEIIDSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLCRteozKrQM8CZzXsJsM5_qPAswbA" alt="" />
                        </div>
                        <div className="grid-item">
                            <img src="https://i.ytimg.com/vi/0BLe2OHNtc8/sddefault.jpg" alt="" />
                        </div>
                        <div className="grid-item">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMBSEFTke2ryzPX2MbhZCpVanV6MXh06L62A&s" alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    );
};

export default Hero;