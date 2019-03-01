import styled from 'styled-components';

export const ComposerWrapper = styled.div`
  height: 100%;
  display: flex;
`;


export const DirectoryWrapper = styled.div`
  flex: 1;
  background: #404040;
`;

export const HomeBtn = styled.div`
  box-sizing: border-box;
  padding: 50px 18px 5px;
  text-align: center;
  a{
    display: block;
    font-size: 15px;
    padding: 9px 0;
    color: #ec7259;
    border: 1px solid rgba(236,114,89,.8);
    border-radius: 20px;
  }
`;

export const CreateDirectoryWrapper = styled.form`
    padding: 0 15px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const CreateDirectoryToggle = styled.div`
    color: #f2f2f2;
    box-sizing: border-box;

`;

export const CreateDirectory = styled.form`
  margin-top: 10px;
  height: 85px;
  opacity: 1;
  input{
    width: 98%;
    height: 35px;
    color: #ccc;
    background-color: #595959;
    border: 1px solid #333;
    padding: 4px 6px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 20px;
  }
  
  .submit{
    color: #42c02e;
    border-color: #42c02e;
    position: relative;
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 20px;
    padding: 4px 12px;
    border: 1px solid ;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    background-image: none;
    white-space: nowrap;
    background-color: #404040;

  }
  
  .cancel{
    background-color: #404040;
    margin-left: 8px;
    position: relative;
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 20px;
    padding: 4px 12px;
    border: 1px solid transparent;
    border-radius: 15px;
    font-size: 14px;
    font-weight: 500;
    color: #999;
  }
`;

export const DirectoryList = styled.ul`
  
`;

export const DirectoryItem = styled.li`
    background-color: #666;
    border-left: 3px solid #ec7259;
    position: relative;
    line-height: 40px;
    list-style: none;
    font-size: 15px;
    color: #f2f2f2;
    cursor: pointer;
    padding: 0 15px 0 12px;
`;

export const NewArticleBtn = styled.ul`
    line-height: 20px;
    font-size: 15px;
    font-weight: 400;
    padding: 20px 0 20px 25px;
    cursor: pointer;
    color: #595959;
`;

export const ArticleList = styled.ul`
  
`;

export const ArticleItem = styled.li`
  border-left-color: #ec7259;
  background-color: #e6e6e6;
box-shadow: 0 0 0 1px #d9d9d9;
    border-left: 5px solid ;
    list-style: none;
    line-height: 60px;
    cursor: pointer;
        margin-bottom: 0;
    padding: 15px 10px 15px 60px;  
    box-sizing: border-box;
`;


export const ArticleWrapper = styled.div`
  flex: 1.67;
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