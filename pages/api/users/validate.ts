import { extractJWT } from 'middleware/extractJWT'
import type { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'GET':
      return validate(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function validate(req: NextApiRequest, res: NextApiResponse) {
    console.log('Token validated user authenticated')

    return res.status(200).json({
      message: 'Authorized',
    })
  }
}

export default extractJWT(handler)
