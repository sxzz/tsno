#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import process from 'node:process'
import { fileURLToPath } from 'node:url'

const loaderPath = fileURLToPath(new URL('./loader.js', import.meta.url))
spawnSync(
  process.execPath,
  ['--import', loaderPath, ...process.argv.slice(2)],
  {
    stdio: 'inherit',
    env: { ...process.env },
  },
)
