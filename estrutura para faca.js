/*Var
// Seção de Declarações das variáveis 
    numero, fatorial, contador:inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
  escreva("digite o número para calcular o fatorial ")
  leia (numero)
  fatorial := 1
  para contador de 1 ate numero faca
      fatorial:= fatorial * contador
       fimpara
       escreva(" o fatorial de" , numero , " é: ", fatorial)
*/
function acaobotao(){
    var numero, fotorial, contador
    numero = prompt("digite o número para caucular o fatorial: ")
      fotorial = 1
   for(contador = 1; contador<= numero; contador++){
    fatorial = fatorial * contador 
   }   
      
document.getElementById("paragrafo").innerText = "O fatorial de" + "é:" + fotorial
  }



