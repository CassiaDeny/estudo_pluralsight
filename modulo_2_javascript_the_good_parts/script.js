var exemplo = (function(){

    var x = "valor do x";
    
    var y = function(){
        return x;
    }

    return y;
}())

var exemplo2 = function(){

    var x = "valor do x";
    
    var y = function(){
        return x;
    }

    return y;
}


console.log("Immediately: " + exemplo());
console.log("chamada tardia " + exemplo2()());