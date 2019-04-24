import * as actionTypes from './constants';
import axios from 'axios';

export const searchFocus  = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur  = (isShow) => ({
  type: actionTypes.SEARCH_BLUR,
  isShow
});

export const updataSearchHotList = (hotList) => ({
  type: actionTypes.REFRESH_HOT_SEARCH,
  hotList
});

export const updateShowSearchHotList = (showList) => ({
  type: actionTypes.CHANGE_HOT_SEARCH,
  showList
});

export const getList = () => {
  return (dispatch, getState) => {
    let list = getState().getIn(['header', 'list']);
    if (list.length > 0) return;
    axios.get('http://127.0.0.1:9090/headerList.json').then(res => {
      let list = res.data.data;
      let action1 = updataSearchHotList(list);
      dispatch(action1);
      let action2 = changeList();
      dispatch(action2);
    }).catch(err => {
      console.log(err)
    })
  }
}

export const changeList = () => {
  return (dispatch, getState) => {
    let list = getState().getIn(['header', 'list']);
    let showList = getState().getIn(['header', 'showList']);
    let action;
    console.log(list.length)
    console.log(showList)
    if (showList.length === 0 || showList.size === 0) {
      action = updateShowSearchHotList(list.slice(0, 20));
    } else {
      let lastIndex = list.findIndex(value => value === showList[showList.length - 1]);
      console.log(lastIndex)
      if (lastIndex >= list.length - 1) {
        action = updateShowSearchHotList(list.slice(0, 20));
      } else {
        if (lastIndex + 21 <= list.length) {
          action = updateShowSearchHotList(list.slice(lastIndex, lastIndex + 20));
        } else {
          action = updateShowSearchHotList(list.slice(lastIndex));
        }
      }
    }
    dispatch(action);
  }
}