import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

function Footer({ name }) {
  return (
    <footer>
      <img className="logoIcon" src="https://territory-assets.s3.amazonaws.com/logos/territory-pin-logo.png" alt="logo"/>
      <div className="footerCopy">
        <p className="company-name">{name}</p>
        <a href="#tos">
        Terms and Conditions
        </a>
        <a href="#pp">
        Privacy Policy
        </a>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  name: PropTypes.string.isRequired
};
export default Footer;
