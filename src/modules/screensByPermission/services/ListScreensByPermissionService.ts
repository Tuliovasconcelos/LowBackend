import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ScreensByPermissionRepository from '../typeorm/repositories/ScreensByPermissionRepository';
import ScreensByPermission from '../typeorm/entities/ScreensByPermission';


class ListScreensByPermissionService {

  public async execute(): Promise<ScreensByPermission[]> {

    const screensByPermissionRepository = getCustomRepository(ScreensByPermissionRepository);

    const screensByPermission = await screensByPermissionRepository.find();

    if (!screensByPermission) {
      throw new AppError(`Not found.`);
    }

    return screensByPermission;
  }
}

export default ListScreensByPermissionService;
