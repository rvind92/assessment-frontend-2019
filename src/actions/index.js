import { request as GraphClient } from 'graphql-request'

// incident action creators
export const GET_INCIDENTS = 'get_incidents'
export const CREATE_INCIDENT = 'create_incidents'
export const ACKNOWLEDGE_INCIDENT = 'acknowledge_incident'
export const ASSIGN_INCIDENT = 'assign_incident'
export const RESOLVE_INCIDENT = 'resolve_incident'
export const DELETE_INCIDENT = 'delete_incident'

// user action creators
export const GET_USERS = 'get_users'

// GraphQL URL
const BASE_URL = 'http://localhost:3000/graphql'

export const getIncidents = () => async dispatch => {
  dispatch({ type: GET_INCIDENTS })
  const query = `{
    incidents {
      _id
      title
      description
      assignee
      status
      createdAt
      updatedAt
    }
  }`

  try {
    const payload = await GraphClient(BASE_URL, query)
    dispatch({ type: GET_INCIDENTS, payload })
  } catch (e) {
    dispatch({ type: GET_INCIDENTS, payload: e })
  }
}

export const createIncident = ({ title, description, assignee }) => async dispatch => {
  dispatch({ type: CREATE_INCIDENT })
  const mutation = `mutation {
    createIncident(title: "${title}", description: "${description}", assignee: "${assignee}") {
      _id
      title
      description
      assignee
      status
      createdAt
      updatedAt
    }
  }`

  try {
    const payload = await GraphClient(BASE_URL, mutation)
    dispatch({ type: CREATE_INCIDENT, payload })
  } catch (e) {
    dispatch({ type: CREATE_INCIDENT, payload: e })
  }
}

export const acknowledgeIncident = (_id) => async dispatch => {
  dispatch({ type: ACKNOWLEDGE_INCIDENT })
  const mutation = `mutation {
    acknowledgeIncident(_id: "${_id}") {
      _id
      title
      description
      assignee
      status
      createdAt
      updatedAt
    }
  }`

  try {
    const payload = await GraphClient(BASE_URL, mutation)
    dispatch({ type: ACKNOWLEDGE_INCIDENT, payload })
  } catch (e) {
    dispatch({ type: ACKNOWLEDGE_INCIDENT, payload: e })
  }
}

export const assignIncident = ({ assignee, _id }) => async dispatch => {
  dispatch({ type: ASSIGN_INCIDENT })
  const mutation = `mutation {
    assignIncident(assignee: "${assignee}", _id: "${_id}") {
      _id
      title
      description
      assignee
      status
      createdAt
      updatedAt
    }
  }`

  try {
    const payload = await GraphClient(BASE_URL, mutation)
    dispatch({ type: ASSIGN_INCIDENT, payload })
  } catch (e) {
    dispatch({ type: ASSIGN_INCIDENT, payload: e })
  }
}

export const resolveIncident = (_id) => async dispatch => {
  dispatch({ type: RESOLVE_INCIDENT })
  const mutation = `mutation {
    resolveIncident(_id: "${_id}") {
      _id
      title
      description
      assignee
      status
      createdAt
      updatedAt
    }
  }`

  try {
    const payload = await GraphClient(BASE_URL, mutation)
    dispatch({ type: RESOLVE_INCIDENT, payload })
  } catch (e) {
    dispatch({ type: RESOLVE_INCIDENT, payload: e })
  }
}

export const deleteIncident = (_id) => async dispatch => {
  dispatch({ type: DELETE_INCIDENT })
  const mutation = `mutation {
    deleteIncident(_id: "${_id}") {
      _id
    }
  }`

  try {
    const payload = await GraphClient(BASE_URL, mutation)
    dispatch({ type: DELETE_INCIDENT, payload })
  } catch (e) {
    dispatch({ type: DELETE_INCIDENT, payload: e })
  }
}

export const getUsers = () => async dispatch => {
  dispatch({ type: GET_USERS })
  const query = `{
    users {
      _id
      name
      email
      role
    }
  }`

  try {
    const payload = await GraphClient(BASE_URL, query)
    dispatch({ type: GET_USERS, payload })
  } catch (e) {
    dispatch({ type: GET_USERS, payload: e })
  }
}
