import { COUNTERS } from '../../__constants__/counters'
import { KNOWN }    from '../../__constants__/util'

export default (state, { id, counter }) =>
  state.setIn([COUNTERS, KNOWN, id], counter)
