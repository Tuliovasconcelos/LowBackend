import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ScreensByPermissionRepository from '../typeorm/repositories/ScreensByPermissionRepository';


class DeleteScreensByPermissionService {
  public async execute(id: string): Promise<void> {

    const screensByPermissionRepository = getCustomRepository(ScreensByPermissionRepository);

    const screensByPermission = await screensByPermissionRepository.findOne({
      where: { id },
    });

    if (!screensByPermission) {
      throw new AppError(`ScreensByPermission with permission ID ${id} not found.`);
    }

    await screensByPermissionRepository.remove(screensByPermission);
  }
}

export default DeleteScreensByPermissionService;
