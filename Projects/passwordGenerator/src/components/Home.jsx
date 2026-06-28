import React from 'react'
import { useState, useCallback, useEffect, useRef} from 'react'

const Home = () => {
  const [length, setLength] = useState(8)
  const [numberAllowd, setnumberAllowed]= useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [Password, setPassword] = useState("")

  //UserefHook
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowd) str+= "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+-=[]{}|;:',`~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      
    }
 
    setPassword(pass)
  }, [length, numberAllowd, charAllowed, setPassword])

  useEffect(()=> {
    passwordGenerator()
  },[length, numberAllowd, charAllowed, passwordGenerator])

  return (
    <div>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
                <h1 className='text-white text-center my-3'>Password Generator</h1>
                <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white text-gray-600">
                  <input 
                    type="text" 
                    value={Password} 
                    className='outline-none w-full py-1 px-3'
                    placeholder='Password'
                    readOnly
                    ref={passwordRef}
                  />

                  <button onClick={copyPasswordToClipboard}
                  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
                  >Copy</button>

                  </div>
                  <div className='flex text-sm gap-x-2'>
                    <div className='flex items-center gap-x-1'>
                      <input 
                        type="range"
                        min={6}
                        max={100}
                        value={length}
                        className='cursor-pointer'
                        onChange={(e) => {setLength(e.target.value)}}
                      />
                      <label>Length: {length}</label>
                    </div>

                    <div>
                      <input 
                      type="checkbox"  
                      defaultChecked={numberAllowd}
                      id='numberInput'
                      onChange={() => {
                        setnumberAllowed((prev) => !prev);
                      }}
                      />
                    <label htmlFor="numberInput">Numbers</label>
                    </div>

                    <div>
                      <input 
                      type="checkbox"
                      defaultChecked={charAllowed}
                      id='charInput'
                      onChange = {() => {
                        setcharAllowed((prev) => !prev);
                      }}
                      />
                    <label htmlFor="charInput">Characters</label>
                    </div> 
                  </div>
            </div>  
    </div>
  )
}

export default Home
