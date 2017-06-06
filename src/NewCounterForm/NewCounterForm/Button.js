import styled        from 'styled-components'
import { generator } from 'uigradients'

export default styled.button`
  background:transparent;
  border:1px solid purple;
  color:purple;
  font-size:13px;
  line-height:34px;
  font-weight:bold;
  padding:0 13px;
  border-radius:2px;
  cursor:pointer;

  &:hover, &:focus {
    ${generator({gradient: 'twitch'})}
    color:white;
  }

  &:active {
    transform:matrix(0.99,0,0,0.99,0,1);
  }
`
