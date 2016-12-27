var exemplo1 = function(){

    //declaração da estrutura que funciona como uma classe
    var Car = function(){
        
        //uma variável privada
        var gasolineLevel = 10;

        //um método privado
        function useGas(amt){

            if (gasolineLevel - amt < 0){
                console.log("out of gas");
            }
            else {
                gasolineLevel -= amt;
                console.log("changed gasoline level");
            }
        };

        //retorno do objeto com a interface pública da classe
        return {
            radioStation: "104.5",
            changeStation : function(station){ this.radioStation = station; },
            go: function(spead){ useGas(spead);}
        };

    };

    var sandero = Car();
    var ka = Car();

    console.log("actual station sandero " + sandero.radioStation);
    sandero.changeStation(89.1);
    console.log("changed station sandero " + sandero.radioStation);
    console.log("actual station ka " + ka.radioStation);

    sandero.go(2);
    sandero.go(3);
    sandero.go(4);
    sandero.go(5);
};

var exercício1 = function(){

    var funcCaller = function(func, arg){
        func(arg);
    };

    var func = function(msg){
        console.log(msg);
    };

    var func2 = function(msg){
        console.log("chamou a func2 " + msg);
    }

    funcCaller(func, "mensagem apresentada");
    funcCaller(func2, "mensagem apresentada");
};

var exercicio2 = function(){

    var firstVal = function(arr, func){

        if (Array.isArray(arr)){
            //é array, então exibe o index 0
            func(arr[0], 0, arr);
        }
        else {
            //é uma lista de objetos
            var props = Object.keys(arr);
            func(arr[props[0]], props[0], arr);
        }
    };

    var showInfo = function(element, index, allArr){
        console.log("O que tem no elemento: " + element);
        console.log("Index usado: " + index);
        console.log("Todos os elementos: " + allArr);
    };

    var arr = [];
    arr[0] = "Primeiro elemento do array";
    arr[1] = "Segundo elemento do array";
    arr[2] = "Terceiro elemento do array";

    firstVal(arr, showInfo);

    arr = {
        "0": "primeiro elemento do objeto",
        "1": "segundo elemento do objeto",
        "2": "terceiro elemento do objeto"
    };

    firstVal(arr, showInfo);

};

exercicio2();
//exercício1();
//exemplo1();

