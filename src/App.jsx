import { useEffect } from "react";
import { useState } from "react"
import Header from './components/Header/Header'
import Tutorials from './components/Tutorials/Tutorials'
import Cart from "./components/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [tutorials, setTutorials] = useState([]);
  const [tutorialSelect, setTutorialSelect] = useState([]);
  const [creditRemaining, setCreditRemaining] = useState(20);
  const [creditSum, setCreditSum] = useState(0);
  const [sumPrice, setSumPrice] = useState(0);

  useEffect(() =>{
      fetch('../public/tutorials.json')
      .then((res) => res.json()) 
      .then((data) => setTutorials(data));
  }, []);

  const selectTutorialEvent = (tutorial) => {
    const newTutorialSelect = [...tutorialSelect, tutorial];
    const newSumPrice = sumPrice + tutorial.price;
    const newCreditRemaining = creditRemaining - tutorial.credit;

    const isExist = tutorialSelect.find((item) => item.id == tutorial.id);
    let count = tutorial.credit;
    if (isExist) {
      return toast.warn("Oh! You Already Selected", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      tutorialSelect.forEach((item) => {
        count = count + item.credit;
      });
      if (count > 20) {
        return toast.error("Oops! You have not enough credit", {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        setCreditRemaining(newCreditRemaining);
        setCreditSum(count);
        setSumPrice(newSumPrice);
        setTutorialSelect(newTutorialSelect);
        toast.success("Successfully Added!", {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    }
  };

  return (
    <div className="mb-20 w-11/12 m-auto">
      <Header></Header>
      <div className="main flex lg:flex-row flex-col gap-4">
        <Tutorials selectTutorialEvent = {selectTutorialEvent}  tutorials={tutorials}></Tutorials>
        <ToastContainer></ToastContainer>
        <Cart
        tutorialSelect = { tutorialSelect }
        creditSum = {creditSum}
        creditRemaining = {creditRemaining}
        sumPrice = { sumPrice }
        
        ></Cart>
        
        
      </div>

    </div>
  )
}

export default App
