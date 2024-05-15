import React from 'react';
import '../../styles/SubMenusStyle.css'; //서브메뉴 공통
import SubSelect from '../SubSelect';
import BottomContent from '../main/BottomContent';


function AutomatedPlanning(props) {
    return (
        <>
            <div classNAme="subMenuItems">
                <div className="subMenus">
                    <div>
                        <p className='mainTab'>sample1</p>
                        <p>sample2</p>
                        <p>sample3</p>
                    </div>
                </div>
                <SubSelect />
            </div>         
        </>
    );
}

export default AutomatedPlanning;