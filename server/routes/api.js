const blogList = require('../controllers/blog.js');
// const router = require('koa-router');   
const router = require('koa-router')();

// ?不知道怎么写 
// router.get(blogList);
// 引入koa-router
router.get('/blogList/:id', blogList.getBlogList); // 定义url的参数是id,用user的auth方法引入router
router.post('/blogList', blogList.writeBlog);   //编写新的博客
router.post('/blogList/:user_id/:blog_id', blogList.deleteBlogList) //删除博客内容
module.exports = router;         // 导出router规则