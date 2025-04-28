import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    const filePath = join('files', 'fresh.txt');
  try {
    const fileHandle = await fs.open(filePath, 'wx');
    await fileHandle.writeFile('I am fresh and young');
    await fileHandle.close();
  } catch {
    throw new Error('FS operation failed');
  }
};

await create();