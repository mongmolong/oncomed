import React, { useState } from 'react';
import '../../styles/SubMenusStyle.css'; //서브메뉴 공통
import SubSelect from '../SubSelect';
import Robust from '../subComponent/Robust';

function PlanEvaluation(props) {
    const [toggle2, setToggle2] = useState(1);
    const toggleTab2 = (index) => {
        setToggle2(index);
    }
    return (
        <>           
         <div className="subMenus">
                <div>
                    <p className={toggle2 === 1 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(1)} >Paln evalution</p>
                    <p className={toggle2 === 2 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(2)} >Robust evalution</p>
                    <p className={toggle2 === 3 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(3)} >Biological evalution</p>
                </div>
            </div >
            <SubSelect />
            <ul className="subContent">
                <li className={toggle2 === 1 ? "subConActive" : "subConTab"}>1번입니다.</li>
                <li className={toggle2 === 2 ? "subConActive" : "subConTab"}><Robust /></li>
                <li className={toggle2 === 3 ? "subConActive" : "subConTab"}>3번입니다.</li>
            </ul>
        </>
    );
}

export default PlanEvaluation;