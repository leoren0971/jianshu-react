import styled from 'styled-components';

export const IndexWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding: 30px 15px 0;
`;
export const IndexWrapperLeft = styled.div`
  width: 66%;
`;
export const IndexWrapperRight = styled.div`
  width: 34%;
`;
export const IndexBanner = styled.div`
  margin-bottom: 35px;
  border-radius: 6px;
  overflow: hidden;
`
export const BannerInner = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;
export const BannerItem = styled.div`
  position: relative;
  display: none;

  .banner-img {
    width: 100%;
    height: 270px;
    background-color: hsla(0, 0, 71%, .2);
    transition: left 6s ease-in-out;
  }
  &.active {
    display: block;
  }
  &.left {
    animation-name: left;
    animation-duration: ${props => props.duration || 1}s;
    animation-fill-mode: forwards;
  }
  &.left-leave {
    animation-name: left-leave;
    animation-duration: ${props => props.duration || 1}s;
    animation-fill-mode: forwards;
    position: absolute;
    top: 0;
    left: 0;
  }
  &.right {
    animation-name: right;
    animation-duration: ${props => props.duration || 1}s;
    animation-fill-mode: forwards;
  }
  &.right-leave {
    animation-name: right-leave;
    animation-duration: ${props => props.duration || 1}s;
    animation-fill-mode: forwards;
    position: absolute;
    top: 0;
    left: 0;
  }
  @keyframes left {
    from {
      transform: translate(100%, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes left-leave {
    from {
      transform: translate(0%, 0);
    }
    to {
      transform: translate(-100%, 0);
    }
  }
  @keyframes right {
    from {
      transform: translate(-100%, 0);
    }
    to {
      transform: translate(0, 0);
    }
  }
  @keyframes right-leave {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(100%, 0);
    }
  }

`;
export const BannerControl = styled.div`
  width: 40px;
  height: 50px;
  background-color: rgba(0, 0, 0, .4);
  position: absolute;
  top: 40%;
  line-height: 50px;
  text-align: center;

  &.left-c {
    left: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
  }
  &.right-c {
    right: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
  }
`;
export const BannerStepWrapper = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
`;
export const BannerStepItem = styled.div`
  width: 30px;
  height: 2px;
  background-color: #cccccc;
  margin-left: 5px;

  &div:first-child {
    margin-left: 0;
  }
  &.active {
    background-color: #ffffff;
  }
`;

export const ArticleWrapper = styled.div`
  margin-top: 20px;
`
export const ArticleItem = styled.li`
  border-bottom: 1px solid #f0f0f0;
  padding: 15px 2px 20px 0;
  margin: 0 0 15px;
  position: relative;
  width: 100%;
  min-height: 100px;
`
export const ArticleLeftWrapper = styled.div`
  padding-right: 165px;

  >a {
    margin: -7px 0 4px;
    display: inherit;
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  .abstract {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
  .hot-box {
    font-size: 12px;
    line-height: 20px;
    font-weight: 400;

    .hot {
      color: #ea6f5a;
      margin-right: 10px;
    }
    .name, >span {
      color: #b4b4b4;
      margin-right: 10px;
    }
  }
`
export const ArticleRightWrapper = styled.a`
  width: 150px;
  height: 100px;
  position: absolute;
  top: 0; bottom: 0;
  right: 0;
  margin: auto 0;

  >img {
    width: 100%;
    height: 100%;
  }
`