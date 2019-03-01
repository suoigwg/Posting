import React, {Component} from 'react';
import {
    ComposerWrapper,
    ArticleWrapper,
    ArticleItem,
    ArticleList,
    NewArticleBtn,
    DirectoryWrapper,
    CreateDirectory,
    CreateDirectoryWrapper,
    CreateDirectoryToggle,
    DirectoryList,
    DirectoryItem,
    EditorWrapper,
    HomeBtn,
    EditorTitle
} from "./style";
import * as actionCreators from "./store/actionCreators";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import BasicDemo from "./component/Editor"

class Composer extends Component {

    renderCreateDirectory() {
        console.log(this.props.showDir);
        if (this.props.showDir) {
            return (
                <CreateDirectory>
                    <input placeholder='请输入文集名...'/>
                    <button className='submit'>提交</button>
                    <button className='cancel' onClick={() => {
                        this.props.toggleDir(false)
                    }}>取消
                    </button>
                </CreateDirectory>
            );
        }
    }

    render() {
        return (
            <ComposerWrapper>
                <DirectoryWrapper>
                    <HomeBtn><Link to='/'>回首页</Link></HomeBtn>
                    <CreateDirectoryWrapper>
                        <CreateDirectoryToggle onClick={() => {
                            this.props.toggleDir(true)
                        }}><span>+ 新建文集</span></CreateDirectoryToggle>
                        {this.renderCreateDirectory()}
                    </CreateDirectoryWrapper>
                    <DirectoryList>
                        <DirectoryItem>日记本</DirectoryItem>
                        <DirectoryItem>随笔</DirectoryItem>
                    </DirectoryList>
                </DirectoryWrapper>
                <ArticleWrapper>
                    <ArticleList>
                        <NewArticleBtn><span>+ 新建文集</span></NewArticleBtn>
                        <ArticleItem>
                            <span>标题</span>
                        </ArticleItem>
                    </ArticleList>
                </ArticleWrapper>
                <EditorWrapper>
                    <EditorTitle value='无标题文章'/>
                    <BasicDemo/>
                </EditorWrapper>
            </ComposerWrapper>
        )
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        showDir: state.getIn(['composer', 'showCreateDir'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDir(show) {
            dispatch(actionCreators.toggleDirectoryAction(show));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Composer);