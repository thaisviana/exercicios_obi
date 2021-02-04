
function render(l,c){
  let container = document.getElementById("container")
  container.innerHTML = ""
  for (let i=0 ; i<l;i++){
    let content = ""
    for (let j=0 ; j<c;j++){
      content += `<div id="${i}"></div>`
    }
    let odd = (i%2) ? 1 : 2
    container.innerHTML += `<div class="row line-${odd}"> ${content}</div>`
  }
}

function renderizar(){
  let l = parseInt(document.getElementById("l").value)
  let c = parseInt(document.getElementById("c").value)
  render(l,c)

}
