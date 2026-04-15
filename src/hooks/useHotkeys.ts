'use client';

import { useEffect } from 'react';

interface HotkeysConfig {
  [key: string]: {
    action: () => void;
    description: string;
  };
}

/**
 * Custom hook for managing keyboard shortcuts and hotkeys
 * Supports Cmd/Ctrl key combinations for cross-platform compatibility
 */
export const useHotkeys = (hotkeys: HotkeysConfig) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Build the key combination string
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifierKey = isMac ? event.metaKey : event.ctrlKey;

      // Check for Cmd/Ctrl + K (search palette)
      if (modifierKey && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        hotkeys['cmd+k']?.action();
      }

      // Check for Cmd/Ctrl + B (focus buy input)
      if (modifierKey && event.key.toLowerCase() === 'b') {
        event.preventDefault();
        hotkeys['cmd+b']?.action();
      }

      // Check for Cmd/Ctrl + Alt + P (toggle pro mode)
      if (modifierKey && event.altKey && event.key.toLowerCase() === 'p') {
        event.preventDefault();
        hotkeys['cmd+alt+p']?.action();
      }

      // Check for Cmd/Ctrl + Alt + B (toggle beginner mode)
      if (modifierKey && event.altKey && event.key.toLowerCase() === 'b') {
        event.preventDefault();
        hotkeys['cmd+alt+b']?.action();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [hotkeys]);
};

export default useHotkeys;