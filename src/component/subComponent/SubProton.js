import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCaretDown, faGear, faCalculator, faStethoscope } from "@fortawesome/free-solid-svg-icons";
import '../../styles/SubProtonStyle.css';


function SubProton(props) {
    const [protonIndex, setProtonIndex] = useState(null);
    function protonToggle(index) {
        setProtonIndex(index);
    }
    const [doseIndex, setDoseIndex] = useState(null);
    function doseToggle(index) {
        setDoseIndex(index);
    }

    return (
        <div className="proton">
            <div className="planSetUp">
                <div className="protonSmall">
                    <p className={`protonIcons${protonIndex === 0 ? ' protonIconOn' : ' forIconHover'}`} onClick={() => protonToggle(0)}>
                        <span>
                            <span className="icons"><FontAwesomeIcon icon={faStethoscope} /></span>
                            <span>Plan setup</span>
                        </span>
                        <span className="planDrop"><FontAwesomeIcon icon={faCaretDown} /></span>
                    </p>
                </div>
                <h5></h5>
            </div>
            <div className="treatProject foricon">
                <div className="protonSmall">
                    <p className={`protonIcons${protonIndex === 1 ? ' protonIconOn' : ' forIconHover'}`} onClick={() => protonToggle(1)}>
                        <span className="icons">
                        <FontAwesomeIcon icon={faStethoscope} /></span>
                        <span>Conform <br />all beams</span>
                    </p>
                </div>
                <h5>TREAT AND PROJECT</h5>
            </div>
            <div className="isocenter foricon">
                <div className="protonSmall">
                    <p>
                        <span><FontAwesomeIcon icon={faGear} /> Move isocenter</span>
                        <span> <FontAwesomeIcon icon={faGear} /> Move to intersection</span>
                    </p>
                </div>
                <h5>ISOCENTER</h5>
            </div>
            <div className="beam foricon">
                <div className="protonSmall">
                    <p>
                        <span><FontAwesomeIcon icon={faGear} /> Rotate gantry</span>
                        <span> <FontAwesomeIcon icon={faGear} /> Rotate collimator</span>
                        <span> <FontAwesomeIcon icon={faGear} /> Rotate couch</span>
                    </p>
                </div>
                <h5>BEAM EDITING</h5>
            </div>
            <div className="drr foricon">
                <div className="protonSmall">
                    <p className={`protonIcons${protonIndex === 2 ? ' protonIconOn' : ' forIconHover'}`} onClick={() => protonToggle(2)}>
                        <span className="icons"><FontAwesomeIcon icon={faStethoscope} /></span>
                        <span>DRR setting</span>
                    </p>
                </div>
                <h5></h5>
            </div>
            <div className="dose foricon">
                <div className="protonSmall">
                    <div>
                        <p className={`doseIcons${doseIndex === 0 ? ' doseIconOn' : ''}`} onClick={() => doseToggle(0)}>
                            <span> <FontAwesomeIcon icon={faCalculator} /></span>
                            <span>Final dose</span>
                        </p>
                        <p className={`doseIcons${doseIndex === 1 ? ' doseIconOn' : ''}`} onClick={() => doseToggle(1)}>
                        <span> <FontAwesomeIcon icon={faCalculator} /></span>
                            <span>Inspector</span>
                        </p>
                        <p className={`doseIcons${doseIndex === 2 ? ' doseIconOn' : ''}`} onClick={() => doseToggle(2)}>
                        <span> <FontAwesomeIcon icon={faCalculator} /></span>
                            <span>Scale dose</span>
                        </p>
                    </div>
                </div>
                <h5>DOSE</h5>
            </div>
            <div className="autoScale foricon">
                <div className="protonSmall">
                    <p className={`protonIcons${protonIndex === 3 ? ' protonIconOn' : ' forIconHover'}`} onClick={() => protonToggle(3)}>
                        <span className="icons"><FontAwesomeIcon icon={faStethoscope} /></span>
                        <span>Auto scale to<br /> primary prescription</span>
                    </p>
                    <div className="autoScaleRight">
                        <p>
                            <span>725cGy x 5 fx = 3625 cGy</span>
                            <span className="scaleSpan">SITE PROSTATE</span>
                        </p>
                    </div>
                </div>
                <h5>PRESCRIPTION</h5>
            </div>
        </div>
    );
}

export default SubProton;