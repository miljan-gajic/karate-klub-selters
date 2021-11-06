import winston, { createLogger, format, transports } from 'winston'

const winstonLoader = require('winston-sugar')
winstonLoader.config('./config/winston.json')

const logger = winstonLoader.getLogger('KK-Selters')

export default logger
