/*
//retorna a data

let data=new Date()
document.write(data)
document.write("<br></br>");



//retorna a data padrão do navegador
let data2=new Date()
document.write(data2.toLocaleDateString());
document.write("<br><br>");

//RETORNA O DATA COM ARRAY
let data3=new Date()
let diaSemana=["Domingo","Segunda","Terça","Quarta","Quinta","Sexta"]
document.write(diaSemana[data3.getDay()]);
document.write("<br><br>")
//HORAS
let hour=new Date()

document.write(hour.getHours());
hour.setHours(hour.getHours()+2)

document.write("<br><br>")
document.write(hour.getHours())
document.write("<br><br>")

//RETORNA OS MINUTOS
let minutes=new Date()
document.write(minutes.getMinutes());
document.write("<br><br>")

//RETORNA OS SEGUNDOS
let segundos =new Date()
document.write(segundos.getSeconds());
document.write("<br><br>");
*/

//retorna a data padrão americano
msg=document.getElementById('msgData')
let data1=new Date()
//document.write(data1.toDateString());
//document.write("<br><br>");

msg.innerHTML +=`<p>${data1}</p>`

//tempo
function BemVindo(){
    alert("Olá pessoal tudo bem ?")
}
setTimeout(BemVindo,1000)
    