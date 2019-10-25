const Koa = require('koa');
const koa = require('koa-router')()
    , json = require('koa-json')
    , logger = require('koa-logger')
    , auth = require('./server/routes/auth.js') // 引入auth
    , api = require('./server/routes/api.js')   //引入api
    , jwt = require('koa-jwt');
const app = new Koa();
app.use(require('koa-bodyparser')());
app.use(json());
app.use(logger());

app.use(function* (next) {
    let start = new Date;
    yield next;
    let ms = new Date - start;
    console.log('成功运行哦~');
    console.log('%s %s - %s', this.method, this.url, ms);
});

app.use(function* (next) {  //  如果JWT验证失败，返回验证失败信息
    try {
        yield next;
    } catch (err) {
        if (401 == err.status) {
            this.status = 401;
            this.body = {
                success: false,
                token: null,
                info: 'Protected resource, use Authorization header to get access'
            };
        } else {
            throw err;
        }
    }
});

app.on('error', function (err, ctx) {
    console.log('哇出错了~');
    console.log('server error', err);
});

koa.use('/auth', auth.routes()); // 挂载到koa-router上，同时会让所有的auth的请求路径前面加上'/auth'的请求路径。
// koa.use('/api', jwt({ secret: 'vue-koa-token' }), api.routes())
koa.use('/api', api.routes())

app.use(koa.routes()); // 将路由规则挂载到Koa上。

app.listen(9999, () => {
    console.log('Koa is listening in 9999');
});

module.exports = app;