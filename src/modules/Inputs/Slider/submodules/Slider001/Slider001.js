import React from 'react';

/* CSS Imports */
import './Slider001.css'

function Slider001() {
    return (
        <div id='slider001'>
            <div id='slider_container'>
                <input type='range' id='slider'
                    min='0' max='100' />
            </div>
        </div>
    );
}

export default Slider001;