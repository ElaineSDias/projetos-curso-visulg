function acaobotao(){ 
    var valor01, valor02, operacao, resultado
valor01 = prompt("digite o primeiro valor: ")
operacao = prompt("digite a operação: ")
valor02 = prompt("digite o segundo valor: ")

switch(operacao){
    case "+":
        resultado = parseInt( valor01 ) + parseInt( valor02 )
      break  
     case "-":
        resultado = parseInt( valor01 ) - parseInt( valor02 )
      break 
      case "/":
        resultado = parseInt( valor01 ) / parseInt( valor02 )
      break
      case "*":
        resultado = parseInt( valor01 ) * parseInt( valor02 )
      break            
}

document.getElementById("paragrafo").innerText  = resultado  
}
