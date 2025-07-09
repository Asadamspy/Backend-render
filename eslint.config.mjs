// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.node, // Enables Node.js globals like process, __dirname, etc.
      },
    },
    rules: {
      ...js.configs.recommended.rules, // Reuse recommended rules properly
    },
  },
]);
