//Use this file to implement Part One of your project

var animal = {};
animal.username = 'DaffDuck';
animal['tagline'] = 'Yippeee';

var noises = [];
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