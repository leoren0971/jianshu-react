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
  ArticleTitle,
  ArticleAbstract,
  ArticleLeftWrapper,
  ArticleMeta,
  ArticleMetaJsd,
  ArticleMetaNick,
  ArticleMetaComment,
  ArticleMetaLike,
  ArticleRightWrapper,
  BoardWrapper,
  BoardItem,
  BoardItemImg
} from './style';
import boardItemImg4 from './../../statics/images/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
import boardItemImg3 from './../../statics/images/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png'
import boardItemImg1 from './../../statics/images/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
import boardItemImg2 from './../../statics/images/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'

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
  renderArticleItem() {
    return (
      '123456789'.split('').map((item, index) => {
        return (
          <ArticleItem>
            <ArticleLeftWrapper>
              <ArticleTitle>业障重的人，为什么口味都比较重？</ArticleTitle>
              <ArticleAbstract>人很多时候，会受到业障牵引，而做出错误的判断。比如说，有些明星，喜欢整容，把下巴整的尖尖的。大家都觉得这是美的。按照药师法门讲，下巴是晚年的粮仓</ArticleAbstract>
              <ArticleMeta>
                <ArticleMetaJsd><i className="iconfont">&#xe7b0;</i>3.6</ArticleMetaJsd>
                <ArticleMetaNick>呜哈呜哈</ArticleMetaNick>
                <ArticleMetaComment><i className="iconfont">&#xe6e7;</i>5</ArticleMetaComment>
                <ArticleMetaLike><i className="iconfont">&#xe849;</i>10</ArticleMetaLike>
              </ArticleMeta>
            </ArticleLeftWrapper>
            <ArticleRightWrapper>
              <img src={this.state.bannerList[0]} />
            </ArticleRightWrapper>
          </ArticleItem>
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
              <BannerControl onClick={this.handleClickLeft} className="left-c show-col"><i className="iconfont">&#xe60a;</i></BannerControl>
              <BannerControl onClick={this.handleClickRight} className="right-c show-col"><i className="iconfont">&#xe613;</i></BannerControl>
              <BannerStepWrapper>
                {this.renderBannerStepItem()}
              </BannerStepWrapper>
            </BannerInner>
          </IndexBanner>
          <ArticleWrapper>
            {this.renderArticleItem()}
          </ArticleWrapper>
        </IndexWrapperLeft>
        <IndexWrapperRight>
          <BoardWrapper>
            <BoardItem>
              <BoardItemImg src={boardItemImg1}></BoardItemImg>
            </BoardItem>
            <BoardItem>
              <BoardItemImg src={boardItemImg2}></BoardItemImg>
            </BoardItem>
            <BoardItem>
              <BoardItemImg src={boardItemImg3}></BoardItemImg>
            </BoardItem>
            <BoardItem>
              <BoardItemImg src={boardItemImg4}></BoardItemImg>
            </BoardItem>
          </BoardWrapper>
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