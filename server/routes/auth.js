// routes/auth.js

const auth = require('../controllers/user.js');
const router = require('koa-router')();

router.get('/user/:id', auth.getUserInfo); // 定义url的参数是id,用user的auth方法引入router
router.post('/user', auth.postUserAuth);
module.exports = router; // 把router规则暴露出去