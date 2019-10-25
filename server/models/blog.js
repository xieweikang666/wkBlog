const db = require('../config/db.js');  //链接数据库
const blog = '../schema/blog.js'    //导入表的结构
const blogListDb = db.wkblogdb; //引入数据库
const blogList = blogListDb.import(blog);


const getBlogListById = function* (id) {
    const bloglist = yield blogList.findAll({
        where: {
            user_id: id
        },
        attributes: ['blog_id', 'blog_title', 'blog_content', 'blog_time']
    });
    return bloglist;
}

const writeBlog = function* (data) {
    yield blogList.create({
        // blog_id: data.id,
        user_id: data.uid,
        blog_title: data.title,
        blog_content: data.content,
        blog_time: data.time
    })
    return true;
}

const deleteBlogList = function* (blog_id, user_id) {
    yield blogList.destroy({
        where: {
            blog_id,
            user_id
        }
    })
    return true;
}
module.exports = {
    getBlogListById,
    writeBlog,
    deleteBlogList
}