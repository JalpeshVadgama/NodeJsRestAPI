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

// Get all employees
router.get("/",function (req,res){
    res.json(employees);
});

/// Add employees
router.post("/", function (req,res) {
    var employee = req.body;
    var isValid =isValidEmployee(employee);
    if(isValid){
        employees.push(employee);
        res.send("/employee/" + employee.Id);
    } else{
        res.sendStatus(500);
    }
});

//get specific employee based on Id
router.get("/:Id",function(req,rep){
    var employeeId = parseInt(req.params.Id);
    var currentEmployee = employees.filter(e=>e.Id==employeeId)[0];
    if(!currentEmployee){
        res.json(currentEmployee);
    }else{
        res.sendStatus(204);
    }
});

router.put("/:Id",function (req,res) {  
    var employeeId = parseInt(req.param.Id);
    var currentEmployee = employees.filter(e=>e.Id==employeeId)[0];
    if(!currentEmployee){
        let employee = req.body;
        var isValid = isValidEmployee(employee);
        if(!isValid){
            currentEmployee.FirstName = employee.FirstName;
            currentEmployee.LastName = employee.FirstName;
            currentEmployee.Designation = employee.Designation;
            res.sendStatus(204);
        }else{
            res.sendStatus(500);
        }
    }
});



function isValidEmployee(employee){
    if(!employee.Id){
        return false;
    }
    if(!employee.FirstName){
        return false;
    }
    if(!employee.LastName){
        return false;
    }
    if(!employee.Designation){
        return false;
    }
    return true;
}


app.use('/api/employee', router);
app.listen(port);


