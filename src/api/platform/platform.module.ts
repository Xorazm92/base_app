import { Module } from '@nestjs/common';
import { PlatformService } from './platform.service';
import { PlatformController } from './platform.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlatformEntity } from 'src/core/entity/platform.entity';
import { FileModule } from '../file/file.module';

@Module({
  imports: [TypeOrmModule.forFeature([PlatformEntity]), FileModule],
  controllers: [PlatformController],
  providers: [PlatformService],
})
export class PlatformModule {}
