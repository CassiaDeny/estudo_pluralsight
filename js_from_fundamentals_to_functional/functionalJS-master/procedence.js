
var g = 1;

function procedencia(){
    
    var l = "local";
    var g = 2;
    filha();

    function filha (){
        var g = 3;

        console.log(g + " dentro da filha"); 
    }
    
    console.log(g + " dentro da função");
   
}

console.log(g + " fora da função");

procedencia();