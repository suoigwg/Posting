import React, {Component} from 'react';
import {ComposerWrapper, EditorTitle, EditorWrapper} from "./style";
import {connect} from "react-redux";
import BasicDemo from "./component/Editor"

class Composer extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <ComposerWrapper>
                <EditorWrapper>
                    <EditorTitle/>
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