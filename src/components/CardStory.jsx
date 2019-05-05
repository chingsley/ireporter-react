/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const defaultText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, facere at. Deserunt, accusantium tempora similique veniam sed sapiente consequatur adipisci asperiores ratione illo molestiae animi, voluptate quam ipsa dignissimos aliquid?';
const CardStory = ({ src, title, text }) => (
  <div className="card">
    <div className="card__img-container">
      <img src={src} alt="Smiley face" className="card__img" />
    </div>
    <div className="card__text-container">
      <p>
        <h2><Link className="link-on-black" to="/">{title}</Link></h2>
        {text}
      </p>
    </div>
  </div>
);

CardStory.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};

CardStory.defaultProps = {
  text: defaultText,
};

export default CardStory;
