import { counter } from '@orodio/counter'
import { Counter } from '../../__types__/counter'

export default ({
  id
}) =>
  counter(id)
    .then(({ counter }) => new Counter(counter))
