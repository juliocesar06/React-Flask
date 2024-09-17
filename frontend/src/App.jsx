import { useState,useEffect,React } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


import Hello from './Hello'
import Intro from './intro'
import Atualizar from './pages/Atualizar';
import Historico from './pages/Historico';
import Visualizar from './pages/Visualizar';




function App() {
  const [data, setData] = useState('');
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/api/data',{
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

  return (
    <Router>
      <div>
          <Intro/>
          <Hello apiData={data} />
  
      </div>
      <Routes>
        <Route path='/' element={<Intro/>}/>
        <Route path='/visualizar' element={<Visualizar/>}/>
        <Route path='/atualizar' element={<Atualizar/>}/>
        <Route path='/historico' element={<Historico/>}/>
      </Routes>
      
    </Router>
  )
}

export default App
