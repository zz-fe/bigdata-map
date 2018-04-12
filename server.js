var express = require("express");
var app = express();
var path = require("path")
app.use(express.static(path.resolve(__dirname, './public')));

app.listen("8888", function() {
  console.log("8888 is ports");
})

console.log('服务器开启成功');