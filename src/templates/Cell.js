/*
    <Cell
        data={} display={}      // Compulsory
        width='' height=''>     // Mandatory
        {props.children}
    </Cell>
*/

import React, { useState } from 'react';

/* Package Imports */
import { CopyToClipboard } from 'react-copy-to-clipboard';

function LoaderSub(props) {

    /* Styles */
    const styles = {
        cell: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            width: props.width || '200px',
            height: props.height || '200px',
            borderRadius: '7px',
            fontFamily: 'Helvetica Neue',
            userSelect: 'none',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            overflow: 'hidden'
        },

        content_wrapper: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: '0px',
            left: '0px',
            width: '100%',
            height: 'calc(100% - 34px)'
        },

        cell_label: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            left: '0px',
            bottom: '0px',
            width: '100%',
            height: 'fit-content',
            marginBottom: '8px',
            padding: '5px 0',
            fonSize: '14px',
            cursor: 'pointer',
            color: 'white',
            backgroundColor: 'var(--primary-color)'
        }
    }

     /* useState */
    const [display, setDisplay] = useState();
    const [copied, setCopied] = useState(false);

    /* Functions */
    const handleCopy = () => {
        setCopied(true);
        const timer = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(timer);
    };

    return (
        <div className='cell' style={styles.cell}>
            <div className='content_wrapper' style={styles.content_wrapper}>
                {props.children}
            </div>
            <CopyToClipboard
                text={props.data}
                onCopy={() => handleCopy()}>
                <label
                    className='cell_label' style={styles.cell_label}
                    onMouseEnter={() => setDisplay('Click to Copy')}
                    onMouseLeave={() => setDisplay(null)}>
                    {copied ? 'Copied' : display ? display : props.display}
                </label>
            </CopyToClipboard>
        </div>
    );
}

export default LoaderSub;