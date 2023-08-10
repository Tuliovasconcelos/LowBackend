import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Permission from '../typeorm/entities/Permission';
import PermissionsRepository from '../typeorm/repositories/PermissionsRepository';

interface IRequest {
  id: string;
  description: string;
}

class UpdatePermissionService {
  public async execute({ id, description }: IRequest): Promise<Permission> {
    const permissionsRepository = getCustomRepository(PermissionsRepository);

    const permission = await permissionsRepository.findById(id);

    if (!permission) {
      throw new AppError('Permission not found.');
    }

    const existingPermission = await permissionsRepository.findByDescription(description);

    if (existingPermission && existingPermission.id !== id) {
      throw new AppError('Permission description already used.');
    }

    permission.description = description;

    await permissionsRepository.save(permission);

    return permission;
  }
}

export default UpdatePermissionService;
