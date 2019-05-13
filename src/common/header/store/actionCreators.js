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
      // test
      let list = ["区块链","小程序","vue","毕业","PHP","故事","flutter","理财","美食","投稿","手帐","书法","PPT","穿搭","打碗碗花","简书","姥姥的澎湖湾","设计","创业","交友","籽盐","教育","思维导图","疯哥哥","梅西","时间管理","golang","连载","自律","职场","考研","慢世人","悦欣","一纸vr","spring","eos","足球","程序员","林露含","彩铅","金融","木风杂谈","日更","成长","外婆是方言","docker"]
      let action1 = updataSearchHotList(list);
      dispatch(action1);
      let action2 = changeList();
      dispatch(action2);
    })
  }
}

export const changeList = () => {
  let stepHeight = 10;
  return (dispatch, getState) => {
    let list = getState().getIn(['header', 'list']);
    let showList = getState().getIn(['header', 'showList']);
    let action;
    if (showList.length === 0 || showList.size === 0) {
      action = updateShowSearchHotList(list.slice(0, stepHeight));
    } else {
      let lastIndex = list.findIndex(value => value === showList[showList.length - 1]);
      if (lastIndex >= list.length - 1) {
        action = updateShowSearchHotList(list.slice(0, stepHeight));
      } else {
        if ((lastIndex + stepHeight + 1) <= list.length) {
          action = updateShowSearchHotList(list.slice(lastIndex, lastIndex + stepHeight));
        } else {
          action = updateShowSearchHotList(list.slice(lastIndex));
        }
      }
    }
    dispatch(action);
  }
}