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
                    <p>
                        { value }
                    </p>
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
                        {skill.value}:
                        { returnListForSkill(skill) }
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
                    <p>I like the build things with Computers.</p>
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
                        -- About Me ----
                    </p>
                    <p className="home-aboutme-text">

                    </p>
                </div>

                <div className="home-skills-list-section">
                    <div className="home-skills-list-text">
                        <p>
                            List of Technologies that I'm skilled / experienced in:
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