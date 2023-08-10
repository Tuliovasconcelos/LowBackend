import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('screens')
class Screen {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'varchar', unique: true })
  route: string;

  @Column({ type: 'varchar' })
  icon: string;
}

export default Screen;
