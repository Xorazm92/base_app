import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

export type UserRepository = Repository<UserEntity>;
