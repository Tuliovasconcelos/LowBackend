import { getCustomRepository } from 'typeorm';
import Permission from '../typeorm/entities/Permission';
import PermissionsRepository from '../typeorm/repositories/PermissionsRepository';

class ShowPermissionService {
  public async execute(id: string): Promise<Permission | undefined> {
    const permissionsRepository = getCustomRepository(PermissionsRepository);
    const permission = await permissionsRepository.findById(id);

    return permission;
  }
}

export default ShowPermissionService;
