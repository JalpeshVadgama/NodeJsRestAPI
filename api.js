var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.port || 3000;
var router = express.Router();

var employees= [
    {
        Id: 1,
        FirstName: "Jalpesh",
        LastName: "Vadgama",
        Designation: "Technical Architect"
    }
];

router.get("/",function (req,res){
    res.json(employees);
});

app.use('/api/employee', router);
app.listen(port);


