import { dispatch }    from '../../store'
import get             from '../../__api__/counter/get'
import { COUNTER_SET } from '../../__constants__/counter'

export default (...args) =>
  get(...args)
    .then(counter => {
      dispatch({
        type: COUNTER_SET,
        id:   counter.get('id'),
        counter,
      })
      return counter
    })
