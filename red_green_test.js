

var square = new RedOrGreen("content");


var counter = setInterval(timer,1000); //making square background 
var count = 5;
function timer()
{
  count=count-1;
  if (count <= -1)
  {  
     square.makeRed();

     document.getElementById("text").innerHTML = "";
  	 document.getElementById("headr").innerHTML = "Done";
  	

  	
	 var background = GET("background-color",document.getElementById("content"));
  	
  	 if( background != "rgb(255, 0, 0)"){ //Our Test	
			
			alert("failure !")
		
	}else{

			alert("Success !");
	}
	

  	 document.getElementById("tick").style.visibility ="visible";
     clearInterval(counter);
     
     return;
  }


  document.getElementById("text").innerHTML = "";
  var textnode = document.createTextNode(count)  
  document.getElementById("text").appendChild(textnode);
  
}



//////////////////////////////////////////////////////////////////
                 // Real Work starts Here//
//////////////////////////////////////////////////////////////////








