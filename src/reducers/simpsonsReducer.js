import { FETCH_QUOTE } from '../actions/simpsonsActions';

const initialState = {
  quote: '',
  loading: false,
  error: null
};

export default function simpsonsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTE:
      return { ...state, quote: action.payload };
    default: 
      return state;
  }
}
