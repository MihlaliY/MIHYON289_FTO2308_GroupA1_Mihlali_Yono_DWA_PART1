import {getState, dispatch} from './store.js'
import {addCounter, subtractCounter, resetCounter} from './actions.js'

/*
 * GIVEN no interactions have been performed yet
 * WHEN the “getState” method is run
 * AND the result is logged to the console
 * AND the browser console is open
 * THEN the state should show a count of 0
 */
console.log(getState())

/*
 * GIVEN no interactions have been performed yet
 * WHEN an “ADD” action is dispatched
 * AND another “ADD” action is dispatched
 * AND the browser console is open
 * THEN the state should show a count of 2
 */

dispatch(addCounter())
dispatch(addCounter())

console.log(getState())

/*
 * GIVEN the current count in the state is 2
 * WHEN a “SUBTRACT” action is dispatched
 * AND the browser console is open
 * THEN the state should display a count of 1
 */

dispatch(subtractCounter())

console.log(getState())

/*
 * GIVEN the current count in the state is 1
 * WHEN a “RESET” action is dispatched
 * AND the browser console is open
 * THEN the state should display a count of 0
 */

dispatch(resetCounter())

console.log(getState())
