import styled from 'styled-components';

import logPic from './../../statics/images/nav-logo.png';

export const HeaderWrapper = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`
export const HeaderContent = styled.div`
  min-width: 768px;
  max-width: 1440px;
  height: 56px;
  margin: 0 auto;
`
export const Logo = styled.a.attrs({
  href: '/'
})`
  float: left;
  height: 56px;
  width: 100px;
  background-image: url(${logPic});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const Write = styled.a`
  float: right;
  height: 40px;
  width: 100px;
  border-radius: 20px;
  background-color: #ea6f5a;
  font-size: 15px;
  line-height: 24px;
  margin: 8px 15px 0;
  text-align: center;
  color: #ffffff;
  padding: 6px 12px;
  box-sizing: border-box;
`
export const SignUp = styled.a`
  float: right;
  height: 38px;
  width: 80px;
  border-radius: 20px;
  background-color: transparent;
  font-size: 15px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  text-align: center;
  color: #ea6f5a;
  border: 1px solid #ea6f5a;
  padding: 6px 12px;
  box-sizing: border-box;
`
export const SignIn = styled.a`
  float: right;
  height: 38px;
  width: 60px;
  border-radius: 20px;
  background-color: transparent;
  font-size: 15px;
  line-height: 24px;
  margin: 9px 5px 0 5px;
  text-align: center;
  color: #969696;
  padding: 6px 5px;
  box-sizing: border-box;
`
export const Aa = styled.a`
  float: right;
  height: 38px;
  width: 40px;
  border-radius: 20px;
  background-color: transparent;
  font-size: 15px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  text-align: center;
  color: #969696;
  padding: 6px 5px;
  box-sizing: border-box;
`
export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
`
export const NavItem = styled.div`
  font-size: 17px;
  margin: 13px 5px 0 15px;
  padding: 6px 5px;
  &.left {
    float: left;
  }
  &.right {
    float: right;
  }
  &.main {
    color: #ea6f5a;
  }
  &.input {
    height: 38px;
    width: 250px;
    background-color: #ededed;
    margin-top: 9px; 
    border-radius: 20px;
    box-sizing: border-box;
    padding: 8px 10px;
    position: relative;

    >input {
      border-width: 0;
      outline: none;
      height: 100%;
      width: 200px;
      margin-top: -1px;
      margin-right: 5px;
      background-color: transparent;
      font-size: 16px;
      color: #000000;
    }
    .search {
      width: 30px;
      height: 30px;
      border-radius: 100%;
      text-align: center;
      line-height: 30px;
      display: inline-block;
      position: absolute;
      top: 4px;
      right: 6px;
    }
  }
  &.input-active {
    width: 300px;
    transition-timing-function: ease-in-out;
    transition-duration: .5s;

    .search {
      background-color: #d0d0d0;
    }
  }
  
`