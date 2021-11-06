import jwt from 'jsonwebtoken'

const transform = <T extends Object>(obj: T, predicate) => {
  return Object.keys(obj).reduce((memo, key) => {
    if (predicate(obj[key], key)) {
      memo[key] = obj[key]
    }
    return memo
  }, {})
}

export const omit = (obj, items) =>
  transform(obj, (value, key) => !items.includes(key))

export const pick = (obj, items) =>
  transform(obj, (value, key) => items.includes(key))

export const readCookieAndReturnUser = (cookie: string) => {
  const d = jwt.decode(cookie, {
    json: true,
  })
  console.log('the D', d)

  return d
}
