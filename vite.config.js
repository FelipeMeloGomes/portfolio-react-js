import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteImagemin from "vite-plugin-imagemin";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        cssCodeSplit: false,
        minify: true,
        treeshake: true,
        optimizeDeps: {
            include: ["linked-dep"],
        },
        commonjsOptions: {
            include: [/linked-dep/, /node_modules/],
        },
        rollupOptions: {
            output: {
                manualChunks: (id) => {
                    if (id.includes("node_modules")) {
                        return "vendor";
                    }
                },
            },
        },
    },
    plugins: [react(), viteImagemin()],
});
