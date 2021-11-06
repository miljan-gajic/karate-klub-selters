import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'
import logger from 'functions/logger'

export const extractJWT = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    logger.info('Validating a token')
    const jwtSecret = process.env.SERVER_TOKEN_SECRET as string

    // let token = req.headers.authorization?.split(' ')[1]
    const cookie = req.cookies.TOKEN!

    if (cookie) {
      jwt.verify(cookie, jwtSecret, (error, decoded) => {
        if (error) {
          return res.status(404).json({
            message: error.message,
            error,
          })
        } else {
          return handler(req, res)
        }
      })
    } else {
      logger.error('Unauthorized..., TOKEN is missing')
      return res.status(401).json({
        message: 'Unauthorized',
      })
    }
  }
}
