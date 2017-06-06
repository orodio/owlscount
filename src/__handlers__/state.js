import { Map }      from 'immutable'
import { Manifest } from '../__types__/manifest'
import { COUNTERS } from '../__constants__/counters'

export default new Map({
  [COUNTERS]: new Manifest(),
})
