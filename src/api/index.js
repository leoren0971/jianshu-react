import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://127.0.0.1:9090'
});

export const getHotSearchList = function () {
  return instance.get('/headerList.json');
}