import React, { Component } from 'react';

import {
  HeaderWrapper,
  HeaderContent,
  Logo,
  Write,
  SignUp,
  SignIn,
  Aa,
  Nav,
  NavItem
} from './style';

class Header extends Component {
  render () {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Logo/>
          <Nav>
            <NavItem className="left">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavItem className="left input">
              <input/>8
            </NavItem>
          </Nav>
          <Write>写文章</Write>
          <SignUp>注册</SignUp>
          <SignIn>登录</SignIn>
          <Aa>Aa</Aa>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

export default Header;