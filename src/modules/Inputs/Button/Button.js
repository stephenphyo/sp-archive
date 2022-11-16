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
import Button005 from './submodules/Button005/Button005';
import Button006 from './submodules/Button006/Button006';
import Button007 from './submodules/Button007/Button007';

function Button() {
    return (
        <div className='grid'>
            <Cell data={ButtonData[1]} display='001'><Button001 /></Cell>
            <Cell data={ButtonData[2]} display='002'><Button002 /></Cell>
            <Cell data={ButtonData[3]} display='003'><Button003 /></Cell>
            <Cell data={ButtonData[4]} display='004' width='600px'><Button004 /></Cell>
            <Cell data={ButtonData[5]} display='005'><Button005 /></Cell>
            <Cell data={ButtonData[6]} display='006' width='250px'><Button006 /></Cell>
            <Cell data={ButtonData[7]} display='007' width='350px'><Button007 /></Cell>
        </div>
    );
}

export default Button;