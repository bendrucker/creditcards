import defaults from 'creditcards-types'

export default CardTypes
export { defaults }

function CardTypes (types) {
  const map = types.reduce(function (acc, type) {
    acc[type.name] = type
    return acc
  }, {})

  return {
    find: types.find.bind(types),
    some: types.some.bind(types),
    get: get
  }

  function get (name) {
    const type = map[name]

    if (!type) {
      throw new Error('No type found for name: ' + name)
    }

    return type
  }
}
