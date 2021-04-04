import React from "react";
import "./Contact.css";
import PropTypes from "prop-types";

function Contact(props) {
  return (
    <figure className="Contact">
      <img src={props.avatar} alt={props.name} className="avatar" />
      <figcaption>
        <div className="name">{props.name}</div>
        <div className="status">
          <span className={props.online ? "status-online" : "status-offline"} />
          <span>{props.online ? "Online" : "Offline"}</span>
        </div>
      </figcaption>
    </figure>
  );
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  online: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired
};
export default Contact;
