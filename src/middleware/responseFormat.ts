import * as Koa from "koa";

const defaultResponse = {
  code: 0,
  data: [],
  message: "SUCCESS",
};

/**
 * response
 * @param ctx
 * @param data 数据
 * @param code 错误码 || [错误码, 错误描述]
 * @param message 错误描述
 */
const response = (
  ctx: Koa.ParameterizedContext,
  code: number,
  data: any,
  message: string
) => {
  if (typeof code == "object") {
    message = code[1];
    code = code[0];
  }
  ctx.body = {
    code,
    data,
    message,
  };
};

/**
 * response 成功
 * @param ctx
 * @param data 数据
 * @param code 错误码 || [错误码, 错误描述]
 * @param message 错误描述
 */
export const success = (
  ctx: Koa.ParameterizedContext,
  data: any,
  code = 200,
  message = "SUCCESS"
) => {
  if (typeof code === "string") {
    message = code;
  }
  response(ctx, code, data, message);
};

/**
 * response 异常
 * @param ctx
 * @param code 错误码 || [错误码, 错误描述]
 * @param message 错误描述
 */
export const error = (
  ctx: Koa.ParameterizedContext,
  code = 800,
  message = "ERROR"
) => {
  if (typeof code === "object") {
    message = code[1];
    code = code[0];
  }
  response(ctx, code, defaultResponse.data, message);
};
