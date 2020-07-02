import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import modules from './modules';

dotenv.config();

const app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: true
}));

app.use(express.json());

// set base url for api
modules(app);

// catch all routers
app.use('*', (_, res) => res.status(404).json({
  message: 'Not Found. Use /api/v1 to access the api'
}));

export default app;
