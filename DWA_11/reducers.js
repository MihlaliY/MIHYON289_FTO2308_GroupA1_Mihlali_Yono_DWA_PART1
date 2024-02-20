// @ts-check

import {State} from './store.js'
import {Action} from './actions.js'

/**
 * @param {State} state
 * @param {Action} action
 * @return {State}
 */

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      return {...state, counter: state.counter + 1}
    }
    case 'SUBTRACT': {
      return {
        ...state,
        counter: state.counter - 1,
      }
    }
    case 'RESET': {
      return {
        ...state,
        counter: (state.counter = 0),
      }
    }

    default:
      return state
  }
  return state
}
