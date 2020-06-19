import * as multer from "koa-multer";

//配置
var storage = multer.diskStorage({
  //文件保存路径
  destination: "uploads/" + new Date().getTime(),
  //修改文件名称
  filename: function (_ctx, file, cb) {
    const filenameArr = file.originalname.split(".");
    cb(null, Date.now() + "." + filenameArr[filenameArr.length - 1]);
  },
});

export const upload = multer({ storage: storage });
