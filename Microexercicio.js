
//exercicio de calculo JS

var numeroA = prompt("Digite o primeiro numero: ")
var numeroB = prompt("Digite o segundo numero: ")

var soma = parseInt(numeroA,10) + parseInt(numeroB,10)
var sub = parseInt(numeroA,10) - parseInt(numeroB,10)
var div = parseInt(numeroA,10) / parseInt(numeroB,10)
var mult = parseInt(numeroA,10) * parseInt(numeroB,10)
var dobroResult = 2*(parseInt(numeroA,10) + parseInt(numeroB,10))

alert("soma: " + soma)
alert("subtração: " + sub)
alert("divisão: " + div)
alert("multiplicação: " + mult)
alert("dobro do resultado: " + dobroResult)