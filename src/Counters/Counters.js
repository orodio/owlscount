import React from 'react'
import RawCounter from '../Counter/Counter'
import XhrCounter from '../Counter'

export default ({
  manifest = false,
  counters = [],
}) => {
  if (!counters.length) return <div>No Counters</div>

  const Counter = manifest
    ? XhrCounter
    : RawCounter

  return <table>
    <tbody>
      { counters
          .map(d => <Counter key={d.id} {...d}/>) }
    </tbody>
  </table>
}
