import React from 'react';
import PropTypes from 'prop-types';

function Quote({ characterName, quote, characterImage }) {
  return (
    <>
      <h4>{characterName}</h4>
      <p>{quote}</p>
      <img src={characterImage}></img>
    </>
  );

}

Quote.propTypes = {
  characterName: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};

export default Quote;

