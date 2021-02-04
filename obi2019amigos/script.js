function calcular(){
  max_distancia = 0
  let andares = document.getElementById("andares").value
  andares = andares.split(" ")
  for(let i=0; i< andares.length; i++ ){
    for(let j=i+1; j< andares.length; j++ ){
      p = j - i
      distancia = parseInt(andares[i])+parseInt(andares[j])+ p
      if(distancia > max_distancia){
        max_distancia = distancia
      }
    }
  }
  document.getElementById("resultado").innerHTML = `Resultado : ${max_distancia}`
}