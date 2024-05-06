import React from 'react';
import '../styles/SubSelectStyle.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDisplay } from "@fortawesome/free-solid-svg-icons";

function SubSelect(props) {
    return (
        <ul className="rightSelect">
            <li>
                <select>
                    <option><FontAwesomeIcon icon={faDisplay} />&nbsp; 1 PROSTATE</option>
                    <option><FontAwesomeIcon icon={faDisplay} />&nbsp; 2 sample</option>
                    <option><FontAwesomeIcon icon={faDisplay} />&nbsp; 3 sample</option>
                </select>
            </li>
            <li><FontAwesomeIcon icon={faDisplay} />&nbsp; RNSH</li>
            <li><FontAwesomeIcon icon={faDisplay} />&nbsp; Plan dose</li>
        </ul>
    );
}

export default SubSelect;


