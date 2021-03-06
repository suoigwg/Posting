import 'braft-editor/dist/index.css'
import React from 'react'
import BraftEditor from 'braft-editor'
import {connect} from "react-redux";
import * as actionCreators from '../store/actionCreators'

class Editor extends React.Component {

    state = {
        editorState: BraftEditor.createEditorState(''), // 设置编辑器初始内容
        outputHTML: '<p></p>'
    };

    componentDidMount() {
        this.isLivinig = true;
        // 3秒后更改编辑器内容
        setTimeout(this.setEditorContentAsync, 3000)
    }

    componentWillUnmount() {
        this.isLivinig = false
    }

    handleChange = (editorState) => {
        this.setState({
            editorState: editorState,
            outputHTML: editorState.toHTML()
        });
        this.props.syncContent(editorState.toHTML());
    };

    setEditorContentAsync = () => {
        this.isLivinig && this.setState({
            editorState: BraftEditor.createEditorState('')
        })
    };


    render() {

        const {editorState} = this.state;

        return (
            <div>
                <div className="editor-wrapper">
                    <BraftEditor
                        value={editorState}
                        onChange={this.handleChange}
                    />
                </div>
                {/*<h5>输出内容</h5>*/}
                {/*<div className="output-content">{outputHTML}</div>*/}
            </div>
        )

    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        syncContent(content) {
            dispatch(actionCreators.changeContent(content));
        }
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Editor);