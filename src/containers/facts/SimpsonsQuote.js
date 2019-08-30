import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSimpsonsQuotes } from '../../selectors/simpsonsSelectors';
import { fetchQuotes } from '../../actions/simpsonsActions';
import Quotes from '../../components/Quotes';

class SimpsonsQuote extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { quotes } = this.props;
    return <Quotes quotes={quotes}/>;
  }
  
}

const mapStateToProps = state => ({ 
  quotes: getSimpsonsQuotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
