import { COUNTERS } from '../../__constants__/counters'
import { KNOWN }    from '../../__constants__/util'

export default (state, { id, count }) =>
  state.setIn([COUNTERS, KNOWN, id, 'count'], count)
