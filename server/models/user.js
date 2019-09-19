const db = require('../config/db.js');
// 引入user的表结构
const userModel = '../schema/user.js';
const wkblog = db.wkblogdb;
// 用sequelize的import方法引入表结构，实例化了User。
const User = wkblog.import(userModel);

// 👇注意是 function* 不是function 对于需要yield操作的函数都需要使用这种genderaotr函数
const getUserById = function* (id) {
    const userInfo = yield User.findOne({
        // 用yield控制异步操作，将返回的Promise对象里的数据返回出来。也就实现了“同步”的写法获取异步IO操作的数据
        where: {
            userId: id
        }
    })
    return userInfo;
}
const getUserByName = function* (name) {
    const userInfo = yield User.findOne({
        where: {
            userName: name
        }
    })
    return userInfo;
}
module.exports = {
    // 导出getUserById的方法 将在controller里调用
    getUserById,
    getUserByName
}