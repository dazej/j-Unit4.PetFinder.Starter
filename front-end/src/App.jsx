import { useState, useEffect } from 'react'
import './App.css'

function App() {
const [pet, setPet] = useState([])


  useEffect(() => {
      async function getPet() {
        try {
          // your fetch logic will go here
          const response = await fetch(`http://localhost:8080/api/v1/pets`)
          const result = await response.json();
         
          setPet(result);

        } catch (error) {
          console.error(error);
        }
      }
      getPet()
  }, []);




  return (
    <>
     {pet.map((p)=>{
      return <div>
        <p>{p.name}</p>
        <p>{p.breed}</p>
        <p>{p.age}</p>
        <p>{p.owner}</p>
      </div>
     })}


    </>
  )
}

export default App
