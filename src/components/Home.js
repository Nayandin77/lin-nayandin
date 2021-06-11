import React, { useState, useEffect } from 'react';
import './style/Layout.css';
import './style/Home.css';


const Home = () => {
    const [skillsListData, setSkillsListData] = useState([]);

    const loadSkillsListData = async() => {
        // Query the API Gateway
        const res = await fetch('https://4tnfh7msud.execute-api.us-east-2.amazonaws.com/Production/skillslist');
        let jsonData = await res.json();

        // Assign response data to our state variable
        setSkillsListData(jsonData);
    }

    useEffect(() => {
        // Load the menu links data from the API Gateway
        loadSkillsListData();
    }, []);

    function returnListForSkill(skill) {
        // Return the List per Skill    
        return (
            <div className="skill-container">
            {
                skill.skills.map((value) => 
                    <li>{ value }</li>
                )
            }
            </div>
        )
    }

    function returnSkillsList() {
        if (!skillsListData) {
            return (
                <div>
                    <p>Loading data!</p>
                </div>
            )
        }
            
        const skillsList = new Array(skillsListData.length);
        for (var i = 1; i <= skillsListData.length; i++) {
            let skill = skillsListData.find(_skill => _skill.id === i);
            // console.log(skill);
            skillsList[i-1] = skill;
        }

        return (
            <div className="home-skills-container">
            {
                skillsList.map((skill) =>
                    <p>
                        {skill.value}
                        <ul>
                            { returnListForSkill(skill) }
                        </ul>
                            
                    </p>
                )
            }
            </div>
        )
    }

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

                <div className="home-description-text">
                    <p>I like to build things with Computers.</p>
                </div>

                <div className="home-paragraph-text">
                    <p>I'm a Virginia-based software engineer who's experienced in building and designing full-stack
                        web / mobile applications and application software. I'm CoFounder and CTO of my company 
                        <a className="home-link" href="https://specudate.com"> Cyber Validone LLC</a>, we specialize in
                        building a variety of applications (web, mobile, software).
                    </p>
                </div>

                <div className="home-aboutme-container">
                    <p className="home-aboutme-title">
                        <span>About Me</span>
                    </p>
                    <div className="home-aboutme-text">
                        <p>
                            Hi! I'm Dennis and I've been programming since 2015. My initial spike 
                            of interest in computer science occured in 2017. I struggled my first two years
                            in college due to lack of understanding logic. One day, I overcame
                            that obstacle and I was motivated and inspired to learn. I spent months on 
                            <a href="https://www.udemy.com"> Udemy</a> and <a href="https://www.linkedin.com/learning">LinkedIn Learning </a> 
                            where I would learn many different modern frameworks, 
                            and began building websites, mobile applications, video games, and software applications.
                        </p>
                        <br></br>
                        <p>
                            In 2019, a friend came to me with this idea for a mobile dating application. At the time
                            I had never built a full-stack application before, only built small projects where I would
                            practice a particular framework. Ever since then we have made our own company, designed and built a full-stack 
                            dating application, called <a href="https://specudate.com">SpecUdate</a>!
                        </p>
                    </div>
                    
                </div>

                <div className="home-skills-list-container">
                    <div className="home-skills-list-text">
                        <p>
                            <span>Skills:</span>
                        </p>
                    </div>
                    { returnSkillsList() }
                </div>
                
            </div>

            <div className="item-home-c"></div>

        </div>
        
    );
}

export default Home;