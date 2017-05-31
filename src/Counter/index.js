import React   from 'react'
import Counter from './Counter'
import {
  counter as getCounter,
  delCounter,
} from '@orodio/counter'

export default class XhrCounter extends React.Component {
  state = {
    loading: true,
    deleting: false,
    title: "",
    count: 0,
  }

  componentWillMount () {
    this.mount = true
  }

  componentDidMount () {
    this.getCounter()
  }

  componentWillUnmount () {
    this.mount = false
  }

  componentWillReceiveProps (props) {
    if (this.props.hash !== props.hash) this.getCounter()
  }

  getCounter () {
    getCounter(this.props.id)
      .then(res => this.mount && this.setState({
        ...res.counter,
        loading: false,
      }))
  }

  onDel = () => {
    this.mount && this.setState({ deleting:true })
    delCounter(this.props.id)
  }

  render () {
    const { onDel } = this
    const { loading, deleting, title, count } = this.state

    if (deleting) return <tr><td>deleting</td></tr>

    return <Counter
      loading={ loading }
      deleting={ deleting }
      onDel={ onDel }
      title={ title }
      count={ count }
    />
  }
}
