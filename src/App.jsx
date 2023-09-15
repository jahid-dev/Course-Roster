import { useEffect } from "react";
import { useState } from "react"
import Header from './components/Header/Header'
import Tutorials from './components/Tutorials/Tutorials'
import Cart from "./components/Cart/Cart";

function App() {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() =>{
      fetch('tutorials.json')
      .then((res) => res.json()) 
      .then((data) => setTutorials(data));
  }, []);

  return (
    <>
      <Header></Header>
      <div className="flex lg:flex-row flex-col gap-4">
        <Tutorials  tutorials={tutorials}></Tutorials>
        <Cart></Cart>
      </div>

    </>
  )
}

export default App
