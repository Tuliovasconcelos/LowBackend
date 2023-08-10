import { getCustomRepository } from 'typeorm';
import Permission from '../typeorm/entities/Permission';
import PermissionsRepository from '../typeorm/repositories/PermissionsRepository';

class ListPermissionsService {
  public async execute(): Promise<Permission[]> {
    const permissionsRepository = getCustomRepository(PermissionsRepository);
    const permissions = await permissionsRepository.find();

    return permissions;
  }
}

export default ListPermissionsService;
