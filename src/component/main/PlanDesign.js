import React, { useState } from 'react';
// import SubPlan from '../subComponent/SubPlan';
import SubSelect from '../SubSelect';
import SubProton from '../subComponent/SubProton';
import '../../styles/SubMenusStyle.css'; //서브메뉴 공통

function PlanDesign(props) {
    const [toggle2, setToggle2] = useState(1);
    const toggleTab2 = (index) => {
        setToggle2(index);
    }
    return (
        <>
            <div className="subMenus">
                <div>
                    <p className={toggle2 === 1 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(1)}> Virtual simulation</p>
                    <p className={toggle2 === 2 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(2)}>Plan setup</p>
                    <p className={toggle2 === 3 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(3)}>3D-CRT beam design</p>
                    <p className={toggle2 === 4 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(4)}>Electron beam design</p>
                    <p className={toggle2 === 5 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(5)}>Proton beam design</p>
                    <p className={toggle2 === 6 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(6)}>Brachy planning</p>
                </div>
            </div >
            <SubSelect />
            <ul className="subContent">
                <li className={toggle2 === 1 ? "subConActive" : "subConTab"}>1번입니다.</li>
                <li className={toggle2 === 2 ? "subConActive" : "subConTab"}>2번입니다.</li>
                <li className={toggle2 === 3 ? "subConActive" : "subConTab"}>3번입니다.</li>
                <li className={toggle2 === 4 ? "subConActive" : "subConTab"}>4번입니다.</li>
                <li className={toggle2 === 5 ? "subConActive" : "subConTab"}><SubProton /></li>
                <li className={toggle2 === 6 ? "subConActive" : "subConTab"}>6번입니다.</li>
            </ul>
        </>
    );
}

export default PlanDesign;