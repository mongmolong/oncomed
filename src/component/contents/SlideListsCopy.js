import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSortUp, faSortDown, faStar, faLock } from "@fortawesome/free-solid-svg-icons";

import '../../styles/contentsStyle/LeftStyle.css';
import TrList from './TrList';

function SlideListsCopy(props) {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const tdCount = document.querySelectorAll('.subWrapperList tr').length;
        setNumber(tdCount - 1);
    }, []);

    //아코디언
    const [isActive, setIsActive] = useState(true);
    const handleToggle = () => {
        setIsActive(!isActive);
    };

    //sub탭 아이콘 토글
    const [isUpOn, setIsUpOn] = useState(false);
    const toggleIcon2 = () => {
        setIsUpOn(!isUpOn);
    };

    //tr map
    const trLists = [
        { name: "CTV", content: <TrList /> },
        { name: "OPTI PTV", content: <TrList /> },
        { name: "PTV", content: <TrList /> },
    ]
    //별 아이콘
    const [starStates, setStarStates] = useState(trLists.map(() => false));
    const starToggle = (index) => {
        const newStarStates = starStates.map((isStar, i) => i === index ? !isStar : isStar);
        setStarStates(newStarStates);
    };
    //color 박스  
    const [cubeOn, setCubeOn] = useState(trLists.map(() => false));
    const cubeToggle = (index) => {
        const newCubeColor = cubeOn.map((isCubeOn, i) => i === index ? !isCubeOn : isCubeOn);
        setCubeOn(newCubeColor);
    };

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
                    {trLists.map((trtr, index) => (
                        <tr key={index}>
                            <td><FontAwesomeIcon icon={faEye} /></td>
                            <td><FontAwesomeIcon icon={faLock} /></td>
                            <td className={`colorCube ${cubeOn[index] ? 'colorCube cubeActive' : 'colorCube'}`}
                                onClick={() => cubeToggle(index)}><span></span>&nbsp; {trtr.name}
                            </td>
                            <td className="starTab" onClick={() => starToggle(index)}>
                                {/* <FontAwesomeIcon icon={starStates[index] ? faStar : null} /> */}
                                {/* 오류남!! */}
                                {starStates[index] ? <FontAwesomeIcon icon={faStar} /> : null}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default SlideListsCopy;