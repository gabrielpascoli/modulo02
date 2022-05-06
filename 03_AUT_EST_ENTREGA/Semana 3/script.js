//comentario em js
function ex1() {
//criando uma mensagem de aviso  com alert
alert('hello professor');

var v0 = document. getElementById('v0').value;
const g = 10; // aceleração gravitacional 10m/s^2

var hmax = (v0*v0)/(2*g)
tsubida  = v0/g;
document.getElementById('vem').innerHTML = "tempo de subida = " + tsubida + "s";
//equação do tempo de subida
document.getElementById('vem').innerHTML += "<br>aultura maxima = " + hmax + "m";
//equação da autura maxima 
console.log("tempo de subida = " + tsubida);
}