import * as actionTypes from './constants';
import axios from 'axios';

export const searchFocus  = () => ({
  type: actionTypes.SEARCH_FOCUS
});

export const searchBlur  = () => ({
  type: actionTypes.SEARCH_BLUR
});

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then(res => {

    }).catch(err => {
      console.log(err)
    })
  }
}
export const refreshHotsearch = () => ({
  type: actionTypes.REFRESH_HOT_SEARCH
})