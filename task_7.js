var salaries = {  
    Cris: 150,  
    Brain: 600,  
    John: 300,  
    Steve: 400,  
    Bill: 50  };  
    
var tmp=0;      
for(var key in salaries){   
    tmp+=salaries[key];  
    }  
    
alert(tmp); 