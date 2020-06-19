import { apiRoutes } from './apiRoutes';
import { uploadRoutes } from './upload';
import * as Router from 'koa-router';

export const routes = new Router();

/** 层级路由 */
routes.use('/api',apiRoutes.routes());
routes.use('/upload',uploadRoutes.routes());