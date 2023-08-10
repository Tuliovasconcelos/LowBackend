import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ScreensByPermissionRepository from '../typeorm/repositories/ScreensByPermissionRepository';
import ScreensByPermission from '../typeorm/entities/ScreensByPermission';

class ShowScreensByPermissionService {
  public async execute(id: string): Promise<ScreensByPermission | null> {
    const screensByPermissionRepository = getCustomRepository(ScreensByPermissionRepository);

    const screensByPermission = await screensByPermissionRepository.findOne({
      where: { id },
      relations: ['screens'], // Assuming 'screens' is the relation name in the entity
    });

    if (!screensByPermission) {
      throw new AppError(`Screen by permission not found.`);
    }

    return screensByPermission;
  }
}

export default ShowScreensByPermissionService;
