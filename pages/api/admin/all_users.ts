import type { NextApiRequest, NextApiResponse } from 'next'
import jwt from 'jsonwebtoken'

import User from 'models/Users'
import { extractJWT } from 'middleware/extractJWT'
import { withDatabase } from 'middleware/withDatabase'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return getAllUsers(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    const savedCookie = req.cookies.TOKEN!

    const loggedInUser = jwt.decode(savedCookie, {
      json: true,
    })

    const filter = { username: loggedInUser?.username }

    const users = await User.find(filter).select('-password').exec()

    if (users[0].role && users[0].role === 'admin') {
      User.find()
        .select('-password')
        .exec()
        .then((users) => {
          res.status(200).json({
            count: users.length,
            users,
          })
        })
        .catch((error) => {
          return res.status(500).json({
            message: error.message,
            error,
          })
        })
    } else {
      res.status(500).json({
        message: `The user - ${users[0].username} doesn't have enough credentials`,
      })
    }
  }
}

export default extractJWT(withDatabase(handler))
