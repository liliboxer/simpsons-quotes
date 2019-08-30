import { FETCH_QUOTES } from '../actions/simpsonsActions';

const initialState = {
  quotes: [],
  loading: false,
  error: null
};

export default function simpsonsReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_QUOTES:
      return { ...state, quotes: action.payload };
    default: 
      return state;
  }
}
