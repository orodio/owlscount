import { dispatch }          from '../../store'
import setCount              from '../../__api__/counter/setCount'
import { COUNTER_SET_COUNT } from '../../__constants__/counter'

export default ({ id }, count) => {
  dispatch({
    type: COUNTER_SET_COUNT,
    id,
    count,
  })

  return setCount({ id }, count)
}
