import React, { useState } from 'react';
import '../../styles/contentsStyle/ModeStyle.css';

function ImgTabs(props) {
    const [tabToggle, setTabToggle] = useState(1);
    const setTabToggleOn = (index) => {
        setTabToggle(index);
    }
    return (
        <>
            <ul>
                <li className={tabToggle === 1 ? "ImgTabActive" : ""} onClick={() => setTabToggleOn(1)}>2D | Image</li>
                <li className={tabToggle === 2 ? "ImgTabActive" : ""} onClick={() => setTabToggleOn(2)}>3D | Image</li>
            </ul>
            <div className="bodyState">
                <p className={tabToggle === 1 ? "bodyOn" : ""}>2D 이미지입니다.</p>
                <p className={tabToggle === 2 ? "bodyOn" : ""}>3D 이미지입니다.</p>
            </div>
        </>
    );
}

export default ImgTabs;