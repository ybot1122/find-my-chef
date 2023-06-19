import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    exclude: [...configDefaults.exclude, "node_modules/*", "build/*"],
    setupFiles: "./src/setupTests.ts",
    environment: "jsdom",
  },
});
