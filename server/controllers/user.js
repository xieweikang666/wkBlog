const user = require('../models/user.js');
const getUserInfo = function* () {
    const id = this.params.userId;  //获取从url里传递来的参数的userId
    const result = yield user.getUserById(id);   // 通过yield “同步”地返回查询结果
    this.body = result // 将请求的结果放到response的body里返回
}
module.exports = {
    getUserInfo // 把获取用户信息的方法暴露出去
}