import React from 'react';
import './Header.css';
import PropTypes from 'prop-types';

function Header({ title }) {
  return (
    <header>
      <nav>
        <div className="logo"/>
      </nav>
      <div className="banner">
        <h2>{title}</h2>
        <p>Get local, fresh, chef-made meals, designed by nutritionists and free from refined sugars, gluten and dairy*.</p>
      </div>
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
