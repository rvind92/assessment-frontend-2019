import React, { createContext, Component } from 'react'

const { Provider, Consumer } = createContext()

export const StateConsumer = Consumer

export class StateProvider extends Component {
  static defaultProps = {
    state: {}
  }

  state = this.props.state

  dispatch = action => {
    if (typeof action === 'function') {
      return action(this.dispatch, this.state)
    }

    const { reducers } = this.props
    const nextState = reducers.reduce((state, reducer) => reducer(state, action) || state, this.state)

    this.setState(nextState)
  }

  render () {
    return (
      <Provider value={{ state: this.state, dispatch: this.dispatch }}>
        {this.props.children}
      </Provider>
    )
  }
}
