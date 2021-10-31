import type { NextApiRequest, NextApiResponse } from 'next'
import bcryptjs from 'bcryptjs'

import { signJWT } from '../../../functions/signJWT'
import User from '../../../models/Users'
import dbConnect from '../../../lib/mongodb'
import cookie from 'cookie'

const cookieOptions = {
  httpOnly: true,
  maxAge: 2592000,
  path: '/',
  sameSite: 'Strict',
  secure: process.env.NODE_ENV === 'production',
}
// type Data = {
//   name: string
//   message?: string
// }

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return login(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function login(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()
    let { username, password } = req.body

    User.find({ username })
      .exec()
      .then((users) => {
        if (users.length !== 1) {
          return res.status(401).json({
            message: 'Unauthorized',
          })
        }

        bcryptjs.compare(password, users[0].password, (error, result) => {
          if (error) {
            return res.status(401).json({
              message: 'Unauthorized',
            })
          } else if (result) {
            signJWT(users[0], (_error, token) => {
              if (_error) {
                return res.status(401).json({
                  message: 'Unauthorized',
                  error: _error,
                })
              } else if (token) {
                // res.setHeader("Set-Cookie", cookie.serialize("auth", String(stringValue, options))
                return res.status(200).json({
                  message: 'Log in successfull',
                  token,
                  user: users[0],
                })
              }
            })
          }
        })
      })
      .catch((error) => {
        return res.status(401).json({
          message: 'Unauthorized',
          error,
        })
      })
  }
}

export default handler
