import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import UsersRepository from '../typeorm/repositories/UsersRepository';
import CompanyRepository from '@modules/companies/typeorm/repositories/CompanyRepository';

interface IRequest {
  user_id: string;
}

class DeleteUserService {
  public async execute({ user_id }: IRequest): Promise<void> {
    const usersRepository = getCustomRepository(UsersRepository);
    const companyRepository = getCustomRepository(CompanyRepository);

    const user = await usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found.');
    }

    // Encontra o ID da empresa associada ao usuário
    const companyId = await companyRepository.findCompanyIdByUserId(user_id);

    // Se houver uma empresa associada ao usuário, remove o usuário dela
    if (companyId) {
      await companyRepository.removeUserFromCompany(user_id, companyId);
    }

    await usersRepository.remove(user);
  }
}

export default DeleteUserService;
