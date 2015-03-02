
var TestMyCode = {

	 run : function(string,MYFUNCTION){
		alert(string);

		return MYFUNCTION(assert);
	}
}
var assert = {

	equals : function(item1,item2){
		if(item1==item2){
			document.getElementById("square").style.backgroundColor = "green";
		}
		else{
			document.getElementById("square").style.backgroundColor = "red";
		}
	}
}


