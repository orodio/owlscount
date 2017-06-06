import styled from 'styled-components'
import { generator } from 'uigradients'

const color = ({
  bad = false,
}) => {
  if (bad) return "tomato"
  return "purple"
}

const background = ({
  bad = false,
}) => {
  if (bad) return generator({ gradient: 'sylvia' })
  return generator({ gradient: 'twitch' })
}

export default styled.button`
  color:${ color };
  border:1px solid currentColor;
  font-size:13px;
  font-weight:bold;
  line-height:24px;
  min-width:24px;
  text-align:center;
  cursor:pointer;
  margin:5px 5px 5px 0;
  border-radius:24px;
  background:none;
  display:flex;
  justify-content:center;
  align-items:center;

  &:hover, :focus {
    color:white;
    ${ background }
    border:1px solid ${ color };
  }

  &:active {
    transform:matrix(0.99,0,0,0.99,0,1);
  }
`
