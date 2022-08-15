import React from 'react';

/* CSS Imports */
import 'styles/Grid.css';

/* Data Imports */
import TextAnimationData from './TextAnimationData';

/* Template Imports */
import Cell from 'templates/Cell';

/* Submodule Imports */
import TextAnimation001 from './submodules/TextAnimation001/TextAnimation001';

function TextAnimation() {
    return (
        <div className='grid'>
            <Cell data={TextAnimationData[1]} display='001'>
                <TextAnimation001 />
            </Cell>
        </div>
    );
}

export default TextAnimation;