const euro = (x) => {
    alert(`la cotizacion es ${x} *  ${311} = ${x * 311}`)
    return x * 311;
}

const dolar = (x) => {
    alert(`la cotizacion es ${x} *  ${185} = ${x * 185}`)
    return x * 185;
}

const real = (x) => {
    alert(`la cotizacion es ${x} *  ${33} = ${x * 33}`)
    return x * 33;
}

const main = (texto = "Ingresa el numero de la divisa que desea comprar") => {
    let opcion = Number(prompt(
        ` ${texto}

	1 - euro
	2 - dolar
	3 - real
	
	0 - Finalizar programa

	`));
    return opcion;
}
let menu = main();

let x;
while (menu != 0) {


    switch (menu) {
        case 1:
            alert("la cotizacion del euro blue es de 211")
            x = Number(prompt("Ingrese el monto a comprar"));
            if (x <= 200) {
                alert(`El resultado de la conversion es = ${x * 211}`)
            } else {
                alert("disculpe solo podemos vender 200 euros por normativa de la bcra")
            }

            menu = main();
            break;

        case 2:
            alert("la cotizacion del euro blue es de 185")
            x = Number(prompt("Ingrese el monto a comprar"));
            if (x <= 200) {
                alert(`El resultado de la conversion es = ${x * 185}`)
            } else {
                alert("disculpe solo podemos vender 200 euros por normativa de la bcra")
            }
            menu = main();
            break;

        case 3:
            alert("la cotizacion del euro blue es de 33")
            x = Number(prompt("Ingrese el monto a comprar"));
            if (x <= 200) {
                alert(`El resultado de la conversion es = ${x * 33}`)
            } else {
                alert("disculpe solo podemos vender 200 euros por normativa de la bcra")
            }

            menu = main();
            break;


        default:
            menu = main;
            break;
    }
}