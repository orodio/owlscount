import React        from 'react'
import Counter      from './Counter'
import getCounter   from '../__intents__/counter/get'
import setCount     from '../__intents__/counter/setCount'
import delCounter   from '../__intents__/counter/del'
import { COUNTERS } from '../__constants__/counters'
import { KNOWN }    from '../__constants__/util'
import { connect }  from 'react-redux'

class XhrCounter extends React.Component {
  state = {
    loading:  true,
    deleting: false,
  }

  componentWillMount   () { this.mount = true }
  componentWillUnmount () { this.mount = false }

  componentDidMount () {
    this.getCounter()
  }

  componentWillReceiveProps (props) {
    if (this.props.hash !== props.hash) this.getCounter()
  }

  getCounter () {
    getCounter(this.props)
      .then(() => this.mount && this.setState({ loading:false }))
  }

  onDel = () => {
    this.mount && this.setState({ deleting:true })
    delCounter(this.props)
  }

  incBy = delta => e => {
    if (e) e.preventDefault()
    setCount(this.props, this.props.count + delta)
  }

  render () {
    const { onDel, incBy } = this
    const { loading, deleting } = this.state
    const { title, count } = this.props

    return <Counter {...{
      loading,
      deleting,
      title,
      count,
      onDel,
      onDec: incBy(-1),
      onInc: incBy(1),
    }}/>
  }
}

export default connect((state, { id }) => ({
  title: state.getIn([COUNTERS, KNOWN, id, "title"], ""),
  count: state.getIn([COUNTERS, KNOWN, id, "count"], 0),
}))(XhrCounter)
