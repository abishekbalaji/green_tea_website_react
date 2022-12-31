import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.scss";
import { useState } from "react";

const INITIAL_STATE = {
  name: "",
  email: "",
};

const Footer = () => {
  const [subscribeState, setSubscribeState] = useState(INITIAL_STATE);

  const { name, email } = subscribeState;
  const handleFormSubmit = (event) => {
    event.preventDefault();

    setSubscribeState(INITIAL_STATE);
    alert("You have to subscribed to our Newsletters!");
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setSubscribeState((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div id="contact" className="footer-container">
      <div className="footer-subscription-container">
        <span className="footer-subscription-title">
          Subscribe to get Awesome Offers
        </span>
        <form className="footer-subscription-form" onSubmit={handleFormSubmit}>
          <FormInput
            label="Full Name"
            type="text"
            value={name}
            name="name"
            onChange={handleOnChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            value={email}
            name="email"
            onChange={handleOnChange}
            required
          />
          <span className="footer-subscription-text">We'll never share your email with anyone.</span>
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
      <div className="footer-social-container">
        <span className="footer-brand">Brand</span>
        <div className="footer-social-icons">
          <FontAwesomeIcon className="footer-social-icon" icon={faFacebook} />
          <FontAwesomeIcon className="footer-social-icon" icon={faTwitter} />
          <FontAwesomeIcon className="footer-social-icon" icon={faEnvelope} />
          <FontAwesomeIcon className="footer-social-icon" icon={faInstagram} />
        </div>
        <span className="footer-copyright-text">© Copyright 2023 Brand Name</span>
      </div>
    </div>
  );
};

export default Footer;
