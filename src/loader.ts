import { registerSync } from 'unloader'
import Oxc from 'unplugin-oxc/unloader'

registerSync({
  plugins: [Oxc() as any],
})
