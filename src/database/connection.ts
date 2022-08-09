import { Pool } from 'pg';

export const createConnection = async (): Promise<Pool> => {
  const client = new Pool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
  });

  await client.connect();

  return client;
};
