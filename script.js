const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
const tArea = document.getElementsByClassName("texto-areaText");
const tAreap = document.querySelector(".textp");
const areaButton = document.querySelector(".textareawrap");
const mensajeEncript = document.querySelector(".mensajeEncript");
copia.style.display = "none"

window.onresize = resize;
// function resize() {
//     // const myText = document.getElementById("myTextarea");
//     // if(validarTexto()){
//         mensaje.style.cssText = `height: ${mensaje.scrollHeight}px; overflow-y: hidden`;
//         // myText.addEventListener("input", function(){
//             // this.style.height = "auto";
//         mensaje.style.height = 'auto';
//         mensaje.style.height = `${(mensaje.scrollHeight)+25}px`;
//         mensajeEncript.style.height=`${(mensaje.scrollHeight)+70}px`;
//         areaButton.style.height=`${(mensaje.scrollHeight)+70}px`;
       
//         // console.log(mensaje.scrollHeight)
//         // console.log(mensaje.scrollHeight+42)
        
//     // }
//     // });
// }
function resize(callback) {
    // const myText = document.getElementById("myTextarea");
    // if(validarTexto()){
        mensaje.style.cssText = `height: ${mensaje.scrollHeight}px; overflow-y: hidden`;
        // myText.addEventListener("input", function(){
            // this.style.height = "auto";
        mensaje.style.height = 'auto';
        mensaje.style.height = `${(mensaje.scrollHeight)+15}px`;
        mensajeEncript.style.height=`${(mensaje.scrollHeight)+40}px`;
        areaButton.style.height=`${(mensaje.scrollHeight)+40}px`;
        if (typeof callback === 'function') {
            callback();
        }    
        // console.log(mensaje.scrollHeight)
        // console.log(mensaje.scrollHeight+42)
        
    // }
    // });
}
 
function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
        // resize();
     
    
}

function btnEncriptar(){
   
    if(!validarTexto()) {
        
        const textoEncriptado = encriptar(textArea.value);
        mensaje.value = textoEncriptado;

        copia.style.display = "block";

        tArea[0].style.display="none";

        textArea.value = "";
        resize(function() {
            // Se ejecuta después de que se complete la función resize()
            // Aquí puedes aplicar el estilo adicional
            mensaje.style.backgroundImage = "none";
        });
        
    
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"`
// `La letra "u" es convertida para "ufat"`


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
    textArea.value = "";
    
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



