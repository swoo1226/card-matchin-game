import { MATCH_CARDS_SUCCESS } from '../types';

const INITIAL_STATE = {
  cards: [],
  match: 0
};

export default (state = INITIAL_STATE, { type, payload, error }) => {
  switch (type) {
    case MATCH_CARDS_SUCCESS:
      return {
        ...state,
        cards: payload
      };
    default:
      return state;
  }
};
