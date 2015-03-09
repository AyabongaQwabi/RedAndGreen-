
TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    
    // is the result as we expected?
   assert.equals("hello world!", result);
   assert.equals("heldo world!", result);
   assert.equals("hellro world!", result);
   assert.equals("hello world!", result);
   var result = hello1World();
   assert.equals("hello world!", result);
   var result = helloWorld();
   assert.equals("hello world!", result);
   

   //I don't want to re-use assert.equals over and over 
   //So I am going to use a function that will help me
   //Perform multiple tests in one executin
});




var stats = getStats();
alert(stats);

document.getElementById("stats").innerHTML +="<h4>"+stats[0]+" Tests </h4>"+"<br/>PASS :"+stats[1]+"<br/>FAIL :"+stats[2];