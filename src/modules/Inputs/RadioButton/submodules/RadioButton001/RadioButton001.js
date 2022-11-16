import React from 'react';

/* CSS Imports */
import './RadioButton001.css'

function RadioButton001() {
    return (
        <div id='radio001'>
            <div id='radio_group'>
                <label id='radio'>
                    <input type='radio' name='gender' value='male' />
                    Male
                    <span></span>
                </label>
                <label id='radio'>
                    <input type='radio' name='gender' value='female' />
                    Female
                    <span></span>
                </label>
            </div>
        </div>
    );
}

export default RadioButton001;