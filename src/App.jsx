
import './App.css'
// import Home from './Pages/Home'
import About from './Pages/About'
import { Home } from './Pages/Home'
// import Navbar from './Shared/Navbar'
// import Footer from './Shared/Footer'

// function App() {
//   return (
//     <>
//     <Navbar />
//     {/* fragment is used to define a list of element */}
//       <h1> This is heading section </h1>
//       <Home />
//       <About />
//       <Footer />
//     </>

//   )
// }

// export default App

import Home from "./Pages/Home"
function App() {    
    return (
        <>
         <div className="bg-purple-400">
            <span className="text-center w-full block text-[30px] font-bold">Frontend</span>
            <p className="text-center text-xl font-extralight pb-4 bg-amber-200">We will learn react.js</p>
        </div>
        <Home />
        </>
    )}

    export default App