const usuario=[
    {nome:"Huguinho",idade:18},
    {nome:"Zezinho", idade:19},
    {nome:"Luizinho", idade:20},
];
let msg=document.getElementById('msg')
const nomeUsers=usuario.length;
for(let i =0; i <nomeUsers;i++){
    msg.innerHTML +=`<p>${usuario[i].nome} ${usuario[i].idade}</p>` 
}
var imagem=[
  'imagem/Ednaldo.jpg',
  'imagem/Ednaldo2.jpg',
  'imagem/Ednaldo3.jpg'
];
var index=0;
var time=2000;

function slideShow(){
    document.getElementById('image').src=imagem[index];
    index++;
    if(index==imagem.length){index=0;}
    setTimeout("slideShow()",time);
}
slideShow()