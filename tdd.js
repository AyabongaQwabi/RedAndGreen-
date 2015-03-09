var numTests =0;
var pass=0;
var fail=0;

function getStats(){
	var stats =[numTests,pass,fail];
	return stats;
}

var TestMyCode = {

	 run : function(string,MYFUNCTION){
		alert(string);
		numTests++;
		try{
			return MYFUNCTION(assert);
		}
		catch(e){
			alert(e);
		}
		
	}
}
var assert = {

	equals : function(item1,item2){

		if(numTests>0){

			
			if(item1==item2){
				    pass++;
					
					var newdiv = document.createElement("div");
					var divtxt = document.createTextNode("Test"+numTests);
					newdiv.appendChild(divtxt);
					newdiv.style.float ="left";
					newdiv.style.backgroundColor ="green";
					newdiv.style.width = "250px";
					newdiv.style.height = "300px";
					newdiv.style.border = "3px solid black";
					newdiv.style.padding = "5px";
					
					document.body.appendChild(newdiv);
				}
			else{
					
					fail++;
				    var newdiv = document.createElement("div");
					var divtxt = document.createTextNode("Test"+numTests);
					newdiv.appendChild(divtxt);
					newdiv.innerHTML+="<hr/>Expected Result : &nbsp &nbsp"+item1+"<br/>";
					newdiv.innerHTML+="Actual Result : &nbsp &nbsp"+item2+"<br/>";
					newdiv.style.float ="left";
					newdiv.style.backgroundColor ="red";
					newdiv.style.width = "250px";
					newdiv.style.height = "300px";
					newdiv.style.border = "3px solid black";
					newdiv.style.fontFamily="Sans";
					newdiv.style.padding = "5px";
					document.body.appendChild(newdiv);

			}
		}
		else{
			if(item1==item2){
				pass++;
				document.getElementById("square").style.backgroundColor = "green";
			}
			else{
				fail++;
				document.getElementById("square").style.backgroundColor = "red";
			}

		}
		

	}
}


