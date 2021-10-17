// cotizacion de divisas
const divisas = document.querySelector('.divisas');
const ul = document.createElement("ul")
ul.innerHTML = "cotizacion del dia"
divisas.appendChild(ul)

const li = document.createElement("li")
li.innerHTML = "euro: €1 = $215 / dolar: US$1 = $185 / real: R1 = $33";
divisas.appendChild(li);


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

// array
const inflacion = [

    {
        año: 1992,
        i: 126
    },
    {
        año: 1993,
        i: 107
    },
    {
        año: 1994,
        i: 99.91
    },
    {
        año: 1995,
        i: 96.21
    },
    {
        año: 1996,
        i: 94.68
    },
    {
        año: 1997,
        i: 93.63
    },
    {
        año: 1998,
        i: 93.3218
    },
    {
        año: 1999,
        i: 92.6988
    },
    {
        año: 2000,
        i: 94.4263
    },
    {
        año: 2001,
        i: 95.129
    },
    {
        año: 2002,
        i: 97.64
    },
    {
        año: 2003,
        i: 69.27
    },
    {
        año: 2004,
        i: 66.83
    },
    {
        año: 2005,
        i: 62.99
    },
    {
        año: 2006,
        i: 56.08
    },
    {
        año: 2007,
        i: 51.05
    },
    {
        año: 2008,
        i: 41.83
    },
    {
        año: 2009,
        i: 33.9
    },
    {
        año: 2010,
        i: 29.08
    },
    {
        año: 2011,
        i: 23.09
    },
    {
        año: 2012,
        i: 18.57
    },
    {
        año: 2013,
        i: 14.78
    },
    {
        año: 2014,
        i: 11.89
    },
    {
        año: 2015,
        i: 8.64
    },
    {
        año: 2016,
        i: 6.75
    },
    {
        año: 2017,
        i: 5.11
    },
    {
        año: 2018,
        i: 4.09
    },
    {
        año: 2019,
        i: 2.77
    },
    {
        año: 2020,
        i: 1.8
    },

]

localStorage.setItem('datos', JSON.stringify(inflacion));
const guardado = localStorage.getItem('datos')
console.log('objetoObtenido: ', JSON.parse(guardado));

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
    console.log(consulta)
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
    console.log(consulta)

})

//    array
const dolar = [

    {
        año: 1992,
        i: 0.9916
    },
    {
        año: 1993,
        i: 0.9984
    },
    {
        año: 1994,
        i: 1.0014
    },
    {
        año: 1995,
        i: 1.0016
    },
    {
        año: 1996,
        i: 1.0005
    },
    {
        año: 1997,
        i: 1.0014
    },
    {
        año: 1998,
        i: 1.0010
    },
    {
        año: 1999,
        i: 1.0014
    },
    {
        año: 2000,
        i: 1.0014
    },
    {
        año: 2001,
        i: 1.1499
    },
    {
        año: 2002,
        i: 3.4050
    },
    {
        año: 2003,
        i: 2.9400
    },
    {
        año: 2004,
        i: 2.9750
    },
    {
        año: 2005,
        i: 3.0320
    },
    {
        año: 2006,
        i: 3.0620
    },
    {
        año: 2007,
        i: 3.1490
    },
    {
        año: 2008,
        i: 3.4530
    },
    {
        año: 2009,
        i: 3.8000
    },
    {
        año: 2010,
        i: 3.9760
    },
    {
        año: 2011,
        i: 4.73
    },
    {
        año: 2012,
        i: 6.78
    },
    {
        año: 2013,
        i: 9.95
    },
    {
        año: 2014,
        i: 13.70
    },
    {
        año: 2015,
        i: 14.17
    },
    {
        año: 2016,
        i: 16.47
    },
    {
        año: 2017,
        i: 18.88
    },
    {
        año: 2018,
        i: 38.50
    },
    {
        año: 2019,
        i: 38.50
    },
    {
        año: 2020,
        i: 73.50
    },
    {
        año: 2021,
        i: 176.50
    },
]

localStorage.setItem('datos2', JSON.stringify(dolar));
const guardado2 = localStorage.getItem('datos2')
console.log('objetoObtenido: ', JSON.parse(guardado2));


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

    console.log(consulta)
})