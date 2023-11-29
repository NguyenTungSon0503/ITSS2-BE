import winston from 'winston';

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
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
  winston.format.errors({ stack: true }),
  format,
);

const httpFileFormat = winston.format.combine(winston.format.json());

const httpConsoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.errors({ stack: true }),
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.printf(
    (info) =>
      `${info.timestamp} ${info.level}: ${info.method} ${info.status} ${info.url} ${info.response_time} ${info.content_length}`,
  ),
);

const errorFilter = winston.format((info, opts) => {
  return info.level === 'error' ? info : false;
});

const infoFilter = winston.format((info, opts) => {
  return info.level === 'info' ? info : false;
});

const httpFilter = winston.format((info, opts) => {
  return info.level === 'http' ? info : false;
});

const transports = [
  new winston.transports.Console({
    level: 'info',
    format: winston.format.combine(infoFilter(), consoleFormat),
  }),
  new winston.transports.Console({
    level: 'http',
    format: winston.format.combine(httpFilter(), httpConsoleFormat),
  }),
  new winston.transports.File({
    filename: 'logs/error.log',
    level: 'error',
    format: winston.format.combine(errorFilter()),
  }),
  new winston.transports.File({ filename: 'logs/all.log' }),
  new winston.transports.File({
    filename: 'logs/info.log',
    level: 'info',
    format: winston.format.combine(infoFilter()),
  }),
  new winston.transports.File({
    filename: 'logs/http.log',
    level: 'http',
    format: winston.format.combine(httpFilter(), httpFileFormat),
  }),
];

const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
  handleExceptions: true,
  handleRejections: true,
  exceptionHandlers: [
    new winston.transports.File({ filename: 'logs/exceptions.log' }),
  ],
  rejectionHandlers: [
    new winston.transports.File({ filename: 'logs/rejections.log' }),
  ],
  exitOnError: false,
});

export default logger;
