import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header className="hero">
                <h1>Welcome to Aero Trading</h1>
                <p>Your journey to smarter trading starts here.</p>
                <button className="cta-button">Get Started</button>
            </header>
            <section className="features">
                <h2>Features</h2>
                <div className="feature-highlight">
                    <h3>Real-Time Market Data</h3>
                    <p>Stay updated with real-time data from global markets.</p>
                    <button className="cta-button">Learn More</button>
                </div>
                <div className="feature-highlight">
                    <h3>Advanced Analytics</h3>
                    <p>Utilize advanced analytics to enhance your trading strategies.</p>
                    <button className="cta-button">Explore Now</button>
                </div>
                <div className="feature-highlight">
                    <h3>User-Friendly Interface</h3>
                    <p>Experience a clean and intuitive interface that makes trading a breeze.</p>
                    <button className="cta-button">View Demo</button>
                </div>
            </section>
        </div>
    );
};

export default HomePage;