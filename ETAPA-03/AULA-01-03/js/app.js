//Aula 01-03 | Function Declaration Function Expression

//01) FUNCTION DECLARATION 
// PARTICULARIDADE - Esse tipo de função possui hoisting (a função é automaticamente içada ao topo do processamento do código.
// Não é recomendado o uso devido ao Hoisting


// DECLARAR FUNÇÃO - SINTAXE
// function nomeFuncao(){
//   blocodecodigo;
// }

// DECLARAR FUNÇÃO - EXPLICAÇÃO
// function - Palavra reservada que informa ao interpretadir js que é uma função
// nomeFunção - identificador da função. Preferir nomes autoexplicativos e únicos
// () - Através dos parênteses passamos ou não parâmetros a serem usados no processamento do bloco de código
// { blocodecodigo } - entre chaves inserimos o algoritmo a ser executado ao chamar a função


// CHAMAR FUNÇÃO - SINTAXE
// nomeFuncao()

// CHAMAR FUNÇÃO - EXPLICAÇÃO
// Cada vez que a função é chamada o bloco de código é executado
// nomeFunção - identificador da função referente
// () - Chamar a função. Podemos passar, ou não, parâmetros a serem usados no processamento do bloco de código


// FUNCTION DECLARATION - DECLARAR
function exibirNomeEmpresa(){
  console.log("Rosadev Solutions");
}

// FUNCTION DECLARATION - CHAMAR/INVOCAR
exibirNomeEmpresa();
exibirNomeEmpresa();
exibirNomeEmpresa();


/* ========================================================*/


//02) FUNCTION EXPRESSION 
// A função é atribuida a uma variavel
// PARTICULARIDADE - Esse tipo de função não possui hoisting
// Versão recomendada de uso, pois quanto mais previsivel o comportamento de seu código melhor
// Caso seja necessário, é mais fácil de debugar o código e consertar erros
// Preferencialmente declarar as funções no topo do código


// DECLARAR VARIAVEL/FUNÇÃO - SINTAXE
// const nomeVariavelQueRecebeFuncao = function (){
//   blocodecodigo;
// }

// DECLARAR VARIAVEL/FUNÇÃO - EXPLICAÇÃO
// const/let/var- Palavra reservada que sinaliza ao V8 que isso é uma variavel
// nomeVariavel - identificador da variavel que recebe a função. Preferir nomes autoexplicativos e únicos
// == - Sinal de atribuição
// function - Palavra reserva que informa ao v8 que é uma função
// () - Através dos parênteses passamos ou não parâmetros a serem usados no processamento do bloco de código
// { blocodecodigo } - Entre chaves inserimos o algoritmo a ser executado ao chamar a função


// CHAMAR VARIAVEL/FUNÇÃO - SINTAXE
// nomeVariavelQueRecebeFuncao()

// CHAMAR VARIAVEL/FUNÇÃO - EXPLICAÇÃO
// Cada vez que a função é chamada o bloco de código é executado
// nomeVariavelQueRecebeFuncao - identificador da variavel/função referente
// () - Chamar a função. Podemos passar ou não parâmetros a serem usados no processamento do bloco de código



// FUNCTION EXPRESSION - DECLARAR
const mostrarNome = function(){
  console.log("Romulo Rosa");
}

// FUNCTION EXPRESSION - CHAMAR
mostrarNome();
mostrarNome();
mostrarNome();
