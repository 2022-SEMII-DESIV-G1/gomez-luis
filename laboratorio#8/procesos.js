 // Ordena el arreglo y cuenta la cantidad de veces que se repite un valor
function order() {
  let store = document.getElementById("cadena").value;
  let singleelement = [];
  let repeat = [];
  let counter = 1;

  for (let i = 0; i < store.length; i++){
    if (store[i+1] === store[i]){
      counter++;
    }else{
      singleelement.push(store[i]);
      repeat.push(counter);
      counter = 1;
    }
  }
    document.getElementById('clean_').style.visibility = 'visible';

    singleelement.forEach((l, i) => {
      document.getElementById('result').innerHTML +="<p>" + singleelement[i] + " = " + repeat[i] + "</p>";
    });
}
// Funcion de limpiar elementos introducidos
function clean(cadena) {
  document.getElementById('cadena').value = "";
  document.getElementById('result').innerHTML= " ";
  document.getElementById('clean_').style.visibility = 'hidden';
}