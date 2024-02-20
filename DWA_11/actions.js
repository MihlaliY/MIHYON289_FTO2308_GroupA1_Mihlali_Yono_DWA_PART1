// @ts-check

/**
 * Increases counter value by one
 * @typedef {object} Add
 * @prop {'ADD'} type
 */

/**
 * Decreases counter value by one
 * @typedef {Object} Subtract
 * @prop {'SUBTRACT'} type
 */

/**
 * Resets the counter
 * @typedef {Object} Reset
 * @prop {'RESET'} type
 */

/**
 * @typedef {Add | Subtract | Reset} Action
 */

export const Action = {}

// Action creators
/**
 * @returns {Add}
 */

export const addCounter = () => {
  return {
    type: 'ADD',
  }
}

/**
 * @returns {Subtract}
 */

export const subtractCounter = () => {
  return {
    type: 'SUBTRACT',
  }
}

/**
 * @returns {Reset}
 */

export const ResetCounter = () => {
  return {
    type: 'RESET',
  }
}
