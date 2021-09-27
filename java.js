const euro = (x) => {           // defini la funcion para cotizar euros
    alert(`la cotizacion es ${x} *  ${311} = E ${x * 311} `)
    return x * 311;
}
const dolar = (x) => {         // defini la funcion para cotizar dolar
    alert(`la cotizacion es ${x} *  ${185} = US ${x * 185}`)
    return x * 185;
}

const real = (x) => {            // defini la funcion para cotizar euro
    alert(`la cotizacion es ${x} *  ${33} =  R ${x * 33}`)
    return x * 33;
}

const main = () => {         // menu para eligir la cotizacion
 let opcion = Number(prompt(
        ` 
elija el numero de la cotizacion que desea calcular
	1 - euro
	2 - dolar
	3 - real
	
	0 - Finalizar programa

	`));
    return opcion;
}
let menu = main();   

while (menu != 0) {
    let x ;
    switch (menu) {
        case 1:
            alert("la cotizacion del euro blue es de 211")
            x = Number(prompt("Ingrese el monto a comprar"));
            if (x <= 200) {
                euro(x);
            } else {
                alert("disculpe solo podemos vender 200 euros por normativa de la bcra")
            }

            menu = main();
            break;

        case 2:
            alert("la cotizacion del euro blue es de 185")
            x = Number(prompt("Ingrese el monto a comprar"));
            if (x <= 200) {
                dolar(x)
            } else {
                alert("disculpe solo podemos vender 200 euros por normativa de la bcra")
            }
            menu = main();
            break;

        case 3:
            alert("la cotizacion del euro blue es de 33")
            x = Number(prompt("Ingrese el monto a comprar"));
            if (x <= 200) {
             real(x)
            }
            else {
        alert("disculpe solo podemos vender 200 euros por normativa de la bcra")
    }

    menu = main();
    break;


    default:
    menu = main();
    break;
}
}