import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import IconAnimationData from './IconAnimationData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import IconAnimation001 from './submodules/IconAnimation001/IconAnimation001';

function IconAnimation() {
    return (
        <div className='grid'>
            <Cell data={IconAnimationData[1]} display='001'>
                <IconAnimation001 />
            </Cell>
        </div>
    );
}

export default IconAnimation;