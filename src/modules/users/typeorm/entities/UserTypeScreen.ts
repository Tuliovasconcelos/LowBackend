import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user_type_screens')
class UserTypeScreen {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'uuid', array: true, default: '{}' })
  allowed_screens: string[];
}

export default UserTypeScreen;
