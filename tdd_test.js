
TestMyCode.run("testing hello world function", function(assert){
    var result = hello1World();
    
    // is the result as we expected?
   assert.equals("hello world!", result);
   
   

   //I don't want to re-use assert.equals over and over 
   //So I am going to use a function that will help me
   //Perform multiple tests in one executin
});

TestMyCode.run("Hello World Test", function(assert){
    var result = helloWorld();
    
    // is the result as we expected?
   assert.equals("hello world", result);

   //I don't want to re-use assert.equals over and over 
   //So I am going to use a function that will help me
   //Perform multiple tests in one executin
});

TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    
    // is the result as we expected?
   assert.equals("hello world!", result);

   //I don't want to re-use assert.equals over and over 
   //So I am going to use a function that will help me
   //Perform multiple tests in one executin
});

TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    
    // is the result as we expected?
   assert.equals("hello worl*d", result);

   //I don't want to re-use assert.equals over and over 
   //So I am going to use a function that will help me
   //Perform multiple tests in one executin
});
TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    
    // is the result as we expected?
   assert.equals("I have cheese", result);

   //I don't want to re-use assert.equals over and over 
   //So I am going to use a function that will help me
   //Perform multiple tests in one executin
});
TestMyCode.run("testing hello world function", function(assert){
    var result = helloWorld();
    
    // is the result as we expected?
   assert.equals("bonjour world", result);

   //I don't want to re-use assert.equals over and over 
   //So I am going to use a function that will help me
   //Perform multiple tests in one executin
});


var stats = getStats();
alert(stats);

document.getElementById("stats").innerHTML +="<h4>"+stats[0]+" Tests </h4>"+"<br/>PASS :"+stats[1]+"<br/>FAIL :"+stats[2];