
function RedOrGreen(div){
	 
	var element = document.getElementById(div);

	this.makeRed = function(){
		element.style.backgroundColor ='red';
	}

	alert("RG some more")
	this.makeGreen = function(){
		element.style.backgroundColor ='green';
	}
}


function GET(property , element){

		var retrn = window.getComputedStyle(element,null).getPropertyValue(property);
		return retrn;

}
