//Use this file to implement Part One of your project

//criando um construtor
function AnimalMaker(name){
    //o nome da função é declarada com a primeira letra em maiúsculo para indicar que se trata de um construtor

    //para ser um construtor é necessário devolver um objeto
    return {
        speak: function(){
            console.log("my name is ", name);
        },
        name:name,
        owner:"Cassia"
        
    };
}

function objectsAsDataModels(){

    var animal = {};
    animal.username = 'DaffDuck';
    animal['tagline'] = 'Yippeee';

    var noises = arraysAsCollections();
    animal.noises = noises; 

    var proCount = 0;

    for(var key in animal){
        proCount ++;

        if (key == "username"){
            console.log("Hi my name is " + animal[key] );
        }
        else if(key == "tagline"){
            console.log("I like to say " + animal[key]);
        }
    }

    console.log("Count " + proCount);
   console.log(animal);
}

function arraysAsCollections(){

    //cria array
    var noiseArray = [];

    //insere item no início do array
    noiseArray.unshift("quack");
    //insere item no final do array
    noiseArray.push("honk");
    //adiciona mais um item com bracket notation
    noiseArray[3] = "sneeze";

    //qual é o tamanho?
    console.log("Tamanho do array " + noiseArray.length);
    console.log("Qual é o último index " + (noiseArray.length - 1));

    return noiseArray;
}

//objectsAsDataModels();

//chamando o construtor
var animals = ['cat', 'dog', 'turtle'];

for(a in animals){
    var name = animals[a];
    var animal = AnimalMaker(name);   
    animal.speak();
}