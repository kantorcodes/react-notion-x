import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'build',
  target: 'es6',
  platform: 'browser',
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  minify: true,
  shims: false
})
