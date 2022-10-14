function order(cadena) {
    var mensaje = document.getElementById(cadena).value;
    var cadena = mensaje.split("");
    var contador = {};
    cadena.forEach(function (valor) {
      if (contador[valor] === undefined) {
        contador[valor] = 1;
      } else {
        contador[valor] += 1;
      }
    });
    document.getElementById("resultado").innerHTML = "<ul>";

    for (var clave in contador) {
      document.getElementById("resultado").innerHTML +=
        "<li>" + clave + ":" + contador[clave] + "</li>";
    }
    document.getElementById("resultado").innerHTML += "<ul>";
  }
  function limpiar(cadena) {
    document.getElementById(cadena.value) = "";
    document.getElementById("resultado").innerHTML = "";
  }