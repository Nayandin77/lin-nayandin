import React from 'react';
import menuLinksData from '../components/data/menu_links.json';

const Header = () => {

    return (
        <div className="App-header">
            <nav id="nav">
                <div className="navbar">
                    <ul>
                        {
                            menuLinksData.map((link) => 
                                <li><a className={`icon ${link.class}`} href={link.href}><span>{link.text}</span></a></li>
                            )
                        }
                        
                        {/* <li><a className="icon projects" href="#projects"><span>Projects</span></a></li>
                        <li><a className="icon hobbies" href="#hobbies"><span>Hobbies</span></a></li>
                        <li><a className="icon contact" href="#contact"><span>Contact</span></a></li> */}
                    </ul>
                </div>
            </nav>
        </div>
        
    );
}

export default Header;