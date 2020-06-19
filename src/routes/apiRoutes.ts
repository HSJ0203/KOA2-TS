import * as Koa from "koa";
import * as Router from "koa-router";
import { success, error } from "../middleware/responseFormat";
import {redis} from "../middleware/redis";

import Auth from "../controller/auth";
import { resolve } from 'path';

export const apiRoutes = new Router();

/** 基本路由 */
apiRoutes.get(
  "/",
  async (ctx, next) => {
    ctx.body = "set body";
    await next();
  },
  async (ctx, next) => {
    console.log("next body",ctx.body)
    console.log(1);
    await next(); // next不写会报错
    console.log(4);
  },
  async (ctx) => {
    console.log(2);
    ctx.body = "set body again";
    console.log(3);
  }
);

apiRoutes.get("/success",async (ctx)=>{
  success(ctx, "do success");
});

apiRoutes.get("/err",async (ctx)=>{
  error(ctx)
});

apiRoutes.get("/getApi", async (ctx) => {
  let _ctx = <Koa.DefaultContext>ctx;
  console.log(_ctx.session, new Date().toLocaleString());
  redis.get("redis_id").then((result)=>{
    console.log("redis get result:",result)
  })
  
  ctx.body = "this a getApi!";
});

apiRoutes.post("/postApi", async (ctx) => {
  await Auth.register(ctx);
  redis.set("redis_id", ctx.request.body)
  ctx.body = "this a postApi!";
});

apiRoutes.del("/delApi", async (ctx) => {
  console.log(ctx.request.body);
  ctx.body = "this a delApi!";
});
