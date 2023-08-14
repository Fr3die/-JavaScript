//criar a lista de usuarios
let listaDados=[];
//objeto base(construtor)
function Campos(campo1,campo2){
    this.campo1=campo1;
    this.campo2=campo2;
}
//disparar o botão
const btnEnviar=document.querySelector('#btnSubmit')

btnEnviar.addEventListener('click',()=>{
    const inputCampo1=document.querySelector('#campo1');
    const inputCampo2=document.querySelector('#campo2');
    //instaciando o objeto (construtor)
    let info = new Campos(inputCampo1.value,inputCampo2.value);
    listaDados.push(info);
    localStorage.setItem('dados',JSON.stringify(listaDados))
})