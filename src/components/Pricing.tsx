import React from 'react';

interface PricingPlan {
    name: string;
    price: string;
    features: string[];
}

export function Pricing() {
    const plans: PricingPlan[] = [
        {
            name: "Basic",
            price: "$9.99",
            features: [
                "Single video edit per month",
                "720p Export Quality",
                "Basic Effects & Transitions",
                "24h Support Response",
                "5GB Cloud Storage"
            ]
        },
        {
            name: "Pro",
            price: "$19.99",
            features: [
                "Unlimited video edits",
                "4K Export Quality",
                "Advanced Effects & Transitions",
                "Priority Support",
                "50GB Cloud Storage",
                "Custom Branding"
            ]
        },
        {
            name: "Enterprise",
            price: "Custom",
            features: [
                "Unlimited video edits",
                "8K Export Quality",
                "Premium Effects & Transitions",
                "24/7 Dedicated Support",
                "500GB Cloud Storage",
                "Custom Branding",
                "API Access"
            ]
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
                                    <li key={i}>
                                        <i className="fas fa-check"></i>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="cta-button">
                                {plan.name === "Enterprise" ? "Contact Sales" : "Select Plan"}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 