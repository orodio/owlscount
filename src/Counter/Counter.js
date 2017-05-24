import React from 'react'

export default ({
  id    = "",
  hash  = "",
  title = "NO_TITLE",
  count = 0,
}) =>
  <tr>
    <td>{ id }</td>
    <td>{ hash }</td>
    <td>{ title }</td>
    <td>{ count }</td>
  </tr>
