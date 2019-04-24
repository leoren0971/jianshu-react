import styled from 'styled-components';

import logPic from './../../statics/images/nav-logo.png';

export const HeaderWrapper = styled.header`
  background-color: #ffffff;
  border-bottom: 1px solid #f0f0f0;
`
export const HeaderContent = styled.div`
  min-width: 960px;
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
  background-color: rgba(236,97,73,.7);
  font-size: 15px;
  line-height: 24px;
  margin: 8px 15px 0;
  text-align: center;
  color: #ffffff;
  padding: 6px 12px;
  box-sizing: border-box;
  
  &.write:hover {
    background-color: rgba(236,97,73, 1);
  }
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
  color: rgba(236,97,73,.7);
  border: 1px solid rgba(236,97,73,.7);
  padding: 6px 12px;
  box-sizing: border-box;

  &.signup:hover {
    background-color: rgba(236,97,73,.05);
  }
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
    color: rgba(236,97,73,.7);
  }
  &.input {
    height: 38px;
    background-color: #ededed;
    margin-top: 9px; 
    border-radius: 20px;
    box-sizing: border-box;
    padding: 0 30px 0 20px;
    position: relative;
    transform-origin: 0 50% 0;
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
      transition-duration: .5s;
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
      transition-duration: .5s;
      transition-timing-function: ease-in-out;
    }
  }
  &.input-active {
    >input {
      width: 300px;
    }

    .search {
      background-color: #d0d0d0;
    }
  }
  &.input-leave {
    >input {
      width: 200px;
    }

    .search {
      background-color: transparent;
    }
  }
  
`

export const SearchInfo = styled.div`
  width: 240px;
  padding: 20px 10px 10px;
  background-color: #ffffff;
  border-radius: 3px 3px 0 0;
  box-shadow: 0 0 8px rgba(0, 0, 0, .2);
  position: absolute;
  left: 0;
  top: 48px;
  box-sizing: content-box;
  &.hidden {
    visibility: hidden;
  }
  &.visable {
    visibility: visible;
  }
  &:hover {
    visibility: visible !important;
  }
`;

export const SearchInfoTitle = styled.div`
  margin-bottom: 15px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
`;

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
`;

export const SearchInfoList = styled.div`
  overflow: hidden;
`;

export const SearchInfoItem = styled.a`
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
  margin: 10px 10px 0 0;
  display: inline-block;
`

