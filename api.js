var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 3000;
var router = express.Router();

router.get("/",function (req,res){
    res.json("hello apis");
});

app.use('/api/student', router);
app.listen(port);
