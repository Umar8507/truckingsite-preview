import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // This 'base' ensures that all your CSS, JS, and images 
  // load correctly from the subfolder on GitHub Pages.
  base: "/truckingsite-preview/", 
})