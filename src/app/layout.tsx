import React, { useEffect } from 'react';
import { useStore } from './store'; // Zustand store for managing state
import { motion } from 'framer-motion';
import Sidebar from './Sidebar';
import TopNavigation from './TopNavigation';
import './global.css'; // Global styles including scrollbar styles

const Layout = ({ children }) => {
  const { mode, toggleMode } = useStore();

  useEffect(() => {
    const body = document.body;
    body.classList.toggle('dark', mode === 'Pro');
  }, [mode]);

  return (
    <div className={`layout ${mode}`}> {/* Dynamic class based on mode */}
      <Sidebar />
      <div className="main-content">
        <TopNavigation mode={mode} toggleMode={toggleMode} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default Layout;