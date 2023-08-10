import { EntityRepository, Repository } from 'typeorm';
import Permission from '../entities/Permission';

@EntityRepository(Permission)
class PermissionsRepository extends Repository<Permission> {
  public async findByDescription(description: string): Promise<Permission | undefined> {
    const permission = await this.findOne({
      where: {
        description,
      },
    });

    return permission;
  }

  public async findById(id: string): Promise<Permission | undefined> {
    const permission = await this.findOne({
      where: {
        id,
      },
    });

    return permission;
  }
}

export default PermissionsRepository;
