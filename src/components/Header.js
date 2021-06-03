import React, { useState, useEffect } from 'react';
// import menuLinksData from '../components/data/menu_links.json'; // mock data
import { Link } from 'react-router-dom';


const Header = () => {
    const [menuLinksData, setMenuLinksData] = useState([]);

    const loadMenuLinksData = async() => {
        // Query the API Gateway
        const res = await fetch('https://4tnfh7msud.execute-api.us-east-2.amazonaws.com/Production/menulinks');
        let jsonData = await res.json();

        // Assign response data to our state variable
        setMenuLinksData(jsonData);
    }

    useEffect(() => {
        // Load the menu links data from the API Gateway
        loadMenuLinksData();
    }, []);

    return (
        <div className="App-header">
            <nav id="nav">
                <div className="navbar">
                    <ul>
                        {
                            menuLinksData.map((link) => 
                                // <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                                <li className={`icon ${link.class}`}><Link to={link.href}><span>{link.text}</span></Link></li>
                            )
                        }
                        
                        {/* <li><a className="icon projects" href="projects"><span>Projects</span></a></li>
                        <li><a className="icon hobbies" href="hobbies"><span>Hobbies</span></a></li>
                        <li><a className="icon contact" href="contact"><span>Contact</span></a></li> */}
                    </ul>
                </div>
            </nav>
        </div>
        
    );
}

export default Header;