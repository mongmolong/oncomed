import React from 'react';
import '../../styles/contentsStyle/PersonIdStyle.css';

function PersonId(props) {
    return (
        <div className="personIdCard">
            <div className="idCard">
                <p>img</p>
                <div>
                    <p>1501005</p>
                    <p className="idSubNumber">1501005</p>
                    <p>Other</p>
                </div>
            </div>
        </div>
    );
}

export default PersonId;