var user = {  
    name: true,  
    surname: false,   
    sf:true};  

function isEmpty(obj){      
    for (var key in obj){  
        if(obj[key]==false){  
            return alert(false);  
            break;  
        }  
    }  
} 