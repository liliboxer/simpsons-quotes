import React from 'react';
import PropTypes from 'prop-types';
import Quote from './Quote';

function Quotes({ quotes }) {
  const quoteList = quotes.map((quote, i) => (
    <li key={i}>
      <Quote 
        characterName={quote.characterName} 
        quote={quote.quote} 
        characterImage={quote.characterImage}
      />
    </li>
  ));

  return <ul>{quoteList}</ul>;
}

Quotes.propTypes = {
  quotes: PropTypes.arrayOf(PropTypes.shape({
    characterName: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    characterImage: PropTypes.string.isRequired
  })).isRequired
};

export default Quotes;
