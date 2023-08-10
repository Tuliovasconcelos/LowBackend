import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Screen from '../typeorm/entities/Screen';
import ScreensRepository from '../typeorm/repositories/ScreensRepository';

interface IRequest {
  name: string;
  route: string;
  icon: string;
}

class CreateScreenService {
  public async execute({ name, route, icon }: IRequest): Promise<Screen> {
    const screensRepository = getCustomRepository(ScreensRepository);
    const screenByName = await screensRepository.findByName(name);
    const screenByRoute = await screensRepository.findByRoute(route);

    if (screenByName) {
      throw new AppError('Screen name already used.');
    }

    if (screenByRoute) {
      throw new AppError('Screen route already used.');
    }

    const screen = screensRepository.create({
      name,
      route,
      icon,
    });

    await screensRepository.save(screen);

    return screen;
  }
}

export default CreateScreenService;
