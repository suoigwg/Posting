import React, {Component} from 'react';
import {ComposerWrapper, EditorTitle, EditorWrapper} from "./style";
import {connect} from "react-redux";
import BasicDemo from "./component/Editor"
import {Button} from 'antd';

class Composer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ComposerWrapper>
                <EditorWrapper>
                    <EditorTitle/>
                    <Button type="primary">保存</Button>
                    <Button type="danger" style={{marginLeft: "10px"}}>放弃更改</Button>
                    <BasicDemo/>
                </EditorWrapper>
            </ComposerWrapper>
        )
    }

}


const mapStateToProps = (state /*, ownProps*/) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(Composer);