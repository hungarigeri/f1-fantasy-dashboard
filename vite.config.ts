import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile"; // Bring it back!

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [tailwindcss(), react(), viteSingleFile()], // viteSingleFile goes at the end
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});