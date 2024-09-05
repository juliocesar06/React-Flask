import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'

function App() {
  const [data, setData] = useState('');
  useEffect(()=>{
    fetch('http://127.0.0.1:5000/api/data')
    .then(response=>response.json())
    .then(data => setData(data))
    .catch(error=>console.error("Error fechin data",error));}
    ,[]);

  return (
    <>
      <div>
          <Hello/>
          <Hello/>
          <Hello/>
          <Hello/>
      </div>
      
    </>
  )
}

export default App
