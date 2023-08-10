import { EntityRepository, Repository } from 'typeorm';
import UserTypeScreen from '../entities/UserTypeScreen';

@EntityRepository(UserTypeScreen)
class UserTypesScreenRepository extends Repository<UserTypeScreen> {
  public async findByName(name: string): Promise<UserTypeScreen | undefined> {
    const userTypeScreen = await this.findOne({
      where: {
        name,
      },
    });

    return userTypeScreen;
  }

  public async findById(id: string): Promise<UserTypeScreen | undefined> {
    const userTypeScreen = await this.findOne({
      where: {
        id,
      },
    });

    return userTypeScreen;
  }

  // Você pode adicionar mais métodos personalizados aqui, se necessário
}

export default UserTypesScreenRepository;
