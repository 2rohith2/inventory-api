import { createLogger, format, transports } from 'winston';
import fs from 'fs';
import 'winston-daily-rotate-file';

const { combine, colorize, json, printf, timestamp } = format;
const logsDirectory = 'logs';

if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

const dailyRotateFileTransport = new transports.DailyRotateFile({
  filename: `${logsDirectory}/%DATE%.log`,
  datePattern: 'MMM.DD.YYYY'
});

const logger = createLogger({
  format: combine(
    timestamp(),
    json()
  ),
  transports: [
    new transports.Console({
      format: combine(
        colorize(),
        printf(
          info => `${info.level} : ${info.timestamp} : Message - ${info.message}`
        )
      )
    }),
    dailyRotateFileTransport
  ]
});

export default logger;