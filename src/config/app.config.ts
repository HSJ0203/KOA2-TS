//判断当前环境类型
const isProdEnv: boolean = process.env.NODE_ENV === "production";
const appkey:Array<string> = ["RITS"];
//开发环境下的配置参数
//listen port
let port: Number = 80;
//Redis Config
let redis = {
  port: 6379,
  host: "127.0.0.1"
};

const sessionConfig = {
    key: 'koa:sess',   //cookie key (default is koa:sess)
    maxAge: 60000,  // cookie的过期时间 maxAge in ms (default is 1 days)
 };

//生产环境下的配置参数
if (isProdEnv) {
  //覆盖开发环境的参数
  port = 80;
  redis = {
    port: 6379,
    host: "127.0.0.1"
  };
}
//模块导出
export default {
  appkey,
  port,
  redis,
  sessionConfig
};
