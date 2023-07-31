let cuentas = [
    { nombre: "Felipe", saldo: 500, password: "1234" },
    { nombre: "Joss", saldo: 200, password: "b182" },
    { nombre: "Jenn", saldo: 100, password: "4321" },
];

function agregarsaldo(params) {
    var Cantidadingresada = parseInt(document.getElementById('Cant').value);
    var indexarreglo = 0;
    for (var i = 0; i < cuentas.length; i++) {
        console.log(i + "-" + cuentas[i].nombre);
        let nombre = document.getElementById("userName").textContent;
        if (nombre === cuentas[i].nombre) {
            var CantidadT = parseInt(cuentas[i].saldo);
            let posiblesaldo = CantidadT + Cantidadingresada;
            if (posiblesaldo < 990 && posiblesaldo > 10) {
                cuentas[i].saldo = posiblesaldo;
            }
            else {
                alert("valor maximo en tu cueta es de 990");
            }
        }
    }
}

function Consultarsaldo(params) { 
    for (var i = 0; i < cuentas.length; i++) {
        let nombre = document.getElementById("userName").textContent;
        if (nombre === cuentas[i].nombre) {
            let saldoactual = cuentas[i].saldo;
            document.getElementById("saldo").value=saldoactual;

        }
    }
}

function Retirarsaldo(params) {
    for (var i = 0; i < cuentas.length; i++) {
        let nombre = document.getElementById("userName").textContent;
        if (nombre === cuentas[i].nombre) {
            let saldoadebitar


    




function formula5(params) {
    var CantidadT = parseInt(document.getElementById('Cant1').value);
    var Cantidad1 = parseInt(document.getElementById('S1').value);
    document.getElementById('S1').value = (Cantidad1 - CantidadT);
}
