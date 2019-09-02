import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

function Quote({ characterName, quote, characterImage }) {
  return (
    <section className={styles.Quote}>
      <h4>{characterName}</h4>
      <p>{quote}</p>
      <img src={characterImage}></img>
    </section>
  );

}

Quote.propTypes = {
  characterName: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  characterImage: PropTypes.string.isRequired
};

export default Quote;

