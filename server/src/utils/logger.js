import winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  http: 2,
  info: 3,
  debug: 4,
};

const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'warn';
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

winston.addColors(colors);

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

const consoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  format,
);

const transports = [
  new winston.transports.Console({
    format: consoleFormat,
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
  new winston.transports.File({
    filename: 'logs/info.log',
    level: 'info',
  }),
  new winston.transports.File({
    filename: 'logs/http.log',
    level: 'http',
  }),
];

// Create the logger instance that has to be exported
// and used to log messages.
const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

export default logger;