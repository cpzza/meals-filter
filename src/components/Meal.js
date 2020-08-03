import React from 'react';
import PropTypes from 'prop-types';

function Meal({ meal }) {
  const { title, chef, img } = meal;
  return (
    <ul className="meal">
      <li>
        <img src={img} style={{ width: '70%' }} alt="meal-pic"/>
      </li>
      <li style={{
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'Super Grotesk Pro Bold'
      }}>
        {title}
      </li>
      <li>by {chef}</li>
    </ul>
  );
}

Meal.propTypes = {
  meal: PropTypes.object.isRequired
};

export default Meal;
