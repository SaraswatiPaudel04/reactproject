
// // import './App.css'
// // // import Home from './Pages/Home'
// // import About from './Pages/About'
// // import { Home } from './Pages/Home'
// // // import Navbar from './Shared/Navbar'
// // // import Footer from './Shared/Footer'

// // // function App() {
// // //   return (
// // //     <>
// // //     <Navbar />
// // //     {/* fragment is used to define a list of element */}
// // //       <h1> This is heading section </h1>
// // //       <Home />
// // //       <About />
// // //       <Footer />
// // //     </>

// // //   )
// // // }

// // // export default App

// // import Home from "./Pages/Home"
// // function App() {    

// //     return (
// //         <>
// //          <div className="bg-purple-400">
// //             <span className="text-center w-full block text-[30px] font-bold">Frontend</span>
// //             <p className="text-center text-xl font-extralight pb-4 bg-amber-200">We will learn react.js</p>
// //         </div>
// //         <Home />
// //         </>
// //     )}

// //     export default App


// // function App() {
// //   const [count, setCount] = useState(0);

// //   function incrementCount() {
// //     const Counter =  count + 1;
// //     setCount(Counter);
// //   }
// //   return (
// //     <>
// //       <div >
// //         <p> Count: {count} </p>
// //         <button type="button">S</button>
// //       </div>
// //       <Home />
// //     </>
// //   );
// // }
// import { useState } from "react";
// import Home from "./Pages/Home"


// function App() {
//   const [count, setCount] = useState(0);

//   function incrementCount() {
//     const Counter = count + 1;
//     console.log("counter increased", Counter );
//     setCount(Counter);
//   }

//   function decrementCount() {
//     const Counter = count - 1;
//     console.log("counter decreased", Counter );
//     setCount(Counter);
//   }

//   return (
//     <>
//       <div>
//         <p> Count: {count} </p>
//         <button type="button" onClick={incrementCount}>Increment</button>
//         <button type="button" onClick={decrementCount}>Decrement</button>
//       </div>
//       <Home />
//     </>
//   );
// }

// export default App;



// import './App.css'
// import {Home}  from './Pages/Home.jsx'
// import About from './Pages/About.jsx'
// import {Navbar} from './Shared/Navbar.jsx'
// import { Footer } from './Shared/Footer.jsx'

// function App() {

// return(
// <>
// {/* fragment is used to define a list of elements */}
//  <h1>Welcome to React</h1>

//  <Home />
//  <About />
//  <Navbar />
//  <Footer />
// </>
// )
// }
// export default App
import Home from './Pages/Home.jsx'
import { useState } from 'react'

function App() {   
    
    
     const [count, setCount] = useState(0);

        function increaseCount() {
          const counter = count + 1; 
          setCount(counter);   
          console.log("Counter increament:",counter);
        }

        function decreaseCount() {
            const counter = count - 1;
            setCount(counter);
            console.log("Counter decreament:",counter);
        }

    return (
        <>
         {/* <div className="bg-blue-400">
            <span className="text-center w-full block text-[30px] font-bold py-6 bg-amber-300" >Frontend</span>
            <p className="text-center text-xl font-extralight pt-4 ">We will learn react.js</p>
        </div> */}
        {/* <Home /> */}

       
        <div>
            <p className=" bg-amber-200 text-center text-3xl  text-white font-bold py-2">Count: {count}</p>

            <div className="flex justify-center"> 
             <button  className=" px-4 py-2 bg-red-500" type="submit" onClick={increaseCount}>Increment</button>
            <button className=" px-4 py-2 bg-blue-500" type="submit" onClick={decreaseCount}>Decrement</button>   
            </div>
            
        </div>
        </>
    )}

    export default App