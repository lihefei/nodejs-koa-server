const hostName = require('./libs/getIPAdress');
const port = 9999;

const path = require('path');
const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');

const index = serve(path.join(__dirname) + '/resources/');

app.use(index);

app.listen(port, hostName, () => {
    console.log(`服务运行在http://${hostName}:${port}`);
});

console.log('成功启动');
