

// class Datos {
//     constructor (nombres, edad, ingresos,rdm ) {
//         this.nombres = nombres
//         this.edad = edad
//         this.ingresos = ingresos
//         this.rdm = rdm
//         this.info = `hola ${nombres}, con tus ingresos de ${ingresos} podemos ayudarte a diversificar tus inversiones`
//     }
//     verInfo() {
//         console.log (this.info)
//     }
// }
// let nombres = prompt ("ingrese su nombre y apellido")
// let edad = Number(prompt("ingrese su edad"))
// let ingresos = Number(prompt("cuanto ganas mensualmente"))
// let rdm = Number(prompt(`ingrese la opcion correcta 
// 1-monotributista
// 2-relacion de depencia` ))

// const usuario = new Datos(nombres, edad, ingresos, rdm); 
// console.log(usuario)


// const euro = (x) => {           // defini la funcion para cotizar euros
//     alert(`la cotizacion es ${x} *  ${311} = E ${x * 311} `)
//     return x * 311;
// }
// const dolar = (x) => {         // defini la funcion para cotizar dolar
//     alert(`la cotizacion es ${x} *  ${185} = US ${x * 185}`)
//     return x * 185;
// }

// const real = (x) => {            // defini la funcion para cotizar euro
//     alert(`la cotizacion es ${x} *  ${33} =  R ${x * 33}`)
//     return x * 33;
// }

// const main = () => {         // menu para eligir la cotizacion
//  let opcion = Number(prompt(
//         ` 
// elija el numero de la cotizacion que desea calcular
// 	1 - euro
// 	2 - dolar
// 	3 - real

// 	0 - Finalizar programa

// 	`));
//     return opcion;
// }
// let menu = main();   

// while (menu != 0) {
//     let x ;
//     switch (menu) {
//         case 1:
//             alert("la cotizacion del euro blue es de 211")
//             x = Number(prompt("Ingrese el monto a comprar"));
//             if (x <= 200) {
//                 euro(x);
//             } else {
//                 alert("disculpe solo podemos vender 200 euros por normativa de la bcra")
//             }

//             menu = main();
//             break;

//         case 2:
//             alert("la cotizacion del dolar blue es de 185")
//             x = Number(prompt("Ingrese el monto a comprar"));
//             if (x <= 200) {
//                 dolar(x)
//             } else {
//                 alert("disculpe solo podemos vender 200 dolares por normativa de la bcra")
//             }
//             menu = main();
//             break;

//         case 3:
//             alert("la cotizacion del real blue es de 33")
//             x = Number(prompt("Ingrese el monto a comprar"));
//             if (x <= 200) {
//              real(x)
//             }
//             else {
//         alert("disculpe solo podemos vender 200 reales por normativa de la bcra")
//     }

//     menu = main();
//     break;


//     default:
//     menu = main();
//     break;
// }
// }



const inventario = [
    {nombre:"pantalon", cantidad:20},
    {nombre:"short", cantidad:15},
    {nombre:"buso", cantidad:11},
    {nombre:"campera", cantidad:88},
    {nombre:"remera", cantidad:22},
    {nombre:"sueter", cantidad:33},
]

let prenda = prompt("¿que prenda quiere?")

function ropa(compra){
 return (compra.nombre === prenda)
}

console.log (inventario.find(ropa))

const array1 = [40, 41, 42, 44, 36,35];
const talle = prompt("ingrese un talle ")
const found = array1.find(element => element == talle);
if (talle == found){
    console.log(found)
    alert (`el talle ${found}, si lo tenemos`)
}
else {
    alert ("no tenemos ese talle")
}