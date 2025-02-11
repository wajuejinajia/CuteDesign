import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from "vite-plugin-eslint2";
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), eslint(), vueJsx()],
});
