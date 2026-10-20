import { resolve } from "node:path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      tsconfigPath: "./tsconfig.app.json",
      compilerOptions: { rootDir: "src" },
      outDirs: "lib/types",
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(import.meta.dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, "src/index.ts"),
      },
      name: "core",
      fileName: (format, entryName) => `${entryName}.${format}.js`,
    },
    outDir: "lib",
    sourcemap: true,
    cssCodeSplit: true,
    rollupOptions: {
      output: [
        {
          format: "es",
          globals: {
            react: "react",
          },
          dir: "lib/esm",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
          banner: (chunk) => {
            // Only add 'use client' to .tsx files, not .ts files
            if (chunk.facadeModuleId && chunk.facadeModuleId.endsWith(".tsx")) {
              return `'use client';`
            }
            return ""
          },
        },
        {
          format: "cjs",
          globals: {
            react: "react",
          },
          dir: "lib/cjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          entryFileNames: ({ name: fileName }) => `${fileName}.js`,
          banner: (chunk) => {
            // Only add 'use client' to .tsx files, not .ts files
            if (chunk.facadeModuleId && chunk.facadeModuleId.endsWith(".tsx")) {
              return `'use client';`
            }
            return ""
          },
        },
      ],
    },
  },
})
