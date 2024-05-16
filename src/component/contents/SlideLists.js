import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSortUp, faSortDown, faStar, faLock } from "@fortawesome/free-solid-svg-icons";

import '../../styles/contentsStyle/LeftStyle.css';

function SlideLists(props) {
    const [isActive, setIsActive] = useState(true);
    const handleToggle = () => {
        setIsActive(!isActive);
    };
    //color 박스
    const [cubeOn, setCubeOn] = useState(null);
    const cubeToggle = (index) => {
        setCubeOn(cubeOn === index ? null : index);
    };
    //sub탭 아이콘 토글
    const [isUpOn, setIsUpOn] = useState(false);
    const toggleIcon2 = () => {
        setIsUpOn(!isUpOn);
    };

    const menus = [
        { id: 1, name: "CTV", },
        { id: 2, name: "PTV", },
        { id: 3, name: "OPTI PTV", },
        { id: 4, name: "CTV", },
        { id: 5, name: "PTV", },
        { id: 6, name: "OPTI PTV", },
        { id: 7, name: "CTV", },
        { id: 8, name: "PTV", },
        { id: 9, name: "OPTI PTV", },
    ]

    //별 아이콘
    const [isStar, setIsStar] = useState(Array(menus.length).fill(false));
    const starToggle = (index) => {
        setIsStar((prevStars) => {
            const newStars = [...prevStars];
            newStars[index] = !newStars[index];
            return newStars;
        });
    };

    // count 제일 하단에 있어야 함!
    const [number, setNumber] = useState(0);
    useEffect(() => {
        const tdCount = document.querySelectorAll('.subWrapperList tr').length;
        setNumber(tdCount);
    }, []);

    return (
        <div className={`subWrapper ${isActive ? 'subWrapper subActive' : 'subWrapper'}`}>
            <table className="subWrapperList subLists ">
                <tbody >
                    <tr className="subWrapperName" onClick={toggleIcon2}>
                        <td><FontAwesomeIcon icon={faEye} /></td>
                        <td onClick={handleToggle}>
                            <FontAwesomeIcon icon={isUpOn ? faSortUp : faSortDown} /> 
                            Targets(9)
                        </td>
                    </tr>
                    {menus.map((menuName, index) => (
                        <tr key={index}>
                            <td><FontAwesomeIcon icon={faEye} /></td>
                            <td><FontAwesomeIcon icon={faLock} /></td>
                            <td className={`colorCube ${cubeOn === index ? 'cubeActive' : ''}`} onClick={() => cubeToggle(index)}>
                                <span></span> &nbsp; {menuName.name}
                            </td>
                            <td className="starTab" onClick={() => starToggle(index)}>
                                {isStar[index] && <FontAwesomeIcon icon={faStar} />}
                                {/* isStar가 true일때만 아이콘 랜더링하기! 그래야 오류 안남! */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    );
}

export default SlideLists;