import { GoogleOAuthProvider } from '@react-oauth/google';

function VideoUpload() {
    const handleDrop = (e) => {
        e.preventDefault();
        // Handle file drop
    };

    return (
        <div className="upload-section">
            <h3>Upload Your Video</h3>
            <div 
                className="upload-area"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <i className="fas fa-cloud-upload-alt fa-3x"></i>
                <p>Drag and drop your video here or click to browse</p>
            </div>
            <p>OR</p>
            <input 
                type="text" 
                className="url-input" 
                placeholder="Paste your video URL here"
            />
            <p className="subheadline">Upload your video or paste a link, then specify the edits you want.</p>
        </div>
    );
}

function Features() {
    const features = [
        { icon: "fas fa-upload", title: "Fast and Easy Upload", description: "Simple drag & drop interface" },
        { icon: "fas fa-edit", title: "Professional Editing Options", description: "Advanced editing tools" },
        { icon: "fas fa-dollar-sign", title: "Affordable Pricing", description: "Plans for every budget" },
        { icon: "fas fa-cloud", title: "Secure Cloud Storage", description: "Your videos are safe with us" }
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

function Pricing() {
    const plans = [
        {
            name: "Basic",
            price: "$9.99",
            features: ["Single edit", "720p Export", "Basic Effects", "24h Support"]
        },
        {
            name: "Pro",
            price: "$19.99",
            features: ["Multiple edits", "4K Export", "Advanced Effects", "Priority Support"]
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: ["Unlimited edits", "8K Export", "Custom Effects", "24/7 Support"]
        }
    ];

    return (
        <section className="pricing">
            <div className="container">
                <h2 className="section-title">Choose Your Plan</h2>
                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <div key={index} className="pricing-card">
                            <h3>{plan.name}</h3>
                            <div className="price">{plan.price}</div>
                            <ul>
                                {plan.features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                            <button className="cta-button">Select Plan</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "Content Creator",
            image: "https://i.pravatar.cc/150?img=1",
            text: "This platform made video editing so much easier for my YouTube channel!"
        },
        {
            name: "Mike Chen",
            role: "Marketing Director",
            image: "https://i.pravatar.cc/150?img=2",
            text: "The automated editing features save us hours of work every week."
        },
        {
            name: "Emma Davis",
            role: "Social Media Manager",
            image: "https://i.pravatar.cc/150?img=3",
            text: "Professional results without the learning curve. Exactly what we needed!"
        }
    ];

    return (
        <section className="testimonials">
            <div className="container">
                <h2 className="section-title">What Our Users Say</h2>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <img src={testimonial.image} alt={testimonial.name} className="profile-img" />
                            <h3>{testimonial.name}</h3>
                            <p className="role">{testimonial.role}</p>
                            <p>"{testimonial.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Footer() {
    return (
        <footer className="footer">
            <div className="container footer-grid">
                <div>
                    <h3>Contact Us</h3>
                    <p>Email: support@clipvideoai.org</p>
                    <div className="social-links">
                        <a href="#!" onClick={(e) => e.preventDefault()}><i className="fab fa-twitter"></i></a>
                        <a href="#!" onClick={(e) => e.preventDefault()}><i className="fab fa-facebook"></i></a>
                        <a href="#!" onClick={(e) => e.preventDefault()}><i className="fab fa-instagram"></i></a>
                        <a href="#!" onClick={(e) => e.preventDefault()}><i className="fab fa-youtube"></i></a>
                    </div>
                </div>
                <div>
                    <h3>Legal</h3>
                    <p><a href="#!" onClick={(e) => e.preventDefault()}>Privacy Policy</a></p>
                    <p><a href="#!" onClick={(e) => e.preventDefault()}>Terms of Service</a></p>
                </div>
            </div>
        </footer>
    );
}

function App() {
    return (
        <>
            <div className="hero">
                <div className="hero-content">
                    <h1 className="headline">
                        Transform Your Videos with AI-Powered Editing
                    </h1>
                    <p className="subheadline">
                        Upload your video or paste a link to get professional edits instantly. Powered by advanced AI technology.
                    </p>
                    
                    <VideoUpload />
                </div>
            </div>
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log('Google Client ID from env:', process.env.REACT_APP_GOOGLE_CLIENT_ID);
root.render(
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <App />
    </GoogleOAuthProvider>
); 