import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { nitro } from 'nitro/vite'; // <-- Add this line
import viteReact from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tanstackStart(), 
    nitro(), // <-- Add this line instead of the netlify() plugin
    viteReact(), 
    tsconfigPaths()
  ],
});