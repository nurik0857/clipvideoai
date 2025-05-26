import React from 'react';
import { Navbar } from './components/Navbar';
import { SignUp } from './components/SignUp';
import './styles/main.css';

function App() {
    return (
        <>
            <Navbar />
            <div className="hero">
                <div className="hero-content">
                    <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem',
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '0.5rem 1rem',
                        borderRadius: '2rem',
                        marginBottom: '2rem'
                    }}>
                        <span style={{ fontSize: '1.2rem' }}>✨</span>
                        New: Advanced AI video editing features
                    </div>
                    <h1 className="headline">
                        Transform your videos with AI
                    </h1>
                    <p className="subheadline">
                        Professional video editing made simple. Upload your video and let AI do the magic.
                    </p>
                    <SignUp />
                </div>
            </div>
        </>
    );
}

export default App; 