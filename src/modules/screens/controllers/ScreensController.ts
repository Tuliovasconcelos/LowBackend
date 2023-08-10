import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';
import CreateScreenService from '../services/CreateScreenService';
import ListScreenService from '../services/ListScreenService';
import ShowScreenService from '../services/ShowScreenService';
import UpdateScreenService from '../services/UpdateScreenService';
import DeleteScreenService from '../services/DeleteScreenService';

export default class ScreensController {

  public async index(request: Request, response: Response): Promise<Response> {
    const listScreen = new ListScreenService();

    const screens = await listScreen.execute();

    return response.json(instanceToInstance(screens));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, route, icon } = request.body;

    const createScreen = new CreateScreenService();

    const screen = await createScreen.execute({
      name,
      route,
      icon,
    });

    return response.json(instanceToInstance(screen));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const showScreen = new ShowScreenService();

    const screen = await showScreen.execute({
      screen_id: id,
    });

    return response.json(instanceToInstance(screen));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, route, icon } = request.body;

    const updateScreen = new UpdateScreenService();

    const screen = await updateScreen.execute({
      screen_id: id,
      name,
      route,
      icon,
    });

    return response.json(instanceToInstance(screen));
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteScreen = new DeleteScreenService();

    await deleteScreen.execute({
      screen_id: id,
    });

    return response.status(204).send();
  }
}
