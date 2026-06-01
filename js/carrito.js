let cantidades = JSON.parse(localStorage.getItem("cantidades"));

if (cantidades == null) {
    cantidades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function Agregar(pos) {
    cantidades[pos]++;
    localStorage.setItem("cantidades", JSON.stringify(cantidades));
   location.reload();
}

function Quitar(pos) {
    cantidades[pos]--;

    if (cantidades[pos] < 0) {
        cantidades[pos] = 0;
    }

    localStorage.setItem("cantidades", JSON.stringify(cantidades));
    location.reload();
}

function Vaciar() {
    cantidades = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    localStorage.setItem("cantidades", JSON.stringify(cantidades));

    location.reload();
}