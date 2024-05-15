import React, { useState } from 'react';
import Structure from '../subComponent/Structure';

function SubModeling(props) {

    const [eyeToggle, setEyeToggle] = useState(0);
    const eyeTab = (index) => {
        setEyeToggle(index);
    }

    const structurLists = [
        { id:1, name: "ROI tools", component: <Structure /> },
        { id:2,  name: "POI tools", component: "SAMPLE 2" },
        { id:3,  name: "Approval", component: "SAMPLE 3" },
        { id:4,  name: "Fusion", component: "SAMPLE 4" },
    ]
    return (
        <div className="planSub">
            <p className="eyeMenus">
                {structurLists.map((structurName, index) => (
                    <span key={structurLists.id} className={eyeToggle === index ? "eyeMenuActive" : ""} onClick={() => eyeTab(index)}>{structurName.name}</span>
                ))}
            </p>
            <ul className="eyeContents">
                {structurLists.map((structurCon, index) => (
                    <li key={structurLists.id} className={eyeToggle === index ? "eyeContentActive" : "eyeLists"}> {structurCon.component}</li>
                ))}
            </ul>
        </div >
    );
};

export default SubModeling;