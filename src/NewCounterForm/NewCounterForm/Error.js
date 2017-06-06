import styled        from 'styled-components'
import { generator } from 'uigradients'

export default styled.div`
  font-size:13px;
  line-height:34px;
  text-align:center;
  margin-bottom:13px;
  display: ${ p => p.children ? "flex" : "none" };
  justify-content:center;
  align-items:center;
  font-weight:bold;
  ${generator({gradient: 'sylvia'})}
  color:white;
  border-radius:2px;
`
