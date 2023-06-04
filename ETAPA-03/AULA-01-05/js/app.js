// ETAPA-03 | Aula 01-05 | FUNÇÕES COM RETURN
// Um dos recursos mais importantes e usados quanto a reaproveitamento de código e clean code
// Parâmetros e argumentos - Continuam sendo exibidos somente dentro da função
// return - Devido a essa palavra reservada podemos obter algum resultado do processamento desse bloco de código e usar fora da função
// Funções com retorno - Podem ser atribuidas a variavéis
// Funções com retorno - Podem ser atribuidas a outras funções, funções com retorno


// FUNÇÃO COM RETORNO

  // FUNÇÃO COM RETORNO ATRIBUIDO A UMA VARIAVEL  
  const dobrarIdade = function(idade){
    // Opção 1 - Return direto
    return idade * 2;
    // EXPLICAÇÃO
    // Usar return pra retornar o processamento diretamente
    
    // Opção 2 - Return de uma variavel
    // const operacao = idade * 2;
    // return operacao
    // EXPLICAÇÃO
    // Usar uma variavel para atribuir o processamento 
    // Usar return pra retornar a variavel
  }
  // EXPLICAÇÃO  
  // const : Define o tipo de variavél
  // dobrarIdade : Nome único e auto-explicativo pra variavél/função
  // = : Atribui a variavél o que estiver a direita do sinal;
  // function : palavra reserva que informa ao V8 que é uma função
  // (idade) : Parâmetro/variavél local a ser utilizado em algum ponto do processamento do bloco de código
  // { } : bloco de código para inserção do algoritmo que se deseja processar
  // return : palavra reservada que permite usar algum resultado desse processamento do bloco de código fora da função
  // idade * 2 : algoritmo a ser processado. O resultado é retornado a função graças a palavra reservada return
  
  
  
  // EXIBINDO O PROCESSAMENTO DE UMA FUNÇÃO COM RETORNO COM CONSOLE.LOG
  console.log("Valor:", dobrarIdade(30));
  // EXPLICAÇÃO
  // console.log : Exibe na tela
  // (dobrarIdade(30)) : Chama a função passando um valor de argumento para o parâmetro idade. Retorna como valor 60, pois é uma função que retorna o processamento de idade * 2


  
  // EXIBINDO O PROCESSAMENTO DE UMA FUNÇÃO COM RETORNO ATRIBUIDO A UMA VARIAVE
  // Vantagem : Ao armazenar o retorno da função numa variavel ele pode ser manipulado como argumento para outras funções e/ou partes do código  
  const mostrarIdade = function(nome, valor){
    return `${nome}: ${valor} anos`
  }
  // EXPLICAÇÃO
  // const : Define o tipo de variavél
  // idadeRomulo : Nome único e auto-explicativo pra variavél/função
  // = : Atribui a variavél o que estiver a direita do sinal;
  // dobrarIdade(21) : Chama a função e passa um argumento para atribuir ao parâmetro idade
  
  const idadeRomulo = mostrarIdade("Romulo", dobrarIdade(21));
  const idadeRenata = mostrarIdade("Renata", dobrarIdade(18));
  const idadeMagna  = mostrarIdade("Magna",  dobrarIdade(33));
  // EXPLICAÇÃO
  // Atribui a variavéis a função com retorno mostrarIdade
  // Nelas passei 2 argumentos, nome (um valor em String) e valor (com a função com retorno dobrarIdade passando argumento)

  console.log(idadeRomulo);
  console.log(idadeRenata);
  console.log(idadeMagna);
  // EXPLICAÇÃO
  // Chamei as variavéis referentes

