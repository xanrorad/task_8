var mp3 = {  
    brand: "Panasonic",  
    memory: 32,
    port: "USB",  
    state: "off",  
    onMp3: function() {  
    mp3.state = "on";  
    }  
}  
alert('Brand: ' + mp3.brand + ' \nMemory: ' + mp3.memory+ " GB")
alert(mp3.state);  
mp3.onMp3();  
alert(mp3.state); 