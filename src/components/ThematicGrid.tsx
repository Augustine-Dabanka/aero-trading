import React from 'react';
import { motion } from 'framer-motion';
import { IconName } from 'lucide-react'; // Replace with actual icons later
import './ThematicGrid.css'; // Assuming you have a CSS file for styling

const ThematicGrid = () => {
  const playlists = [
    // Example data structure, you can modify it as needed
    { id: 1, title: 'Tech Innovations', description: 'Invest in the future of technology.', risk: 'Medium', return: '12%', icon: <IconName /> },
    { id: 2, title: 'Green Investments', description: 'Sustainable energy and resources.', risk: 'Low', return: '8%', icon: <IconName /> },
    // Add more playlists as needed
  ];

  return (
    <div className="thematic-grid">
      {playlists.map((playlist) => (
        <motion.div
          key={playlist.id}
          className="grid-item"
          whileHover={{ scale: 1.05 }}
          layout
        >
          <div className="icon-container">
            {playlist.icon}
          </div>
          <h3>{playlist.title}</h3>
          <p>{playlist.description}</p>
          <div className="details">
            <span>Risk Level: {playlist.risk}</span>
            <span>Return: {playlist.return}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ThematicGrid;