var express = require('express');
var router = express.Router();
const fs = require('fs')
const path = require('path')
const execSync = require('child_process').execSync
const root = path.join(__dirname, '../version')
const initVersion = '1.0.0.0'
/* GET home page. */
router.get('/start', function(req, res, next) {
  const name = req.query.name 
  // 1 确认要提交的版本，每一个应用对应一个独立的文件管理版本
  // 2 创建一个文件 默认的版本号

  // 创建一个当前应用的路径
  const changeUrl = path.join(root, name);
  try {
    let originVersion = fs.readFileSync(changeUrl).toString();
    originVersion = originVersion.replace(/\.(\d+)$/, (a, b) => {
      console.log(a, b);
      return `.${+b + 1}`;
    })
    fs.writeFileSync(changeUrl, originVersion)
  } catch (e) {
    fs.writeFileSync(changeUrl, initVersion);
  }
 
  // 构建 打包 发布
  const originPath = path.join(__dirname, '../../', name);
  const originDist = path.join(originPath, '/dist');
  const bagPath = path.join(__dirname, '../bag');
  // 通过运行对应的打包命令来构建对应的运行产物
  try {
    console.log(execSync, 'execSync---');
     execSync(`cd ${originPath} && npm i && npm run build`);
  } catch (e) {
    console.log(e);
  }
 
  res.send({
    name: name,
  });
});

module.exports = router;
