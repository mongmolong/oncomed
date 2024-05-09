import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/NavBarStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";


function Links({ goto, index, children, className, toggle, setToggle }) {
    const handleClick = () => {
        setToggle(index + 1);
    }

    return (
        <li className={className}>
            <Link
                to={goto}
                className={toggle === index + 1 ? "mainMenuOn" : ""}
                onClick={handleClick} > {children}</Link>
        </li>
    )
}
function NavBar(props) {
    const [toggle, setToggle] = useState(0);
    return (
        <nav className="nav">
            <ul className="mainMenu">
                <Links goto="/automatedPlanning" index={0} className="mainFirst" toggle={toggle} setToggle={setToggle}>  Automated Planning&nbsp;<FontAwesomeIcon icon={faCaretDown} /> </Links>
                <Links goto="/patientData" index={1}  toggle={toggle} setToggle={setToggle}>  Patient data Management&nbsp; </Links>
                <Links goto="/patientModeling" index={2}  toggle={toggle} setToggle={setToggle}>  Patient modeling &nbsp; <FontAwesomeIcon icon={faCaretDown} /></Links>
                <Links goto="/planDesign" index={3}  toggle={toggle} setToggle={setToggle}> Plan Design &nbsp; <FontAwesomeIcon icon={faCaretDown} /> </Links>
                <Links goto="/planOptimization" index={4}  toggle={toggle} setToggle={setToggle}>   Plan optimization &nbsp; <FontAwesomeIcon icon={faCaretDown} /></Links>
                <Links goto="/planEvaluation" index={5}  toggle={toggle} setToggle={setToggle}>   Plan evalution &nbsp; <FontAwesomeIcon icon={faCaretDown} /></Links>
                <Links goto="/qa" className="mainQa" index={6} toggle={toggle} setToggle={setToggle}> QA preparation</Links>
                <Links goto="/treatment" index={7}  toggle={toggle} setToggle={setToggle}> Treatment delivery&nbsp;  <FontAwesomeIcon icon={faCaretDown} /></Links>
            </ul>

        </nav>
    );
}

export default NavBar;