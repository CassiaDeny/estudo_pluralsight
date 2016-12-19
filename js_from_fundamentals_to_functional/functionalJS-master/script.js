var definicaoDeEscopo = function (){

   //*** definição de escopo 
   if (true){
       var if_nao_tem_escopo = "if_nao_tem_escopo=> if não cria escopo, a variável é acessada dentro da função mesmo sendo declarada dentro do if";
   }

   console.log(if_nao_tem_escopo);

   var funcao_tem_escopo = "funcao_tem_escopo=> Esta variável não existe fora dessa função";

   //*************************************

   //*** escopo local e global

   var escopo_local = "escopo_local=> Esta variável tem escopo local pois está dentro de uma função";
   escopo_global2 = "escopo_global2=> Mesmo não estando declarada com a definição de var, esta variável funciona e é considerada global, como se tivesse sido declarada fora da função";
   console.log(escopo_global2);

}

var iniciaExemploEscopo = function (){

definicaoDeEscopo();
var escopo_global = "escopo_global=> Esta variável tem escopo global pois foi declarada fora da função";
console.log(escopo_global2);
//console.log(funcao_tem_escopo); // isso da erro pq aqui a variável não existe     
}

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
