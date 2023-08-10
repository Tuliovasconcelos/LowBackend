import { EntityRepository, Repository } from 'typeorm';
import Screen from '../entities/Screen';

@EntityRepository(Screen)
class ScreensRepository extends Repository<Screen> {
  public async findByName(name: string): Promise<Screen | undefined> {
    const screen = await this.findOne({
      where: {
        name,
      },
    });

    return screen;
  }

  public async findById(id: string): Promise<Screen | undefined> {
    const screen = await this.findOne({
      where: {
        id,
      },
    });

    return screen;
  }

  public async findByRoute(route: string): Promise<Screen | undefined> {
    const screen = await this.findOne({
      where: {
        route,
      },
    });

    return screen;
  }
}

export default ScreensRepository;
