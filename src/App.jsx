
import './App.css'
// import Home from './Pages/Home'
import About from './Pages/About'
import { Home } from './Pages/Home'
import Navbar from './Shared/Navbar'
import Footer from './Shared/Footer'

function App() {
  return (
    <>
    <Navbar />
    {/* fragment is used to define a list of element */}
      <h1> This is heading section </h1>
      <Home />
      <About />
      <Footer />
    </>

  )
}

export default App