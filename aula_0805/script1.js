let temp
function tempo(){
    let relogio=document.querySelector("#main")
    let hora=new Date()
    relogio.innerHTML=(hora.toLocaleString()).slice(-8)
}
document.querySelector("#ligar").addEventListener("click",()=>{
    temp=setInterval(tempo,1000)
})
document.querySelector("#Desligar").addEventListener("click",()=>{
    clearInterval(temp)
})