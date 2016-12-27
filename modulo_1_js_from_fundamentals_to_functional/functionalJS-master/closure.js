var exemplo1 = function(){

     var add = function (num){
        
        var num1 = num;

        var addToNum = function(numToAdd){
            return num1 + numToAdd;
        }

        return addToNum;
    };


    //neste momento a função pai add foi chamada e enviado como argumento o valor 10;
    var addToNum = add(10);
    //neste momento a função retornada da função pai é executada, sendo assim, a soma ocorre com 10 
    //que foi indicada na função pai, + o valor informado na execução da closure
    console.log(addToNum(2));
    console.log(addToNum(5));
    console.log(addToNum(10));
}

var exemplo2 = function(){

    var counter = function(){
    
        var n = 0;

        return {
            count: function (){return ++n;},
            reset: function (){return (n = 0);}

        };
    };

    var myCounter = counter();

    console.log(myCounter.count());
    console.log(myCounter.count());
    console.log(myCounter.count());
    console.log(myCounter.count());
    console.log(myCounter.reset());
    console.log(myCounter.count());
    
}

var exemplo3 = function(){

    var sayAlice = function(){

        var makeLog = function(){
            console.log(alice);
        };

        var alice = "Hi, hello there, Alice!";

        return makeLog;
    }

    var whatDoesSheSay = sayAlice();
    whatDoesSheSay();
}

var exemplo4 = function(){

    var makeStopWatch = function (){
        console.log("Initialized");
        var elapsed = 0;
        console.log(elapsed);

        var stop = function(){
            console.log("stop watch");
            return elapsed;
        };

        var increese = function(){
            elapsed++;
        };

        setInterval(increese, 1000);

        return stop;

    };

    //inicia o contador
    var watch = makeStopWatch();
    
    //pára de executar
    //melhor executar no browser para poder escolher o momento de chamar o stop
    watch();  
}

var exercicio1 = function(){

    var nonsense = function (string, time){

        var blab = function(){
            console.log(string);
        }

        setInterval(blab, time);

        return blab;
        
    };
   
    var blabLater = nonsense("bla bla bla later", 2000);
    blabLater();

    var blabLater2 = nonsense("Outra coisa", 1000);
    blabLater2();
}

var exercicio2 = function (){

    var firstName = function (fName){

        var lastName = function(lName){
            console.log(fName + " " + lName);
        };

        return lastName;
    };

    var fullName = firstName("Cassia");
    fullName("Moreira");
    fullName("Denyelli");    
}

var exercicio3 = function(){

    var storyWriter = function(){
    
        var story = "";

        return {
            addWords: function(word){ story += word + " ";},
            erase: function(){story = "";},
            tell: function(){console.log(story);}
        };
    };

    var farmStory = storyWriter();

    farmStory.addWords("There was once a lonely cow");
    farmStory.addWords("It saw a friendly face.");
    farmStory.tell();
    farmStory.erase();

    farmStory.addWords("My code broke");
    farmStory.addWords("I ate some ice cream");
    farmStory.tell();
    farmStory.erase();

}

exercicio3();
//exercicio2();
//exercicio1();

//exemplo4();
//exemplo3();
//exemplo2();
//exemplo1();



