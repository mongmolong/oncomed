import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCube, faCaretDown, faDisplay,faMagnifyingGlass, faGear } from "@fortawesome/free-solid-svg-icons";
import '../../styles/SubPlanStyle.css';


function EyeModeling(props) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    function eyeToggle(index) {
        setSelectedIndex(index);
    }

    return (
        <>
            <div className="subEyeList workSpace">
                <div className="eyeSmall">
                    <p className={`eyeIcons${selectedIndex === 0 ? ' iconOn' : ''}`} onClick={() => eyeToggle(0)}>
                        <span className="icons"><FontAwesomeIcon icon={faEye} /></span>
                        <span>Eye modeling</span>
                    </p>
                    <p className={`eyeIcons${selectedIndex === 1 ? ' iconOn' : ''}`} onClick={() => eyeToggle(1)}>
                        <span className="icons"><FontAwesomeIcon icon={faCube} /></span>
                        <span>Setup</span>
                    </p>
                </div>
                <h5>WORKSPACE LAYOUT</h5>
            </div>
            <div className="subEyeList layout">
                <div className="eyeSmall eyeSelect">
                    <p className={`eyeIcons${selectedIndex === 3 ? ' iconOn' : ''}`} onClick={() => eyeToggle(3)}>
                        <span className="icons">
                            <FontAwesomeIcon icon={faDisplay} />
                            <span>Select<br />layout </span>
                        </span>
                        <span className="eyeDrop"><FontAwesomeIcon icon={faCaretDown} className="aa" /></span>
                    </p>
                </div>
                <h5></h5>
            </div>
            <div className="subEyeList eyeModel">
                <div className="eyeSmall">
                    <p className={`eyeIcons newModel ${selectedIndex === 4 ? ' iconOn' : ''}`} onClick={() => eyeToggle(4)}>
                        <span className="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <span>New eye model</span>
                    </p>
                    <div className="newOption">
                        <select name="option">
                            <option value="sample0"></option>
                            <option value="sample1">sample1</option>
                            <option value="sample2">sample2</option>
                            <option value="sample3">sample3</option>
                        </select>
                        <div>
                            <span><FontAwesomeIcon icon={faGear} /></span>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                        </div>
                    </div>
                </div>
                <h5>EYE MODEL</h5>
            </div>

            <div className="subEyeList eyeTransform">
                <div>
                    <div className="transIcons">
                        <span><FontAwesomeIcon icon={faGear} /> Translate</span>
                        <span> <FontAwesomeIcon icon={faGear} /> Rotate</span>
                    </div>
                    <div className="cal">
                        <div className="calCm">
                            <p>
                                <span>R-L [cm]:</span>
                                <span>I-S [cm]:</span>
                                <span>P-A [cm]:</span>
                            </p>
                            <p>
                                <input type="text"></input>
                                <input type="text"></input>
                                <input type="text"></input>
                            </p>
                        </div>
                        <div className="calDeg">
                            <p>
                                <span>Pitch [deg]:</span>
                                <span>Roll [deg]:</span>
                                <span>Yaw [deg]:</span>
                            </p>
                            <p>
                                <input type="text"></input>
                                <input type="text"></input>
                                <input type="text"></input>
                            </p>
                        </div>
                    </div>
                </div>
                <h5>EYE TRANSFORM</h5>
            </div>
            <div className="subEyeList tumorModeling">
                <div className="eyeSmall">
                    <p className={`eyeIcons eyeTumor ${selectedIndex === 5 ? ' iconOn' : ''}`} onClick={() => eyeToggle(5)}>
                        <span className="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <span>New tumor<br />model</span>
                    </p>
                    <div className="tumorOption">
                        <select>
                            <option value="sample0"></option>
                            <option value="sample1">sample1</option>
                            <option value="sample2">sample2</option>
                            <option value="sample3">sample3</option>
                        </select>
                        <div>
                            <span><FontAwesomeIcon icon={faGear} /></span>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                        </div>
                    </div>
                    <div className="tomoreTabs">
                        <span><FontAwesomeIcon icon={faGear} />&nbsp;Draw contour</span>
                        <span> <FontAwesomeIcon icon={faGear} />&nbsp;Delete contour</span>
                        <span> <FontAwesomeIcon icon={faGear} />&nbsp;Set apex point</span>
                    </div>
                </div>
                <h5>TUMOR MODELING</h5>
            </div>
            <div className="subEyeList markerPois">
                <div className="eyeSmall">
                    <p className={`eyeIcons eyeTumor ${selectedIndex === 6 ? ' iconOn' : ''}`} onClick={() => eyeToggle(6)}>
                        <span className="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <span>New marker POI</span>
                    </p>
                    <div className="poiOption">
                        <select>
                            <option value="sample0"></option>
                            <option value="sample1">sample1</option>
                            <option value="sample2">sample2</option>
                            <option value="sample3">sample3</option>
                        </select>
                        <p>
                            <span><FontAwesomeIcon icon={faGear} /></span>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                            <span><FontAwesomeIcon icon={faEye} /></span>
                        </p>
                    </div>
                    <p className={`eyeIcons ${selectedIndex === 7 ? ' iconOn' : ''}`} onClick={() => eyeToggle(7)}>
                        <span className="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <span>Move marker POI</span>
                    </p>
                </div>
                <h5>MARKER POIS</h5>
            </div>
            <div className="subEyeList eyeLast">
                <div className="eyeSmall">
                    <p className={`eyeIcons icons ${selectedIndex === 8 ? ' iconOn' : ''}`} onClick={() => eyeToggle(8)}>
                        <span className="icons">
                            <FontAwesomeIcon icon={faDisplay} />
                            <span>Select layout </span>
                        </span>
                        <span className="eyeLastIcon"><FontAwesomeIcon icon={faCaretDown} /></span>
                    </p>
                </div>
                <h5></h5>
            </div>
        </>

    )
}


export default EyeModeling;