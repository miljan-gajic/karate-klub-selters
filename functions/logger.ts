import winston, { createLogger, format, transports } from 'winston'

const { combine, timestamp, json } = format

const myCustomLevels = {
  levels: {
    info: 0,
    success: 1,
    warn: 2,
    error: 3,
  },
  colors: {
    info: 'blue',
    success: 'green',
    warn: 'yellow',
    error: 'red',
  },
}

winston.addColors(myCustomLevels.colors)

const logger = createLogger({
  levels: myCustomLevels.levels,
  format: combine(timestamp(), json()),
  defaultMeta: {
    app: {
      name: 'kk_selters',
    },
  },
  transports: [new transports.Console()],
})

export default logger
