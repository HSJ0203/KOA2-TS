import "reflect-metadata";
import { createConnection } from "typeorm";
import * as Koa from "koa";
import * as BodyParser from "koa-bodyparser";
import * as session from "koa-session";

import config from "./config/app.config";
import { routes } from "./routes/routes";
import { systemLog, errLog } from "./middleware/logger";

createConnection().then(async connection => {

  const app: Koa = new Koa();

  app.keys = config.appkey;
  app.use(session(config.sessionConfig, app));
  app.use(async (ctx, next) => {
    if (ctx.session.app) {
      console.log("There is app session:", ctx.session.app);
    } else {
      console.log("There is not app session:");
      ctx.session.app = " Hello Word ! ";
    }
    await next();
  });
  app.use(systemLog());
  app.use(BodyParser()).use(routes.routes());
  app.use(routes.allowedMethods());
  app.listen(config.port);
  console.log(`Server running on port ${config.port}`);

  app.on("error", (err) => {
    errLog.error("APP error>>", err);
  });
  
        
}).catch(error => console.log("Error: ", error));
