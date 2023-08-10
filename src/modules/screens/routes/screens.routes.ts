import { Router } from 'express';
import { celebrate, Joi, Segments } from 'celebrate';
import ScreensController from '../controllers/ScreensController';

const screensRouter = Router();
const screensController = new ScreensController();

screensRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      route: Joi.string().required(),
      icon: Joi.string().required(),
    },
  }),
  screensController.create,
);

screensRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  screensController.show,
);

screensRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
    [Segments.BODY]: {
      name: Joi.string().required(),
      route: Joi.string().required(),
      icon: Joi.string().required(),
    },
  }),
  screensController.update,
);

screensRouter.delete(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  screensController.delete,
);

screensRouter.get(
  '/',
  screensController.index,
);

export default screensRouter;
