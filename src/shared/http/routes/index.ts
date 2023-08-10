import { Router } from 'express';
import usersRouter from '@modules/users/routes/users.routes';
import sessionsRouter from '@modules/users/routes/sessions.routes';
import passwordRouter from '@modules/users/routes/password.routes';
import screensRouter from '@modules/screens/routes/screens.routes';
import permissionsRouter from '@modules/permissions/routes/Permissions.routes';
import screensByPermissionRouter from '@modules/screensByPermission/routes/ScreensByPermission.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/screens', screensRouter);
routes.use('/permissions', permissionsRouter);
routes.use('/screensByPermission', screensByPermissionRouter);


export default routes;
