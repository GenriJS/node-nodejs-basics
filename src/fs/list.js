import { promises as fs } from 'fs';
import { join } from 'path';

const list = async () => {
  const dirPath = join('files');

  try {
    const files = await fs.readdir(dirPath);
    console.log(files);
  } catch {
    throw new Error('FS operation failed');
  }
};

await list();