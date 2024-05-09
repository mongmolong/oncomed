import React from 'react';
import '../../styles/SubMenusStyle.css'; //서브메뉴 공통
import SubSelect from '../SubSelect';

function TreatMent(props) {
    return (
        <div className="subMenus">
            <div>
                <p className='mainTab'>sample1</p>
                <p>sample2</p>
                <p>sample3</p>
            </div>
            <SubSelect />
        </div>
    );
}

export default TreatMent;