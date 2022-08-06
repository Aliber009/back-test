const express = require('express');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');
const httpStatus = require('http-status');
const routes = require('./routes');
const { errorHandler } = require('./middlewares/error');
const logger = require('./config/logger');
require('dotenv').config()
require('./config/mongoDB');
const app = express();

//DOCS (optional if I have time)
/* const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
// setUp swagger
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Library API",
      version: '1.0.0',
    },
  },
  apis: ["./routes/*.js"],
};
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs)); */

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// v1 api routes
app.use('/api', routes);
// send back a 404 error for any unknown api request

app.use((req, res, next) => {
  res.send('Page Not found');
});

app.use(errorHandler);

app.listen(process.env.SERVER_PORT, () => {
    logger.info(`Listening to port ${process.env.SERVER_PORT}`);
  });


module.exports = app;
