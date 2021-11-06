import type { NextApiRequest, NextApiResponse } from 'next'
import bcryptjs from 'bcryptjs'
import mongoose from 'mongoose'

import User from '../../../models/Users'
import { withDatabase } from 'middleware/withDatabase'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return register(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function register(req: NextApiRequest, res: NextApiResponse) {
    let { username, password } = req.body

    bcryptjs.hash(password, 10, (hashError, hash) => {
      if (hashError) {
        return res.status(500).json({
          message: hashError.message,
          error: hashError,
        })
      }
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        username,
        password: hash,
      })

      return user
        .save()
        .then((user) => {
          return res.status(201).json({
            user,
          })
        })
        .catch((error) => {
          res.status(500).json({
            message: error.message,
            error,
          })
        })
    })
  }
}

export default withDatabase(handler)
