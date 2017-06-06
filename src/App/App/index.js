import React          from 'react'
import Wrapper        from './Wrapper'
import Inner          from './Inner'
import Title          from '../../CountersTitle'
import NewCounterForm from '../../NewCounterForm'
import Counters       from '../../Counters'

export default _props =>
  <Wrapper>
    <Inner>
      <Title/>
      <NewCounterForm/>
      <Counters/>
    </Inner>
  </Wrapper>
