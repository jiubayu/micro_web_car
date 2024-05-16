const path = require('path');
const childProcess = require('child_process');
const apps = {
  vue2: path.join(__dirname, '../vue2'),
  vue3: path.join(__dirname, '../vue3'),
  react15: path.join(__dirname, '../react15'),
  react16: path.join(__dirname, '../react16'),
  service: path.join(__dirname, '../service'),
  main: path.join(__dirname, '../main'),
};

Object.values(apps).forEach(item => {
  // console.log(item)
  childProcess.spawn(`cd ${item} && npm run start`, {stdio: 'inherit', shell: true});
})