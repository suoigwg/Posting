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
    constructor(props) {
        super(props);
        this.state = {
            activeArticleIndex: -1,
            activeDirIndex: -1,
            title: '',
            dirName: ''
        };
        this.setActiveArticle = this.setActiveArticle.bind(this);
        this.updateTitle = this.updateTitle.bind(this);

    }


    renderCreateDirectory() {
        if (this.props.showDir) {
            return (
                <CreateDirectory>
                    <input placeholder={this.state.dirName}
                           onChange={(e) => {
                               this.setState(Object.assign({}, this.state, {dirName: e.target.value}))
                           }}/>
                    <button className='submit'
                            onClick={() => {
                                this.props.createNewDir(this.state.dirName);
                                this.props.toggleDir(false);
                            }}>提交
                    </button>
                    <button className='cancel' onClick={() => {
                        this.props.toggleDir(false);
                    }}>取消
                    </button>
                </CreateDirectory>
            );
        }
    }

    setActiveArticle(idx, title) {
        this.setState({
            activeArticleIndex: idx,
            activeDirIndex: this.state.activeDirIndex,
            title
        })
    }

    setActiveDir(idx) {
        this.setState({
            activeArticleIndex: this.state.activeArticleIndex,
            activeDirIndex: idx,
            title: this.state.title
        })
    }

    updateTitle(e) {
        this.setState({
            activeArticleIndex: this.state.activeArticleIndex,
            title: e.target.value
        });
        this.props.updateTitle(this.state.activeArticleIndex, e.target.value);
    }

    render() {
        const {article, directory} = this.props;
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
                        {
                            directory.map((item, idx) => {
                                return <DirectoryItem className={this.state.activeDirIndex === idx ? 'active' : ''}
                                                      onClick={() => {
                                                          this.setActiveDir(idx)
                                                      }}>{item}</DirectoryItem>
                            })
                        }
                    </DirectoryList>
                </DirectoryWrapper>
                <ArticleWrapper>
                    <ArticleList>
                        <NewArticleBtn onClick={this.props.createNewArticle}><span>+ 新建文章</span></NewArticleBtn>
                        {
                            article.map((item, idx) => {
                                return <ArticleItem key={idx}
                                                    className={this.state.activeArticleIndex === idx ? 'active' : ''}
                                                    onClick={() => {
                                                        this.setActiveArticle(idx, item.get('title'))
                                                    }}>{item.get('title')}</ArticleItem>
                            })
                        }
                    </ArticleList>
                </ArticleWrapper>
                <EditorWrapper>
                    <EditorTitle value={this.state.title} onChange={this.updateTitle}/>
                    <BasicDemo/>
                </EditorWrapper>
            </ComposerWrapper>
        )
    }

    componentDidMount() {
        this.props.toggleHeader(true);
    }

    componentWillUnmount() {
        this.props.toggleHeader(false);
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        showDir: state.getIn(['composer', 'showCreateDir']),
        article: state.getIn(['composer', 'article']),
        directory: state.getIn(['composer', 'directory']),

    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleDir(show) {
            dispatch(actionCreators.toggleDirectoryAction(show));
        },
        createNewArticle() {
            dispatch(actionCreators.createArticleAction("新文章", ""));
        },
        updateTitle(activeIndex, title) {
            dispatch(actionCreators.changeTitleAction(activeIndex, title));
        },
        createNewDir(dirName) {
            dispatch(actionCreators.createDirAction(dirName));
        },
        toggleHeader(visibility) {
            dispatch(actionCreators.toggleHeader(visibility));
        }

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Composer);