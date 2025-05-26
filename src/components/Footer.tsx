import React from 'react';

export function Footer() {
    const socialLinks = [
        { icon: "fab fa-twitter", url: "https://twitter.com/videoeditor" },
        { icon: "fab fa-facebook", url: "https://facebook.com/videoeditor" },
        { icon: "fab fa-instagram", url: "https://instagram.com/videoeditor" },
        { icon: "fab fa-youtube", url: "https://youtube.com/videoeditor" }
    ];

    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: support@videoeditor.com</p>
                    <div className="social-links">
                        {socialLinks.map((link, index) => (
                            <a 
                                key={index} 
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visit our ${link.icon.split('-')[2]} page`}
                            >
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Company</h3>
                    <p><a href="/about">About Us</a></p>
                    <p><a href="/careers">Careers</a></p>
                    <p><a href="/blog">Blog</a></p>
                </div>
                <div className="footer-section">
                    <h3>Legal</h3>
                    <p><a href="/privacy">Privacy Policy</a></p>
                    <p><a href="/terms">Terms of Service</a></p>
                    <p><a href="/gdpr">GDPR Compliance</a></p>
                </div>
                <div className="footer-section">
                    <h3>Resources</h3>
                    <p><a href="/help">Help Center</a></p>
                    <p><a href="/api">API Documentation</a></p>
                    <p><a href="/status">System Status</a></p>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Video Editor. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
} 