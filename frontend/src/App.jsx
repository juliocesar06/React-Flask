import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Hello from './Hello'

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
    <>
      <div>
 
          <Hello apiData={data} />
  
      </div>
      
    </>
  )
}

export default App
