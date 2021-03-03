import React from 'react';
import "./Contact.css";

function Contact(value) {
    return (
        <figure className="Contact">
            <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Clara Hopkins" className="avatar"/>
            <figcaption>
                <div className="name">Clara Hopkins</div>
                <div className="status">
                    <span className={value.isConnected ? "status-online" : "status-offline"}/>
                    <span>{value.isConnected ? "Online" : "Offline"}</span>
                </div>
            </figcaption>
        </figure>
    );
}

export default Contact;