function calcular(){
  m_idade = parseInt(document.getElementById("m_idade").value)
  f1_idade = parseInt(document.getElementById("f1_idade").value)
  f2_idade = parseInt(document.getElementById("f2_idade").value)
  let idade_desconhecida = m_idade - f1_idade - f2_idade
  if(m_idade > f1_idade && m_idade > f2_idade && m_idade >= 40 && m_idade <= 110 && f1_idade != f2_idade && f1_idade != m_idade && f2_idade != m_idade){
    let mais_velho = Math.max(idade_desconhecida,f1_idade,f2_idade);
    document.getElementById("idade_mais_velho").innerHTML = `A idade fo filho mais velho é ${mais_velho}`
  }
  else{
    document.getElementById("idade_mais_velho").innerHTML += "Por favor, insira valores válidos"
  }
  
}

