import createCounter from '../../__api__/counter/create'

export default ({
  title = "",
  count = 0,
}) => {
  if (title === "") return Promise.reject({ msg: "OH NO! Your Counter Needs A Title..." })
  return createCounter({ title, count })
}
