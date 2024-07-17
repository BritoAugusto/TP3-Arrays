// Desarrollar un sistema de cajero automático en JavaScript que permita al usuario realizar varias operaciones bancarias mediante un menú interactivo. El usuario podrá consultar el saldo, realizar ingresos y egresos de dinero, y otras operaciones adicionales. Al principio del programa declara una variable `saldo` inicial con un valor de $1000 (puedes elegir otro valor si prefieres). las opciones que se mostrarán al usuario son: 1. Ver saldo de la cuenta. 2. Ingresar dinero. 3. Retirar dinero. 4. Ver últimas  transacciones. 5. Salir. Importante, el usuario puede realizar varias veces las operaciones del cajero.

let saldo = 1000;
let transacciones = [];
let accionActual = '';

function verSaldo() {
  document.getElementById('salida').innerHTML += `<p>Tu saldo es de ${saldo}</p>`
}

function ingresarDinero(monto) {
  if (isNaN(monto) || monto <= 0) {
    document.getElementById("salida").innerHTML +=
      "<p>ingrese un numero valido</p>";
  } else {
    saldo = saldo + monto;
    transacciones.push(`Ingresó ${monto}`);
    document.getElementById('salida').innerHTML += `<p>${transacciones.join('<br>')}<br>Ahora su saldo es de ${saldo}</p>`
  }
}

function retirarDinero(monto) {
  if (isNaN(monto) || monto <= 0) {
    document.getElementById('salida').innerHTML += "<p>ingrese un numero valido</p>";
  } else if (monto > saldo) {
    alert("Fondos insuficientes");
  } else {
    saldo = saldo - monto;
    transacciones.push(`Retiró ${monto}.`);
    document.getElementById('salida').innerHTML += `<p>Retiró ${monto}.<br> .Ahora su saldo es de ${saldo}</p>`;
  }
}

function verTransacciones() {
  if (transacciones.length === 0) {
    document.getElementById('salida').innerHTML += '<p>No hay transacciones que mostrar</p>';
  } else {
    document.getElementById('salida').innerHTML += `<p>${transacciones.join(`<br>`)}</p>`;
  }
}

function mostrarFormulario(accion) {
    accionActual = accion;
    document.getElementById('formulario').style.display = 'block';
}

function procesarFormulario() {
    const monto = parseInt(document.getElementById('monto').value);
    if (accionActual === 'ingresar') {
        ingresarDinero(monto);
    } else if (accionActual === 'retirar') {
        retirarDinero(monto);
    }
    document.getElementById('formulario').style.display = 'none';
    document.getElementById('monto').value = '';
}

function salir(){
    alert('Muchas Gracias')
}

