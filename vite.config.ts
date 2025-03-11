import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-take-home-exercise/",
  plugins: [react()],
});
