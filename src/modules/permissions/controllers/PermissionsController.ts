import { Request, Response } from 'express';
import { instanceToInstance } from 'class-transformer';

import CreatePermissionService from '../services/CreatePermissionService';
import ListPermissionsService from '../services/ListPermissionsService';
import ShowPermissionService from '../services/ShowPermissionService';
import UpdatePermissionService from '../services/UpdatePermissionService';
import DeletePermissionService from '../services/DeletePermissionService';

class PermissionsController {

  public async index(request: Request, response: Response): Promise<Response> {

    const listPermissions = new ListPermissionsService();

    const permissions = await listPermissions.execute();

    return response.json(instanceToInstance(permissions));

  }

  public async create(request: Request, response: Response): Promise<Response> {

    const { description } = request.body;

    const createPermission = new CreatePermissionService();

    const permission = await createPermission.execute({ description });

    return response.json(instanceToInstance(permission));

  }

  public async show(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const showPermission = new ShowPermissionService();

    const permission = await showPermission.execute(id);

    return response.json(instanceToInstance(permission));

  }

  public async update(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;
    const { description } = request.body;

    const updatePermission = new UpdatePermissionService();
    const permission = await updatePermission.execute({ id, description });

    return response.json(instanceToInstance(permission));
  }

  public async delete(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;

    const deletePermission = new DeletePermissionService();

    await deletePermission.execute(id);

    return response.status(204).send();

  }
}

export default PermissionsController;
