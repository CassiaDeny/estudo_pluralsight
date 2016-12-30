///////////////////////////////////
//exercícios propostos no módulo!
///////////////////////////////////

var identifyid = function(x){
    return function(){
        return x;
    }
}

var addf = function(x){

    return function(y){
        return x + y;
    }
}

 var add = function(x, y){
     return x + y;
 }

 var mul = function(x, y){
     return x * y;
 }

function applyf(binary){

    return function(x){

        return function(y){

            return binary(x, y);
        }
    }
}
//var addf = applyf(add);
//console.log(applyf(mul)(5)(6));

var curry = function(func, first){
    return function(second){
        return func(first, second);
    }
}

//var add3 = curry(add, 3);
//console.log(add3(4)); //7
//console.log(curry(mul, 5)(6)); //30


//inc(5) //6
//inc(inc(5)) //7

var inc = function(x){
    return addf(x)(1);
    //return applyf(add)(x)(1);
    //return curry(add, x)(1);
}
//console.log(inc(5));
//console.log(inc(inc(5)));

function methodize(func){
    return function(y){
        return func(this, y);
    };
}

Number.prototype.add = methodize(add);
//console.log((5).add(4));

//uma função que somente pode ser chamada uma vez
var once = function(func){
    
    return function(){

        var f = func;
        func = null;

        return f.apply(this, arguments);
    };
}

//var add_once = once(add);
//console.log(add_once(3, 4));
//console.log(add_once(3, 4));

// This is a function constructor:
var myFunction = function(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;

    return "teste";
}

var cassia = myFunction("John", "Doe");
//console.log(cassia);

// This creates a new object
var x = new myFunction("John", "Doe");
//console.log(x);     

var counterf = function(x){ 

    return {
        inc: function(){ return x += 1;},
        dec: function(){ return x -= 1;}
    };
}

//var counter = counterf(10);
//console.log(counter.inc());
//console.log(counter.inc());
//console.log(counter.dec());

var revocable = function(func){

    return {
        invoke: function(x){ return func(x);},
        revoke: function(){ func = null;}
    };
}

//var temp = revocable(console.log);
//temp.invoke(7);
//temp.revoke();
//temp.invoke(8);


var pessoa = {
            nome: "Cassia",
            sobrenome: "Moreira",
            CPF: "326.667.068-00",
            0: "teste"
        }

        //Dot Notation:
        console.log("Dot " + pessoa.nome);

        //Bracket Notation
        console.log("Bracket " + pessoa["nome"]);

        console.log("Zero " + pessoa[0] );       

