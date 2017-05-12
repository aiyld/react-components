import React, { Component } from 'react';
import {PropTypes} from "prop-types";
import "./circleButton.less";

/**
 * A circle button, which can set button img
 * 有按钮的输入框
 */
export default class CircleButton extends Component {

    render(){
        let {src, showDefaultImg, className,
             text} = this.props;
        if(showDefaultImg){
            src = require("../img/white_search.png");
        }

        return <a className={"ld ld-circlebutton "+className}>
            <img className=""/>{text}
        </a>
    }
}

CircleButton.propTypes = {
    text: PropTypes.string,                        //文本输入 Button text
    showDefaultImg: PropTypes.bool,                //显示默认的图标 Indicate if need to show default img
    className: PropTypes.string,                   //样式 css class name
    src: PropTypes.oneOfType([                     //图片路径 Button img src
        PropTypes.string,
        PropTypes.object,
    ]),
}

CircleButton.defaultProps = {
    text: "",
    src: "",
    className: "",
    showDefaultImg: false,
}
