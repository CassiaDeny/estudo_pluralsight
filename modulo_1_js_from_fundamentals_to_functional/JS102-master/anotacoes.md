[Estudo sobre JavaScript](/anotacoes.md)

# **JavaScript: From Fundamentals to Functional JS** by Bianca Gandolfo

## Objetos

* Objetos podem acessar suas propriedades de duas formas: **Bracket Notation** e **Dot Notation**, sendo respectivamente:

    ´´´

    var pessoa = {
        nome: "Cassia",
        sobrenome: "Moreira",
        CPF: "326.667.068-00"
    }

    //Dot Notation:
    console.log(pessoa.nome);

    //Bracket Notation
    console.log(pessoa["nome"]);


    ´´´

* **Brackets Notation**: Quando usamos este tipo de notação, os nomes das propriedades devem ser colocadas como strings, isto é, utilizando o "", pois na verdade dentro do objeto os nomas das propriedades são tratadas como strings sempre.;
* **Dot Notation** : Já para a Dot Notation, não é necessário stringficar o nome da variável, pq internamente isto já acontece;
* **Literal Notation**: Ao criar o objeto pessoa no exemplo acima, "var pessoa = {}", utilizamos a Literal Notation;

### Iterations

**for in loop**:
* São especiais para serem utilizados com objetos. (Mas coisas em javascript são objetos);
* Não há garantia na ordem de leitura das propriedades do objeto, isto é, não é pq a propriedade "nome" (do exemplo anterior) foi declarada primeiro, que ela será o primeiro elemento lido pelo for loop;
* A variável usada para receber o elemento atual do for loop,  na verdade não é o objeto inteiro e sim, apenas o nome da propriedade em que o loop está;

Exemplo:

´´´

    var box = {};

    box['material'] = 'cardboard'; //criando a propriedade no objeto usando a bracket notation
    box[0] = 'meow'; // no caso de usar um número, será criado no objeto uma propriedade chamada 0, isto é, o número será stringficado
    box['@#$%'] = 'testing 123'; //DOUBLE EQUALé possível utilizar caracteres especiais, desde que sejam colocados entre ' ou " , pois será stringficado
        
    for(var key in box){

        //aqui será exibido o nome da propriedade do objeto e não seu conteúdo
        console.log(key); 

        // para acessar o valor da propriedade é necessário utilizar o bracket notation
        console.log(box[key]); 

        //retornará undefined porque no caso de dot notation, 
        //ele procurará dentro do objeto por uma propriedade chamada "key" 
        //e não pela propriedade com o mesmo nome do conteúdo dentro da variável key
        console.log(box.key); 

    }


´´´

* Quando vamos acessar uma propriedade através do loop, a variável que recebe o nome da propriedade somente poderá ser utilizada com a Bracket Notation, pois ela é uma string, se tentarmos usa-la na Dot Notation, o nome "Key" será stringficado, isto é, será procurado uma propriedade chamada "key" em vez do valor contido dentro da string key.


### Igual

* Todas as diferenças entre as comparações são aplicáveis somente para os tipos primitivos
* Para objetos mesmo sendo estruturalmente iguais e com conteúdo iguais serão objetos diferentes, pois têm referências diferentes em memória

**Triple Equal**

* O uso do triple equal é para uma comparação mais rigorosa (strict check), os tipos não são convertidos, e se forem diferentes (os tipos) o retorno é false, sem nem comparar o conteúdo
  
    ´´´
    
    if ('1' == 1) // isto retorna true, pois ele converte o inteiro para string e faz a comparação comparação
    
    ´´´

**Double Equal**

* No caso do doble equal é para uma comparação mais branda, permissiva, nela os tipos são convertidos para um mesmo tipo e se o conteúdo for igual, o resultado é positivo;
* Usar o double equals pode trazer resultados inesperados! Por isso a recomendação é usar sempre o triple;

    ´´´

    if ('1' === 1) // não tenta converter e como os tipos já são diferentes, o retorno é false
    
    ´´´

**Object.is**

* Comportamento igual ao descrito no triplo equal, com diferença para tratamento de **Nan** e **-0** e **+0**;

´´´

Object.is(Nan, Nan) // retorna true enquanto nas demais tipos de comparação retorna false
Object.is(-0, +0) // retorna false enquanto nas demais tipos de comparação retorna true

´´´

Link de referência: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Igualdade

![comparacoes](img/img1.png) 
![comparacoes](img/img2.png)
    
### Arrays

* São conteiners, é uma data structure;
* Pode armazenar qualquer tipo de dado;
* Pode ser ordenado;
* Por ser um objeto, as regras de brackets notation, e dot notation e iteration são as mesmas;

Algumas propriedades do Array:

**unshift()** : Adiciona o item no início do array;
**shift()**: Remove o item do início do array;
**push()**: Adiciona o item no final do array;
**pop()**: Remove o item do final do array;

Lista completa: http://www.w3schools.com/jsref/jsref_obj_array.asp

===>  REVISAR.: Acho que fiquei um pouco confusa sobre o curso ter dito que acessar o array pelo indice, é o mesmo que acessar o objeto pelo nome da propriedade. Acho que preciso rever isto!

## Functions

O que são:

* São pequenos trechos de código para isolar uma operação ou um processamento (encapsulamento);
* São objetos que podem conter dados e fazem coisas;
* São unidades de abstração;

Como funcionam:

* Por ser um objeto, é possível atribuir uma função à uma variável e também é possível passa-la por parâmetro (tanto atribuída em uma variável quanto declarada direto no local do parâmetro);
* Pode receber parâmetros informados entre (). Os parâmetros são variáveis, que no momento da declaração da função estão vazias, e no momento da chamada da função, o preenchimento destes valore são chamados de atributos;
* O corpo da função somente é executado com a chamada da função;
* Toda função gera um retorno, e este retorno pode ser explicitado com a palavra chave "return". Ao indicar return e mais alguma valor, esse valor será devolvido para quem chamou a função, caso o return estiver sozinho ou não seja declarado, quem chamou a função recebera "undefined", somente em caso de um Construtor o que será retornado por default será um objeto que representa esta função;
* Apesar de uma função ter ou não um conjunto de parâmetros definidos em sua declaração, eles podem não ser respeitados, e isto não irá gerear um erro de sintaxe. Por isto, é possível utilizar o objeto "arguments" para validar se a função recebeu mais ou menos parâmetros do que foi indicado em sua declaração. Este objeto "arguments" é como um array mas não é um, então não tem todas as características de um array;
* Caso um parâmetro seja indicado na declaração e não seja atribuido, essa parâmetro será "undefined";

* **Criam escopo**, isto é, espaço onde, o que está dentro dela somente é visível alí dentro, nada exterior pode ter acesso ao que está dentro de uma função;
* **Função Anônima** : Uma função declarada sem ter um nome;
* **Construtor** : funções podem ser declaradas para ser um construtor, para identificar isto, utilizamos por convenção a primeira letra do nome da função em MAIÚSCULO. É o único caso que teremos funções com a primeira letra em maiúsculo;  

## Nested data structure

´´´
var box = { 
    "innerBox": { 
        full: true
    }}


´´´

* Lidamos muito no dia a dia com o formato de JSON
* Se você quiser acessar uma propriedade full dentro de innerBox, dentro de box:

´´´
    box['innerBox]['full'] = true;
    box.innerBox.full = true

´´´