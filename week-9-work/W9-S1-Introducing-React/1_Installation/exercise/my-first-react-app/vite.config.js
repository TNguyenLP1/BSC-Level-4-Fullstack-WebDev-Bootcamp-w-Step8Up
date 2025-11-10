import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// 1. Vite uses native ES modules and the browser’s own module graph for instant server start, avoiding the bundling 
// step required by CRA’s Webpack.

// 2. Vite compiles source files on demand using esbuild, which is written in Go and significantly faster than 
// JavaScript-based bundlers.

// 3. Vite performs differential builds—only changed modules are recompiled during development—eliminating full 
// rebuild cycles.