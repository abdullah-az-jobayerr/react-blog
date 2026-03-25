import React, { useState, useEffect } from 'react';

const MainFooter = () => {
    const currentYear = new Date().getFullYear();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowBackToTop(true);
            } else {
                setShowBackToTop(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const quickLinks = [
        { name: 'Home', url: '/' },
        { name: 'About Us', url: '/about' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact', url: '/contact' },
        { name: 'Privacy Policy', url: '/privacy' }
    ];

    const categories = [
        { name: 'Technology', url: '/category/technology' },
        { name: 'Lifestyle', url: '/category/lifestyle' },
        { name: 'Photography', url: '/category/photography' },
        { name: 'Programming', url: '/category/programming' },
        { name: 'Wellness', url: '/category/wellness' }
    ];

    const socialLinks = [
        { name: 'Twitter', icon: '𝕏', url: 'https://twitter.com' },
        { name: 'Facebook', icon: 'f', url: 'https://facebook.com' },
        { name: 'Instagram', icon: '📷', url: 'https://instagram.com' },
        { name: 'GitHub', icon: '⌨️', url: 'https://github.com' },
        { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com' }
    ];

    return (
        <footer className="main-footer">
            <div className="footer-container">
                <div className="footer-newsletter">
                    <div className="newsletter-content">
                        <h3 className="newsletter-title">
                            Subscribe to our <span className="highlight">Newsletter</span>
                        </h3>
                        <p className="newsletter-text">
                            Get the latest posts delivered straight to your inbox
                        </p>
                    </div>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            className="newsletter-input"
                            required
                        />
                        <button type="submit" className="newsletter-btn">
                            Subscribe
                        </button>
                    </form>
                </div>

                <div className="footer-main">
                    <div className="footer-section about-section">
                        <h2 className="footer-logo">
                            My<span>Blog</span>
                        </h2>
                        <p className="footer-description">
                            A minimal black & white blog sharing thoughts, stories,
                            and ideas about technology, lifestyle, and creativity.
                        </p>
                        <div className="footer-contact">
                            <p>
                                <span className="contact-icon">📧</span>
                                hello@myblog.com
                            </p>
                            <p>
                                <span className="contact-icon">📞</span>
                                +1 234 567 890
                            </p>
                            <p>
                                <span className="contact-icon">📍</span>
                                Dhaka, Bangladesh
                            </p>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url} className="footer-link">
                                        <span className="link-arrow">→</span>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Categories</h3>
                        <ul className="footer-links">
                            {categories.map((category, index) => (
                                <li key={index}>
                                    <a href={category.url} className="footer-link">
                                        <span className="link-arrow">→</span>
                                        {category.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h3 className="footer-title">Follow Us</h3>
                        <div className="social-links">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.url}
                                    className="social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span className="social-icon">{social.icon}</span>
                                    <span className="social-name">{social.name}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>© {currentYear} MyBlog. All rights reserved.</p>
                    </div>
                    <div className="footer-bottom-links">
                        <a href="/terms">Terms of Use</a>
                        <span className="separator">|</span>
                        <a href="/privacy">Privacy Policy</a>
                        <span className="separator">|</span>
                        <a href="/cookies">Cookie Policy</a>
                    </div>
                </div>
            </div>

            {showBackToTop && (
                <button
                    className="back-to-top"
                    onClick={scrollToTop}
                    aria-label="Back to top"
                >
                    ↑
                </button>
            )}
        </footer>
    );
};

export default MainFooter;