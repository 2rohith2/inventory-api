import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import nocache from 'nocache';
import express from "express";
import Products from './routes/products';
import logger from './utils/logger';

const app = express();

/**
 * CORS Setting to enable API can be used by any source.
 */
app.use(function (req: any, res: any, next: () => void) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  if (req.method === 'OPTIONS') return res.sendStatus(200);

  next();
});

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(nocache());
app.use(helmet.referrerPolicy({ policy: 'no-referrer' }));
app.use(helmet.xssFilter());
app.use(helmet.hidePoweredBy());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1/products', Products);


/**
 * This is used to catch uncached error
 */
app.use((req, res) => {
  logger.log({ level: 'error', message: `Invalid URL ${req.url}` });

  res.status(404).json({
    code: 404,
    message: "Not found API",
  });
});

export default app;