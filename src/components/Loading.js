import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loading.css';

function Loading({ handleClick }) {
  return (
    <section className={styles.Loading}>
      <button onClick={handleClick}>Load More Quotes</button>
    </section>
  );
}

Loading.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Loading;
