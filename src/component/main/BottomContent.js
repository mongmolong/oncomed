import React from 'react';
import LeftSlide from '../contents/LeftSlide';
import Mode2D from '../contents/Mode2D';
import '../../styles/contentsStyle/BottomStyle.css'

function BottomContent(props) {
    return (
        <div className="bottomContainer">
            <LeftSlide />
            <div className="bottomImages">
                <Mode2D />
            </div>
        </div>
    );
}

export default BottomContent;
