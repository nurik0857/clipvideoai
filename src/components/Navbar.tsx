import React from 'react';

export function Navbar() {
    return (
        <nav className="navbar">
            <a href="https://videoai.app" className="logo">
                <img 
                    src="/logo.svg" 
                    alt="Video AI Logo"
                    style={{ width: '24px', height: '24px' }}
                />
                Video AI
            </a>
            <div className="nav-links">
                <a href="https://videoai.app/features">Features</a>
                <a href="https://videoai.app/pricing">Pricing</a>
                <a href="https://videoai.app/templates">Templates</a>
                <a href="https://videoai.app/blog">Blog</a>
                <a href="https://videoai.app/updates">Updates</a>
            </div>
            <div className="auth-buttons">
                <button className="btn btn-outline" onClick={() => window.location.href = 'https://videoai.app/login'}>Login</button>
                <button className="btn btn-primary" onClick={() => window.location.href = 'https://videoai.app/signup'}>Start editing</button>
            </div>
        </nav>
    );
} 