import React, { useState } from 'react';
import  EyeModeling from '../subComponent/EyeModeling';
import '../../styles/SubModelingStyle.css';

function SubStructure(props) {

    const [eyeToggle, setEyeToggle] = useState(1);
    const eyeTab = (index) => {
        setEyeToggle(index);
    }

    return (
        <div className="planSub">
            <p className="eyeMenus">
                <span  key={1} className={eyeToggle === 1 ? "eyeMenuActive" : ""} onClick={() => eyeTab(1)}>Eye modeling</span>
                <span  key={2} className={eyeToggle === 2 ? "eyeMenuActive" : ""} onClick={() => eyeTab(2)}>Fundus view</span>
                <span  key={3} className={eyeToggle === 3 ? "eyeMenuActive" : ""} onClick={() => eyeTab(3)}>Visualization</span>
            </p>
            <ul className="eyeContents">
                <li key={1} className={eyeToggle === 1 ? "eyeContentActive" : "eyeLists"}>
                    <EyeModeling />
                </li>
                <li key={2} className={eyeToggle === 2 ? "eyeContentActive" : "eyeLists"}>SAMPLE 2</li>
                <li key={3} className={eyeToggle === 3 ? "eyeContentActive" : "eyeLists"}>SAMPLE 3</li>
            </ul>
        </div >
    );
};

export default SubStructure;