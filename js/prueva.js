const usuario  = document.getElementById("usuario");
const llave  = document.getElementById("llave");
const boton  = document.getElementById("boton");
let cliente = usuario.value;

boton.addEventListener("click", (e) => {
    e.preventDefault()
    const usuarioDato = {
        usuario: usuario.value,
        llave: llave.value
    };
    console.log(usuarioDato)
});

let saludo = document.createElement("h2");
saludo.innerHTML = `<h2>Muchas Gracias por su compra ${cliente}.</h2>

<img class="imgSaludo" src="./img/alfa.jpg">`;

document.body.append(saludo);