import { COUNTERS } from '../../__constants__/counters'
import { ORDER }    from '../../__constants__/util'

export default (state, { order }) =>
  state.setIn([COUNTERS, ORDER], order)
