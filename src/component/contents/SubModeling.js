import React, { useState } from 'react';
import  EyeModeling from '../subComponent/EyeModeling';
import '../../styles/SubModelingStyle.css';

function SubModeling(props) {

    const [eyeToggle, setEyeToggle] = useState(1);
    const eyeTab = (index) => {
        setEyeToggle(index);
    }

    return (
        <div className="planSub">
            <p className="eyeMenus">
                <span className={eyeToggle === 1 ? "eyeMenuActive" : ""} onClick={() => eyeTab(1)}>Eye modeling</span>
                <span className={eyeToggle === 2 ? "eyeMenuActive" : ""} onClick={() => eyeTab(2)}>Fundus view</span>
                <span className={eyeToggle === 3 ? "eyeMenuActive" : ""} onClick={() => eyeTab(3)}>Visualization</span>
            </p>
            <ul className="eyeContents">
                <li className={eyeToggle === 1 ? "eyeContentActive" : "eyeLists"}>
                    <EyeModeling />
                </li>
                <li className={eyeToggle === 2 ? "eyeContentActive" : "eyeLists"}>SAMPLE 2</li>
                <li className={eyeToggle === 3 ? "eyeContentActive" : "eyeLists"}>SAMPLE 3</li>
            </ul>
        </div >
    );
};

export default SubModeling;