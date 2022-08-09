import fs from 'fs';
import path from 'path';
import { createConnection } from './connection';

(async () => {
  const client = await createConnection();
  const databaseFilesDirectory = path.join(__dirname, 'migrations');

  const execute = async (error: NodeJS.ErrnoException, content: Buffer): Promise<void> => {
    if (error) throw new Error(error.message);

    const migration = content.toString();
    await client.query(migration);
  };

  const onReadDir = (error: NodeJS.ErrnoException, files: string[]) => {
    if (error) throw new Error(error.message);

    files.forEach(file => {
      fs.readFile(path.join(databaseFilesDirectory, file), execute);
    });
  };

  fs.readdir(databaseFilesDirectory, onReadDir);
})();
