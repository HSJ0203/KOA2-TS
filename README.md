### 概况

基于 KOA2 + TypeScript 创建的Server环境。

---

#### Usage

**请安装 NodeJS V10+ 版本  && GIT环境  && Redis服务**

1. git clone https://github.com/HSJ0203/KOA2-TS.git

2. cd KOA2-TS

3. npm install

4. npm run start

> **(Optional)** npm run watch : 可启动自动重启脚本

---

#### Project Layout

```
├── dist                    ---  编译ts文件生成的指定js代码文件
├── log                     ---  日志文件
│   ├── app                 ---  存放info, debug日志
│   ├── errors              ---  存放error日志
│   ├── system              ---  存放系统级日志（例如：http请求等）
├── node_modules            ---  node运行库
├── src                     ---  ts开发代码文件
│   ├── config              ---  程序配置类文件夹
│   ├── controller          ---  控制类文件夹
│   ├── entity              ---  数据库实例文件夹
│   ├── middleware          ---  中间件文件夹
│   ├── routes              ---  路由文件夹
│   ├── service             ---  数据处理类文件夹
│   ├── utils               ---  工具类文件夹
│   ├── app.ts              ---  程序入口文件
└── uploads                 ---  上传文件保存文件夹
├── .gitignore              ---  git上传忽略配置文件
├── ormconfig.json          ---  Mysql环境配置文件
├── package.json            ---  package
├── tsconfig.json           ---  ts编译配置文件
├── tslint.json             ---  ts检查配置文件
├── README.md               ---  readme文件
```

---

#### Databases

> Mysql + TypeORM

ormconfig.json：设置Mysql的配置

> Redis

app.config.ts：设置Redis的配置

---

#### 安装TSLint&检查代码

```
npm install -g tslint typescript

cd path/to/KOA2-TS

tslint -c .\tslint.json --project .
```

---

#### Future

> 支持JWT

> 支持MonogoDB

> 支持PM2启动

> mysql pool配置

---
