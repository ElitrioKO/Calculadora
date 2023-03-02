
var historico = 1;
var anterior = "";
var anterior2 = "";
var anterior3 = "";
var anterior4 = "";
var resultado = "";
function regra()
{
    var primeirovalor, segundovalor, terceirovalor

primeirovalor = document.getElementById('valor').value
segundovalor = document.getElementById('2valor').value
terceirovalor = document.getElementById('3valor').value
anterior4 = anterior3
anterior3 = anterior2
anterior2 = anterior
anterior = resultado
resultado = (segundovalor * terceirovalor) / primeirovalor

document.getElementById('resultadoporem').value = resultado;
  document.getElementById("resultado").textContent = resultado;
  document.getElementById("resultado2").textContent = anterior;
  document.getElementById("resultado3").textContent = anterior2;
  document.getElementById("resultado4").textContent = anterior3;
    document.getElementById("resultado5").textContent = anterior4;


historico = historico + 1
if (historico == 5)
{historico = 1}
}
