import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
  const src = join('files');
  const dest = join('files_copy');

  try {
    await fs.access(src);
    await fs.access(dest);
    throw new Error('FS operation failed');
  } catch (err) {
    if (err.code === 'ENOENT') {
      await fs.cp(src, dest, { recursive: true });
    } else {
      throw new Error('FS operation failed');
    }
  }
};

await copy();