const Sequelize = require('sequelize');

const wkblog = new Sequelize('mysql://root:123456@localhost/wkblogdb', {
    define: {
        timestamps: false
    }
})

module.exports = {
    wkblog
}