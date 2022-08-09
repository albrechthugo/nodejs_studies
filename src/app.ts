/* eslint-disable import/first */
import express from 'express';
import dotenv from 'dotenv-safe';

dotenv.config();

import './database/runMigrations';

import { router } from './routes';

const app = express();

app.use(express.json());
app.use(router);

export { app };
