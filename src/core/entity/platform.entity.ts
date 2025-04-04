import { BaseEntity } from 'src/common/database/BaseEntity';
import { Column, Entity } from 'typeorm';

@Entity('platforms')
export class PlatformEntity extends BaseEntity {
  @Column({ type: 'varchar', name: 'name' })
  name: string;

  @Column({ type: 'boolean', name: 'is_active', default: true })
  is_active: boolean;

  @Column({ type: 'varchar', name: 'icon' })
  icon: string;

  @Column({ type: 'varchar', name: 'route', unique: true })
  route: string;
}
