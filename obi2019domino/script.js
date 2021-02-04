function calcular(){
  let n = parseInt(document.getElementById("n").value)

let soma = 0
  for(var index = 1; index < n+2 ; index++){
    if (n<0 || n>10000){
      console.log("O numero n está fora dos parametros")
      break
    }
    soma += index
  }

  document.getElementById("resultado").innerHTML = `Resultado : ${soma}`
}