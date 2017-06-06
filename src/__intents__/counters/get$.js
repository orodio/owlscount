import { dispatch }     from '../../store'
import get$             from '../../__api__/counters/get$'
import { COUNTERS_SET } from '../../__constants__/counters'

export default (...args) =>
  get$(...args)
    .do(order => dispatch({
      type: COUNTERS_SET,
      order,
    }))
