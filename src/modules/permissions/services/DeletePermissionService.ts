import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import PermissionsRepository from '../typeorm/repositories/PermissionsRepository';

class DeletePermissionService {
  public async execute(id: string): Promise<void> {
    const permissionsRepository = getCustomRepository(PermissionsRepository);

    const permission = await permissionsRepository.findById(id);

    if (!permission) {
      throw new AppError('Permission not found.');
    }

    await permissionsRepository.delete(id);
  }
}

export default DeletePermissionService;
