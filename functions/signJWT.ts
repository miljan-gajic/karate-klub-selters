import jwt from 'jsonwebtoken'

import { User } from './../types/User'

export const signJWT = (
  user: User,
  callback: (error: Error | null, token: string | null) => void
): void => {
  const jwtExpireTime = process.env.SERVER_TOKEN_EXPIRETIME as string
  const jwtSecret = process.env.SERVER_TOKEN_SECRET as string
  const jwtIssuer = process.env.SERVER_TOKEN_ISSUER as string

  const timeSinceEpoch = new Date().getTime()
  const expirationTime = timeSinceEpoch + Number(jwtExpireTime) * 100_000
  const expirationTimeInSeconds = Math.floor(expirationTime / 1000)

  try {
    jwt.sign(
      {
        username: user.username,
      },
      jwtSecret,
      {
        issuer: jwtIssuer,
        algorithm: 'HS256',
        expiresIn: expirationTimeInSeconds,
      },
      (error, token) => {
        if (error) {
          callback(error, null)
        } else {
          callback(null, token as string)
        }
      }
    )
  } catch (error: any) {
    callback(error, null)
  }
}
