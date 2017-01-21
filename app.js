/**
 * Created by Administrator on 2017/1/21.
 */
var express = require("express");
var app = express();
var router = require("./router/router.js");
app.set("view engine","ejs");

app.use(express.static("./public"));
app.get("/readme",router.showReadmeIndex);
app.listen(3000);