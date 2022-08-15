import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import CheckboxData from './CheckboxData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import Checkbox001 from './submodules/Checkbox001/Checkbox001';
import Checkbox002 from './submodules/Checkbox002/Checkbox002';
import Checkbox003 from './submodules/Checkbox003/Checkbox003';

function Checkbox() {
    return (
        <div className='grid'>
            <Cell data={CheckboxData[1]} display='001'><Checkbox001 /></Cell>
            <Cell data={CheckboxData[2]} display='002'><Checkbox002 /></Cell>
            <Cell data={CheckboxData[3]} display='003'><Checkbox003 /></Cell>
        </div>
    );
}

export default Checkbox;