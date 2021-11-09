import type { NextApiRequest, NextApiResponse } from 'next'
import bcryptjs from 'bcryptjs'

import { signJWT } from '../../../functions/signJWT'
import User from '../../../models/Users'
import cookie from 'cookie'
import { withDatabase } from 'middleware/withDatabase'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return login(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function login(req: NextApiRequest, res: NextApiResponse) {
    let { username, password } = req.body
    const existingCookie = req.cookies.TOKEN!

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
              } else if (token && !existingCookie) {
                res.setHeader(
                  'Set-Cookie',
                  cookie.serialize('TOKEN', token, {
                    httpOnly: true, // making sure that JS doesn't have access to the cookie
                    secure: process.env.NODE_ENV !== 'development', // making sure that the cookie is only transferred through the HTTPS
                    sameSite: 'strict',
                    maxAge: 3600,
                    path: '/',
                  })
                )
                const user = {
                  _id: users[0]._id,
                  username: users[0].username,
                  createdAt: users[0].createdAt,
                  updatedAt: users[0].updatedAt,
                  role: users[0].role,
                }
                return res.status(200).json({
                  message: 'Log in successfully',
                  // token,
                  user,
                })
              } else {
                return res.status(500).json({
                  message: `The ${users[0].username} is already logged in`,
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

export default withDatabase(handler)
