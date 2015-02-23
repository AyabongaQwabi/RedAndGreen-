var sq = document.getElementById("mySquare");

 

function GET(property , element){

		var retrn = window.getComputedStyle(element,null).getPropertyValue(property);
		return retrn;

}



var bg_color = GET('background-color',sq);

if(bg_color != "rgb(0, 128, 0)")
{
	alert("Failure !");
}
else{ alert("Success !"); }