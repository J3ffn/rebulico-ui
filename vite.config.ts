import { defineConfig } from 'vite'
import tsconfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    parserConfig(id) {
      if (id.endsWith(".ts")) return { syntax: "typescript", tsx: true };
      if (id.endsWith(".tsx")) return { syntax: "typescript", tsx: true };
    },
  }), tsconfigPaths()],
  resolve: {
    alias: {
      "@": "./"
    },
  },
  base: "/",
  envDir: "./"
});
