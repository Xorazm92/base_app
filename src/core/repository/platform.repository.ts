import { Repository } from 'typeorm';
import { PlatformEntity } from '../entity/platform.entity';

export type PlatformRepository = Repository<PlatformEntity>;
