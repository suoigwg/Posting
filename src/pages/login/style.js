import styled from 'styled-components';
import LogoPic from '../../statics/imgs/logo_big.png';

export const LogoWrapper = styled.div`
  position: absolute;
  top: 56px;
  margin-left: 50px;
`;

export const Logo = styled.a`
  display: block;
  background-size: contain ;
  background: url(${LogoPic});
`;



export const LoginWrapper = styled.div`
  background: #eee;
  z-index: 0;
  height: 100%;  
  width: 100%;  
  text-align: center;
`;

export const LoginBox = styled.div`
    width: 400px;
    margin: 108px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    text-align: center;

`;

export const LabelWrapper = styled.h4`
  margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    color: #969696;
`;

export const Label = styled.a`
      font-size: 18px;
      line-height: 1.1;
      padding: 10px;
`;

export const Input = styled.input`
  display: block;
  height: 50px;
  width: 100%;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
  font-size: 14px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
`;

export const Button = styled.button`
    margin-top: 20px;
    width: 100%;
    padding: 9px 18px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    color: #fff;
    cursor: pointer;
    outline: none;
    clear: both;
    background: #3194d0;
`;

export const LoginForm = styled.form`
   text-align: center;
   display: block;
`;

export const CenterDiv = styled.div`
  text-align: center;
`;

export const Remember = styled.div`
   float: left;
   span{
       margin-left: 5px;
    font-size: 15px;
    color: #969696;
    vertical-align: middle;
   }
`;