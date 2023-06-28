const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
const tArea = document.getElementsByClassName("texto-areaText");
const tAreap = document.querySelector(".textp");
const areaButton = document.querySelector(".textareawrap");
const mensajeEncript = document.querySelector(".mensajeEncript");

window.onresize = resize;



function myFunction(x, y) {
    if (x.matches) {
      textArea.rows = 5;
    //   console.log("row 5 menos de 700px");
    } else if (y.matches) {
      textArea.rows = 8;
    //   console.log("rows 6  701px - 1023px");
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)");
  var y = window.matchMedia("(min-width: 701px) and (max-width: 1023px)");
  myFunction(x, y); 
  
  x.addListener(function (x) {
    myFunction(x, y);
  }); 
  
  y.addListener(function (y) {
    myFunction(x, y);
  }); 
  

function resize(callback) {
    let textoEscrito = document.querySelector(".mensaje").value;
    console.log(textoEscrito.length)
    if(textoEscrito.length!=0){
        mensaje.rows = 0;
        mensaje.style.cssText = `height: ${mensaje.scrollHeight}px; overflow-y: hidden`;
        mensaje.style.height = 'auto';
        console.log(mensaje.scrollHeight)
        mensaje.style.height = `${(mensaje.scrollHeight)+15}px`;
        mensajeEncript.style.height=`${(mensaje.scrollHeight)+90}px`;
        areaButton.style.height=`${(mensaje.scrollHeight)+90}px`;
        mensaje.style.backgroundImage = "none";
        if (typeof callback === 'function') {
           
            callback();
           
    } 
    }
    
       
}
 
function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    } 
    if(textoEscrito.length==0){
        alert("No hay ningún texto para encriptar/desencriptar")
        location.reload();
        return true;
    }  
}

function btnEncriptar(){
   
    if(!validarTexto()) {
        
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;
        copia.style.display = "block";
        tArea[0].style.display="none";
        textArea.value = "";
        
            resize(function() {
           
                mensaje.style.backgroundImage = "none";
            });
        

       
    }
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}



function btnDesencriptar(){
    
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    copia.style.display = "block";
    tArea[0].style.display="none";
    textArea.value = "";
    mensaje.rows = 0;
    resize(function() {
           
        mensaje.style.backgroundImage = "none";
    });
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}



