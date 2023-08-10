import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';

import CreateScreensByPermissionService from '../services/CreateScreensByPermissionService';
import ListScreensByPermissionService from '../services/ListScreensByPermissionService';
import ShowScreensByPermissionService from '../services/ShowScreensByPermissionService ';
import UpdateScreensByPermissionService from '../services/UpdateScreensByPermissionService';
import DeleteScreensByPermissionService from '../services/DeleteScreensByPermissionService';

class ScreensByPermissionController {

  public async index(request: Request, response: Response): Promise<Response> {

    const listScreensByPermission = new ListScreensByPermissionService();

    const screensByPermission = await listScreensByPermission.execute();

    return response.json(instanceToInstance(screensByPermission));

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { permission_id, screen_ids } = request.body;

    const createScreensByPermission = new CreateScreensByPermissionService();

    const screensByPermission = await createScreensByPermission.execute({ permission_id, screen_ids });

    return response.json(instanceToInstance(screensByPermission));

  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showScreensByPermission = new ShowScreensByPermissionService();

    const screensByPermission = await showScreensByPermission.execute(id);

    return response.json(instanceToInstance(screensByPermission));

  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { permission_id } = request.params;
    const { screen_ids } = request.body;

    const updateScreensByPermission = new UpdateScreensByPermissionService();
    const screensByPermission = await updateScreensByPermission.execute({ permission_id, screen_ids });

    return response.json(instanceToInstance(screensByPermission));
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deleteScreensByPermission = new DeleteScreensByPermissionService();

    await deleteScreensByPermission.execute(id);

    return response.status(204).send();

  }
}

export default ScreensByPermissionController;
