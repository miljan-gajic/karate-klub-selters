import { withDatabase } from './../../../middleware/withDatabase'
import { extractJWT } from 'middleware/extractJWT'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import User from '../../../models/Users'
import jwt from 'jsonwebtoken'

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return deleteUser(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function deleteUser(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body
    const savedCookie = req.cookies.TOKEN!

    const loggedInUser = jwt.decode(savedCookie, {
      json: true,
    })

    const filter = { _id: loggedInUser?._id }

    const users = await User.find(filter).select('-password').exec()

    if (users.length !== 1) {
      return res.status(500).json({
        message: 'Something went wrong',
      })
    }

    if (users[0].role && users[0].role === 'admin') {
      try {
        const deletedUser = await User.deleteOne({ _id: id })
        res.status(200).json({
          message: `User with an id of ${id} was successfully deleted`,
          user: deletedUser,
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

export default extractJWT(withDatabase(handler))
