import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import ts from 'rollup-plugin-ts';

export default defineConfig([
  {
    input: 'src/browser.ts',
    output: [
      {
        file: 'dist/browser/index.js',
        format: 'umd',
        exports: 'named',
        name: 'ubigeo',
      },
      {
        file: 'dist/browser/index.min.js',
        format: 'umd',
        exports: 'named',
        name: 'ubigeo',
        plugins: [terser()],
      },
    ],
    plugins: [ts()],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'named',
      },
      {
        file: 'dist/index.mjs',
        format: 'esm',
        exports: 'named',
      },
    ],
    plugins: [ts()],
  },
]);
