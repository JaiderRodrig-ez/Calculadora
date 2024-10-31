

let uno=document.getElementById("1");
let dos=document.getElementById("2");
let tres=document.getElementById("3");
let cuat=document.getElementById("4");
let cinco=document.getElementById("5");
let seis=document.getElementById("6");
let siete=document.getElementById("7");
let ocho=document.getElementById("8");
let nueve=document.getElementById("9");
let suma=document.getElementById("suma");
let resta=document.getElementById("resta");
let suma1=false;
let resta1=false;
let mult=document.getElementById("mult");
let mult1=false;
let div=document.getElementById("div");
let div1=false;
let igual=document.getElementById("igual");
let cero=document.getElementById("0");
let ac=document.getElementById("ac");
let nb=document.getElementById("nmbe");
let punto=document.getElementById("punto");
let punt1=false;

let numero="";
let numero1="";
let global="";
let contg=0;

cero.addEventListener("click",()=>{
    numero+="0";
    nb.value=numero;
})
uno.addEventListener("click",()=>{
    numero+="1";
    nb.value=numero;
})
dos.addEventListener("click",()=>{
    numero+="2";
    nb.value=numero;
})
tres.addEventListener("click",()=>{
    numero+="3";
    nb.value=numero;
})
cuat.addEventListener("click",()=>{
    numero+="4";
    nb.value=numero;
})
cinco.addEventListener("click",()=>{
    numero+="5";
    nb.value=numero;
})
seis.addEventListener("click",()=>{
    numero+="6";
    nb.value=numero;
})
siete.addEventListener("click",()=>{
    numero+="7";
    nb.value=numero;
})
ocho.addEventListener("click",()=>{
    numero+="8";
    nb.value=numero;
})
nueve.addEventListener("click",()=>{
    numero+="9";
    nb.value=numero;
})
suma.addEventListener("click",()=>{
    if (suma1) {
        nb.value=Number(numero1)+ Number(numero);
        global=Number(numero1)+ Number(numero);
        suma1=false;
    }
    if (resta1) {
        nb.value=Number(numero1)- Number(numero);
        global=Number(numero1)- Number(numero);
        resta1=false;
    }
    if (mult1) {
        nb.value=Number(numero1)* Number(numero);
        global=Number(numero1)* Number(numero);
        mult1=false;
    }
    if (div1) {
        nb.value=Number(numero1)/ Number(numero);
        global=Number(numero1)/ Number(numero);
        div1=false;
    }
    if (contg===0) {
        numero1=numero;
        console.log(numero1);
        contg++;
    }else{
        numero1=global;
        console.log(numero1);
    }
    numero="";
    suma1=true;
})
resta.addEventListener("click",()=>{
    if (suma1) {
        nb.value=Number(numero1)+ Number(numero);
        global=Number(numero1)+ Number(numero);
        suma1=false;
    }
    if (resta1) {
        nb.value=Number(numero1)- Number(numero);
        global=Number(numero1)- Number(numero);
        resta1=false;
    }
    if (mult1) {
        nb.value=Number(numero1)* Number(numero);
        global=Number(numero1)* Number(numero);
        mult1=false;
    }
    if (div1) {
        nb.value=Number(numero1)/ Number(numero);
        global=Number(numero1)/ Number(numero);
        div1=false;
    }
    if (contg===0) {
        numero1=numero;
        console.log(numero1);
        console.log('primero');
        contg++;
    }else{
        numero1=global;
        console.log('goblal');
        console.log(numero1);
    }
    numero="";
    resta1=true;
})
let x =0;
mult.addEventListener("click",()=>{
    if (suma1) {
        nb.value=Number(numero1)+ Number(numero);
        global=Number(numero1)+ Number(numero);
        suma1=false;
    }
    if (resta1) {
        nb.value=Number(numero1)- Number(numero);
        global=Number(numero1)- Number(numero);
        resta1=false;
    }
    if (mult1) {
        nb.value=Number(numero1)* Number(numero);
        global=Number(numero1)* Number(numero);
        mult1=false;
    }
    if (div1) {
        nb.value=Number(numero1)/ Number(numero);
        global=Number(numero1)/ Number(numero);
        div1=false;
    }
    if (contg===0) {
        numero1=numero;
        console.log(numero1);
        contg++;
    }else{
        numero1=global;
        console.log(numero1);
    }
    numero="";
    mult1=true;
})
div.addEventListener("click",()=>{
    if (suma1) {
        nb.value=Number(numero1)+ Number(numero);
        global=Number(numero1)+ Number(numero);
        suma1=false;
    }
    if (resta1) {
        nb.value=Number(numero1)- Number(numero);
        global=Number(numero1)- Number(numero);
        resta1=false;
    }
    if (mult1) {
        numero1="1"
        nb.value=Number(numero1)* Number(numero);
        global=Number(numero1)* Number(numero);
        mult1=false;
    }
    if (div1) {
        nb.value=Number(numero1)/ Number(numero);
        global=Number(numero1)/ Number(numero);
        div1=false;
    }
    if (contg===0) {
        numero1=numero;
        console.log(numero1);
        contg++;
    }else{
        numero1=global;
        console.log(numero1);
    }
    numero="";
    div1=true;
})
ac.addEventListener("click",()=>{
    numero="";
    nb.value=Number(numero);
    punt1=false;
    global="";numero1=""
    contg=0
})
punto.addEventListener("click",()=>{
    numero+=".";
    nb.value=numero;
    if (punt1) {
        nb.value="Syntax Error";
        numero="";
        punt1=false;
    }else{
        punt1=true;
    }
})
igual.addEventListener("click",()=>{
    if (suma1) {
        global=Number(numero1)+ Number(numero);
        nb.value=Number(numero1)+ Number(numero);
        suma1=false;
    }
    if (resta1) {
        nb.value=Number(numero1)- Number(numero);
        global=Number(numero1)- Number(numero);
        resta1=false;
    }
    if (mult1) {
        nb.value=Number(numero1)* Number(numero);
        global=Number(numero1)* Number(numero);
        mult1=false;
    }
    if (div1) {
        nb.value=Number(numero1)/ Number(numero);
        global=Number(numero1)/ Number(numero);
        div1=false;
    }
    numero="";
})
