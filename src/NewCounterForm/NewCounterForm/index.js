import React         from 'react'
import Form          from './Form'
import Input         from './Input'
import Button        from './Button'
import Error         from './Error'
import createCounter from '../../__intents__/counter/create'

export default class NewCounterForm extends React.Component {
  state = {
    processing: false,
    title:      "",
    errorMsg:   "",
  }

  componentWillMount   () { this.mount = true }
  componentWillUnmount () { this.mount = false }

  onTitleChange = e => {
    const title = e.target.value
    this.mount && this.setState({ title })
  }

  onSubmit = e => {
    if (e) e.preventDefault()

    this.mount && this.setState({
      errorMsg: "",
      processing: true,
    })

    createCounter(this.state)
      .then(() => this.mount && this.setState({
        errorMsg:""
      }))
      .catch(({ msg }) => this.mount && this.setState({
        errorMsg:msg
      }))
      .then(() => this.mount && this.setState({
        processing: false,
        title:      "",
      }))
      .then(() => this.mount && this.$title.focus())
  }

  render () {
    const { onTitleChange, onSubmit } = this
    const { title, processing, errorMsg } = this.state

    return <div>
      <Form onSubmit={ onSubmit }>
        <Input autoFocus innerRef={ $ => this.$title = $ } value={ title } onChange={  onTitleChange }/>
        { processing
            ? <Button disabled>Adding...</Button>
            : <Button onClick={ onSubmit }>Add</Button>
        }
      </Form>
      <Error>{ errorMsg }</Error>
    </div>
  }
}
