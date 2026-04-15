import create from 'zustand';

// Define the Zustand store interface
interface AeroState {
    mode: 'beginner' | 'pro';
    setMode: (mode: 'beginner' | 'pro') => void;
    isAuthenticated: boolean;
    setAuthentication: (auth: boolean) => void;
}

// Create the Zustand store
const useAeroStore = create<AeroState>((set) => ({
    mode: 'beginner',
    setMode: (mode) => set({ mode }),
    isAuthenticated: false,
    setAuthentication: (auth) => set({ isAuthenticated: auth })
}));

export default useAeroStore;