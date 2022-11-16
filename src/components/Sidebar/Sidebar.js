import React, { useContext, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/* CSS Import */
import './Sidebar.css';

/* Component Import */
import SidebarItems from './SidebarItems';

/* Sidebar Data Import */
import { data } from './SidebarData.js';

/* Context Imports */
import { SidebarContext } from 'contexts/SidebarContext';

/* Custom Hook Imports */
import { useWindowSize } from 'hooks/useWindowSize';

function Sidebar() {

    /* useLocation */
    const location = useLocation();

    /* useContext */
    const { sidebarOpen, setSidebarOpen, setActive, menuRef }
        = useContext(SidebarContext);

    /* useRef */
    const sidebarRef = useRef();

    /* Custom Hooks */
    const windowSize = useWindowSize();

    /* useEffect */
    useEffect(() => {
        if (windowSize.width < 960) {
            setSidebarOpen(false);
        } else {
            setSidebarOpen(true);
        }
    }, [windowSize.width, setSidebarOpen]);

    useEffect(() => {
        setActive(location.pathname)
    }, [location, setActive]);

    /* Sidebar Control */
    const listen = (e) => {
        if (
            sidebarRef.current
            && sidebarOpen
            && !sidebarRef.current.contains(e.target)
            && !menuRef.current.contains(e.target)
        ) {
            setSidebarOpen(false);
            document.removeEventListener('mousedown', listen);
        }
    };
    if (sidebarOpen) {
        document.addEventListener('mousedown', listen);
    };

    return (
        <>
            {
                location.pathname !== '/' && (
                    <div
                        ref={sidebarRef}
                        className={`sidebar ${sidebarOpen ? 'open' : 'close'}`}>
                        <div className='sidebar_body'>
                            <SidebarItems sidebar={sidebarOpen} data={data} />
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default Sidebar;