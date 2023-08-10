import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ScreensByPermissionController from '../controllers/ScreensByPermissionController';

const screensByPermissionRouter = Router();
const screensByPermissionController = new ScreensByPermissionController();

screensByPermissionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      permission_id: Joi.string().uuid().required(),
      screen_ids: Joi.array().items(Joi.string().uuid()).required(),
    },
  }),
  screensByPermissionController.create,
);

screensByPermissionRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  screensByPermissionController.show,
);

screensByPermissionRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      permission_id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      screen_ids: Joi.array().items(Joi.string().uuid()).required(),
    },
  }),
  screensByPermissionController.update,
);

screensByPermissionRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  screensByPermissionController.delete,
);

screensByPermissionRouter.get(
  '/',
  screensByPermissionController.index,
);

export default screensByPermissionRouter;
