import React from 'react'
import image from './image-victor.jpg'
function Middle() {
    return (
        <div className="middle">
            <img src={image} alt="Avatar" className="avatar"/>
            <div className="MiddleContent">
                <p id="LH">Victor Crest<span className="gray1">26<br/></span></p>
                <span className="gray1">London</span>
            </div>
        </div>
    );
}

export default Middle;
