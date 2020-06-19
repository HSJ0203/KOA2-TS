import * as ioredis from "ioredis";
import config from "../config/app.config";

export const redis:ioredis.Redis = new ioredis(config.redis);
