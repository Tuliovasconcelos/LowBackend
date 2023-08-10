import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Screen from '../typeorm/entities/Screen';
import ScreensRepository from '../typeorm/repositories/ScreensRepository';

interface IRequest {
  screen_id: string;
  name: string;
  route: string;
  icon: string;
}

class UpdateScreenService {
  public async execute({
    screen_id,
    name,
    route,
    icon,
  }: IRequest): Promise<Screen> {
    const screensRepository = getCustomRepository(ScreensRepository);

    const screen = await screensRepository.findById(screen_id);

    if (!screen) {
      throw new AppError('Screen not found.');
    }

    const screenUpdateName = await screensRepository.findByName(name);

    if (screenUpdateName && screenUpdateName.id !== screen_id) {
      throw new AppError('There is already a screen with this name.');
    }

    const screenUpdateRoute = await screensRepository.findByRoute(route);

    if (screenUpdateRoute && screenUpdateRoute.id !== screen_id) {
      throw new AppError('There is already a screen with this route.');
    }

    screen.name = name;
    screen.route = route;
    screen.icon = icon;

    await screensRepository.save(screen);

    return screen;
  }
}

export default UpdateScreenService;
