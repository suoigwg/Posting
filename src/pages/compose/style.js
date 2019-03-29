import styled from 'styled-components';

export const ComposerWrapper = styled.div`
    margin: 5px auto;
    max-width: 960px; 
    border: 1px solid grey;
    display: flex;
`;


export const EditorWrapper = styled.div`
    width: 100%;
`;

export const EditorTitle = styled.input.attrs(
    {placeholder: '请输入标题'}
)`
    width: 640px;
    padding: 0 80px 10px 40px;
    margin-bottom: 0;
    border: none;
    font-size: 30px;
    font-weight: 400;
    line-height: 30px;
    box-shadow: none;
    color: #595959;
    background-color: transparent;
    outline: none;
    border-radius: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const ButtonWrapper = styled.div`
  float:right;
  display: flex;
  justify-content: space-around;
`;
