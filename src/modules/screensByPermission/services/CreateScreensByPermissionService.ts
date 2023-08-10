import { getCustomRepository } from 'typeorm';
import AppError from '@shared/errors/AppError';
import ScreensByPermission from '../typeorm/entities/ScreensByPermission';
import ScreensByPermissionRepository from '../typeorm/repositories/ScreensByPermissionRepository';
import ScreensRepository from '@modules/screens/typeorm/repositories/ScreensRepository';

interface IRequest {
  permission_id: string;
  screen_ids: string[];
}

class CreateScreensByPermissionService {
  public async execute({ permission_id, screen_ids }: IRequest): Promise<ScreensByPermission> {

    const screensByPermissionRepository = getCustomRepository(ScreensByPermissionRepository);
    const screensRepository = getCustomRepository(ScreensRepository);

    // Find the screens using the provided screen_ids
    const screens = await Promise.all(screen_ids.map(async screen_id => {
      const screen = await screensRepository.findById(screen_id);
      if (!screen) {
        throw new AppError(`Screen with ID ${screen_id} not found.`);
      }
      return screen;
    }));

    // Create a new ScreensByPermission instance
    const screensByPermissionCreated = screensByPermissionRepository.create({
      permission_id,
      screens
    });

    await screensByPermissionRepository.save(screensByPermissionCreated);

    return screensByPermissionCreated;
  }
}

export default CreateScreensByPermissionService;
