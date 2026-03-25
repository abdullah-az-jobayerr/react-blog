import React from 'react';

const About = () => {
    return (
        <div>
            <section className="about-section">
                <div className="about-container">
                    <div className="about-grid">
                        <div className="about-content">
                            <h2 className="about-title">
                                About <span className="highlight">MyBlog</span>
                            </h2>
                            <p className="about-description">
                                MyBlog is a minimal black & white space where we share thoughtful
                                articles about technology, lifestyle, photography, and wellness.
                                Started in 2020, we believe in quality content over quantity.
                            </p>

                            <div className="about-stats">
                                <div className="stat-item">
                                    <h3>200+</h3>
                                    <p>Articles</p>
                                </div>
                                <div className="stat-item">
                                    <h3>50K+</h3>
                                    <p>Readers</p>
                                </div>
                                <div className="stat-item">
                                    <h3>4+</h3>
                                    <p>Years</p>
                                </div>
                            </div>

                            <div className="about-features">
                                <div className="feature">
                                    <span className="feature-icon">✍️</span>
                                    <div className="feature-text">
                                        <h4>Quality Writing</h4>
                                        <p>Handcrafted articles by passionate writers</p>
                                    </div>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">🎯</span>
                                    <div className="feature-text">
                                        <h4>Minimal Design</h4>
                                        <p>Clean, distraction-free reading experience</p>
                                    </div>
                                </div>
                                <div className="feature">
                                    <span className="feature-icon">🌍</span>
                                    <div className="feature-text">
                                        <h4>Global Community</h4>
                                        <p>Readers from 50+ countries</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="about-quote">
                            <div className="quote-box">
                                <p className="quote-text">
                                    "Writing is the painting of the voice, and we're here to create masterpieces."
                                </p>
                                <div className="quote-author">
                                    <span className="author-line"></span>
                                    <p>- Founders of MyBlog</p>
                                </div>
                            </div>
                            <div className="quote-pattern"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;