import { defineConfig } from 'vite';
import { tanstackStart } from '@tanstack/react-start/plugin/vite';
import { nitro } from 'nitro/vite';
import tailwindcss from '@tailwindcss/vite'; // <-- 1. Ensure this is imported
import viteReact from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tailwindcss(), // <-- 2. Place this right at the top of the list!
    tanstackStart(), 
    nitro(), 
    viteReact(), 
    tsconfigPaths()
  ],
});