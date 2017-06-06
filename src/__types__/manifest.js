import { Record, List, Map } from 'immutable'
import { ORDER, KNOWN } from '../__constants__/util'

export const ManifestItem = new Record({
  id:   "",
  hash: "",
})

export const Manifest = new Record({
  [ORDER]: new List(),
  [KNOWN]: new Map(),
})
