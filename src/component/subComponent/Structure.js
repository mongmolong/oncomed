import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCaretDown, faDisplay, faMagnifyingGlass, faGear, faDna } from "@fortawesome/free-solid-svg-icons";
import '../../styles/SubStructureStyle.css';


function Structure(props) {
    const [selectedIndex, setSelectedIndex] = useState(null);
    function eyeToggle(index) {
        setSelectedIndex(index);
    }

    return (
        <>
            <div key={1} className="roi ">
                <div className="roiSmall roiLayout">
                    <p className={`eyeIcons${selectedIndex === 0 ? ' iconOn' : ''}`} onClick={() => eyeToggle(0)}>
                        <span className="icons">
                            <FontAwesomeIcon icon={faDisplay} />
                            <span>Select<br />layout </span>
                        </span>
                        <span className="eyeDrop"><FontAwesomeIcon icon={faCaretDown} className="aa" /></span>
                    </p>
                </div>
                <h5></h5>
            </div>
            <div key={2} className="roi">
                <div className="roiSmall roiLayout">
                    <p className={`eyeIcons${selectedIndex === 1 ? ' iconOn' : ''}`} onClick={() => eyeToggle(1)}>
                        <span className="icons">
                            <FontAwesomeIcon icon={faDisplay} />
                            <span>New ROI<br />geometry </span>
                        </span>
                        <span className="eyeDrop"><FontAwesomeIcon icon={faCaretDown} className="aa" /></span>
                    </p>
                </div>
                <h5></h5>
            </div>
            <div key={3} className="roi roiCurrent">
                <div className="roiSmall">
                    <div className="roiOption">
                        <select name="option">
                            <option value="sample0"></option>
                            <option value="sample1">sample1</option>
                            <option value="sample2">sample2</option>
                            <option value="sample3">sample3</option>
                        </select>
                        <div>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                            <span><FontAwesomeIcon icon={faCheck} /></span>
                        </div>
                    </div>
                </div>
                <h5>CURRENT ROI</h5>
            </div>
            <div key={4} className="roi roiCon">
                <div className="roiSmall">
                    <div className="transIcons">
                        <div>
                            <span><FontAwesomeIcon icon={faDna} /> Brush</span>
                            <span> <FontAwesomeIcon icon={faDna} /> Smart brush</span>
                            <span><FontAwesomeIcon icon={faDna} /> Smart contour</span>
                        </div>
                        <div>
                            <span> <FontAwesomeIcon icon={faDna} /> Spline</span>
                            <span><FontAwesomeIcon icon={faDna} /> Polygon </span>
                            <span> <FontAwesomeIcon icon={faDna} /> Freehand</span>
                        </div>
                    </div>
                </div>
                <h5>CONTOURING</h5>
            </div>
            <div key={5} className="roi roiInter">
                <div className="roiSmall">
                    <div className="transIcons">
                        <span><FontAwesomeIcon icon={faCheck} /> Show</span>
                        <span> <FontAwesomeIcon icon={faCheck} /> Accept current</span>
                        <span><FontAwesomeIcon icon={faCheck} /> Accept all</span>
                    </div>
                </div>
                <h5>INTERPOLATION </h5>
            </div>
            <div key={6} className="roi roi3d">
                <div className="roiSmall">
                    <div className="roiLeft roiEdit">
                        <span>Mode :</span>
                        <span> <FontAwesomeIcon icon={faCheck} /> 2D</span>
                        <span><FontAwesomeIcon icon={faCheck} /> 3D</span>
                    </div>
                    <div className="center">
                        <p className={`eyeIcons eyeTumor ${selectedIndex === 2 ? ' iconOn' : ''}`} onClick={() => eyeToggle(2)}>
                            <span className="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <span>Deform</span>
                        </p>
                        <p className="roiEdit">
                            <span><FontAwesomeIcon icon={faCheck} /> Translate</span>
                            <span> <FontAwesomeIcon icon={faCheck} /> Rotate</span>
                            <span><FontAwesomeIcon icon={faCheck} /> Scale</span>
                        </p>
                    </div>
                    <div className="roiRight roiEdit">
                        <p className={`eyeIcons eyeTumor ${selectedIndex === 3 ? ' iconOn' : ''}`} onClick={() => eyeToggle(3)}>
                            <span className="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                            <span>Region <br />growing</span>
                        </p>
                    </div>
                </div>
                <h5>INTERPOLATION </h5>
            </div>
            <div key={7} className="roi roiExtra">
                <div className="roiSmall">
                    <div className="transIcons leftExtra">
                        <div>
                            <span><FontAwesomeIcon icon={faDna} /> Interpolate</span>
                            <span> <FontAwesomeIcon icon={faDna} /> Copy contour</span>
                            <span><FontAwesomeIcon icon={faDna} /> Paste contour</span>
                        </div>
                        <div>
                            <span> <FontAwesomeIcon icon={faDna} /> Couch removal</span>
                            <span><FontAwesomeIcon icon={faDna} /> Simlpify contours </span>
                            <span> <FontAwesomeIcon icon={faDna} /> Remove holes</span>
                        </div>
                    </div>
                    <div className="transIcons centerExtra">
                        <span><FontAwesomeIcon icon={faGear} /> Delete contour</span>
                        <span> <FontAwesomeIcon icon={faGear} /> Delete component</span>
                        <span><FontAwesomeIcon icon={faGear} /> Keep component</span>
                    </div>
                    <p className={`eyeIcons ${selectedIndex === 4 ? ' iconOn' : ''}`} onClick={() => eyeToggle(4)}>
                        <span className="icons"><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                        <span>Move to slice <br/>intersection </span>
                    </p>
                </div>
                <h5>EXTRAS</h5>
            </div >

        </>
    )
}


export default Structure;