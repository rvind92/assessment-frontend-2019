import React from 'react'
import { acknowledgeIncident, assignIncident, resolveIncident, deleteIncident } from '../actions'

const incidentStyle = (status) => {
  return {
    ribbon: status === 'Created' ? 'bg-light' : (status === 'Acknowledged' ? 'text-white bg-primary' : 'text-white bg-success'),
    border: status === 'Created' ? 'border-dark' : (status === 'Acknowledged' ? 'border-primary' : 'border-success'),
    acknowledgeButton: ['Acknowledged', 'Resolved'].includes(status) ? true : false,
    resolvedButton: ['Resolved'].includes(status) ? true : false,
  }
}

const renderButtons = (dispatch, id, acknowledgeButton, resolvedButton) => {
  return (
    <div>
      <button
        disabled={acknowledgeButton}
        className='btn btn-primary'
        style={{ marginRight: '5px' }}
        onClick={e => dispatch(acknowledgeIncident(id))}
      >
        Acknowledge
      </button>
      <button
        disabled={resolvedButton}
        className='btn btn-success'
        style={{ marginRight: '5px' }}
        onClick={e => dispatch(resolveIncident(id))}
      >
        Resolve
      </button>
      <button
        className='btn btn-danger'
        style={{ marginRight: '5px' }}
        onClick={e => dispatch(deleteIncident(id))}
      >
        Delete
      </button>
    </div>
  )
}

const Incident = ({ title, description, created, updated, users, status, assignee, id, dispatch }) => {
  const { ribbon, border, acknowledgeButton, resolvedButton } = incidentStyle(status)

  const handleChange = (e) => {
    dispatch(assignIncident({ assignee: e.target.value, _id: id }))
  }

  return (
    <div className={`card ${border}`} style={{ marginBottom: '10px' }}>
      <h5 className={`card-header ${ribbon}`}>{ title }</h5>
      <div className='card-body'>

        <h5 className='card-title'><u>Description:</u></h5>
        <div className='card'>
          <div className='card-body'><h5><i>{ description }</i></h5></div>
        </div>

        <p className='card-text' style={{ marginTop: '5px' }}>
          Assignee:
          <select value={assignee} name='assignee' className='form-control' onChange={handleChange}>
            {users.map((user, i) => {
              return (
                <option disabled={user.role === 'Engineer'} key={i} value={user.email}>{user.name}</option>
              )
            })}
          </select>
        </p>

        <small className='text-muted'>
          <div>
            <cite>Created: { new Date(parseInt(created)).toString() }</cite>
          </div>
          <div>
            <cite>Update: { new Date(parseInt(updated)).toString() }</cite>
          </div>
        </small>

        <div className='row' style={{ marginTop: '5px', marginLeft: '0px' }}>
          {renderButtons(dispatch, id, acknowledgeButton, resolvedButton)}
        </div>

      </div>
      <div className={`card-footer ${ribbon}`}>Status: { status }</div>
    </div>
  )
}

export default Incident
