import React      from 'react'
import Loading    from './Loading'
import Empty      from './Empty'
import Wrapper    from './Wrapper'
import Inner      from './Inner'
import RawCounter from '../../Counter/Counter'
import XhrCounter from '../../Counter'

export default ({
  loading  = false,
  manifest = false,
  counters = [],
}) => {
  if (loading)          return <Loading/>
  if (!counters.length) return <Empty/>

  const Counter = manifest
    ? XhrCounter
    : RawCounter

  return <Wrapper>
    <Inner>
      { counters.map(d => <Counter key={d.id} {...d}/>) }
    </Inner>
  </Wrapper>
}
