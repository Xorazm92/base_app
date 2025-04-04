import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PlatformEntity } from 'src/core/entity/platform.entity';
import { PlatformRepository } from 'src/core/repository/platform.repository';
import { BaseService } from 'src/infrastructure/lib/baseService';
import { CreatePlatformDto } from './dto/create-platform.dto';
import { DeepPartial } from 'typeorm';
import { FileService } from '../file/file.service';
import { UpdatePlatformDto } from './dto/update-platform.dto';

@Injectable()
export class PlatformService extends BaseService<
  CreatePlatformDto,
  DeepPartial<PlatformEntity>
> {
  constructor(
    @InjectRepository(PlatformEntity) repository: PlatformRepository,
    private readonly fileService: FileService,
  ) {
    super(repository);
  }

  async createPlatform(
    createPlatformDto: CreatePlatformDto,
    file: Express.Multer.File | any,
  ) {
    const { name, route } = createPlatformDto;
    const exist_route = await this.getRepository.findOne({
      where: { route },
    });
    if (exist_route) {
      throw new ConflictException('Route already exist');
    }
    const icon = await this.fileService.createFile(file);
    let data: any;
    try {
      data = await this.getRepository.create({ name, route, icon });
      data = await this.getRepository.save(data);
    } catch (error) {
      throw new BadRequestException(`Error on creating platform: ${error}`);
    }
    return {
      status_code: 201,
      message: 'success',
      data: {},
    };
  }

  async updatePlatform(
    id: string,
    updatePlatformDto: UpdatePlatformDto,
    file?: Express.Multer.File | any,
  ) {
    let { name, route, is_active } = updatePlatformDto;
    const platform: PlatformEntity | any = await this.getRepository.findOne({
      where: { id },
    });
    if (!platform) {
      throw new NotFoundException('Platform not found by ID');
    }
    let icon = platform.icon;
    if (file) {
      icon = await this.fileService.createFile(file);
      if (platform.icon && (await this.fileService.existFile(platform.icon))) {
        await this.fileService.deleteFile(platform.icon);
      }
    }
    if (!name) {
      name = platform.full_name;
    }
    if (!route) {
      route = platform.route;
    }
    if (!route) {
      is_active = platform.is_active;
    }
    try {
      await this.getRepository.update(id, {
        icon,
        name,
        route,
        is_active,
        updated_at: Date.now(),
      });
    } catch (error) {
      throw new BadRequestException(
        `Error on update platform product: ${error}`,
      );
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }

  async deletePlatform(id: string) {
    const data = await this.findOneById(id);
    try {
      await this.getRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(`Error on deleting platform: ${error}`);
    }
    if (data.data.icon && (await this.fileService.existFile(data.data.icon))) {
      await this.fileService.deleteFile(data.data.icon);
    }
    return {
      status_code: 200,
      message: 'success',
      data: {},
    };
  }
}
