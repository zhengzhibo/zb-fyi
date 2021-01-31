import { defineConfig } from 'vite'
import { resolve } from 'path';

import vue from '@vitejs/plugin-vue'
import plugin, { Mode } from 'vite-plugin-markdown'
import svgLoader from 'vite-svg-loader'

/**
 * @type { import('vite').UserConfig }
 */

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir);
}

export default defineConfig({
  alias: [
    {
      find: /^\/@\//,
      replacement: pathResolve('src') + '/',
    },
  ],
  plugins: [vue(), svgLoader(), plugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })]
})
