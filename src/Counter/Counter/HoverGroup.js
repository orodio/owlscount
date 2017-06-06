import styled from 'styled-components'

export default styled.div`
  position:absolute;
  top:0;
  left:100%;
  padding-left:13px;
  display:none;

  .HoverGroup-parent:hover & {
    display:flex;
  }
`
