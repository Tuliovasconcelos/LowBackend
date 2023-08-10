import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import PermissionsController from '../controllers/PermissionsController';

const permissionsRouter = Router();
const permissionsController = new PermissionsController();

permissionsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      description: Joi.string().required(),
    },
  }),
  permissionsController.create,
);

permissionsRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  permissionsController.show,
);

permissionsRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      description: Joi.string().required(),
    },
  }),
  permissionsController.update,
);

permissionsRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  permissionsController.delete,
);

permissionsRouter.get(
  '/',
  permissionsController.index,
);

export default permissionsRouter;
