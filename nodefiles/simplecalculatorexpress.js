var express = require("express");
var app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.get('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send(`<form action = "/product" method ="post"> 
    <fieldset> <legend style="background-color: orange;">enter two numbers:</legend>
    <div> <input type = "number" name="first"/><br/> 
    <input type = "number" name="second"/><br/> 
        <select name="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="division">Divide</option>
        </select>
        <button type="submit">Submit </button> </div>
        </fieldset>
        </form>`);
});
app.post('/product', (req, res, next) => {
    console.log(req.body);
    var operator = req.body.operation;
    var num1 = parseInt(req.body.first);
    var num2 = parseInt(req.body.second);
    let result;
    switch (operator) {
        case "add":
            result = num1 + num2;
            res.send("The sum is " + result)
            break;
        case "subtract":
            result = num1 - num2;
            res.send("The difference is " + result)
            break;
        case "multiply":
            result = num1 * num2;
            res.send("The product is " + result)
            break;
        case "division":
            result = num1 / num2;
            res.send("The quotient is " + result)
            break;
        default:
            result = "Sorry, please enter a valid operator!"
    }
});
app.listen(3000, () => {
    console.log('Server running');
})