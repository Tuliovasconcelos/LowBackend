import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import Permission from '../typeorm/entities/Permission';
import PermissionsRepository from '../typeorm/repositories/PermissionsRepository';

interface IRequest {
  description: string;
}

class CreatePermissionService {
  public async execute({ description }: IRequest): Promise<Permission> {

    const permissionsRepository = getCustomRepository(PermissionsRepository);
    const existingPermission = await permissionsRepository.findByDescription(description);

    if (existingPermission) {
      throw new AppError('Permission description already used.');
    }

    const permission = permissionsRepository.create({
      description,
    });

    await permissionsRepository.save(permission);

    return permission;
  }
}

export default CreatePermissionService
