import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isFoucus: false
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('isFoucus', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('isFoucus', false);
  }
  return state;
}