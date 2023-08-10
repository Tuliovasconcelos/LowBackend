import { getCustomRepository } from 'typeorm';
import UserTypeScreen from '../typeorm/entities/UserTypeScreen';
import UserTypeScreenRepository from '../typeorm/repositories/UserTypeScreenRepository';

class ShowUserTypeScreenService {
  public async execute(id: string): Promise<UserTypeScreen | undefined> {
    const userTypeScreenRepository = getCustomRepository(UserTypeScreenRepository);

    const userTypeScreen = await userTypeScreenRepository.findOne(id);

    return userTypeScreen;
  }
}

export default ShowUserTypeScreenService;
