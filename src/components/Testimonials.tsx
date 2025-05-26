import React from 'react';

interface Testimonial {
    name: string;
    role: string;
    image: string;
    text: string;
}

export function Testimonials() {
    const testimonials: Testimonial[] = [
        {
            name: "Sarah Johnson",
            role: "Content Creator",
            image: "https://i.pravatar.cc/150?img=1",
            text: "This platform revolutionized my video editing workflow! The AI-powered tools save me hours of work, and the results are consistently professional."
        },
        {
            name: "Mike Chen",
            role: "Marketing Director",
            image: "https://i.pravatar.cc/150?img=2",
            text: "We've been using this for our company's social media content. The automated editing features and cloud storage make team collaboration seamless."
        },
        {
            name: "Emma Davis",
            role: "Social Media Manager",
            image: "https://i.pravatar.cc/150?img=3",
            text: "The ease of use combined with professional-grade features is exactly what we needed. Our video content quality has improved significantly!"
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">What Our Users Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="testimonial-header">
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    className="profile-img"
                                    loading="lazy"
                                />
                                <div className="testimonial-info">
                                    <h3>{testimonial.name}</h3>
                                    <p className="role">{testimonial.role}</p>
                                </div>
                            </div>
                            <p className="testimonial-text">"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 