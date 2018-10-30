import { resolve } from 'path';
import * as fetch from 'isomorphic-fetch';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'fs';

export class DownloadService {
  private temp: string;

  constructor() {
    this.temp = resolve(process.cwd(), 'temp');
  }

  public async downloadFile(link: string, filename): Promise<void> {
    if (!existsSync(this.temp)) {
      mkdirSync(this.temp);
    }
    const content = await fetch(link).then((response: any) => response.buffer());
    writeFileSync(resolve(this.temp, filename), content);
  }
  public readFileFromTemp(filename: string): Buffer {
    return readFileSync(resolve(this.temp, filename));
  }
}
