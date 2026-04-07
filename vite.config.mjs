import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/vacuum-of-the-void.mjs"),
      formats: ["es"],
      name: "vacuum-of-the-void",
      fileName: () => "vacuum-of-the-void.js"
    },
    rollupOptions: {
      // Foundry provides these globals; don't bundle them.
      external: [],
      output: {
        entryFileNames: "vacuum-of-the-void.js"
      }
    },
    outDir: "dist",
    emptyOutDir: true
  }
});

