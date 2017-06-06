import initState from './state'
import noop  from './__lib__/noop'

import {
  COUNTERS_SET,
} from '../__constants__/counters'

import countersSet from './counters/set'

import {
  COUNTER_SET,
  COUNTER_SET_COUNT,
} from '../__constants__/counter'

import counterSet      from './counter/set'
import counterSetCount from './counter/setCount'

export default (state = initState, event) => ({

  [COUNTERS_SET]: countersSet,

  [COUNTER_SET]:       counterSet,
  [COUNTER_SET_COUNT]: counterSetCount,

}[event.type] || noop)(state, event)
