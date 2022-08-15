import { createContext, useRef, useState } from 'react';

/* Context */
export const SidebarContext = createContext();

function SidebarContextProvider(props) {

    /* useState */
    const [active, setActive] = useState('');
    const [sidebarOpen, setSidebarOpen] = useState('');
    const menuRef = useRef();

    const val = {
        active, setActive,
        sidebarOpen, setSidebarOpen,
        menuRef
    }

    return (
        <SidebarContext.Provider value={val}>
            {props.children}
        </SidebarContext.Provider>
    );
}
export default SidebarContextProvider;
