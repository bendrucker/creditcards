import Card from './card.js'
import Cvc from './cvc.js'
import * as expiration from './expiration.js'
import types from 'creditcards-types'

export function withTypes (types) {
  return {
    card: Card(types),
    cvc: Cvc(types),
    expiration
  }
}

const defaults = withTypes(types)

export const card = defaults.card
export const cvc = defaults.cvc
export { expiration }
