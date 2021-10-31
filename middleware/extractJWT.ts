import type { NextApiRequest, NextApiResponse } from 'next'
import { Response } from 'express'
import jwt from 'jsonwebtoken'

export const extractJWT = (
  handler: (req: NextApiRequest, res: NextApiResponse) => void
) => {
  return async (req: NextApiRequest, res: Response) => {
    console.log('Validating a token')
    const jwtSecret = process.env.SERVER_TOKEN_SECRET as string

    let token = req.headers.authorization?.split(' ')[1]

    if (token) {
      jwt.verify(token, jwtSecret, (error, decoded) => {
        if (error) {
          return res.status(404).json({
            message: error.message,
            error,
          })
        } else {
          res.locals.jwt = decoded
          return handler(req, res)
        }
      })
    } else {
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }
  }
}
