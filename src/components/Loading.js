import React from 'react';
import PropTypes from 'prop-types';

function Loading({ handleClick }) {
  return <button onClick={handleClick}>Load More Quotes</button>;
}

Loading.propTypes = {
  handleClick: PropTypes.func.isRequired
};

export default Loading;
