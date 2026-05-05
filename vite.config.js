import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: "/ejercicios-js/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        exercise1: resolve(__dirname, "src/pages/exercise1.html"),
        exercise2: resolve(__dirname, "src/pages/exercise2.html"),
        exercise3: resolve(__dirname, "src/pages/exercise3.html"),
        exercise4: resolve(__dirname, "src/pages/exercise4.html"),
        exercise5: resolve(__dirname, "src/pages/exercise5.html"),
      },
    },
  },
  resolve: {
    alias: {
      // Alias principal para la carpeta src
      "@": resolve(__dirname, "./src"),

      // Alias específicos para Sass
      "@sass": resolve(__dirname, "./src/sass"),
      "@abstracts": resolve(__dirname, "./src/sass/abstracts"),
      "@components": resolve(__dirname, "./src/sass/components"),
      "@layout": resolve(__dirname, "./src/sass/layout"),
      "@themes": resolve(__dirname, "./src/sass/themes"),
      "@base": resolve(__dirname, "./src/sass/base"),
      "@pages": resolve(__dirname, "./src/sass/pages"),
      "@vendors": resolve(__dirname, "./src/sass/vendors"),
    },
  },
  css: {
    devSourcemap: true, // Facilita la depuración de Sass
    preprocessorOptions: {
      scss: {
        includePaths: [
          resolve(__dirname, "./src/sass"),
          resolve(__dirname, "./src/sass/abstracts"),
          resolve(__dirname, "./src/sass/components"),
          resolve(__dirname, "./src/sass/layout"),
          resolve(__dirname, "./src/sass/base"),
          resolve(__dirname, "./src/sass/pages"),
          resolve(__dirname, "./src/sass/themes"),
          resolve(__dirname, "./src/sass/vendors"),
        ],
      },
    },
  },
});