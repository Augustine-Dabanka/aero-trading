import React, { useState } from 'react';
import { MotionDiv } from 'framer-motion';

const Sidebar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <MotionDiv className={`sidebar ${isDarkMode ? 'dark' : 'light'}`}> 
            <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Mode</button>
            {/* Add Navigation Items Here */}
        </MotionDiv>
    );
};

export default Sidebar;