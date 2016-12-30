# **Monads and Gonads* by Douglas Crockford

## Introdution to monads

* Monads é um conceito. É uma **Function Pattern** e iniciou-se na programação funcional. É um padrão de implementação usado para combinar funções com "valores ampliados"

* Permite a redução de "boilerplate code"


_______________________________

## The Identity Monad


_______________________________

## The Ajax Monad


_______________________________

## The Maybe Monad


_______________________________

## The Promisse Monad (A)

* São uma excelente maneira de gerenciar a assincronicidade;
* É um objeto que representa a possibilidade futura de um valor;
* Toda promisse tem um "resolver" correspondente que é usado para, no final da execução, atribuir o valor desta promisse;
* Pode ter um destes três estados: "kept", "broken" ou "pending";
* É criada "pending", e pode ser alterada para um dos outros estados, e depois disso não mudará mais;
* É um gerador de eventos que dispara um evento quando o valor da promisse torna-se conhecido;
* Em qualquer momento depois de realizar a promisse, "event haldling functions" podem ser registradas com a promisse que serão chamados conforme os valores das promisses passam a ser conhecidos;
* Uma promisse pode aceitar uma função que será chamada com o valor uma vez que a promisse passar ao status kept ou broaken;

A promisse **.when**:

* Pode receber duas funções, sendo uma de sucesso e outra de falha e qual será executada dependerá da resolução da promisse;





  
 


_______________________________

## The Promisse Monad (B)


_______________________________