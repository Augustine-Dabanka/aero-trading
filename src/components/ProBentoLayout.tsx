import React from 'react';
import { Grid } from '@material-ui/core';
import WebTradingViewEngine from './WebTradingViewEngine';
import OrderBookStream from './OrderBookStream';
import OrderEntryPanel from './OrderEntryPanel';

const ProBentoLayout = () => {
  // Hotkeys
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.key === 'k') {
      // Open search palette
      console.log('Open Cmd+K search palette');
    }
    if (event.ctrlKey && event.key === 'b') {
      // Buy focus action
      console.log('Buy focus Cmd+B activated');
    }
  };

  React.useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Grid container spacing={2}>
      {/* WebTradingViewEngine - 8 columns */}
      <Grid item xs={12} md={8}>
        <WebTradingViewEngine />
      </Grid>
      {/* OrderBookStream - 4 columns top */}
      <Grid item xs={12} md={4}>
        <OrderBookStream />
      </Grid>
      {/* Order Entry Panel - 4 columns bottom */}
      <Grid item xs={12} md={4}>
        <OrderEntryPanel />
      </Grid>
    </Grid>
  );
};

export default ProBentoLayout;