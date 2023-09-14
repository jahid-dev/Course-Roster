import { useEffect } from "react";
import { useState } from "react"
import Tutorial from "../Tutorial/Tutorial";



const Tutorials = () => {
    const [tutorials, setTutorials] = useState([]);
    useEffect(() =>{
        fetch('tutorials.json')
        .then((res) => res.json()) 
        .then((data) => setTutorials(data));
    }, []);

    return(
        <div className="grid grid-cols-3 w-9/12 bottom-2 box-border gap-4 border-black justify-between ">
            <Tutorial tutorials = {tutorials}></Tutorial>
        </div>
    )
}

export default Tutorials;
