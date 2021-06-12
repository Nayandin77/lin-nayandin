import React from 'react';
import './style/Layout.css';
import './style/Contact.css';


const Contact = () => {

    return (
        <div className="contact-container">
            <div className="item-contact-b"></div>

            <div className="item-contact-a">
                <div className="contact-title">
                    <p><span>Contact Me</span></p>
                </div>
                <div className="contact-info">
                    <p className="contact-email">
                        Email: <a href="">dnayandin@gmail.com</a>
                    </p>
                    <p className="contact-phone">
                        Mobile: +1 (703)389-3015
                    </p>
                </div>

                <div className="contact-social-media-container">
                    <p>Social Media</p>

                    <div className="contact-social-media">
                        <i>Github</i>
                        <i>LinkedIn</i>
                        <i>Facebook</i>
                        <i>Instagram</i>
                    </div>
                </div>

                <div className="contact-donate-container">
                    <p className="contact-donate-title">Want to Donate?</p>  

                    <p className="contact-donate-list">
                        BTC: -add address-
                    </p>
                </div>

            </div>

            <div className="item-contact-c"></div>
        </div>

    );
}

export default Contact;