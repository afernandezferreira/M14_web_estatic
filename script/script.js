window.onload = function () {
  mostraDies();
  setInterval(mostraData, 1000);
  setInterval(mostraRellotge, 1000);
};

function mostraRellotge() {
  const hoy = new Date();

  var hores = ("0" + hoy.getHours()).slice(-2);
  var minuts = ("0" + hoy.getMinutes()).slice(-2);
  var segons = ("0" + hoy.getSeconds()).slice(-2);

  document.getElementById("hora").innerHTML = `${hores}:${minuts}:${segons}`;
}

function mostraData() {
  const avui = new Date();

  document.getElementById("data").innerHTML =
    "Fecha de hoy: " + avui.toLocaleString("es-ES");
}

function mostraDies() {
  const diaCalculo = new Date("2020/09/21");
  const avui = new Date();

  const resultado = avui.getTime() - diaCalculo.getTime();

  document.getElementById("dies").innerHTML =
    "Dias que han pasado desde el 21 de SEP de 2020: " +
    Math.round(resultado / (1000 * 60 * 60 * 24)) +
    "Dias";
}