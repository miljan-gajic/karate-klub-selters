import dbConnect from 'lib/mongodb'
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

type AdditionalReqProperties = {
  db?: any
}

export const withDatabase = (handler: NextApiHandler) => {
  return async (
    req: NextApiRequest & AdditionalReqProperties,
    res: NextApiResponse
  ) => {
    const dbInstance = await dbConnect()
    req.db = dbInstance
    return handler(req, res)
  }
}
