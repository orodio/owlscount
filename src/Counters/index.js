import React        from 'react'
import { List }     from 'immutable'
import { connect }  from 'react-redux'
import { COUNTERS } from '../__constants__/counters'
import { ORDER }    from '../__constants__/util'
import counters$    from '../__intents__/counters/get$'
import Counters     from './Counters'

export class XhrCounters extends React.Component {
  state = {
    loading: true,
  }

  componentWillMount () {
    this.mount = true
  }

  componentDidMount () {
    this.poll$ = counters$(this.props)
      .subscribe(() => this.mount && this.setState({ loading:false }))
  }

  componentWillUnmount () {
    this.mount = false
    this.poll$.unsubscribe()
  }

  render () {
    const { loading } = this.state
    const { counters } = this.props

    return <Counters
      loading={loading}
      counters={counters}
      manifest
    />
  }
}

export default connect((state) => ({
  counters: state.getIn([COUNTERS, ORDER], new List()).toJS()
}))(XhrCounters)
