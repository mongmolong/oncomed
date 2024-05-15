import React from 'react';
import '../../styles/contentsStyle/ModeStyle.css'
import ImgTabs from '../subComponent/ImgTabs';

function Mode2D(props) {
    return (
        <div className="everyimages">
            <div className="leftImage tabs">
                <ImgTabs />
            </div>
            <div className="rightImages">
                <div className="rightImage tabs">
                    <ImgTabs />
                </div>
                <div className="rightBottomImage tabs">
                    <ImgTabs />
                </div>
            </div>
        </div>
    );
}

export default Mode2D;