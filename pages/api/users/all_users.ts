import dbConnect from 'lib/mongodb'
import type { NextApiRequest, NextApiResponse } from 'next'

import User from 'models/Users'
import { extractJWT } from 'middleware/extractJWT'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return getAllUsers(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function getAllUsers(req: NextApiRequest, res: NextApiResponse) {
    await dbConnect()

    User.find()
      .select('-password')
      .exec()
      .then((users) => {
        res.status(200).json({
          users,
          count: users.length,
        })
      })
      .catch((error) => {
        return res.status(500).json({
          message: error.message,
          error,
        })
      })
  }
}

export default extractJWT(handler)
