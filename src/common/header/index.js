import React, { Component } from 'react';
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
  NavItem,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style';
class Header extends Component {

  getSearchInfoBox = (props) => {
    if (props.isFoucus) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch><i className="iconfont">&#xe73c;</i>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList className="search-info-item-wrap">
            <SearchInfoItem>666</SearchInfoItem>
            <SearchInfoItem>666</SearchInfoItem>
            <SearchInfoItem>666</SearchInfoItem>
            <SearchInfoItem>666</SearchInfoItem>
            <SearchInfoItem>666</SearchInfoItem>
            <SearchInfoItem>666</SearchInfoItem>
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null;
    }
  }

  render() {
    return (
      <HeaderWrapper>
        <HeaderContent>
          <Logo/>
          <Nav>
            <NavItem className="left main">首页</NavItem>
            <NavItem className="left">下载APP</NavItem>
            <NavItem className={this.props.isFoucus ? 'left input input-active': 'left input input-leave'}>
              <input
                onFocus={this.props.handleInputFocus}
                onBlur={this.props.handleInputBlur}
                placeholder="搜索"
              />
              <span className="search"><i className="iconfont">&#xe73c;</i></span>
              {this.getSearchInfoBox(this.props)}
            </NavItem>
          </Nav>
          <Write className="write"><i className="iconfont">&#xe670;</i>写文章</Write>
          <SignUp className="signup">注册</SignUp>
          <SignIn>登录</SignIn>
          <Aa><i className="iconfont">&#xe636;</i></Aa>
        </HeaderContent>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFoucus: state.getIn(['header', 'isFoucus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus () {
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur () {
      dispatch(actionCreators.searchBlur());
    },
    handleRefreshHotSearch () {
      dispatch(actionCreators.refreshHotsearch());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);