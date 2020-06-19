//模块导出
export default {
  appenders: {
    console: {
      type: "console",
    },
    system: {
      type: "dateFile",
      pattern: "-yyyy-MM-dd.log", //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      encoding: "utf-8",
      filename: "logs/system/system",
    //   backups: 200, // 保留旧日志数量(default: 5)
    //   compress: true, // 缩成.gz格式
    //   daysToKeep: 30,
    },
    //系统日志
    app: {
      type: "dateFile",
      pattern: "-yyyy-MM-dd-hh.log", //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      encoding: "utf-8",
      filename: "logs/app/app",
    //   backups: 100, // 保留旧日志数量(default: 5)
    //   compress: true, // 缩成.gz格式
    //   daysToKeep: 30,
    },
    error: {
      type: "dateFile",
      pattern: "-yyyy-MM-dd.log", //通过日期来生成文件
      alwaysIncludePattern: true, //文件名始终以日期区分
      encoding: "utf-8",
      filename: "logs/errors/error",
      backups: 100, // 保留旧日志数量(default: 5)
      compress: true, // 缩成.gz格式
      daysToKeep: 30,
      keepFileExt: true,
    },
  },
  categories: {
    default: { appenders: ["console"], level: "all" },
    system: { appenders: ["system"], level: "info" },
    app: { appenders: ["app"], level: "debug" },
    error: { appenders: ['error'], level: "error" },
  },
  pm2: true, //pm2集群模式下使用异常配置
  disableClustering: true,
  pm2InstanceVar: "INSTANCE_ID",
};
