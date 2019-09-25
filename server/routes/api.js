const blogList = require('../controllers/blog.js');
const router = require('koa-router');   // 引入koa-router

blogList(router);
module.exports = router;         // 导出router规则