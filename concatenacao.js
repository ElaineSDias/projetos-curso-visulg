/*
Var
// Seção de Declarações das variáveis 
    nome: caractere
    numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("digite o nome")
     leia(nome)
    escreval("digite o
    escreval(nome, " : " , numero)número")
    leia(numero)
*/
var nome, numero;
nome = prompt("digite o seu nome:")
numero = prompt("digite o número:")

document.getElementById("paragrafo").innerText = nome  + " : " + numero

