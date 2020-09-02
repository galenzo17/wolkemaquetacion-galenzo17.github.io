//para un crud en local storage

//nombres de bingos
let bingos=[]
let nombre=document.querySelectorAll('.card-title')
let descrip=document.querySelectorAll('.card-content')
window.onload=leecartasdeldom()

function leecartasdeldom(){
    for(i=0;i<nombre.length;i++){
        let juego={}
        juego.nombre=nombre[i].innerHTML
        juego.descripcion=descrip[i].innerHTML
        juego.precio=1
        juego.representante='Bomberos'
        juego.usurio='Admin'
        juego.fecha=new Date()
        bingos.push(juego)
        console.log(bingos[i].nombre)
    }
    
    console.log(bingos)
}
