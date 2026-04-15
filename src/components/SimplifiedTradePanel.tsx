import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, ArrowUp, ArrowDown } from 'lucide-react';

// Define TypeScript interfaces for Props and State
interface TradePanelProps {
  price: number;
  onBuy: (amount: number) => void;
  onSell: (amount: number) => void;
}

interface TradePanelState {
  amount: number;
}

class SimplifiedTradePanel extends React.Component<TradePanelProps, TradePanelState> {
  constructor(props: TradePanelProps) {
    super(props);
    this.state = {
      amount: 0,
    };
  }

  handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ amount: Number(event.target.value) });
  };

  render() {
    const { price, onBuy, onSell } = this.props;
    const { amount } = this.state;

    return (
      <motion.div
        className="trade-panel"
        animate={{ x: 0 }}
        initial={{ x: '100%' }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300 }}
        style={{ position: 'sticky', right: 0, top: 0 }}
      >
        <h2>Trade Panel</h2>
        <div>
          <p>Price: ${price.toFixed(2)}</p>
          <input 
            type="number" 
            placeholder="Enter Amount" 
            value={amount} 
            onChange={this.handleAmountChange} 
          />
        </div>
        <div>
          <button onClick={() => onBuy(amount)}>
            <DollarSign /> Buy
          </button>
          <button onClick={() => onSell(amount)}>
            <DollarSign /> Sell
          </button>
        </div>
        <div>
          <button>
            <ArrowUp /> Quick Buy
          </button>
          <button>
            <ArrowDown /> Quick Sell
          </button>
        </div>
      </motion.div>
    );
  }
}

export default SimplifiedTradePanel;
