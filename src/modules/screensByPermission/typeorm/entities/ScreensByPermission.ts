import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import Screen from '@modules/screens/typeorm/entities/Screen';

@Entity('screensByPermission')
class ScreensByPermission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', unique: true })
  permission_id: string;

  @ManyToMany(() => Screen)
  @JoinTable()
  screens: Screen[];
}

export default ScreensByPermission;
