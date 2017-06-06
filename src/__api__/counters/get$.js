import 'rxjs/add/operator/map'

import { counters$ }    from '@orodio/counter'
import { List }         from 'immutable'
import { ManifestItem } from '../../__types__/manifest'

export default () =>
  counters$()
    .map(res => res.counters)
    .map(counters => counters.map(counter => new ManifestItem(counter)))
    .map(counters => new List(counters))
