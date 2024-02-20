// @ts-check

import {reducer} from './reducers.js'
import {Action} from './actions.js'

/**
 * @typedef { object } State
 * @prop {number} counter
 */

export const State = {}

/**
 * @callback GetState
 * @returns { State }
 */

/**
 * @callback Dispatch
 * @param { Action } action
 */

/**
 * @callback Subscription
 * @param { State } prev
 * @param { State } next
 */

/**
 * @type { Array<Subscription> }
 */
let subscribers = []

const initialState = {counter: 0}

/**
 * @type { Array<State> }
 */
const states = [initialState]

export const getState = () => {
  return {...states[0]}
}
/**
 * @param { Action } action
 */
export const dispatch = (action) => {
  const currentState = getState()
  const nextState = reducer(currentState, action)
  subscribers.forEach((listeners) => listeners(currentState, nextState))

  states.unshift(nextState)
}

/**
 * @param { Subscription } subscription
 */
export const subscribe = (subscription) => {
  subscribers.push(subscription)
  const handler = (item) => {
    item !== subscription
  }
  const unsubscribe = () => {
    const newSubscribers = subscribers.filter(handler)
    subscribers = newSubscribers
  }
  return unsubscribe
}

/**
 * @typedef { object } Store
 * @prop { GetState } getState
 * @prop { Subscription } subscribe
 * @prop { Dispatch } dispatch
 */

export const Store = {}
