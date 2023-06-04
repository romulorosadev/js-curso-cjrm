//ETAPA-03 | Aula 01-04 | Parâmetros, Parâmetros Default e Argumentos

//01) FUNCTION EXPRESSION PASSANDO PARAMETRO(S)/ ARGUMENTO(S) 
// A função é atribuida a uma variavel
// Entre parenteses é passado um ou mais parâmetros
// Parâmetros são variavéis locais usadas somente no processamento do bloco de código da função
// Esse tipo de função não possui hoisting
// Isso é, a função não é automaticamente içada ao topo do processamento do código
// Código de comportamento mais previsível e fácil de debugar
// Recomendado declarar funções no topo do código fonte


// DECLARAR VARIAVEL/FUNÇÃO - SINTAXE
// const nomeVariavelQueRecebeFuncao = function (parametro1 = argumentoDefault1, parametro2 = argumentoDefault2, ...){
//   blocodecodigo;
// }

// DECLARAR VARIAVEL/FUNÇÃO - EXPLICAÇÃO
// const/let/var- Palavra reservada que sinaliza ao V8 que isso é uma variavel
// nomeVariavel - identificador da variavel que recebe a função. Preferir nomes autoexplicativos e únicos.
// == - Sinal de atribuição
// function - Palavra reserva que informa ao v8 que é uma função
// (parametro1, parametro2, ...) - Através dos parênteses passamos 1, mais de 1 ou nenhum parâmetro a ser usado no processamento do bloco de código. Quando declaramos chamamos de parâmetros e se comportam como variáveis locais que só podem ser usadas no bloco de código da função referente
// { blocodecodigo } - Entre chaves inserimos o algoritmo a ser executado ao chamar a função



// CHAMAR VARIAVEL/FUNÇÃO - SINTAXE
// nomeVariavelQueRecebeFuncao(argumento1, argumento2, ...)

// CHAMAR VARIAVEL/FUNÇÃO - EXPLICAÇÃO
// Cada vez que a função é chamada o bloco de código é executado
// nomeVariavelQueRecebeFuncao - identificador da variavel/função referente
// (argumento1, argumento2, ...) - Através dos parênteses passamos 1, mais de 1 ou nenhum argumento a ser usado no processamento do bloco de código. Quando declaramos chamamos de argumentos e se comportam como os valores/argumentos das variáveis locais/parâmetros que só podem ser usadas no bloco de código da função referente
// Ao chamar a função os argumentos precisam seguir a ordem da declaração dos parâmetros


//EXEMPLOS PRÁTICOS

// DECLARAR
const mostrarCarro = function(carro = "Gol", cor = "Azul Marinho"){
  console.log(`Carro: ${carro} | Cor: ${cor}`);
}

// CHAMAR
//Se chamarmos a função atruindo argumentos eles irão sobrescrever o valor default
mostrarCarro("Renault Clio", "Champagne");

//Se só declarar um argumento será sobrescrito apenas o 1º argumento
mostrarCarro("Fiat Palio");

// SE nenhum argumento for declarado a função exibe os argumentos default
mostrarCarro();

