import { withDatabase } from '../../../middleware/withDatabase'
import User from '../../../models/Users'
import { NextApiHandler, NextApiResponse, NextApiRequest } from 'next'
import { extractJWT } from 'middleware/extractJWT'

import jwt from 'jsonwebtoken'

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return changeRole(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function changeRole(req: NextApiRequest, res: NextApiResponse) {
    const { id, role } = req.body
    const savedCookie = req.cookies.TOKEN!

    const loggedInUser = jwt.decode(savedCookie, {
      json: true,
    })

    const filter = { username: loggedInUser?.username }
    const update = { role }

    const users = await User.find(filter).select('-password').exec()

    if (users.length !== 1) {
      return res.status(500).json({
        message: 'Something went wrong',
      })
    }

    if (users[0].role && users[0].role === 'admin') {
      try {
        const updatedRole = await User.findOneAndUpdate({ _id: id }, update, {
          new: true,
        })
        return res.status(200).json({
          updatedRole,
        })
      } catch (error) {
        res.status(500).json({
          error,
        })
      }
    } else {
      res.status(500).json({
        message: `The user - ${users[0].username} doesn't have enough credentials`,
      })
    }
  }
}

export default withDatabase(extractJWT(handler))
