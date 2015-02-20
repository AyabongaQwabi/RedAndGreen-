
var clickCount=0;
document.getElementById("btn").addEventListener('click',function(){
	clickCount+=1;
	

	switch(clickCount){
		case 1:
			document.getElementById("square").style.backgroundColor = 'red';
			document.getElementById("btn").value ="make green";
			document.getElementById("btn").style.backgroundColor = 'green';
			break;
		case 2:
			document.getElementById("square").style.backgroundColor = 'green';
			document.getElementById("btn").value ="make red";
			document.getElementById("btn").style.backgroundColor = 'red';
			clickCount=0
			break;
		
	}
    


	
	
	

});
