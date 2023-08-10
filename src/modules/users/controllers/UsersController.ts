import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';
import ListUserService from '../services/ListUserService';
import DeleteUserService from '../services/DeleteUserService';
import ShowUserService from '../services/ShowUserService';
import { instanceToInstance } from 'class-transformer';
import UpdateUserService from '../services/UpdateUserService';

export default class UsersController {

  public async index(request: Request, response: Response): Promise<Response> {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return response.json(instanceToInstance(users));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    return response.json(instanceToInstance(user));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params; // Obtendo o ID do usuário a ser recuperado

    const showUser = new ShowUserService();

    const user = await showUser.execute({
      user_id: id, // Passando o ID do usuário para o serviço ShowUserService
    });

    return response.json(instanceToInstance(user)); // Corrigindo a chamada de instanceToInstance
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteUser = new DeleteUserService();

    await deleteUser.execute({
      user_id: id,
    });

    return response.status(204).send();
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const user_id = request.user.id;
    const { name, email, password, old_password } = request.body;

    const updateProfile = new UpdateUserService();

    const user = await updateProfile.execute({
      user_id,
      name,
      email,
      password,
      old_password,
    });

    return response.json(instanceToInstance(user));
  }
}
