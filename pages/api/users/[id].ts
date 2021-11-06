import { extractJWT } from 'middleware/extractJWT'
import { withDatabase } from './../../../middleware/withDatabase'
import { NextApiRequest, NextApiResponse } from 'next'

import User from 'models/Users'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return getUser(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function getUser(req: NextApiRequest, res: NextApiResponse) {
    const userId = req.query.id

    const filter = { _id: userId }

    const users = await User.find(filter).select('-password').exec()

    if (users && users.length === 1) {
      res.status(200).json({
        message: `User ${users[0].username} was successfully retrieved`,
        user: users[0],
      })
    } else {
      res.status(500).json({
        message: `No user with an ID of ${userId} can be found`,
      })
    }
  }
}

export default withDatabase(extractJWT(handler))
