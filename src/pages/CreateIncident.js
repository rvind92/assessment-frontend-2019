import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { createIncident, getUsers } from '../actions'

class CreateIncident extends Component {
  state = {
    title: '',
    description: '',
    assignee: '',
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(createIncident(this.state))
    this.props.history.push('/home')
  }

  componentDidMount() {
    const { dispatch } = this.props
    if(this.props.state.users.length === 0) dispatch(getUsers())
  }

  componentDidUpdate(prevProps, prevState) {
    const { state } = this.props
    if(state.users.length > 0 && this.state.assignee === '') {
      this.setState({ assignee: state.users[0].email })
    }
  }

  render() {
    return (
      <div className='container'>
        <h3>Create Incident</h3>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input name='title' type='text' className='form-control' placeholder='Enter title' onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description</label>
            <input name='description' type='text' className='form-control' placeholder='Enter description' onChange={this.handleChange} />
          </div>
          <div className='form-group'>
            <label htmlFor='assignee'>Assignee</label>
            <select name='assignee' className='form-control' onChange={this.handleChange}>
              {this.props.state.users.map((user, i) => {
                return (
                  <option key={i} value={user.email}>{user.email}</option>
                )
              })}
            </select>
          </div>
          <button type='submit' className='btn btn-primary booking-button'>Submit</button>
        </form>
      </div>
    )
  }
}

export default withRouter(CreateIncident)
