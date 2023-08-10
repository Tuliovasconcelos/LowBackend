import { getCustomRepository } from 'typeorm';
import UserTypeScreen from '../typeorm/entities/UserTypeScreen';
import UserTypeScreenRepository from '../typeorm/repositories/UserTypeScreenRepository';

interface IRequest {
  id: string;
  name?: string;
  allowed_screens?: string[];
}

class UpdateUserTypeScreenService {
  public async execute({ id, name, allowed_screens }: IRequest): Promise<UserTypeScreen | undefined> {
    const userTypeScreenRepository = getCustomRepository(UserTypeScreenRepository);

    const userTypeScreen = await userTypeScreenRepository.findOne(id);

    if (!userTypeScreen) {
      throw new Error('User type screen not found.');
    }

    if (name) userTypeScreen.name = name;
    if (allowed_screens) userTypeScreen.allowed_screens = allowed_screens;

    await userTypeScreenRepository.save(userTypeScreen);

    return userTypeScreen;
  }
}

export default UpdateUserTypeScreenService;
