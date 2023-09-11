import {useState} from 'react'

function Produtos() {

  const [lista,setLista] = useState([]);
  const [count,setCount] = useState(0);
  const aumentar =()=>setCount(count +1)
  const diminuir =()=>setCount(count -1)
  const adicionarLista=()=>setLista([...lista,Math.random(100).toFixed])

  return (
    <>
      <fieldset>
        <legend>UseState</legend>
        <p>Valor:{count}</p>
        <button onClick={aumentar}>Aumentar</button>
        <button onClick={diminuir}>Diminuir</button>
      </fieldset>
      <fieldset>
        <legend>Exemplo2</legend>
        <ul>
          {lista.map((n,i) => <li key={i}>{n}</li>)}
        </ul>
        <button onClick={adicionarLista}>Lista</button>
      </fieldset>
    </>
  )
}

export default Produtos