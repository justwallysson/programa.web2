function raiz25(){
    var Raiz = Math.sqrt(25)
    alert("A raiz de 25 é "+ Raiz)
}
function raiz36(){
    var Raiz = Math.sqrt(36)
    alert("A raiz de 36 é "+ Raiz)
}
function raiz49(){
    var Raiz = Math.sqrt(49)
    console.log(Raiz)
    alert("A raiz de 49 é "+ Raiz)
}

function escreveDiv(texto){
    alert(texto)
    document.getElementById('minha-div').innerHTML = texto
}

function escreveDiv2(){
    var texto2 = prompt('Me diz seu persongame fav de genshin veyr: ')
    document.getElementById('escreve-div').innerHTML = texto2
}