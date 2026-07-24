import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages 배포 시 base 경로 (레포명). 로컬 dev에서는 "/"
export default defineConfig({
  plugins: [react()],
  base: "./",
});
