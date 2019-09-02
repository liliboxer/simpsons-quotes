import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSimpsonsQuotes, getSimpsonsLoading } from '../../selectors/simpsonsSelectors';
import { fetchQuotes } from '../../actions/simpsonsActions';
import Quotes from '../../components/Quotes';
import Loading from '../../components/Loading';

class SimpsonsQuote extends Component {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { quotes, loading, fetch } = this.props;
    if(loading) return <h1>LOADING</h1>;
    return (
      <>
        <Loading handleClick={fetch}/>
        <Quotes quotes={quotes}/>
      </>
    );
  }
}

const mapStateToProps = state => ({ 
  quotes: getSimpsonsQuotes(state),
  loading: getSimpsonsLoading(state)
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
