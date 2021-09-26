 function contar(){
let ini = document.getElementById("ini")
let fim = document.getElementById("fim")
let inter =document.getElementById("inter")
let res = document.getElementById("res")




if(ini.value.length == 0 || fim.value.length == 0 || inter.value.length == 0){
window.alert("Erro")
}else{
    let i = Number(ini.value)
    let f =Number(fim.value)
    let inter2 =Number(inter.value)
    
    for(let c = i; c <= f; c =+ inter2){
        res.innerText =+ c
    }

}






}