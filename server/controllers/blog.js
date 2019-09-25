const bloglist = require('../models/blog.js');
const getBlogList = function* () {     // 获取某个用户的所有todolist
    const id = this.params.id;  // 获取url里传过来的参数里的id
    const result = yield bloglist.getBlogListById(id);
    this.body = result;
}

const writeBlog = function* () {
    const data = this.request.body;
    const result = yield bloglist.writeBlog(data);
    this.body = {
        success: true
    }
}

module.exports = {
    getBlogList,
    writeBlog
}