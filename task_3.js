var tv = {  
    currentChannel:1,  
    nextChannel: function(){  
    tv.currentChannel++;  
    },  
    previousChannel: function(){  
    tv.currentChannel--;  
    },  
    setChannel: function(num){  
    tv.currentChannel = num;  
    }   
};     

tv.setChannel(prompt("Number: ", ""));   
alert(tv.currentChannel);