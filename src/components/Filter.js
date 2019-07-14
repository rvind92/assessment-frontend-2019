import React, { Component } from 'react'
import { quickSort } from '../utils/quicksort'

const selectors = {
  'Newest: Created': 'createdAt',
  'Oldest: Created': 'createdAt',
  'Newest: Updated': 'updatedAt',
  'Oldest: Updated': 'updatedAt'
}

class Filter extends Component {
  state = {
    isOpen: {
      'time': false,
      'users': false
    },
    selections: {
      'time': ['Default', 'Newest: Created', 'Oldest: Created', 'Newest: Updated', 'Oldest: Updated'],
      'users': ['Default']
    },
    currentSelection: {
      'time': '',
      'users': ''
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      selections: {
        ...prevState.selections,
        users: ['Default', ...nextProps.incidents.map(i => i.assignee)] }
      }
  }

  toggleOpen = (k) => {
    this.setState(state => ({
      isOpen: {
        ...state.isOpen,
        [k]: !state.isOpen[k]
      }
    }))
  }

  renderDropdowns = () => {
    const { selections, currentSelection, isOpen } = this.state
    const keys = Object.keys(selections)

    return keys.map((k, i) => {
      const menuClass = `dropdown-menu ${isOpen[k] ? 'show' : ''}`
      return (
        <div key={i} className='col-md-3 col-xs-3'>
          <div className='dropdown' onClick={e => this.toggleOpen(k)}>
            <button
              className='btn btn-primary dropdown-toggle'
              style={{ width: '100%' }}
              type='button'
              id='dropdownMenuButton'
              data-toggle='dropdown'
              aria-haspopup='true'
            >
              {`${k[0].toUpperCase()}${k.slice(1)}`}: { currentSelection[k] }
            </button>
            <div className={menuClass} aria-labelledby='dropdownMenuButton'>
              {this.renderSelections(selections, k)}
            </div>
          </div>
        </div>
      )
    })
  }

  renderSelections = (selections, key) => {
    return selections[key].map((selection, i) => (
      <button key={i} className='dropdown-item' onClick={e => this.setState(state => ({
        currentSelection: {
          ...state.currentSelection,
          [key]: selection
        }
      }), () => this.applyFilter())}>
        { selection }
      </button>
    ))
  }

  applyFilter = () => {
    const { currentSelection } = this.state
    const { incidents, sorter } = this.props
    const selections = Object.values(currentSelection)

    const sortPeople = ['Default', ''].includes(selections[1]) ? incidents : incidents.filter(incident => incident.assignee === selections[1])
    const sortedIncidents = ['Default', ''].includes(selections[0]) ? sortPeople : quickSort(sortPeople, 0, incidents.length - 1, selections[0], selectors[selections[0]])

    sorter(sortedIncidents, selections)
  }

  render() {
    return (
      <div className='row' style={{ padding: '10px' }}>
        {this.renderDropdowns()}
      </div>
    )
  }
}

export default Filter
