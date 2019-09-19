const Sequelize = require('sequelize');

const wkblogdb = new Sequelize('mysql://root:123456@localhost/wkblogdb', {
    define: {
        // 取消Sequelzie自动给数据表加入时间戳（createdAt以及updatedAt）
        timestamps: false
    }
})

module.exports = {
    wkblogdb
}