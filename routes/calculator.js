exports.calculator = function(req, res){
  res.render('calculator', { name:"calculator" });
};

exports.calculate = function(req, res){
	console.log(req.body.operator);
	var operator = req.body.operator 
	, x = req.body.n1
	, y = req.body.n2
	, operators = {
		     'add': addition,
		     'sub': subtraction,
		     'mul':multiplication,
		     'div':division
		     
		   };
	if(isNaN(operators[operator](parseFloat(x), parseFloat(y))))
	{
	   if((parseFloat(x)==0)&&(parseFloat(y)==0)&&(operator=='div')){
		   res.send('Zero divided by zero is undefined');
	   	}
		   else {	   
		   res.send('Invalid Input');
	   	}
	}		  
 	else{
 		console.log("else"+operators[operator](parseFloat(x), parseFloat(y)));

 			res.send(""+operators[operator](parseFloat(x), parseFloat(y)));
	}	   
}

var addition = function (x, y) {
    return x + y;
  }
 var subtraction = function(x, y) {
    return x - y;
  }
var multiplication =  function (x, y) {
    return x * y;
  }
var division = function (x, y) {
    return x / y;
  }