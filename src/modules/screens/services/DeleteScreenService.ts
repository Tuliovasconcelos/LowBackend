import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import ScreensRepository from '../typeorm/repositories/ScreensRepository';

interface IRequest {
  screen_id: string;
}

class DeleteScreenService {
  public async execute({ screen_id }: IRequest): Promise<void> {
    const screensRepository = getCustomRepository(ScreensRepository);

    const screen = await screensRepository.findById(screen_id);

    if (!screen) {
      throw new AppError('Screen not found.');
    }

    await screensRepository.remove(screen);
  }
}

export default DeleteScreenService;
