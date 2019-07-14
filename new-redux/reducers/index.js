import _ from 'lodash'
import {
  GET_INCIDENTS,
  CREATE_INCIDENT,
  ACKNOWLEDGE_INCIDENT,
  ASSIGN_INCIDENT,
  RESOLVE_INCIDENT,
  DELETE_INCIDENT,
  GET_USERS
} from '../actions'

const reducer = (state = {}, { type, payload }) => {
  if(!payload || payload instanceof Error) return state
  switch (type) {
    case GET_INCIDENTS: {
      const { incidents: payloadIncidents } = payload
      const { incidents: currentIncidents } = state
      const incidents = [ ...currentIncidents, ...payloadIncidents ]
      const newState = { ...state, incidents }
      return newState
    }
    case CREATE_INCIDENT: {
      const { createIncident } = payload
      const { incidents: currentIncidents } = state
      const incidents = [ ...currentIncidents, createIncident ]
      const newState = { ...state, incidents }
      return newState
    }
    case ACKNOWLEDGE_INCIDENT: {
      const { acknowledgeIncident } = payload
      const { incidents: currentIncidents } = state
      const newState = _.cloneDeep(state)
      const indexToUpdate = currentIncidents.findIndex((incident) => acknowledgeIncident._id === incident._id)
      newState.incidents[indexToUpdate] = acknowledgeIncident
      return newState
    }
    case ASSIGN_INCIDENT: {
      const { assignIncident } = payload
      const { incidents: currentIncidents } = state
      const newState = _.cloneDeep(state)
      const indexToUpdate = currentIncidents.findIndex((incident) => assignIncident._id === incident._id)
      newState.incidents[indexToUpdate] = assignIncident
      return newState
    }
    case RESOLVE_INCIDENT: {
      const { resolveIncident } = payload
      const { incidents: currentIncidents } = state
      const newState = _.cloneDeep(state)
      const indexToUpdate = currentIncidents.findIndex((incident) => resolveIncident._id === incident._id)
      newState.incidents[indexToUpdate] = resolveIncident
      return newState
    }
    case GET_USERS: {
      const { users: payloadUsers } = payload
      const { users: stateUsers } = state
      const users = [ ...stateUsers, ...payloadUsers ]
      const newState = { ...state, users }
      return newState
    }
    case DELETE_INCIDENT: {
      const { deleteIncident: { _id } } = payload
      let newState = _.cloneDeep(state)
      newState.incidents = newState.incidents.filter(incident => incident._id !== _id)
      return newState
    }
    default:
      return state
  }
}

export { reducer }
