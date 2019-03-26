import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;  

`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 640px;
  .banner-img{
    height: 270px;
    width: 625px;
  }
`;

export const HomeRight = styled.div`
  float: right;
  width: 280px;

`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;


export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .brief{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`;

export const Top = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin:30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
`;

export const WriterWrapper = styled.div`
  a {
  cursor: pointer;
  }
`;


export const WriterList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`;

export const WriterListItem = styled.li`
  display: flex;
  flex-direction: row;
  clear: both;
  margin-top: 15px;
  .follow{
    float: right;
    font-size: 13px;
    font-weight: 400;
    color: #42c02e;
  }
  .avatar{
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;    
    }
  }
  
  .name{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
    line-height: 20px;
  }
  
  p{
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }

`;

export const LoadMoreAuthor = styled.a`
    padding: 7px 0;
    width: 98%;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    display: block;
    text-align: center;
`;
