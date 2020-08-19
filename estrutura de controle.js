/*escreval("digite nome do aluno")
leia (nome)
escreval("digite nota 01 do aluno")
 leia (nota01)
 escreval("digite nota 02 do aluno")
 leia (nota02)
media:= (nota01 + nota02)/2
se media>=5 entao
escreval ("aprovado")
senao
escreval ("reprovado")
fimse */

var nome, nota01, nota02;
nome = prompt ("digite nome do aluno")
nota01 = prompt("digite nota01 do aluno")
nota02= prompt("digite nota02 do aluno")

media = (parseInt (nota01) +parseInt (nota02)) / 2;
if (media>=5){
  alert("aprovado")
}
  else 
  alert ("reprovado")
