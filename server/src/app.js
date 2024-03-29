import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import config from './config/config.js';
import userRoutes from './routes/users.route.js';
import applyRoutes from './routes/apply_cv.route.js';
import morganMiddleware from './middleware/morgan.middleware.js';
import logger from './utils/logger.js';
import errorHandlingMiddleware from './middleware/errorHandling.middleware.js';
import companyRoutes from './routes/companies.route.js';
import jobRoutes from './routes/jobs.route.js';
import fieldRoutes from './routes/fields.route.js';

const { URL } = config.env;
const app = express();
const corsOptions = { credentials: true, origin: URL || '*' };

app.use(morganMiddleware);
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', userRoutes);
app.use('/api/apply', applyRoutes);
app.use('/api/companies', companyRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/fields', fieldRoutes);
app.use(errorHandlingMiddleware);
app.use('/healthcheck', function (req, res, next) {
  logger.info('This is a health check');
  res.send('This is heathcheck endpoint');
});

export default app;
