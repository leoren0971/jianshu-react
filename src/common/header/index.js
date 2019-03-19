import React from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

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
const Header = (props) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <Logo/>
        <Nav>
          <NavItem className="left main">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className={props.isFoucus ? 'left input input-active': 'left input input-leave'}>
            <input
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
              placeholder="搜索"
            />
            <span className="search"><i className="iconfont">&#xe73c;</i></span>
          </NavItem>
        </Nav>
        <Write><i className="iconfont">&#xe670;</i>写文章</Write>
        <SignUp>注册</SignUp>
        <SignIn>登录</SignIn>
        <Aa><i className="iconfont">&#xe636;</i></Aa>
      </HeaderContent>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    isFoucus: state.get('header').get('isFoucus')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);