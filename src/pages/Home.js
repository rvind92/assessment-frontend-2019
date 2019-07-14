import React, { Component } from 'react'
import Incident from '../components/Incident'
import Filter from '../components/Filter'
import { getIncidents, getUsers } from '../actions'
import _ from 'lodash'

export default class Home extends Component {
  state = {
    incidents: [],
    incidentsList: []
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getUsers())
    if(this.state.incidents.length === 0) {
      if(this.props.state.incidents.length === 0) {
        dispatch(getIncidents())
      } else {
        this.renderIncidents(this.props.state.incidents)
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { state: previousState } = prevProps
    const { state: newState } = this.props

    if(previousState.incidents.length !== newState.incidents.length) {
      this.renderIncidents(newState.incidents)
    } else if(previousState.incidents.length === newState.incidents.length) {
      for(let i = 0; i < previousState.incidents.length; i++) {
        if(!_.isEqual(previousState.incidents[i], newState.incidents[i])) {
          this.renderIncidents(newState.incidents)
          break
        }
      }
    }
  }

  sorter = (incidents, sort) => {
    this.setState({
      incidents: sort.some(s => s !== 'Default') ? incidents : this.props.state.incidents },
      () => this.renderIncidents(this.state.incidents)
    )
  }

  renderIncidents = (incidents) => {
    const incidentsList = incidents.map(incident => (
      <Incident
        key={incident._id}
        id={incident._id}
        title={incident.title}
        description={incident.description}
        users={this.props.state.users}
        assignee={incident.assignee}
        status={incident.status}
        created={incident.createdAt}
        updated={incident.updatedAt}
        dispatch={this.props.dispatch}
      />
    ))

    this.setState({ incidents, incidentsList })
  }

  render() {
    const { incidentsList, incidents } = this.state
    return (
      <div className='container'>
        <Filter incidents={incidents} sorter={this.sorter} />
        {incidentsList.length > 0 ? incidentsList : <h3><center>Nothing to display</center></h3>}
      </div>
    )
  }
}
