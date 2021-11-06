import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import cookie from 'cookie'
import logger from 'functions/logger'

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case 'POST':
      return logout(req, res)

    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function logout(req: NextApiRequest, res: NextApiResponse) {
    logger.trace('Logging out the User...')
    const savedCookie = req.cookies.TOKEN!

    if (savedCookie) {
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('TOKEN', '', {
          httpOnly: true, // making sure that JS doesn't have access to the cookie
          secure: process.env.NODE_ENV !== 'development', // making sure that the cookie is only transferred through the HTTPS
          sameSite: 'strict',
          maxAge: -1,
          path: '/',
        })
      )
      res.json({
        message: 'Logged out',
      })
      logger.info('User logged out...')
    } else {
      logger.error('No TOKEN can be found, the User was alredy logged out')
      res.status(500).json({
        message: 'The user was already logged out',
      })
    }
  }
}

export default handler
