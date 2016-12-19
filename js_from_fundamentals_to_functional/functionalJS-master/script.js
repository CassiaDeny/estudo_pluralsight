function definicaoDeEscopo(){

   //*** definição de escopo 
   if (true){
       var if_nao_tem_escopo = "if não cria escopo, a variável é acessada dentro da função mesmo sendo declarada dentro do if";
   }

   console.log(if_nao_tem_escopo);

   var funcao_tem_escopo = "Esta variável não existe fora dessa função";

   //*************************************

   //*** escopo local e global

   var escopo_local = "Esta variável tem escopo local pois está dentro de uma função";
   escopo_global2 = "Mesmo não estando declarada fora da função";
   console.log(escopo_global2);

}

definicaoDeEscopo();
var escopo_global = "Esta variável tem escopo global pois foi declarada fora da função";



//console.log(funcao_tem_escopo); // isso da erro pq aqui a variável não existe 