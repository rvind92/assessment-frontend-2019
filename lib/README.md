# Your state management library code should be here

Use this file to outline the methods you expose from your library along with their example usages and the explanations of what each of the methods does.

# New Redux library

This library is a simple implementation of a Redux-like state management system. It is built utilising the React Context API.

## Implementation/Setup

1. At the entry point of your app (index.js for example), import the StateProvider component from the `new-redux` and your reducer function to your file:

```
import { StateProvider } from 'new-redux/stateContext'
import { reducer } from './reducers/index' // example reducer function
```

2. Define an object with the desired reducer fields which will represent the initial state of the state-management data object as such:

```
const initialState = {
  incidents: [],
  // ...reducer fields go here
}
```

3. Wrap your top level component (<App /> for example) around the <StateProvider /> component and pass in the initial state and reducer function (see Step 5 on how to create) into state and reducers props respectively.

```
render(
  <StateProvider state={initialState} reducers={[reducer]}>
    <App />
  </StateProvider>,
  document.getElementById('root'))
```

4. Inside the components you would like to have the state and the dispatcher available, import the StateConsumer component from the `new-redux` library and wrap it around the desired component and implement the render props as shown:

```
import { StateConsumer } from 'new-redux/stateContext'

<StateConsumer>
  {({ state, dispatch }) => {
    return (
      <Home state={state} dispatch={dispatch} />
    )
  }}
</StateConsumer>
```

The `state` object contains the current global state of the application and the `dispatch` function is used to pass action creators which returns a function to modify the state of the application globally.

5. A reducer function should be created and passed to the StateProvider component as shown in Step 3. A sample of the reducer function is as shown:

```
const reducer = (state = {}, { type, payload }) => {
  switch (type) {
    case GET_INCIDENTS: {
      // reducer logic goes here
      // DO NOT MUTATE THE STATE, RETURN A NEW COPY OF THE INTENDED STATE INSTEAD
      return newState
    }
    default:
      return state
  }
}

export { reducer }
```

6. Action creators can be created and be dispatched synchronously/asynchronously. The function created should return a dispatch function when the can be used to return the data when it is available. Example:

```
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
```

To use your action creator functions, pass the aforementioned function into a dispatch function to be called:

```
import { getIncidents } from '../actions'

class Home extends Component {
  queryServer = () => {
    const { dispatch } = this.props
    dispatch(getIncidents())
  }

  render() {
    return (<div>...</div>)
  }
}
```

The data received from the action creator function will be made available to the global state after going through the reducer function.

## Current drawbacks
- The current solution does not prevent unnecessary re-renders of the state.
- No middlewares can be specified at the moment
- Inelegant solution to placing all reducer function code in one file

Future iterations of this system will look to address these drawbacks
