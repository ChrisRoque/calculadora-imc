import { useState } from 'react'
import './App.css'

const Formulario = () => {
  const [altura, setaltura] = useState(0);
  const [peso, setpeso] = useState(0);
  const [valor, setvalor] = useState(0);

const resultado = () => {
  const imc = peso / (altura * altura);
  const fomata = imc.toFixed(1);
  setvalor(fomata)
}


  return (
    <>
      <div className='container'>
        <h1 className='tatle'>Tabela IMC</h1>
        <table >
          <thead  >
            <tr>
              <th >IMC</th>
              <th >Resultado</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menos do que 18,5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>Entre 18,5 e 24,9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>Entre 25 e 29,9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>Entre 30 e 34,9 </td>
              <td>Obesidade grau 1</td>
            </tr>
            <tr>
              <td>Entre 35 e 39,9 </td>
              <td>Obesidade grau 2</td>
            </tr>
            <tr>
              <td>Mais do que 40</td>
              <td>Obesidade grau 3</td>
            </tr>
          </tbody>
        </table>
        <h2 className='tatle'>Calcule seu IMC</h2>
        <form>
          <label >Digite seu peso:</label> <br/>
          <input type="number" value={peso} onChange={evento => setpeso(parseFloat(evento.target.value))} /><br />
          <label >Digete sua altura:</label> <br/>
          <input type="number" value={altura} onChange={evento => setaltura(parseFloat(evento.target.value))} /> <br />
        </form>
          <button onClick={resultado} >Caucular</button><br />
        <span> Resultado do IMC: {valor}</span>
      </div>
    </>
  )
}

export default Formulario
