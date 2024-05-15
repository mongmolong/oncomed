import React from 'react';
import '../../styles/contentsStyle/LeftStyle.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';
import SlideLists from './SlideLists';
import SlideListsCopy from './SlideListsCopy';


function LeftSlide(props) {
    const [liToggle, setLiToggle] = useState(1);
    const liToggleTab = (index) => {
        setLiToggle(index);
    };

        // 왼쪽 슬라이드
    const [isSlideOn, setIsSlideOn] = useState(false);
    const toggleIcon = () => {
        setIsSlideOn(!isSlideOn);
    };

    const leftNames = [
        "ROIS",
        "POIS",
        "Registrations",
        "sample",
        "sample",
    ];
    const reversedLeftNames = leftNames.slice().reverse();  

    const leftTabsContent = [
        { name: "ROIS", content: <><SlideListsCopy/><SlideListsCopy /></> },
        { name: "POIS", content: <><SlideListsCopy /><SlideListsCopy /></> },
        { name: "Registrations", content: <h1>Registrations </h1> },
        { name: "Sample 1", content: <h1>Sample 1</h1> },
        { name: "Sample 2", content: <h1>Sample 2</h1> },
    ];

    return (
        <>
            <div className={`sliderContainer ${isSlideOn ? 'slideOn' : ''}`}>
                <p onClick={toggleIcon}>
                    <FontAwesomeIcon icon={isSlideOn ? faCaretLeft : faCaretRight} />
                </p>
                <ul className="leftMenus">
                    {reversedLeftNames.map((leftName, index) => (
                        <li key={index}
                            className={liToggle === leftNames.length - index ? "leftTabOn" : ""}
                            onClick={() => liToggleTab(leftNames.length - index)}>{leftName}</li>
                    ))}
                </ul>
                <div>
                    {leftTabsContent.map((tab, index) => (
                        <div key={index} className={liToggle === index + 1 ? "leftTabs onTab" : "leftTabs"}>
                            <div className="subContentName">
                                <p><FontAwesomeIcon icon={faEye} /></p>
                                <p></p>
                                <p>{tab.name}</p>
                                <p>Matl</p>
                            </div>
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default LeftSlide;