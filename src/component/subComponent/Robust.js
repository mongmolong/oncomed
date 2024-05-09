import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft, faFileMedical, faMicroscope } from "@fortawesome/free-solid-svg-icons";
import '../../styles/SubRobustStyle.css';

function Robust(props) {
    const [robustIndex, setRobustIndex] = useState(null);
    function robustToggle(index) {
        setRobustIndex(index);
    }
    return (
        <div className="subRobust">
            <div className="subRobustList scenario">
                <div className="robustSmall">
                    <p className={`robustIcons${robustIndex === 0 ? ' robustIconOn' : ' forIconHover'}`} onClick={() => robustToggle(0)}>
                        <span className="icons"><FontAwesomeIcon icon={faFileMedical} /></span>
                        <span>New</span>
                    </p>
                    <p className={`robustIcons${robustIndex === 1 ? ' robustIconOn' : ' forIconHover'}`} onClick={() => robustToggle(1)}>
                        <span className="icons"><FontAwesomeIcon icon={faFileMedical} /></span>
                        <span>Edit</span>
                    </p>
                    <p className={`robustIcons${robustIndex === 2 ? ' robustIconOn' : ' forIconHover'}`} onClick={() => robustToggle(2)}>
                        <span className="icons"><FontAwesomeIcon icon={faFileMedical} /></span>
                        <span>Delete</span>
                    </p>
                    <p className={`robustIcons aaa${robustIndex === 3 ? ' robustIconOn' : ' forIconHover'}`} onClick={() => robustToggle(3)}>
                        <span className="icons"><FontAwesomeIcon icon={faMicroscope} /></span>
                        <span>Compute doses</span>
                    </p>
                    <div className="scenarioSelect">
                        <span>Scenario groups:</span>
                        <select name="option">
                            <option value="sample0">&nbsp;</option>
                            <option value="sample1">sample1</option>
                            <option value="sample2">sample2</option>
                            <option value="sample3">sample3</option>
                        </select>
                    </div>
                </div>
                <h5>SCENARIO GROUP</h5>
            </div>
            <div className="subRobustList dose">
                <div className="robustSmall">
                    <span className="doseFirst">Nominal dose</span>
                    <span>Scenario group</span>
                </div>
                <h5>DOSE ALGORITHM</h5>
            </div>
            <div className="subRobustList inspector">
                <div className="robustSmall">
                    <p className={`robustIcons${robustIndex === 4 ? ' robustIconOn' : ' forIconHover'}`} onClick={() => robustToggle(4)}>
                        <span className="icons "><FontAwesomeIcon icon={faMicroscope} /></span>
                        <span>inspector</span>
                    </p>
                </div>
            </div>
            <div className="subRobustList prescrip">
                <div className="robustSmall">
                    <p>
                        <span>725cGy x 5 fx = 3625 cGy</span>
                        <span className="prescripSpan">SITE PROSTATE</span>
                    </p>
                </div>
                <h5>PRESCTIPTION (NOMINAL)</h5>
            </div>
            <div className="subRobustList currentScenario">
                <div className="robustSmall">
                    <div>
                        <p> No scenario group has been created</p>
                        <div className="scenarioEx">
                            <p>Image Set:</p>
                            <p>Density perturbation [%]</p>
                            <p>Patient shift (R-L, I-S, P-A) [cm]:</p>
                        </div>
                    </div>
                    <div className="currentArrow">
                        <p>
                            <span><FontAwesomeIcon icon={faAngleLeft} /></span>
                            <span>Previous</span>
                        </p>
                        <p>
                            <span><FontAwesomeIcon icon={faAngleRight} /></span>
                            <span>Next</span>
                        </p>
                    </div>
                </div>
                <h5>CURRENT SCENARIO</h5>
            </div>
        </div>
    );
};

export default Robust;
