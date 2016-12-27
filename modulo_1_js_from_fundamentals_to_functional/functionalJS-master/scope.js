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

definicaoDeEscopo();
var escopo_global = "escopo_global=> Esta variável tem escopo global pois foi declarada fora da função";
console.log(escopo_global2);
//console.log(funcao_tem_escopo); // isso da erro pq aqui a variável não existe  