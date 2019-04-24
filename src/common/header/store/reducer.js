import * as actionTypes from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  isFoucus: false,
  list: [],
  showList: []
});

export default (state = defaultState, action) => {
  if (action.type === actionTypes.SEARCH_FOCUS) {
    // immutable 对象的set方法，会结合之前immutable对象的值，和设置的值，返回一个全新的对象
    return state.set('isFoucus', true);
  }
  if (action.type === actionTypes.SEARCH_BLUR) {
    return state.set('isFoucus', false);
  }
  if (action.type === actionTypes.REFRESH_HOT_SEARCH) {
    return state.set('list', action.hotList);
  }
  if (action.type === actionTypes.CHANGE_HOT_SEARCH) {
    return state.set('showList', action.showList);
  }
  return state;
}