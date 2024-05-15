import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSortUp, faSortDown, faStar, faLock } from "@fortawesome/free-solid-svg-icons";

import '../../styles/contentsStyle/LeftStyle.css';

function SlideLists(props) {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const tdCount = document.querySelectorAll('.subWrapperList tr').length;
        setNumber(tdCount - 1);
    }, []);

    const [isActive, setIsActive] = useState(true);
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    //color 박스
    const [cubeOn, setCubeOn] = useState(true);
    const cubeToggle = () => {
        setCubeOn(!cubeOn);
    };
    //sub탭 아이콘 토글
    const [isUpOn, setIsUpOn] = useState(false);
    const toggleIcon2 = () => {
        setIsUpOn(!isUpOn);
    };

    //별 아이콘
    const [isStar, setIsStar] = useState(false);
    const starToggle = () => {
        setIsStar(!isStar)
    }
    
    return (
        <div className={`subWrapper ${isActive ? 'subWrapper subActive' : 'subWrapper'}`}>
            <table className="subWrapperList subLists ">
                <tbody >
                    <tr className="subWrapperName" onClick={toggleIcon2}>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                        <td onClick={handleToggle}>
                            <FontAwesomeIcon icon={isUpOn ? faSortUp : faSortDown} /> Targets({number})
                        </td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                        <td><FontAwesomeIcon icon={faLock} /></td>
                        <td className={`colorCube ${cubeOn ? 'colorCube cubeActive' : 'colorCube'}`} onClick={cubeToggle} >
                         <span></span> &nbsp; CTV
                        </td>
                        <td className="starTab" onClick={starToggle}>
                            <FontAwesomeIcon icon={isStar ? faStar : null} />
                        </td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                        <td><FontAwesomeIcon icon={faLock} /></td>
                        <td className={`colorCube ${cubeOn}? 'colorCube cubeActive': 'colorCube'}`} onClick={cubeToggle}  >
                            <span></span> &nbsp;OPTI PTV</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                        <td><FontAwesomeIcon icon={faLock} /></td>
                        <td className={`colorCube ${cubeOn}? 'colorCube cubeActive': 'colorCube'}`} onClick={cubeToggle} >
                            <span></span> &nbsp;PTV</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div >
    );
}

export default SlideLists;