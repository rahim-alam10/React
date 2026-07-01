import { useState } from 'react'
import MyVideo from './components/MyVideo'
import MyPhotos from './components/MyPhotos'

function App() {

  return (
    <div>
      <div className='flex  items-center justify-center'>
        <MyVideo />
      </div>
      <div>
        <MyPhotos />
      </div>
    </div>
  )
}

export default App
