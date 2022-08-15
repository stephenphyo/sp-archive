import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import ButtonData from './ButtonData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import Button001 from './submodules/Button001/Button001';
import Button002 from './submodules/Button002/Button002';
import Button003 from './submodules/Button003/Button003';
import Button004 from './submodules/Button004/Button004';

function Button() {
    return (
        <div className='grid'>
            <Cell data={ButtonData[1]} display='001'><Button001 /></Cell>
            <Cell data={ButtonData[2]} display='002'><Button002 /></Cell>
            <Cell data={ButtonData[3]} display='003'><Button003 /></Cell>
            <Cell width='600px' data={ButtonData[4]} display='004'><Button004 /></Cell>
        </div>
    );
}

export default Button;