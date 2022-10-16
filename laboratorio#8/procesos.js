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
  for(let j = 0; j < singleelement.length; j++){
    console.log("el valor" + singleelement[j] + "se repite" + repeat[j]);   
  document.getElementById('resultado').innerHTML = (singleelement[j] +": "+ repeat[j]);
  }
}
// Funcion de limpiar elementos introducidos
function clean(cadena) {
  document.getElementById(cadena).value = "";

}