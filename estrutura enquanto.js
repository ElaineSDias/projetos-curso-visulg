/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreva ("digite o numero de vezes que será verificado a idade: ")
  leia (limite)
  contador:= 0
  enquanto contador < limite faca
      escreva ("Digite o nome da pessoa: ")
        leia (nome)
      escreva("digite a idade de ", nome, ": ")
          leia (idade)
       se idade > 18  entao
       escreval (nome, "você é maior de idade. ")
         senao
          escreval(nome, " você é menor de idade.")
       fimse
       contador:= contador + 1
  fimenquanto
  */
 function acaobotao() {
    var nome, limite, contador, idade
    limite = prompt("digite o numero de vezes que será verificado a idade:") 
     contador = 0
     while(contador < limite){
         nome = prompt ("Digite o nome da pessoa: ")
         idade = prompt ("Digite a idade de ", nome, ": ")
      if(idade> 18)  
      document.getElementById("paragrafo").innerText = nome +  "você é maior de idade. "
     else
     document.getElementById("paragrafo").innerText = nome + "você é menor de idade. "
        contador++
     }
 }