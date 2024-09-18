import { useState,useEffect,React } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Hello from './Hello'
import Intro from './intro'
import Atualizar from './pages/Atualizar';
import Historico from './pages/Historico';
import Visualizar from './pages/Visualizar';




function App() {

  //var e funçoes
  const [data, setData] = useState('');
  const [dataPost, setDataPost] = useState('');
  const [cor, setCor] = useState('');
  const [tipo, setTipo] = useState('');
  const [fornecedor, setFornecedor] = useState('');
  const [qtd_mts, setQtdMts] = useState('');

  useEffect(()=>{
    fetch('http://127.0.0.1:5000/api',{
      method:'GET',
      headers:{
        'Content-Type': 'application/json',
      }

    })
    .then(response=>{
      if (!response.ok){
        throw new Error('Network Error')
      }
      return response.json()})
    .then(data => setData(data))
    .catch(error=>console.error("Error fechin data",error));}
    ,[]);

  // Requisição POST
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/add_tec', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cor,tipo,fornecedor,qtd_mts })  // Envia a cidade como JSON
    });
    const data = await response.json();
    setPostResponse(data.message);
  };



  return (
    <Router>
      <div><Intro/></div>
      <Routes>
        <Route path='/atualizar' element={<Atualizar  cor={cor}
                tipo={tipo}
                fornecedor={fornecedor}
                qtd_mts={qtd_mts}
                setCor={setCor}
                setTipo={setTipo}
                setFornecedor={setFornecedor}
                setQtdMts={setQtdMts}
                handleSubmit={handleSubmit}
                dataPost={dataPost}/>}/>
        
        <Route path='/historico' element={<Historico/>}/>
        <Route path='/visualizar' element={<Visualizar/>}/>
      </Routes>
    </Router>
  )
}

export default App
