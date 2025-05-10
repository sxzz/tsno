import { register } from 'unloader'

register(new URL('./unloader.js', import.meta.url).href)
