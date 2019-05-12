import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
  IndexBanner,
  IndexWrapperLeft,
  IndexWrapperRight,
  IndexWrapper,
  BannerInner,
  BannerItem,
  BannerControl,
  BannerStepWrapper,
  BannerStepItem,
  ArticleWrapper,
  ArticleItem,
  ArticleLeftWrapper,
  ArticleRightWrapper
} from './style';

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerList: [
        'https://upload.jianshu.io/admin_banners/web_images/4653/d63edcaf954eced9ed5f9ad5ed6904f71c04edf4.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        'https://upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540',
        'https://upload.jianshu.io/admin_banners/web_images/4655/e195b16a61ed7f4df07f749db44c65fa912bbd30.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
      ],
      bannerActive: 0,
      direction: 'left'
    }
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickRight = this.handleClickRight.bind(this);
  }
  renderBannerItem() {
    return (
      this.state.bannerList.map((item, index) => {
        return (
          <BannerItem
            key={index}
            className={this.getBannerItemClass(index)}
          >
            <a href={item} target="_blank" rel="noreferrer noopener">
              <img className="banner-img" src={item} alt="" />
            </a>
          </BannerItem>
        )
      })
      
    )
  }

  getBannerItemClass(index) {
    let bClass;
    const bannerListLength = this.state.bannerList.length;
    
    if (this.state.direction === 'left') {
      if (this.state.bannerActive === index) {
        bClass = 'active left';
      } else {
        if (this.state.bannerActive === index - 1) {
          bClass = 'active left-leave';
        } else if (this.state.bannerActive === index + bannerListLength - 1) {
          bClass = 'active left-leave';
        } else {
          bClass = '';
        }
      }
    } else {
      if (this.state.bannerActive === index) {
        bClass = 'active right';
      } else {
        if (this.state.bannerActive === index + 1) {
          bClass = 'active right-leave';
        } else if (this.state.bannerActive === index - bannerListLength + 1) {
          bClass = 'active right-leave';
        } else {
          bClass = '';
        }
      }
    }
    return bClass;
  }
  renderBannerStepItem() {
    return (
      this.state.bannerList.map((item, index) => {
        return (
          <BannerStepItem className={this.state.bannerActive === index ? 'active' : ''}></BannerStepItem>
        )
      })
    )
  }
  render() {
    return (
      <IndexWrapper>
        <IndexWrapperLeft>
          <IndexBanner>
            <BannerInner>
              {this.renderBannerItem()}
              <BannerControl onClick={this.handleClickLeft} className="left-c"><i className="iconfont">&#xe60a;</i></BannerControl>
              <BannerControl onClick={this.handleClickRight} className="right-c"><i className="iconfont">&#xe613;</i></BannerControl>
              <BannerStepWrapper>
                {this.renderBannerStepItem()}
              </BannerStepWrapper>
            </BannerInner>
          </IndexBanner>
          <ArticleWrapper>
            <ArticleItem>
              <ArticleLeftWrapper>
                <a>655657yhtytyytyty7575665657hfyfyhfgffffyfy</a>
                <p className="abstract">y感动的点点滴滴的哈哈哈哈哈哈哈的哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
                <p className="hot-box">
                  <sapn className="hot">2.7</sapn>
                  <span className="name">meizhupeiqi</span>
                  <span className="reword">4</span>
                  <span className="heart">21</span>
                </p>
              </ArticleLeftWrapper>
              <ArticleRightWrapper>
                <img src={this.state.bannerList[0]} />
              </ArticleRightWrapper>
            </ArticleItem>
          </ArticleWrapper>
        </IndexWrapperLeft>
        <IndexWrapperRight>
        </IndexWrapperRight>
      </IndexWrapper>
    )
  }

  handleClickLeft() {
    const bannerListLength = this.state.bannerList.length;
    if (this.state.bannerActive <= 0) {
      this.setState({
        bannerActive: bannerListLength - 1,
        direction: 'left'
      })
    } else {
      this.setState({
        bannerActive: this.state.bannerActive - 1,
        direction: 'left'
      })
    }
  }
  
  handleClickRight() {
    const bannerListLength = this.state.bannerList.length;
    if (this.state.bannerActive >= bannerListLength - 1) {
      this.setState({
        bannerActive: 0,
        direction: 'right'
      })
    } else {
      this.setState({
        bannerActive: this.state.bannerActive + 1,
        direction: 'right'
      })
    }
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);