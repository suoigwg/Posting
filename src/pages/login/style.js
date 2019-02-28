import styled from 'styled-components';

export const LoginWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 56px;
  background: #eee;
  z-index: 0;
`;

export const LoginBox = styled.div`
  width: 400px;
  height: 220px;
  margin: 80px auto;
  padding-top: 20px;
  background: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,0.1);

`;

export const Input = styled.input`
  display: block;
  height: 30px;
  width: 200px;
  line-height: 30px;
  padding: 0 10px;
  color: #777;
  margin: 10px auto;
`;

export const Button = styled.button`
  display: block;
  height: 30px;
  width: 220px;
  line-height: 30px;
  background: #3194d0;
  border-radius: 15px;
  color: #fff;
  margin: 10px auto;
  text-align: center;
`;