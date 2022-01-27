import { expose } from '@chainlink/ea-bootstrap'
import { makeExecute } from './adapter'
import { makeConfig, NAME } from './config'
import limits from './config/limits.json'

const { server } = expose(NAME, makeExecute(), undefined, undefined, limits)
export { NAME, makeExecute, makeConfig, server }
