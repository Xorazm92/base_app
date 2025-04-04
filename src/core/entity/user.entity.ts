import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/database/BaseEntity';

@Entity('users')
export class UserEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'full_name' })
  full_name: string;

  @Column({ type: 'varchar', unique: true, name: 'phone_number' })
  phone_number: string;

  @Column({ type: 'varchar', name: 'password_hash', nullable: true })
  password_hash?: string;

  @Column({ type: 'varchar', name: 'refresh_token', nullable: true })
  refresh_token?: string;

  @Column({ type: 'timestamp', name: 'refresh_token_expires', nullable: true })
  refresh_token_expires?: Date;

  @Column({ type: 'varchar', unique: true, nullable: true, name: 'email' })
  email?: string;

  @Column({ type: 'varchar', nullable: true, name: 'image' })
  image?: string;

  @Column({ type: 'boolean', default: true, name: 'is_active' })
  is_active: boolean;
}