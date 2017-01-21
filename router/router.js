/**
 * Created by Danny on 2015/9/26 15:39.
 */


//首页
exports.showReadmeIndex = function (req, res, next) {
    console.log("index");
    res.render("readmeIndex", {});
};

