import { useState } from 'react';
import NavBar from './components/NavBar';
import './App.css'
import './index.css'
import TextForm from './components/TextForm';
import DarkMode from './components/DarkMode';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar title="TextUtils" about="About Us" /> 
      <div className="p-6">
        <DarkMode />
        <TextForm heading="Enter your text here" />
      </div>
    </>
  )
}

export default App 
