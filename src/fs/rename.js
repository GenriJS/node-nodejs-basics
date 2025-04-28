import { promises as fs } from 'fs';
import { join } from 'path';

const rename = async () => {
  const oldPath = join('files', 'wrongFilename.txt');
  const newPath = join('files', 'properFilename.md');

  try {
    await fs.access(oldPath);
    await fs.access(newPath);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.rename(oldPath, newPath);
    } else {
      throw new Error('FS operation failed');
    }
  }
};

await rename();