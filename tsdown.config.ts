import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/*.ts'],
  target: 'node20.18',
  clean: true,
  dts: true,
  platform: 'node',
})
