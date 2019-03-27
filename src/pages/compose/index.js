import React, {Component} from 'react';
import {ComposerWrapper, EditorTitle, EditorWrapper} from "./style";
import {connect} from "react-redux";
import Editor from "./component/Editor"
import {Button, message, Modal} from 'antd';
import * as actionCreators from './store/actionCreators'
import axios from 'axios';


const success = () => {
    message.success('This is a message of success');
};

const error = () => {
    message.error('This is a message of error');
};

const warning = () => {
    message.warning('This is message of warning');
};

class Composer extends Component {
    constructor(props) {
        super(props);
    }

    state = {
        ModalText: '文章将被提交',
        visible: false,
        confirmLoading: false,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        this.setState({
            ModalText: '正在保存',
            confirmLoading: true,
        });

        const {title, content, author} = this.props;
        axios.post("http://localhost:8000/article/new", {
            title, content, author
        }).then(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
            message.success("文章已成功保存")
        })
            .catch(() => {
                this.setState({
                    visible: false,
                    confirmLoading: false,
                });
                message.error("文章保存失败,请检查您的网络连接")
            });
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };


    render() {
        const {visible, confirmLoading, ModalText} = this.state;
        return (
            <ComposerWrapper>
                <EditorWrapper>
                    <EditorTitle onChange={(event) => this.props.syncTitle(event.target.value)}/>
                    <div style={{display: 'inline'}}>
                        <Button type="primary" onClick={this.showModal}>
                            保存
                        </Button>
                        <Modal
                            title=""
                            visible={visible}
                            onOk={this.handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={this.handleCancel}
                        >
                            <p>{ModalText}</p>
                        </Modal>
                        <Button type="danger" style={{marginLeft: "10px"}}>放弃更改</Button>

                    </div>
                    <Editor/>
                </EditorWrapper>
            </ComposerWrapper>
        )
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {
        title: state.getIn(['composer', 'title']),
        content: state.getIn(['composer', 'content']),
        author: state.getIn(['login', 'userid'])
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        syncTitle(title) {
            dispatch(actionCreators.changeTitle(title));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Composer);