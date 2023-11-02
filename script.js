/*  Video 1: SELECTORES */
console.log(document);
console.log(document.getElementById("header"));                 //Busca por id
console.log(document.getElementsByClassName("border-grey"));    //Devuelve una lista de los elementos de la clase enviada
console.log(document.getElementsByTagName("li"));               //Busca por etiqueta
console.log(document.getElementsByName("header"));              //Busca por etiqueta name
console.log(document.querySelector("li"));                      //Busca por etiqueta, trae solo el primero porque es QuerySelector, no SelectorAll
                                                                //(".border-grey") por clase
                                                                //("#main") por id
console.log(document.querySelector("[name=header]"));           //Por cualquier atributo
console.log(document.querySelectorAll("li"));                   //Busca por etiqueta, trae todos

/*  Guardando en constantes  */
const elemento = document.getElementById("header");
const lista1 = document.getElementsByClassName("border-grey");  //Lista dinámica, se actualiza si hay algun cambio
const lista2 = document.querySelectorAll(".border-grey");       //Lista estática, si hay algun cambio, no se ve reflejado

/*  Video 2: ELEMENTOS */
const titulo2 = document.createElement("h2");                       //Param1: etiqueta Param2: objeto(opcional)
const textTitulo2 = document.createTextNode("Probando titulo");
const comentario = document.createComment("Creando comentario");

/*  CLONANDO ELEMENTOS  */
const articulo = document.querySelector("article");
//articulo.cloneNode()  
//articulo.cloneNode(true) : Clona el nodo completo, lo que tiene adentro también
const articulo2 = articulo.cloneNode(true);

/*  INSERTANDO ELEMENTOS  */
//articulo.isConnected --> boolean: Si el elemento está insertado en el DOM 
const seccion = document.getElementById("section");
seccion.appendChild(articulo2);                                             //Inserta debajo
//seccion.insertAdjacentElement("beforebegin", articulo2);                  //Inserta antes de que empiece el elemento
//seccion.insertAdjacentElement("afterbegin", articulo2);                   //Inserta despues de que empiece el elemento
seccion.insertAdjacentText("beforeend", "Aquí acaba la sección");           //Inserta antes de que termine el elemento
seccion.insertAdjacentHTML("afterend", "<h3>Insertando código html</h3>")   //Insertar después de que termine el elemento

/*  ELIMINAR ELEMENTOS  */
//section.remove(); //Eliminar nodo

/*  MODIFICAR ELEMENTOS  */
const seccion2 = document.getElementById("section2");
seccion2.innerHTML = "<h2>Nuevo título</h2>";        //Reemplaza el contenido del elemento
//seccion2.outerHTML = "<h2>Nuevo título</h2>"       //Reemplaza todo el elemento (hasta su propia etiqueta)
seccion2.children[0].textContent = "Otro título"     //Modifica el contenido de texto del primer hijo
seccion2.getAttribute("id")                          //Devuelve un string con el valor del atributo que mandamos
seccion2.classList                                   //Devuelve un listado de las clases en el elemento
seccion2.className                                   //Devuelve un string con la clase
seccion2.className += "nuevaClaseCss";
seccion2.classList.add("nuevaClase");                //Agrega una clase
seccion2.classList.remove("nuevaClase");             //Elimina una clase
seccion2.classList.toggle("nuevaClase")              //Comprueba si hay una clase, si no hay, la agrega; si si hay, la quita

/*  Video 3: Listeners */

/* 1° forma -No recomendada-
Introducir dentro del html como atributo del elemento: 'onclick="clickTitulo()"'
En nuestro JS: Definir la función
function clickTitulo() {
    console.log("El usuario hizo click en el título");
}
*/

/*2° forma -Tampoco muy recomendada
//const titulo2 = document.getElementById("tituloForm");
titulo2.onclick = clickTitulo();
*/

/*3° forma -Recomendada-*/
titulo2.addEventListener("click", clickTitulo);

function clickTitulo() {
    console.log("El usuario hizo click en el título");
}

//titulo2.removeEventListener("click", clickTitulo);

//Para conocer el momento en el que todos los elementos HTML de un proyecto, están cargados.
/*document.addEventListener("DOMContentLoaded", () => {
    console.log("El documento se ha cargado");
})*/

const form = document.querySelector("#formulario");

/*const enviarFormulario = (event) => {
    event.preventDefault();
    console.log(
        event.target.name.value,
        event.target.email.value, 
        event.target.password);
}; */

//   o 

function enviarFormulario(event) {
    event.preventDefault();
    
    const {name, email, password} = event.target;
    console.log(
        name.value,
        email.value,
        password.value
    );

    //Verificar que se haya llenado el campo
    if(name.value.length === 0) {
        alert("El nombre no es válido")
    }
}

form.addEventListener("submit", enviarFormulario);

const section = document.querySelector("#section");
const tituloForm = document.querySelector("#tituloForm");

tituloForm.addEventListener("click", (event) => {
    console.log(event.bubbles, event.cancelBubble);
    event.stopPropagation();
    console.log(event.bubbles, event.cancelBubble);
    console.log("CLICK EN EL TÍTULO")
});

section.addEventListener("click", (event) => {
    console.log(event.target, event.currentTarget);
});