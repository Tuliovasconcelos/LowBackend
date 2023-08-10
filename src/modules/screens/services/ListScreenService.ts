import { getCustomRepository } from 'typeorm';
import Screen from '../typeorm/entities/Screen';
import ScreensRepository from '../typeorm/repositories/ScreensRepository';

class ListScreenService {
  public async execute(): Promise<Screen[]> {
    const screensRepository = getCustomRepository(ScreensRepository);

    const screens = await screensRepository.find();

    return screens;
  }
}

export default ListScreenService;
