//key: referencia que voy a utilizar para tener acceso a campo o a la columna value
//value: campo donde voy a guardar los valores

//sintaxis
//agregar al localstorage
localStorage.setItem('nombre', 'Manuel');
sessionStorage.setItem('nombre', 'Manuel');

const producto = {
    nombre: 'moto',
    precio: '3000'
}
//como es un objeto tenemos que convertir a string
const objAString = JSON.stringify(producto);
localStorage.setItem('producto', objAString) //es un objeto

//como agregar un arreglo al localStorage
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril']
const arregloAString = JSON.stringify(meses)
localStorage.setItem('meses',arregloAString)

//-----------------------------------------------------
//consultar los datos en el LocalStorage
const nombre = localStorage.getItem('nombre');
console.log(nombre);

//consultar en el localStorage un objeto
const pro = localStorage.getItem('producto');
console.log(pro);
const productAObject = JSON.parse(pro);
console.log(productAObject);

//consultar en el LocalStorage un arreglo
const mes = localStorage.getItem('meses');
const mesAJSON = JSON.parse(mes);
console.log(mesAJSON);


