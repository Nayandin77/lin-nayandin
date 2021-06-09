import React from 'react';
import './style/Layout.css';
import './style/Home.css';
import emoji from '../images/emoji-face.png';


const Home = () => {

    return (
        <div className="home-container">
            <div className="item-home-b"></div>
            <div className="item-home-a">
                <div className="home-intro-text">
                    <p>Hello, my name is</p>
                </div>
                <div className="home-name-text">
                    <p className="home-name-text-a">Dennis Nayandin</p>
                    <p className="home-name-text-b">(alias Validone)</p>
                </div>
                <div className="home-webpage-text">
                    <p>I like the build things with Computers.</p>
                </div>
                <div className="home-paragraph-text">
                    <p>I'm a Virginia-based software engineer who's experienced in building and designing full-stack
                        web / mobile applications and application software. I'm CoFounder and CTO of my company 
                        <a className="home-link" href="https://specudate.com">Cyber Validone LLC</a>, we specialize in
                        building a variety of applications (web, mobile, software).
                    </p>
                </div>
            </div>
            <div className="item-home-c"></div>
        </div>
        
    );
}

export default Home;