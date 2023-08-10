import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ScreensByPermissionRepository from '../typeorm/repositories/ScreensByPermissionRepository';
import ScreensRepository from '@modules/screens/typeorm/repositories/ScreensRepository';
import ScreensByPermission from '../typeorm/entities/ScreensByPermission';

interface IRequest {
  id: string;
  screen_ids: string[];
}

class UpdateScreensByPermissionService {
  public async execute({ id, screen_ids }: IRequest): Promise<ScreensByPermission> {

    const screensByPermissionRepository = getCustomRepository(ScreensByPermissionRepository);

    const screensRepository = getCustomRepository(ScreensRepository);


    const screens = await Promise.all(screen_ids.map(async screen_id => {
      const screen = await screensRepository.findById(screen_id);
      if (!screen) {
        throw new AppError(`Screen with ID ${screen_id} not found.`);
      }
      return screen;
    }));

    const screensByPermission = await screensByPermissionRepository.findOne({
      where: { id },
    });

    if (!screensByPermission) {
      throw new AppError(`ScreensByPermission with permission ID ${id} not found.`);
    }

    screensByPermission.screens = screens;
    await screensByPermissionRepository.save(screensByPermission);

    return screensByPermission;
  }
}



export default UpdateScreensByPermissionService;
