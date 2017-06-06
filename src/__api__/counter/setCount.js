import { updateCounterCount } from '@orodio/counter'

export default ({
  id
}, count) =>
  updateCounterCount(id, count)
