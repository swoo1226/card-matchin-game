import { MATCH_CARDS, MATCH_CARDS_SUCCESS, MATCH_CARDS_FAIL } from '../types';

//뒤집힌 카드 두 장이 같은지 확인
export const matchCards = () => ({
  type: MATCH_CARDS
});

//뒤집힌 카드 두 장이 같은 경우
export const matchCardsSuccess = cards => ({
  type: MATCH_CARDS_SUCCESS,
  payload: cards
});

//뒤집힌 카드 두 장이 다른 경우
export const matchCardsFail = error => ({
  type: MATCH_CARDS_FAIL,
  error
});
