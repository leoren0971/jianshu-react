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
  constructor (props) {
    super(props);
    this.state = {
      isFoucus: false
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  render () {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Logo/>
          <Nav>
            <NavItem className="left main">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavItem className={this.state.isFoucus ? 'left input input-active': 'left input'}>
              <input
                onFocus={this.handleInputFocus}
                onBlur={this.handleInputBlur}
              /><span className="search">8</span>
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

  handleInputFocus () {
    this.setState(() => ({
      isFoucus: true
    }))
  }

  handleInputBlur () {
    this.setState(() => ({
      isFoucus: false
    }))
  }
}

export default Header;