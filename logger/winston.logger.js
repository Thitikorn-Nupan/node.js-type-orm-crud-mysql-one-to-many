import { createLogger, format, transports } from 'winston'
// when you extend this class
// call log by this.log

export const log  = createLogger({
    level: 'silly',
    format: format.combine(
        // get current file for output with logging
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(format => `${format.timestamp} ${format.level} : ${format.message}`)
    ),
    transports: [
        new transports.Console // get logging to console
    ]
})