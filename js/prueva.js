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
    let saludo = document.createElement("h2");
    saludo.innerHTML = `<h2>Bienvenido ${usuarioDato.usuario}.</h2>
    
    <img class="imgSaludo" src="./img/alfa.jpg">`;
    
    document.body.append(saludo);
    localStorage.getItem(`nombre`,usuario.value);
    localStorage.getItem(`pass`,llave.value);
    let enJson = JSON.stringify(usuarioDato);
    localStorage.getItem(`usuario`, enJson);
    
});