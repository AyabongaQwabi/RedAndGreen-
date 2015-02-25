

var square = new RedOrGreen("content");


square.makeRed(); //making square background red

var background = GET("background-color",document.getElementById("content"));



if( background != "rgb(255, 0, 0)"){ //Our Test
	
	alert("failure !")
}
else{alert("Success !");}