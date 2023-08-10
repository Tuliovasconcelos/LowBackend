import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import Screen from '../typeorm/entities/Screen';
import ScreensRepository from '../typeorm/repositories/ScreensRepository';

interface IRequest {
  screen_id: string;
}

class ShowScreenService {
  public async execute({ screen_id }: IRequest): Promise<Screen> {
    const screensRepository = getCustomRepository(ScreensRepository);

    const screen = await screensRepository.findById(screen_id);

    if (!screen) {
      throw new AppError('Screen not found.');
    }

    return screen;
  }
}

export default ShowScreenService;
