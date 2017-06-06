import styled from 'styled-components'

const textDecoration = ({
  deleting = false,
}) => {
  if (deleting) return "line-through"
  return "none"
}

export default styled.div`
  flex:1;
  font-weight:bold;
  text-decoration:${ textDecoration };
`
