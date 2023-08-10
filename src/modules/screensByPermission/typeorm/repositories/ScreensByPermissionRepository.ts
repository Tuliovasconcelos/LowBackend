import { EntityRepository, Repository } from 'typeorm';
import ScreensByPermission from '../entities/ScreensByPermission';

@EntityRepository(ScreensByPermission)
class ScreensByPermissionRepository extends Repository<ScreensByPermission> {
  public async findByPermissionId(permissionId: string): Promise<ScreensByPermission | null> {
    const screensByPermission = await this.findOne({
      where: {
        permission_id: permissionId,
      },
    });

    return screensByPermission || null;
  }

  public async findByScreenId(screenId: string): Promise<ScreensByPermission[] | null> {
    return this.createQueryBuilder('screensByPermission')
      .leftJoin('screensByPermission.screens', 'screen')
      .where('screen.id = :screenId', { screenId })
      .getMany();
  }

  public async findAllWithScreens(): Promise<ScreensByPermission[]> {
    return this.find({ relations: ['screens'] });
  }

}

export default ScreensByPermissionRepository;
