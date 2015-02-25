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




//change bg_color
setBackgroundColor('mySquare', 'red');
bg_color = GET('background-color',sq);
//check that it changed...
if(bg_color != "rgb(255, 0, 0)")
{
	alert("Failure !");
}
else{ alert("Success !"); }