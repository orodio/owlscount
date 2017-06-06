import styled from 'styled-components'

const color = ({
  bad     = false,
  loading = false,
}) => {
  if (bad)     return "tomato"
  if (loading) return "rgba(23,23,23,0.2)"
  return "#232323"
}

const opacity = ({
  deleting = false,
}) => {
  if (deleting) return "0.5"
  return "1"
}

export default styled.div`
  display:flex;
  position:relative;
  font-size:13px;
  line-height:34px;
  padding:0 13px;
  border-radius:2px;
  opacity:${ opacity };
  color:${ color };

  &:nth-child(odd) {
    background:rgba(23,23,23,0.1);
  }

`
