import React from 'react'
import Loading from './Loading'

const Title = ({ children }) =>
  <td className="Counter_title">{ children }</td>

const Count = ({ children }) =>
  <td className="Counter_count">{ children }</td>

const noop = () => {
  console.log('NO-OP')
}

export default ({
  loading = false,
  title   = "",
  count   = 0,
  onDel   = noop,
}) => {
  if (loading) return <Loading/>

  return <tr>
    <td>
      <button onClick={onDel}>x</button>
    </td>
    <Title>{ title }</Title>
    <Count>{ count }</Count>
  </tr>
}
