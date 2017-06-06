import React      from 'react'
import Row        from './Row'
import HoverGroup from './HoverGroup'
import Button     from './Button'
import Title      from './Title'
import Count      from './Count'
import Loading    from './Loading'


export default ({
  loading  = false,
  deleting = false,
  title   = "",
  count   = 0,
  onDel,
  onDec,
  onInc,
}) => {
  if (loading) return <Loading/>

  const isNegative = count < 0

  return <Row deleting={deleting} bad={isNegative} className="HoverGroup-parent">
    <Title deleting={deleting}>{ title }</Title>
    <Count>{ count }</Count>

    { deleting || <HoverGroup>
        <Button onClick={ onDec }>&#45;</Button>
        <Button onClick={ onInc }>&#43;</Button>
        <Button onClick={ onDel } bad>&#215;</Button>
      </HoverGroup>
    }
  </Row>
}
