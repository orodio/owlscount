import React    from 'react'
import Counters from './Counters'
import {
  counters$ as getCounters$,
} from '@orodio/counter'

export default class XhrCounters extends React.Component {
  state = {
    loading: true,
    counters: [],
  }

  componentWillMount () {
    this.mount = true
  }

  componentDidMount () {
    this.poll$ = getCounters$()
      .do(res => this.mount && this.setState({
        loading:false,
        counters: res.counters,
      }))
      .subscribe()
  }

  componentWillUnmount () {
    this.mount = false
    this.poll$unsubscribe()
  }

  render () {
    const { loading, counters } = this.state
    if (loading) return <div>Loading...</div>
    return <Counters manifest counters={counters}/>
  }
}
