let helado = parseInt(prompt("Escoja su sabor: 1.limon - 2.frutilla - 3.chocolate - 4.ananá")) 
let totalHelado = 0
let elegirBochas= true
let eleccion    

while(elegirBochas === true){
        if(helado===1){
            totalHelado= totalHelado + 200
        }else if(helado===2){
            totalHelado= totalHelado + 300
        }else if(helado===3){
            totalHelado= totalHelado + 400
        }else if (helado===4) {
            totalHelado= totalHelado + 500
        }else{
            helado = parseInt(prompt("Escoja su sabor: 1.limon - 2.frutilla - 3.chocolate - 4.ananá"))
        }

eleccion= parseInt(prompt("Quieres otro Helado? 1.Si - 2.No"))

if(eleccion===1){
    helado= parseInt(prompt("Escoja su sabor: 1.limon - 2.frutilla - 3.chocolate - 4.ananá"))
}else{
    elegirBochas= false;
    alert(totalHelado= totalHelado)
}
}
