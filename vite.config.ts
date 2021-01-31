import { defineConfig } from 'vite'
import path from 'path'

import vue from '@vitejs/plugin-vue'
import plugin, { Mode } from 'vite-plugin-markdown'
import svgLoader from 'vite-svg-loader'

/**
 * @type { import('vite').UserConfig }
 */

export default defineConfig({
  alias: {
    '/@/': path.resolve(__dirname, './src')
  },
  plugins: [vue(), svgLoader(), plugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })]
})
