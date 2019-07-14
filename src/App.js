import React                              from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import CreateIncident                 from './pages/CreateIncident'
import Home                           from './pages/Home'
import { Header }                         from './components/Header'
import { StateConsumer } from 'new-redux/stateContext'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header/>
        <div>
          <Switch>
            <Route exact path='/home' render={() => (
              <StateConsumer>
                {({ state, dispatch }) => {
                  return (
                    <Home state={state} dispatch={dispatch} />
                  )
                }}
              </StateConsumer>
            )}/>
            <Route path='/create'  render={() => (
              <StateConsumer>
                {({ state, dispatch }) => <CreateIncident state={state} dispatch={dispatch} />}
              </StateConsumer>
            )}/>
            <Route render={() => <Redirect to='/home' />} />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
