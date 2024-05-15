import React, { useState } from 'react';
import SubSelect from '../SubSelect';
import SubProton from '../subComponent/SubProton';
import '../../styles/SubMenusStyle.css'; //서브메뉴 공통

function PlanDesign(props) {
    const [toggle2, setToggle2] = useState(1);
    const toggleTab2 = (index) => {
        setToggle2(index);
    }
    const tabNames = [
        "Virtual simulation",
        "Plan setup",
        "3D-CRT beam design",
        "Electron beam design",
        "Proton beam design",
        "Brachy planning"
    ];

    const subNames = [
        "1번입니다",
        "2번입니다",
        "3번입니다",
        "4번입니다",
        <SubProton />,
        "6번입니다",
    ]
    return (
        <>
            <div className="subMenus">
                <div>
                    {tabNames.map((tabName, index) => (
                        <p key={index} className={toggle2 === index + 1 ? "subConOn" : "mainTab"}
                            onClick={() => toggleTab2(index + 1)}>{tabName}</p>
                    ))}
                </div>
            </div>
            <SubSelect />
            <ul className="subContent">
                {subNames.map((subName, index) => (
                    <li key={index} className={toggle2 === index + 1 ? "subConActive" : "subConTab"} >{subName}</li>
                ))}
            </ul>
        </>
    );
}

export default PlanDesign;