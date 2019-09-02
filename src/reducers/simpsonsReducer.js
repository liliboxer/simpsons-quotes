import { FETCH_QUOTES, FETCH_QUOTES_LOADING } from '../actions/simpsonsActions';

const initialState = {
  quotes: [],
  loading: false
};

export default function simpsonsReducer(state = initialState, action) {
  switch(action.type) {
    case 'PENDING': 
      return { ...state, loading: true };
    case FETCH_QUOTES_LOADING:
      return { ...state, loading: true };
    case FETCH_QUOTES:
      return { ...state, quotes: action.payload, loading: false };
    default: 
      return state;
  }
}
