import Promo from './components/Promo'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Intro1 from './components/Intro1'
import Intro2 from './components/Intro2'
import Intro3 from './components/Intro3'


function App() {
  return (
    <div>
        <h1>My First React Project</h1>
        <Nav/>
        <Promo
          heading = "Don't miss this deal!"
          SubHeading="Subscribe to my newsletter and get all the shop items at 50% off!"
        />
        <Intro1/>
        <Intro2/>
        <Intro3/>
        <Footer/>
    </div>
    
    
  ) 
}

export default App
