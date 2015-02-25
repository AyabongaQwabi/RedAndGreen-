
function RedOrGreen(div){
	 
	var element = document.getElementById(div);

	this.makeRed = function(){
		element.style.backgroundColor ='red';
	}

	
	this.makeGreen = function(){
		element.style.backgroundColor ='green';
	}
}


function GET(property , element){

		var retrn = window.getComputedStyle(element,null).getPropertyValue(property);
		return retrn;

}
