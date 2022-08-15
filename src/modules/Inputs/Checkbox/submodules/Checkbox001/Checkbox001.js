import React from 'react';

/* CSS Imports */
import './Checkbox001.css'

function Checkbox001() {
    return (
        <div id='checkbox001'>
            <div id='checkbox'>
                <input type='checkbox' id='check' />
                <label for='check'>
                    <div id='tick_mark'></div>
                </label>
            </div>
        </div>
    );
}

export default Checkbox001;