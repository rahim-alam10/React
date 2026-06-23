import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
    //hooks
  let [counter, setCounter] = useState(15)

  //let counter = 5

  const addValue = ()=> {
    counter+=1
    setCounter(counter)
    console.log("Clicked", counter)
  }

  const removeValue = ()=> {
    if(counter!=0){
      counter-=1;
      setCounter(counter)
      console.log("Clicked: ",counter)
    }
  }
 
  return ( 
    <>
      <h1 className='bg-green-400'>Tailwind Test</h1>
      <Card />
      <Card />

    </>
  )
}

export default App
