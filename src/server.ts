/* eslint-disable import/first */
import express from 'express';
import dotenv from 'dotenv-safe';

dotenv.config();

import './database/runMigrations';

const app = express();
const PORT = 3333;

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
