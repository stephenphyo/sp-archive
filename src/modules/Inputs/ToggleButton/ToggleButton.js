import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import ToggleButtonData from './ToggleButtonData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import ToggleButton001 from './submodules/ToggleButton001/ToggleButton001';
import ToggleButton002 from './submodules/ToggleButton002/ToggleButton002';
import ToggleButton003 from './submodules/ToggleButton003/ToggleButton003';
import ToggleButton004 from './submodules/ToggleButton004/ToggleButton004';

function ToggleButton() {
    return (
        <div className='grid'>
            <Cell data={ToggleButtonData[1]} display='001'><ToggleButton001 /></Cell>
            <Cell data={ToggleButtonData[2]} display='002'><ToggleButton002 /></Cell>
            <Cell data={ToggleButtonData[3]} display='003'><ToggleButton003 /></Cell>
            <Cell data={ToggleButtonData[4]} display='004'><ToggleButton004 /></Cell>
        </div>
    );
}

export default ToggleButton;