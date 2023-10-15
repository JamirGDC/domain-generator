const domain = [];


function obtenerPronoun(){
    domain.push(document.getElementById("pronouns").value);
}

function obtenerAdj(){
    domain.push(document.getElementById("adj").value);
}

function obtenerNoun(){
    domain.push(document.getElementById("noun").value);
}

function obtenerExtension(){
    let extension = document.getElementById("extension").value;
    return extension;
}

function limpiarDominio(){
    domain.length = 0;
}

function generarCombinaciones(arr, extension){
    let combinacionTotal = '';

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            for (let k = 0; k < arr.length; k++) {
                if (i !== j && i !== k && j !== k) {
                    combinacionTotal += arr[i] + arr[j] + arr[k] + extension +'\n';
                }
            }
        }
    }

    return combinacionTotal;
}

function generarDominio(){
    obtenerPronoun();
    obtenerAdj();
    obtenerNoun();
    console.log(domain);
    let extension = obtenerExtension();

    alert(generarCombinaciones(domain, extension));

    limpiarDominio();
}


