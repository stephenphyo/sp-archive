import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import RadioButtonData from './RadioButtonData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import RadioButton001 from './submodules/RadioButton001/RadioButton001';

function RadioButton() {
    return (
        <div className='grid'>
            <Cell data={RadioButtonData[1]} display='001'><RadioButton001 /></Cell>
        </div>
    );
}

export default RadioButton;