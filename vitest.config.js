// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
});
