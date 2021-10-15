/**
 * @Dilson
 * 14/10/2021
 */

//Resolve a equação
 function calcular(){
    let a = Number(document.querySelector('#idvalora').value);
    let b = Number(document.querySelector('#idvalorb').value);
    let c = Number(document.querySelector('#idvalorc').value);

    let res = document.querySelector('#resultado');

    let vdelta = delta(a,b,c);
    let raiz = raizes(a,b,vdelta)
    
    res.innerHTML = `Delta = ${vdelta}`;
    res.innerHTML += '<br>'+raiz;
}

//Calcula o delta da equação
function delta(a,b,c){
    let calcdelta = Math.pow(b,2) - 4 * a * c;
    return calcdelta;
}

//Calcular raízes da equação
function raizes (a, b, delta){
    calcx1 = (-b + Math.sqrt(delta))/(2*a);
    calcx2 = (-b - Math.sqrt(delta))/(2*a);
    return `S = ${calcx1}, ${calcx2}`;
}