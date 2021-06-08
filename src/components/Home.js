import React from 'react';
import './style/Layout.css';
import './style/Home.css';

const Home = () => {

    return (
        <div className="home-container">
            <div className="item-home-a">
                <div className="home-intro-text">
                    <p>Hello, my name is</p>
                </div>
                <div className="home-name-text">
                    <p>Dennis Nayandin</p>
                    <p>(alias Validone)</p>
                </div>
                <div className="home-webpage-text">
                    <p>I like the build things with Computers.</p> {/* place emoji here */}
                </div>
                <div className="home-paragraph-text">
                    <p>I'm a Virginia-based software engineer who specializes in building and designing full-stack
                        web applications. I'm CoFounder and CTO of my company Cyber Validone LLC, we specialize in
                        building mobile applications.
                    </p>
                </div>
            </div>
        </div>
        
    );
}

export default Home;