//#1
/*var car = {  
    model: "BMW",  
    speed: 220,  
    run: function(){  
    console.log(car.model + " едет со скоростью " + car.speed);  
    },  
    stop: function() {  
    console.log(car.model + " остановилась.");  
    }  
}*/  
//#2
/*var car = {};  
car["model"] = "BMW",  
car["speed"] = 220,  
car["run"] = function(){  
    console.log(car.model + " едет со скоростью " + car.speed);  
},  
    car["stop"] = function() {  
    console.log(car.model + " остановилась.");  
}*/  
//#3
var car = {  
    "model": "BMW",  
    "speed": 220,  
    "run": function(){  
    console.log(car.model + " едет со скоростью " + car.speed);   
    },   
    "stop": function() {   
    console.log(car.model + " остановилась.");   
    }   
}  

car.run(); 