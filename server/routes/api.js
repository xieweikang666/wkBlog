const blogList = require('../controllers/blog.js');
// const router = require('koa-router');   
const router = require('koa-router')();

// ?不知道怎么写 
// router.get(blogList);
// 引入koa-router
router.get('/blogList/:id', blogList.getBlogList); // 定义url的参数是id,用user的auth方法引入router
module.exports = router;         // 导出router规则