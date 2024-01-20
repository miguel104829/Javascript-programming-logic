let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraIntentos = "intento";
let maxIntentos = 3;

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el número es ${numeroUsuario}. lo hiciste en ${intentos} ${intentos == 1 ? "intento" : "intentos"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
        alert("El número es menor");
        } else {
        alert("El número es mayor");
        }
        intentos++;
     //palabraIntentos = "intentos";
        if (intentos > maxIntentos) {
        alert(`Llegaste al númmero máximo de intentos permitidos de ${maxIntentos}`);
        break;
        }

    }
}
