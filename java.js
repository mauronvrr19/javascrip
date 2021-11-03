//  horario
const dia = new Date()

 // cotizacion de divisas

$('.divisas')
.append(`
<p>cotizacion del dia</p>
<p>euro: €1 = $215 / dolar: US$1 = $185 / real: R1 = $33</p>
<p>${dia}</p>
`);


window.addEventListener('load', function() {
    console.log( 'Todos los elementos de la ventana están cargados' );
});




const URL = 'inflacion.json'
$("body").prepend('<button id="btn2">inflacion</button>');
$("#btn2").click(() => { 
    $.getJSON(URL, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h2> año: ${dato.año}</h2>
                                   <h2> inflacion: ${dato.i}</h2>
                                  </div>`);
            }  
          }
    });
});

const URLGET = 'dolar.json'
$("body").prepend('<button id="btn1">dolar</button>');
$("#btn1").click(() => { 
    $.getJSON(URLGET, function (respuesta, estado) {
          if(estado === "success"){
            let misDatos = respuesta;
            for (const dato of misDatos) {
              $("body").prepend(`<div>
                                   <h1> año: ${dato.año}</h1>
                                   <h1> valor: $${dato.i}</h1>
                                  </div>`);
            }  
          }
    });
});

// modo oscuro
const by = $('#by')
$('.enlace').on('click', function () {
    if ( by.hasClass('darkMode') ){
           by.removeClass('darkMode')
           console.log("modo oscuro desactivado");
    }  else {
           by.addClass('darkMode');
           console.log("modo oscuro activado");
        }

    }
);

// calculadora de reales
const button = document.querySelector('.button')
button.addEventListener("click", () => {
    const monto = document.querySelector(".monto")
    const total = document.querySelector(".total")
    const x = monto.value
    const real = (x) => {
        return x * 33;
    }
    total.innerHTML = "total: $" + real(x) + ` - R$${monto.value}`;
})

// calculadora de dolares
const button2 = document.querySelector('.button2')
button2.addEventListener("click", () => {
    const monto2 = document.querySelector(".monto2")
    const total2 = document.querySelector(".total2")
    const x = monto2.value
    const dolar = (x) => {
        return x * 185;
    }
    total2.innerHTML = "total: $" + dolar(x) + ` - US$${monto2.value}`;
})

// calculadora de euros

const button3 = document.querySelector('.button3')
button3.addEventListener("click", () => {
    const monto3 = document.querySelector(".monto3")
    const total3 = document.querySelector(".total3")
    const x = monto3.value
    const euro = (x) => {
        return x * 215;
    }
    total3.innerHTML = "total: $" + euro(x) + ` - €${monto3.value}`;
})


// calculadora inflacionaria
const button4 = document.querySelector('.button4')
button4.addEventListener("click", () => {
    const monto4 = document.querySelector(".monto4").value
    const total4 = document.querySelector(".total4")
    const años = document.querySelector(".años").value
    const consulta = inflacion.find(infla => infla.año == años);
    if (consulta){
        total4.innerHTML = `el valor ingresado al año 2021 es equivalente a $ ${consulta.i * monto4}`
    }
    else {
        total4.innerHTML = "ingrege otro año"
    }
})

// calculadora de devaluacion 
const button5 = document.querySelector('.button5')
button5.addEventListener("click", () => {
    const monto5 = document.querySelector(".monto5").value
    const total5 = document.querySelector(".total5")
    const años5 = document.querySelector(".años5").value
    const consulta = inflacion.find(infla => infla.año == años5);
    if (consulta) {
        const dv = monto5 / consulta.i
        total5.innerHTML = `el valor ingresado en ${años5} es el equivalente a $ ${Math.round(dv*100)/100 } del dia de hoy`
    } else {
        total5.innerHTML = "ingrese otro año"
    }
})


// calculadora de pesos-dolar 
const button6 = document.querySelector('.button6')
button6.addEventListener("click", () => {
    const monto6 = document.querySelector(".monto6").value
    const total6 = document.querySelector(".total6")
    const años6 = document.querySelector(".años6").value
    const consulta = dolar.find(dol => dol.año == años6);
    if (consulta){
        const dl = monto6 * consulta.i
        total6.innerHTML = `el valor ingresado en el año ${años6} da un total de $ ${dl}`
    }
    else {
        total6.innerHTML = "ingrese otro año"
    }
})