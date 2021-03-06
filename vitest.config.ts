import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue'
      ]
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './__tests__/units/setup.ts'
  }
})
