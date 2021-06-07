import React, { useState, useEffect } from 'react';
// import menuLinksData from '../components/data/menu_links.json'; // mock data
import { Link } from 'react-router-dom';
import './style/Header.css';


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

    function returnMenuLinks() {
        if (!menuLinksData) {
            return (
                <div>
                    <p>Loading data!</p>
                </div>
            )
        }
            
        const linkList = new Array(4);
        for (var i = 1; i <= menuLinksData.length; i++) {
            let link = menuLinksData.find(_link => _link.id === i);
            linkList[i-1] = link;
        }
        return (
            <div> 
                <nav className="nav">
                    <div className="navbar">
                        <ul className="nav-links">
                            {
                                linkList.map((link) =>
                                    <Link to={link.href}>
                                        <li className={`icon btn ${link.class}`}>
                                            {link.text}
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </li>
                                    </Link>
                                )
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

    return (
        <div className="header-main">
            <div className="header-title">
                <h1>  Validone</h1>
                { returnMenuLinks() }
            </div>
        </div>
    );
}

export default Header;