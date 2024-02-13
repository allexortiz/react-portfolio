import { defineConfig } from 'vite'; // Import the defineConfig function from Vite
import react from '@vitejs/plugin-react'; // Import the Vite plugin for React

// Configure Vite
export default defineConfig({
  plugins: [react()], // Use the React plugin for Vite
  server: {
    port: 3000, // Set the port number for the development server
    open: true, // Open the default browser when the development server starts
  },
});