let numeroSecreto = 7;
let numeroUsuario = 0;

numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
console.log(numeroUsuario);
if (numeroUsuario == numeroSecreto) {
  alert("Has acertado!");
}
alert("El número ingresado no es correcto.");
