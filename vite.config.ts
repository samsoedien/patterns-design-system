/// <reference types="vitest/config" />
import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import pkg from "./package.json" with { type: "json" };

// https://vite.dev/config/
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [react(), tailwindcss(), dts({
    tsconfigPath: "./tsconfig.app.json",
    compilerOptions: {
      rootDir: "src"
    },
    outDirs: "lib/types"
  })],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src")
    }
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts")
      },
      name: "core",
      fileName: (format, entryName) => `${entryName}.${format}.js`
    },
    outDir: "lib",
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      external: (id: string) => Object.keys(pkg.dependencies).some(dep => id === dep || id.startsWith(`${dep}/`)),
      output: [{
        format: "es",
        globals: {
          react: "react"
        },
        dir: "lib/esm",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({
          name: fileName
        }) => `${fileName}.js`,
        banner: chunk => {
          // Only add 'use client' to .tsx files, not .ts files
          if (chunk.facadeModuleId && chunk.facadeModuleId.endsWith(".tsx")) {
            return `'use client';`;
          }
          return "";
        }
      }, {
        format: "cjs",
        globals: {
          react: "react"
        },
        dir: "lib/cjs",
        preserveModules: true,
        preserveModulesRoot: "src",
        entryFileNames: ({
          name: fileName
        }) => `${fileName}.js`,
        banner: chunk => {
          // Only add 'use client' to .tsx files, not .ts files
          if (chunk.facadeModuleId && chunk.facadeModuleId.endsWith(".tsx")) {
            return `'use client';`;
          }
          return "";
        }
      }]
    }
  },
  test: {
    projects: [{
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        }
      }
    }]
  }
});