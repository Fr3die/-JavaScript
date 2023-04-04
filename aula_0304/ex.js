/* switch

let teste =parseInt(prompt("Digite uma opção"));
switch(teste){
    case 1:
        document.write("Primeira opção")
        break;
    case 2:
        document.write("Segunda opção")
        break;
    case 3:
        document.write("terceira opção")
        break;
    default:
        document.write("Caso não seja a primeira e nem a segunda opção")
        break;
}
*/
/*
// incremento e decremento
let numero = 7 
document.write(numero)
document.write("<br></br>")
numero +=11
document.write(numero)
//decrementando valores
/*
document.write("<br></br>")
let numero1= 7
document.write(numero1)
document.write("<br></br>")
numero1 -=7
document.write(numero1)
for(let i=0; i < -10; i--){
    console.log("agora i vale", -i);
}
*/
let carros=["gol","Fusca","hb20","corsa"]
for(let i=0; i < carros.length;i++){
    document.write(carros[i]);
    document.write("<br></br>")
}