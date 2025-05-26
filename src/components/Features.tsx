import React from 'react';

interface Feature {
    icon: string;
    title: string;
    description: string;
}

export function Features() {
    const features: Feature[] = [
        { 
            icon: "fas fa-upload", 
            title: "Fast and Easy Upload", 
            description: "Simple drag & drop interface for quick video uploads" 
        },
        { 
            icon: "fas fa-edit", 
            title: "Professional Editing Options", 
            description: "Advanced AI-powered editing tools for professional results" 
        },
        { 
            icon: "fas fa-dollar-sign", 
            title: "Affordable Pricing", 
            description: "Flexible plans to suit every budget and need" 
        },
        { 
            icon: "fas fa-cloud", 
            title: "Secure Cloud Storage", 
            description: "Your videos are safely stored and backed up in the cloud" 
        }
    ];

    return (
        <section className="features">
            <div className="container">
                <h2 className="section-title">Features</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card">
                            <i className={`${feature.icon} fa-2x`}></i>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 