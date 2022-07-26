function productos(){
    mensaje = "1 - (COD: CAP) Capitan de Espacio(x 36 und.)-----$5.000\n2 - (COD: CAC) Cachafaz(x 12 und.)-----$1.690\n3 - (COD: MEL) Meltaim(Apto Veganos x 12 und.)-----$1.910\n4 - (COD: GUO) Guolis(Con extra de relleno x 18 und.)-----$5.000\n5 - (COD: ANG) Angiola(Apto Celiacos x 12und.)-----$3.910\n";
    return mensaje;
}
alert("Bienvenidos a Alfajores Argentinos.\nEl sitio en donde podra conseguir la mayor variedad de alfajores fabricados en Argentina.\nHaz clic en Aceptar y podras ver toda la variedad de Alfajores que tenemos actualmente con su precio por caja.");

alert("Actualmente contamos con los siguientes productos:\n\n"+productos()+"\nHaga click en Aceptar y podra ingresar el codigo del producto que desee y luego la cantidad que quiera de cada producto.");

let codigo;

let cantidad;

let suma;

let total = 0;

let seguir = "CONTINUAR";

while(seguir == "CONTINUAR"){

    codigo = prompt(productos()+"Por favor tipee el codigo del producto que desea, recuerde que son solo 3 letras en mayuscula.");

    switch(codigo){
        case "CAP":
            cantidad = parseInt(prompt("Usted selecciono: Capitan de Espacio(x 36 und.), por favor seleccione la cantidad que desea.\nPor favor seleccione la cantidad de cajas que quiera que le enviemos:"));
            suma = cantidad * 5000;
            total += suma;
            break;
        case "CAC":
            cantidad = parseInt(prompt("Usted selecciono: Cachafaz(x 12 und.), por favor seleccione la cantidad que desea.\nPor favor seleccione la cantidad de cajas que quiera que le enviemos:"));
            suma = cantidad * 1690;
            total += suma;
            break;
        case "MEL":
            cantidad = parseInt(prompt("Usted selecciono: Meltaim(Apto Veganos x 12 und.), por favor seleccione la cantidad que desea.\nPor favor seleccione la cantidad de cajas que quiera que le enviemos:"));
            suma = cantidad * 1910;
            total += suma;
            break;
        case "GUO":
            cantidad = parseInt(prompt("Usted selecciono: Guolis(Con extra de relleno x 18 und.), por favor seleccione la cantidad que desea.\nPor favor seleccione la cantidad de cajas que quiera que le enviemos:"));
            suma = cantidad * 5000;
            total += suma;
            break;
        case "ANG":
            cantidad = parseInt(prompt("Usted selecciono: Angiola(Apto Celiacos x 12und.), por favor seleccione la cantidad que desea.\nPor favor seleccione la cantidad de cajas que quiera que le enviemos:"));
            suma = cantidad * 3910;
            total += suma;
            break;
    };

    seguir = prompt("El total de su compra es de $"+total+".\nSi desea finalizar la compra tipee FIN en caso de que desee adquirir más productos tipee CONTINUAR.");
}

alert("Muchas gracias por su compra!!!!\nEl total de su pedido es de: $"+total+".\nEn las proximas 48hs estara llegando a su domicilio.");