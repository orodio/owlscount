import React from 'react'
import Counter from '../Counter/Counter'

export default ({
  counters = [],
}) => {
  if (!counters.length) return <div>No Counters</div>

  return <table>
    <tbody>
      { counters.map(d => <Counter key={d.id} {...d}/>) }
    </tbody>
  </table>
}
