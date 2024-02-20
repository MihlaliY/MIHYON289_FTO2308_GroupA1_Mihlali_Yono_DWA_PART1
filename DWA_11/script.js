import {Store, getState, subscribe, dispatch} from './store.js'
import {addCounter, subtractCounter, ResetCounter} from './actions.js'

console.log(getState())

dispatch({type: 'ADD'})
dispatch({type: 'ADD'})

console.log(getState())

dispatch({type: 'SUBTRACT'})

console.log(getState())

dispatch({type: 'RESET'})

console.log(getState())
