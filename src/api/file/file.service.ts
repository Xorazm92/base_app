import { BadRequestException, Injectable } from '@nestjs/common';
import { v4 } from 'uuid';
import { resolve, join, extname } from 'path';
import { existsSync, mkdirSync, unlink, writeFile } from 'fs';
import { config } from 'src/config';

@Injectable()
export class FileService {
  async createFile(file: Express.Multer.File | any): Promise<string> {
    try {
      const ext = extname(file.originalname);
      const file_name = `${config.FILE_PATH}${file.originalname.split('.')[0]}__${v4()}${ext.toLowerCase()}`;
      const file_path = resolve(__dirname, '..', '..', '..', '..', 'base');
      if (!existsSync(file_path)) {
        mkdirSync(file_path, { recursive: true });
      }
      await new Promise<void>((resolve, reject) => {
        writeFile(join(file_path, file_name), file.buffer, (err) => {
          if (err) reject(err);
          resolve();
        });
      });
      return file_name;
    } catch (error) {
      throw new BadRequestException(`Error on creating file: ${error}`);
    }
  }

  async deleteFile(file_name: string): Promise<void> {
    try {
      const file_path = resolve(
        __dirname,
        '..',
        '..',
        '..',
        '..',
        'base',
        file_name,
      );
      if (!existsSync(file_path)) {
        throw new BadRequestException(`File does not exist: ${file_name}`);
      }
      await new Promise<void>((resolve, reject) => {
        unlink(file_path, (err) => {
          if (err) reject(err);
          resolve();
        });
      });
    } catch (error) {
      throw new BadRequestException(`Error on deleting file: ${error}`);
    }
  }

  async existFile(file_name: any) {
    const file_path = resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      'base',
      file_name,
    );
    if (existsSync(file_path)) {
      return true;
    } else {
      return false;
    }
  }
}
