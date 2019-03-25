import styled from 'styled-components';

export const ComposerWrapper = styled.div`
    height: 100%;  
    width: 100%;  
    position: absolute;  
    top: 60px;  
    bottom: 0px;  
    display: flex;
`;


export const EditorWrapper = styled.div`
  flex: 3.33;
`;

export const EditorTitle = styled.input`
    width: 100%;
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