import * as log4js from "koa-log4";
import log4jsConf from "../config/log.config";

log4js.configure(log4jsConf);

export const systemLog = () =>
  log4js.koaLogger(log4js.getLogger("system"), {
    level: "auto",
    // format: ":method :url :status :response-time ms",
  });
export const appLog = log4js.getLogger("app");
export const errLog = log4js.getLogger("error");
