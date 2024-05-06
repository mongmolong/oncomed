import React, { useState } from 'react';
import SubPlan from './SubPlan';
import SubSelect from './SubSelect';
import '../styles/NavStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function MainMenu(props) {
    const [toggle, setToggle] = useState(1);
    const toggleTab = (index) => {
        setToggle(index);
    }
    const [toggle2, setToggle2] = useState(1);
    const toggleTab2 = (index) => {
        setToggle2(index);
    }

    return (
        <nav className="navbar">
            <ul className="mainMenu" >
                <li className={toggle === 1 ? "mainMenuOn" : "mainTab mainFirst"} id="Planning" onClick={() => toggleTab(1)} >
                    Automated Planning&nbsp; <FontAwesomeIcon icon={faCaretDown} />
                </li>
                <li className={toggle === 2 ? "mainMenuOn" : "mainTab"} id="Management" onClick={() => toggleTab(2)} >
                    Patient data Management
                </li>
                <li className={toggle === 3 ? "mainMenuOn" : "mainTab"} id="Modeling" onClick={() => toggleTab(3)} >
                    Patient modeling &nbsp; <FontAwesomeIcon icon={faCaretDown} />
                </li>
                <li className={toggle === 4 ? "mainMenuOn" : "mainTab"} id="Design" onClick={() => toggleTab(4)} >
                    Plan Design &nbsp; <FontAwesomeIcon icon={faCaretDown} />
                </li>
                <li className={toggle === 5 ? "mainMenuOn" : "mainTab"} id="Optimization" onClick={() => toggleTab(5)} >
                    Plan optimization &nbsp; <FontAwesomeIcon icon={faCaretDown} />
                </li>
                <li className={toggle === 6 ? "mainMenuOn" : "mainTab"} id="Evalution" onClick={() => toggleTab(6)} >
                    Plan evalution &nbsp; <FontAwesomeIcon icon={faCaretDown} />
                </li>
                <li className={toggle === 7 ? "mainMenuOn" : "mainTab mainQa"} id="QA" onClick={() => toggleTab(7)} >
                    QA preparation
                </li>
                <li className={toggle === 8 ? "mainMenuOn" : "mainTab"} id="Treatment" onClick={() => toggleTab(8)} >
                    Treatment delivery&nbsp;  <FontAwesomeIcon icon={faCaretDown} />
                </li>
            </ul>
            <ul className="subMenus">
                <li className={toggle === 1 ? "subMenuOn" : "mainTab"}>
                    <p>sample1</p>
                    <p>sample2</p>
                    <p>sample3</p>
                </li>
                <li className={toggle === 2 ? "subMenuOn" : "mainTab"}>
                    <p>sample1</p>
                    <p>sample2</p>
                    <p>sample3</p>
                </li>
                <li className={toggle === 3 ? "subMenuOn" : "mainTab"}>
                    <p className={toggle2 === 1 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(1)} >Image registration</p>
                    <p className={toggle2 === 2 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(2)} >Structure definition</p>
                    <p className={toggle2 === 3 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(3)} >Deformable registration</p>
                    <p className={toggle2 === 4 ? "subConOn" : "mainTab"} onClick={() => toggleTab2(4)} >Eye modeling</p>
                </li>
                <li className={toggle === 4 ? "subMenuOn" : "mainTab"}>
                    <p>Virtual simulation</p>
                    <p>Plan setup</p>
                    <p>3D-CRT beam design</p>
                    <p>Electron beam design</p>
                    <p>Proton beam design</p>
                    <p>Brachy planning</p>
                </li>
                <li className={toggle === 5 ? "subMenuOn" : "mainTab"}>
                    <p>sample1</p>
                    <p>sample2</p>
                    <p>sample3</p>
                </li>
                <li className={toggle === 6 ? "subMenuOn" : "mainTab"}>
                    <p>Plan evaluation</p>
                    <p>Robust evalution</p>
                    <p>Biological evalution</p>
                </li>
                <li className={toggle === 7 ? "subMenuOn" : "mainTab"}>
                    <p>sample1</p>
                    <p>sample2</p>
                    <p>sample3</p>
                </li>
                <li className={toggle === 8 ? "subMenuOn" : "mainTab"}>
                    <p>sample1</p>
                    <p>sample2</p>
                    <p>sample3</p>
                </li>
            </ul>
            <SubSelect />
            <ul className="subContent">
                <li className={toggle2 === 1 ? "subConActive" : "subConTab"}>1번입니다.</li>
                <li className={toggle2 === 2 ? "subConActive" : "subConTab"}>2번입니다.</li>
                <li className={toggle2 === 3 ? "subConActive" : "subConTab"}>3번입니다.</li>
                <li className={toggle2 === 4 ? "subConActive" : "subConTab"}><SubPlan /></li>
            </ul>
        </nav>
    );
}

export default MainMenu;
